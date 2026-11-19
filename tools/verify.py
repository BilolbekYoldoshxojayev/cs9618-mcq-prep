"""Independent re-solver: parses calculation/trace questions from the built bank
(not from the generators) and checks the marked answer."""
import json, re, itertools, sys, os

p = os.path.join(os.path.dirname(__file__), "..", "data", "questions.js")
t = open(p, encoding="utf-8").read()
bank = json.loads(t[len("window.QBANK = "):t.rindex(";")])
checked = bad = 0


def ans(q):
    return q["opts"][q["ans"]]


def fail(q, exp):
    global bad
    bad += 1
    print("MISMATCH", q["id"], q["q"][:70], "| marked:", ans(q), "| expected:", exp)


def run_asm(code):
    mem = {}
    if "\n\nProgram\n" in code:
        mem_part, prog_part = code.split("\n\nProgram\n")
        for ln in mem_part.splitlines()[1:]:
            a, v = ln.split(":")
            mem[int(a)] = int(v)
    else:
        prog_part = code
    lines = [l for l in prog_part.splitlines() if l.strip()]
    labels, ins = {}, []
    for l in lines:
        l = l.rstrip()
        m = re.match(r"^(\w+):\s*(.*)$", l)
        if m and m.group(1).lower() not in ("end",):
            labels[m.group(1)] = len(ins)
            l = m.group(2)
        if l.strip():
            ins.append(l.split())
    acc = ix = 0; flag = False; pc = 0; steps = 0; adds = 0
    while pc < len(ins) and steps < 1000:
        steps += 1
        op, *a = ins[pc]; pc += 1
        arg = a[0] if a else None
        n = lambda s: int(s.lstrip("#"))
        if op == "LDM": acc = n(arg)
        elif op == "LDD": acc = mem[int(arg)]
        elif op == "LDI": acc = mem[mem[int(arg)]]
        elif op == "LDX": acc = mem[int(arg) + ix]
        elif op == "LDR": ix = n(arg)
        elif op == "ADD":
            adds += 1
            acc += n(arg) if arg.startswith("#") else mem[int(arg)]
        elif op == "STO": mem[int(arg)] = acc
        elif op == "CMP": flag = acc == n(arg)
        elif op == "JPN":
            if not flag: pc = labels[arg]
        elif op == "JPE":
            if flag: pc = labels[arg]
        elif op in ("OUT", "END"):
            if op == "END": break
        else:
            raise ValueError(op)
    return acc, mem, adds


def logic(expr, A, B, C):
    e = expr
    e = re.sub(r"\((\w) NAND (\w)\)", r"(1-(\1&\2))", e)
    e = re.sub(r"\((\w) NOR (\w)\)", r"(1-(\1|\2))", e)
    e = e.replace("NAND", "@NAND").replace("NOR", "@NOR")
    # tiny recursive-descent evaluator
    toks = re.findall(r"\(|\)|\w+", expr)
    pos = 0
    env = {"A": A, "B": B, "C": C}

    def parse_or():
        nonlocal pos
        v = parse_unary()
        while pos < len(toks) and toks[pos] in ("AND", "OR", "XOR", "NAND", "NOR"):
            op = toks[pos]; pos += 1
            r = parse_unary()
            v = {"AND": v & r, "OR": v | r, "XOR": v ^ r, "NAND": 1 - (v & r), "NOR": 1 - (v | r)}[op]
        return v

    def parse_unary():
        nonlocal pos
        tk = toks[pos]; pos += 1
        if tk == "NOT":
            return 1 - parse_unary()
        if tk == "(":
            v = parse_or(); pos += 1; return v
        return env[tk]
    # expressions in the bank always bracket mixed operators, except "NOT (..) AND C" and "(..) AND NOT (..)":
    return parse_or()


