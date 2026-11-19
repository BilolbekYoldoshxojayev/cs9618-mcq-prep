import random
from common import Q, distract

CH = 4


def static():
    a = "CPU architecture"
    f = "Fetch-execute and interrupts"
    s = "Assembly language"
    b = "Bit manipulation"
    return [
        Q(CH, a, 2, "Which statement describes the stored program concept of the Von Neumann model?",
          "Instructions and data are held in the same main memory and instructions are fetched and executed in sequence",
          ["Instructions are held in ROM and data is held in a separate memory",
           "Each instruction is read directly from the keyboard when it is needed",
           "The program is held in the CPU registers while data is held in memory"],
          "In a Von Neumann machine both program and data are in the same memory and are fetched using the same buses."),
        Q(CH, a, 1, "What is held in the Program Counter (PC)?",
          "The address of the next instruction to be fetched",
          ["The instruction that is currently being decoded",
           "The result of the last calculation carried out by the ALU",
           "The address of the data being written to memory"],
          "The PC is incremented after each fetch so that it points to the next instruction."),
        Q(CH, a, 1, "What is held in the Memory Address Register (MAR)?",
          "The address of the memory location that is about to be read from or written to",
          ["The data that has just been read from memory",
           "The instruction currently being decoded",
           "The result of an arithmetic operation"],
          "The MAR places an address on the address bus."),
        Q(CH, a, 1, "What is held in the Memory Data Register (MDR)?",
          "The data or instruction that has been fetched from, or is about to be written to, memory",
          ["The address of the next instruction", "The status of the last comparison",
           "The address of the memory location to be accessed"],
          "The MDR is the buffer between the processor and the data bus."),
        Q(CH, a, 1, "What is held in the Current Instruction Register (CIR)?",
          "The instruction that is being decoded and executed",
          ["The address of the next instruction to be fetched",
           "The value that was most recently stored in memory",
           "The base address for indexed addressing"],
          "After the fetch, the instruction is copied from the MDR into the CIR for decoding."),
        Q(CH, a, 1, "What is the purpose of the accumulator (ACC)?",
          "To hold data being processed and the results of calculations carried out by the ALU",
          ["To hold the address of the next instruction", "To count the number of instructions executed",
           "To store the flags set by comparisons"],
          "The accumulator is the register used for the ALU's inputs/outputs."),
        Q(CH, a, 1, "What is the purpose of the status register?",
          "To hold flags that record the outcome of operations, such as overflow or a zero result",
          ["To hold the address of the next instruction",
           "To hold the instruction being executed",
           "To hold the data to be written to memory"],
          "Bits in the status register act as flags (zero, carry, overflow, etc.)."),
        Q(CH, a, 2, "Which statement about the buses is correct?",
          "The address bus is unidirectional (from the processor) whereas the data bus is bidirectional",
          ["The address bus is bidirectional whereas the data bus is unidirectional",
           "The control bus carries the addresses of memory locations",
           "The data bus carries only instructions, never data"],
          "Addresses are only sent by the CPU; data and instructions travel both ways; control signals travel on the control bus."),
        Q(CH, a, 1, "What is the function of the control unit (CU)?",
          "To decode instructions and send out signals that coordinate the other components",
          ["To carry out arithmetic and logic operations", "To store data permanently",
           "To convert digital data to analogue data"],
          "The ALU does the calculations; the CU directs the operation."),
        Q(CH, a, 2, "A computer's data bus is widened from 32 bits to 64 bits. What is the main effect?",
          "More bits can be transferred in each clock cycle, which can improve performance",
          ["The number of memory locations that can be addressed is increased",
           "The clock speed of the processor is doubled",
           "Instructions are executed in a different order"],
          "Bus width affects how much data can be transferred at once. Address bus width determines the addressable memory."),
        Q(CH, a, 2, "A processor with two cores is replaced by one with four cores running at the same clock speed. Which statement is correct?",
          "Performance may improve, but only if the software can share tasks between the cores",
          ["Performance is always exactly doubled",
           "Performance is unchanged because clock speed is unchanged",
           "Performance is reduced because the cores must share the same cache"],
          "More cores allow parallel execution, but the gain depends on how well the software is written."),
        Q(CH, a, 2, "Why does adding cache memory generally improve performance?",
          "Frequently used instructions and data are held in fast memory close to the processor, reducing the time taken to fetch them from RAM",
          ["The processor's clock speed is increased automatically",
           "More programs can be stored permanently in the computer",
           "The width of the address bus is increased"],
          "Cache is small, very fast memory (SRAM)."),
        Q(CH, a, 1, "Which port can carry a digital video and audio signal to a monitor or television in a single cable?",
          "HDMI", ["VGA", "PS/2", "Serial"],
          "VGA carries an analogue video signal only; HDMI carries digital video and audio."),
        Q(CH, a, 2, "A computer's clock speed is increased. What is the most direct effect?",
          "More fetch-execute cycles can be carried out each second",
          ["More memory locations can be addressed",
           "The width of the data bus is increased",
           "Each instruction is made shorter"],
          "Clock speed is the number of cycles per second; more cycles generally mean more instructions executed."),
        Q(CH, f, 1, "Which register transfer correctly copies the address of the next instruction into the MAR at the start of the fetch stage?",
          "MAR ← [PC]", ["PC ← [MAR]", "MDR ← [PC]", "CIR ← [PC]"],
          "The PC holds the address of the next instruction; it is copied to the MAR so memory can be accessed."),
        Q(CH, f, 1, "Which register transfer places the fetched instruction in the CIR?",
          "CIR ← [MDR]", ["MDR ← [CIR]", "CIR ← [PC]", "CIR ← [MAR]"],
          "The instruction arrives in the MDR from memory and is then copied to the CIR."),
        Q(CH, f, 2, "During the fetch-execute cycle, what happens to the PC after the address of the next instruction has been copied to the MAR?",
          "It is incremented so that it points at the following instruction",
          ["It is cleared to zero", "It is replaced by the contents of the CIR",
           "It is copied into the accumulator"],
          "PC ← [PC] + 1 happens during the fetch stage (unless a jump later changes it)."),
        Q(CH, f, 2, "When does a processor normally check whether an interrupt has occurred?",
          "At the end of each fetch-execute cycle",
          ["Only at the very start of the program", "In the middle of executing every instruction",
           "Only when the user restarts the computer"],
          "The processor completes the current instruction cycle, then checks for interrupts."),
        Q(CH, f, 2, "An interrupt with a higher priority than the current task is detected. What happens?",
          "The register contents are saved, the interrupt service routine runs, and the saved values are restored afterwards",
          ["The current program is deleted from memory and the computer restarts",
           "The interrupt is ignored until the program has finished running",
           "The interrupt service routine is run without saving the registers"],
          "The processor saves the state, executes the ISR, restores the state and resumes the interrupted program."),
        Q(CH, f, 1, "Which is a possible cause of an interrupt?",
          "A user presses a key on the keyboard",
          ["The ALU completes an addition", "The PC is incremented", "The MAR is loaded with an address"],
          "Interrupts come from hardware events (key press, printer needs attention), software (error, division by zero) or timers."),
        Q(CH, s, 2, "What is carried out in the first pass of a two-pass assembler?",
          "A symbol table is created that links each label to its memory address",
          ["The machine code is executed to check it works",
           "The high-level program is converted into assembly code",
           "The programmer is asked to enter the missing addresses"],
          "Pass 1 builds the symbol table; pass 2 translates the instructions to machine code using it."),
        Q(CH, s, 2, "What is carried out in the second pass of a two-pass assembler?",
          "Opcodes and operands are translated into machine code, using the symbol table to replace labels",
          ["Labels are found and entered into the symbol table",
           "The machine code is loaded into the CIR and executed",
           "The source program is compressed to save memory"],
          "In the second pass every label is replaced by its address and the machine code is produced."),
        Q(CH, s, 1, "A machine code instruction is made up of",
          "an opcode and an operand", ["a label and a comment", "an address and a buffer", "a header and a footer"],
          "The opcode specifies the operation; the operand holds the data or address."),
        Q(CH, s, 2, "Which statement describes indirect addressing?",
          "The operand is an address that holds the address of the data to be used",
          ["The operand is the data to be used", "The address is found by adding the operand to the value in the index register",
           "The address is found by adding an offset to the address of the current instruction"],
          "In LDI, the contents of the given address are used as the address of the actual data."),
        Q(CH, s, 2, "Which statement describes indexed addressing?",
          "The address used is the operand plus the contents of the index register",
          ["The operand is the data to be used", "The operand is an address that holds the address of the data",
           "The address used is the operand multiplied by the accumulator"],
          "LDX uses address = operand + IX, which is useful for processing arrays."),
        Q(CH, s, 2, "Which statement describes relative addressing?",
          "The address used is found by adding an offset to the address of the current instruction",
          ["The address used is the operand plus the contents of the index register",
           "The operand is the data to be used immediately",
           "The address used is held in a register called the PC"],
          "Relative addressing is useful for jumps, because code stays valid if it is loaded elsewhere."),
        Q(CH, s, 1, "Which instruction loads the number 25 into the accumulator?",
          "LDM #25", ["LDD 25", "LDI 25", "LDR #25"],
          "LDM is immediate addressing. LDD uses the contents of address 25; LDR loads IX."),
        Q(CH, b, 2, "Which instruction sets the two most significant bits of the accumulator to 1 and leaves all other bits unchanged?",
          "OR B11000000", ["AND B11000000", "XOR B11000000", "OR B00111111"],
          "OR with 1 sets a bit; OR with 0 leaves it unchanged. XOR would toggle the bits."),
        Q(CH, b, 2, "Which instruction sets the four least significant bits of the accumulator to 0 and leaves the other bits unchanged?",
          "AND B11110000", ["AND B00001111", "OR B11110000", "XOR B00001111"],
          "AND with 0 clears a bit; AND with 1 leaves it unchanged."),
        Q(CH, b, 2, "Which instruction toggles (inverts) only the most significant bit of the accumulator?",
          "XOR B10000000", ["OR B10000000", "AND B10000000", "XOR B01111111"],
          "XOR with 1 inverts a bit; XOR with 0 leaves it unchanged."),
        Q(CH, b, 2, "A program uses AND B00000100 on the accumulator and then compares the result with zero to test a sensor bit. What does it test?",
          "Whether bit 2 (counting from 0 on the right) is a 1",
          ["Whether bit 4 is a 1", "Whether all of the bits except bit 2 are 0 after the AND",
           "Whether bit 2 has been cleared"],
          "A bit mask isolates one bit; a non-zero result means that bit was 1."),
    ]


