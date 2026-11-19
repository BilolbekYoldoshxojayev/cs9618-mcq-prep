"""Merge chapter banks, validate, balance answer positions, write data/questions.js"""
import json, random, sys, os
from collections import Counter

sys.path.insert(0, os.path.dirname(__file__))
import ch1, ch2, ch3, ch4, ch5, extra, fixes2

OUT = os.path.join(os.path.dirname(__file__), "..", "data", "questions.js")
rng = random.Random(2027)


def balanced_positions(n):
    base = [i % 4 for i in range(n)]
    for _ in range(100000):
        rng.shuffle(base)
        runs = max(len(list(g)) for g in _runs(base))
        # no run > 2 and no strict cycle patterns at lags 2..4 for long stretches
        if runs > 2:
            continue
        if any(_lag_match(base, k) > 0.34 for k in (1, 2, 3, 4)):
            continue
        return base[:]
    raise SystemExit("could not balance")


def _runs(a):
    out, cur = [], [a[0]]
    for x in a[1:]:
        if x == cur[-1]:
            cur.append(x)
        else:
            out.append(cur)
            cur = [x]
    out.append(cur)
    return out


def _lag_match(a, k):
    return sum(a[i] == a[i + k] for i in range(len(a) - k)) / (len(a) - k)


def validate(q):
    opts = [q["correct"]] + q["wrongs"]
    assert len(set(o.strip().lower() for o in opts)) == 4, ("duplicate options", q["q"], opts)
    for o in opts:
        assert o.strip(), ("blank option", q["q"])


banks = []
for m in (ch1, ch2, ch3, ch4, ch5):
    qs = m.static() + m.generated() + getattr(extra, m.__name__)()
    for q in qs:
        validate(q)
    banks.append(qs)

import fixes
fixes.apply(banks)
fixes.apply(banks, fixes2.FIXES2)
fixes.apply(banks, fixes2.FIXES3)
for qs in banks:
    for q in qs:
        validate(q)

final = []
n = 0
for ch, qs in enumerate(banks, 1):
    pos = balanced_positions(len(qs))
    for q, p in zip(qs, pos):
        n += 1
        w = q["wrongs"][:]
        rng.shuffle(w)
        opts = w[:p] + [q["correct"]] + w[p:]
        final.append(dict(id=f"C{ch}-{n:03d}", ch=ch, topic=q["topic"], marks=q["marks"],
                          q=q["q"], code=q["code"], opts=opts, ans=p, why=q["why"]))

# report
by_ch = Counter(q["ch"] for q in final)
m2 = Counter((q["ch"], q["marks"]) for q in final)
print("total", len(final), dict(by_ch))
print("2-mark share", sum(q["marks"] == 2 for q in final) / len(final))
print("per-chapter marks", {k: v for k, v in sorted(m2.items())})
print("answer letters overall", Counter("ABCD"[q["ans"]] for q in final))
for ch in range(1, 6):
    print(ch, Counter("ABCD"[q["ans"]] for q in final if q["ch"] == ch))
longest = sum(len(q["opts"][q["ans"]]) == max(len(o) for o in q["opts"]) and
              sum(len(o) == len(q["opts"][q["ans"]]) for o in q["opts"]) == 1 for q in final)
print("correct is strictly longest:", longest, f"{longest / len(final):.0%}")
shorter = sum(len(q["opts"][q["ans"]]) == min(len(o) for o in q["opts"]) and
              sum(len(o) == len(q["opts"][q["ans"]]) for o in q["opts"]) == 1 for q in final)
print("correct is strictly shortest:", shorter, f"{shorter / len(final):.0%}")

os.makedirs(os.path.dirname(OUT), exist_ok=True)
with open(OUT, "w", encoding="utf-8") as f:
    f.write("window.QBANK = " + json.dumps(final, ensure_ascii=False, indent=0) + ";\n")
print("wrote", OUT)