for q in bank:
    s = q["q"]; a = ans(q)
    m = re.search(r"unsigned 8-bit binary number ([01]{8})\?", s)
    if m:
        checked += 1
        if a != str(int(m.group(1), 2)): fail(q, int(m.group(1), 2))
        continue
    m = re.search(r"binary number represents the denary number (\d+)\?", s)
    if m:
        checked += 1
        if int(a, 2) != int(m.group(1)): fail(q, format(int(m.group(1)), "08b"))
        continue
    m = re.search(r"value of the hexadecimal number ([0-9A-F]{2})\?", s)
    if m:
        checked += 1
        if a != str(int(m.group(1), 16)): fail(q, int(m.group(1), 16))
        continue
    m = re.search(r"equivalent to the binary number ([01]{8})\?", s)
    if m:
        checked += 1
        if a != format(int(m.group(1), 2), "02X"): fail(q, format(int(m.group(1), 2), "02X"))
        continue
    m = re.search(r"8-bit two's complement binary number represents -(\d+)\?", s)
    if m:
        checked += 1
        if int(a, 2) != 256 - int(m.group(1)): fail(q, format(256 - int(m.group(1)), "08b"))
        continue
    m = re.search(r"value of the 8-bit two's complement number ([01]{8})\?", s)
    if m:
        checked += 1
        u = int(m.group(1), 2); v = u - 256 if u >= 128 else u
        if a != str(v): fail(q, v)
        continue
    m = re.search(r"Two positive numbers ([01]{8}) and ([01]{8}) are added", s)
    if m:
        checked += 1
        sm = int(m.group(1), 2) + int(m.group(2), 2)
        exp = f"{sm - 256} (overflow has occurred)" if sm > 127 else f"{sm} (no overflow)"
        if a != exp: fail(q, exp)
        continue
    m = re.search(r"BCD\) representation of the denary number (\d+)\?", s)
    if m:
        checked += 1
        exp = " ".join(format(int(d), "04b") for d in m.group(1))
        if a != exp: fail(q, exp)
        continue
    m = re.search(r"range .* in a (\d+)-bit two's complement", s)
    if m:
        checked += 1
        n = int(m.group(1)); exp = f"{-2 ** (n - 1)} to +{2 ** (n - 1) - 1}"
        if a != exp: fail(q, exp)
        continue
    m = re.search(r"colour depth of (\d+) bits\. How many different colours", s)
    if m:
        checked += 1
        if a != str(2 ** int(m.group(1))): fail(q, 2 ** int(m.group(1)))
        continue
    m = re.search(r"(\d+) pixels wide and (\d+) pixels high with a colour depth of (\d+) bits", s)
    if m:
        checked += 1
        w, h, d = map(int, m.groups()); kib = w * h * d / 8 / 1024
        if a != f"{kib:g} KiB": fail(q, f"{kib:g} KiB")
        continue
    m = re.search(r"for (\d+) seconds with a sampling rate of (\d+) Hz and a sampling resolution of (\d+) bits", s)
    if m:
        checked += 1
        sec, rate, bits = map(int, m.groups()); exp = f"{rate * bits * sec // 8:,} bytes"
        if a != exp: fail(q, exp)
        continue
    m = re.search(r"data ([A-Z]+)\. What is the result", s)
    if m:
        checked += 1
        exp = " ".join(f"{len(list(g))}{k}" for k, g in itertools.groupby(m.group(1)))
        if a != exp: fail(q, exp)
        continue
    m = re.search(r"address bus with (\d+) lines", s)
    if m:
        checked += 1
        if a != f"{2 ** int(m.group(1)):,}": fail(q, f"{2 ** int(m.group(1)):,}")
        continue
    m = re.search(r"contains ([01]{8})\. The instruction (LSL|LSR) #(\d)", s)
    if m:
        checked += 1
        v, op, n = int(m.group(1), 2), m.group(2), int(m.group(3))
        exp = format((v << n) & 255 if op == "LSL" else v >> n, "08b")
        if a != exp: fail(q, exp)
        continue
    m = re.search(r"contains ([01]{8})\. The instruction (AND|OR|XOR) B([01]{8})", s)
    if m:
        checked += 1
        v, op, k = int(m.group(1), 2), m.group(2), int(m.group(3), 2)
        exp = format({"AND": v & k, "OR": v | k, "XOR": v ^ k}[op], "08b")
        if a != exp: fail(q, exp)
        continue
    m = re.search(r"implements X = (.*?)\. (Which inputs give X = 1|How many)", s)
    if m:
        checked += 1
        expr = m.group(1)
        rows = list(itertools.product((0, 1), repeat=3))
        if m.group(2).startswith("Which"):
            r = re.match(r"A = (\d), B = (\d), C = (\d)", a)
            if logic(expr, *map(int, r.groups())) != 1: fail(q, "row with X=1")
        else:
            n = sum(logic(expr, *r) for r in rows)
            if a != str(n): fail(q, n)
        continue
    if "valid IPv4 address" in s:
        checked += 1
        parts = a.split(".")
        if not (len(parts) == 4 and all(x.isdigit() and 0 <= int(x) <= 255 for x in parts)): fail(q, "valid IPv4")
        for o in q["opts"]:
            if o != a:
                pp = o.split(".")
                if len(pp) == 4 and all(x.isdigit() and 0 <= int(x) <= 255 for x in pp): fail(q, "another option is valid too")
        continue
    if q.get("code"):
        checked += 1
        acc, mem, adds = run_asm(q["code"])
        if "stored in location" in s:
            exp = mem[305]
        elif "How many times is the instruction ADD" in s:
            exp = adds
        else:
            exp = acc
        if a != str(exp): fail(q, exp)

print(f"re-solved {checked} questions independently; mismatches: {bad}")
sys.exit(1 if bad else 0)