def generated():
    rng = random.Random(404)
    out = []
    a = "CPU architecture"
    b = "Bit manipulation"
    s = "Assembly language"

    # address bus width
    for n in (16, 24):
        c = f"{2 ** n:,}"
        w = distract(c, [f"{n ** 2:,}", f"{2 ** (n - 1):,}", f"{2 * n:,}", f"{2 ** (n + 1):,}"], rng)
        out.append(Q(CH, a, 1, f"A processor has an address bus with {n} lines. What is the maximum number of memory locations it can address?",
                     c, w, f"2^{n} = {c}."))

    # shifts
    for kind in ("LSL", "LSR", "LSL", "LSR"):
        v = rng.randint(0b00100101, 0b11011011)
        n = rng.choice([1, 2, 3])
        if kind == "LSL":
            r = (v << n) & 0xFF
            cands = [v >> n, (v << (n + 1)) & 0xFF, (v << (n - 1)) & 0xFF if n > 1 else (v >> 1),
                     ((v << n) | (v >> (8 - n))) & 0xFF]
        else:
            r = v >> n
            cands = [(v << n) & 0xFF, v >> (n + 1), v >> (n - 1) if n > 1 else (v << 1) & 0xFF,
                     ((v >> n) | (v << (8 - n))) & 0xFF]
        c = format(r, "08b")
        w = distract(c, [format(x, "08b") for x in cands], rng,
                     lambda r_: format(r ^ (1 << r_.randint(0, 7)), "08b"))
        out.append(Q(CH, b, 2,
                     f"The accumulator contains {format(v, '08b')}. The instruction {kind} #{n} is executed. What does the accumulator now contain?",
                     c, w,
                     f"A logical shift moves bits {n} place(s) {'left' if kind == 'LSL' else 'right'}; zeros enter at the other end and bits shifted out are lost."))

    # bit operations
    for _ in range(4):
        v = rng.randint(0b01010101, 0b11101110)
        m = rng.choice([0b00001111, 0b11110000, 0b10101010, 0b00111100, 0b01100110])
        op = rng.choice(["AND", "OR", "XOR"])
        f = {"AND": lambda x, y: x & y, "OR": lambda x, y: x | y, "XOR": lambda x, y: x ^ y}
        r = f[op](v, m)
        while r in (0, 255):
            v = rng.randint(0b01010101, 0b11101110)
            r = f[op](v, m)
        cands = [f[o](v, m) for o in ("AND", "OR", "XOR") if o != op] + [v ^ 0xFF]
        c = format(r, "08b")
        w = distract(c, [format(x, "08b") for x in cands], rng,
                     lambda r_: format(r ^ (1 << r_.randint(0, 7)), "08b"))
        out.append(Q(CH, b, 2,
                     f"The accumulator contains {format(v, '08b')}. The instruction {op} B{format(m, '08b')} is executed. What does the accumulator now contain?",
                     c, w, f"Apply {op} to each pair of bits: {format(v, '08b')} {op} {format(m, '08b')} = {c}."))

    # tracing: LDD/ADD/STO, LDI, LDX
    for kind in ("direct", "indirect", "indexed", "direct", "indirect", "indexed"):
        base = 300
        mem = {base + i: rng.randint(5, 60) for i in range(6)}
        if kind == "direct":
            x, y = rng.sample(range(base, base + 5), 2)
            prog = f"LDD {x}\nADD {y}\nSTO {base + 5}"
            res = mem[x] + mem[y]
            cands = [mem[x], mem[y], x + y, mem[x] + y, mem[x] - mem[y]]
            q = f"What is stored in location {base + 5} after this program is run?"
            extra = ""
        elif kind == "indirect":
            p, t = base, base + 3
            mem[p] = t
            prog = f"LDI {p}\nADD #10\nOUT"
            res = mem[t] + 10
            cands = [mem[p] + 10, mem[t], mem[p], mem[t] + mem[p]]
            q = "What number is in the accumulator when OUT is reached?"
            extra = ""
        else:
            ix = rng.randint(1, 4)
            prog = f"LDR #{ix}\nLDX {base}\nADD #1"
            res = mem[base + ix] + 1
            cands = [mem[base] + 1, mem[base + ix], mem[base + ix + 1] + 1 if base + ix + 1 in mem else mem[base + ix - 1] + 1,
                     base + ix + 1]
            q = "What number is in the accumulator after the program has run?"
            extra = ""
        table = "\n".join(f"{k}: {v}" for k, v in sorted(mem.items()))
        code = f"Memory (address: contents)\n{table}\n\nProgram\n{prog}"
        c = str(res)
        w = distract(c, cands, rng, lambda r_: res + r_.randint(-9, 9))
        why = {"direct": "LDD loads the contents of the first address, ADD adds the contents of the second, STO stores the sum.",
               "indirect": "LDI uses the contents of the given address as the address of the data (a pointer).",
               "indexed": "LDX uses address = operand + IX, where IX was set by LDR."}[kind]
        out.append(Q(CH, s, 2, q, c, w, why + f" Result: {res}.", code=code))

    # loop counting
    for target in (8, 12):
        prog = f"      LDM #0\nloop: ADD #2\n      CMP #{target}\n      JPN loop\n      END"
        # variant A: times executed
        n = target // 2
        c = str(n)
        w = [str(target), str(n - 1), str(n + 1)]
        out.append(Q(CH, s, 2, "How many times is the instruction ADD #2 executed?", c, w,
                     f"ACC goes 2, 4, ... {target}. JPN jumps back while ACC is not equal to {target}, so ADD #2 runs {n} times.",
                     code=prog))
    for target in (6, 10):
        prog = f"      LDM #0\nloop: ADD #2\n      CMP #{target}\n      JPN loop\n      OUT\n      END"
        c = str(target)
        w = [str(target - 2), str(target // 2), str(target + 2)]
        out.append(Q(CH, s, 2, "What is the value in the accumulator when OUT is executed?", c, w,
                     f"The loop stops when ACC equals {target}.", code=prog))
    return out
