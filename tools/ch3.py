import random
from itertools import product
from common import Q

CH = 3


def static():
    m = "Memory and storage"
    d = "Input/output devices"
    c = "Monitoring and control"
    g = "Logic gates"
    return [
        Q(CH, m, 1, "Why does a computer need secondary storage as well as primary memory?",
          "To keep programs and data permanently, even when the power is switched off",
          ["To hold the instruction that is currently being decoded",
           "To give the processor faster access to data than primary memory can",
           "To store the results of calculations while the ALU is working"],
          "Primary memory (RAM) is volatile; secondary storage is non-volatile and has a larger capacity."),
        Q(CH, m, 2, "Which statement correctly compares RAM and ROM?",
          "RAM is volatile and can be read and written to; ROM is non-volatile and is normally only read",
          ["RAM is non-volatile and can be read and written to; ROM is volatile and is normally only read",
           "RAM is volatile and can only be read; ROM is non-volatile and can be freely written to",
           "RAM and ROM are both volatile, but ROM can be written to more quickly"],
          "RAM holds the running programs and data; ROM holds fixed start-up instructions."),
        Q(CH, m, 1, "Which of the following is normally stored in ROM?",
          "The bootstrap program that starts the computer",
          ["The document the user is currently editing",
           "The operating system processes that are currently running",
           "The user's saved files"],
          "ROM keeps the bootstrap/BIOS instructions that run at power-up."),
        Q(CH, m, 2, "Which statement correctly compares SRAM and DRAM?",
          "SRAM does not need refreshing and is faster but costs more per bit than DRAM",
          ["DRAM does not need refreshing and is faster but costs more per bit than SRAM",
           "SRAM needs refreshing but costs less per bit and is slower than DRAM",
           "DRAM is non-volatile whereas SRAM loses its contents when power is lost"],
          "DRAM stores each bit as charge on a capacitor which leaks and needs refreshing; SRAM uses flip-flops."),
        Q(CH, m, 2, "Which type of memory is most suitable for a processor's cache, and why?",
          "SRAM, because it is faster to access than DRAM",
          ["DRAM, because it is cheaper per bit and can store more data",
           "ROM, because its contents cannot be changed by mistake",
           "EEPROM, because its contents are kept when power is off"],
          "Cache must be very fast, which justifies the higher cost and lower density of SRAM."),
        Q(CH, m, 2, "A manufacturer wants a large, low-cost main memory for a personal computer. Which memory should be used and why?",
          "DRAM, because more bits can be stored per chip at lower cost",
          ["SRAM, because it does not need to be refreshed and is cheaper",
           "DRAM, because it is faster to access than SRAM",
           "ROM, because it is volatile and can be written to quickly"],
          "DRAM is denser and cheaper; its slower speed and need for refreshing are acceptable for main memory."),
        Q(CH, m, 2, "Which statement correctly describes EPROM?",
          "Its contents can be erased with ultraviolet light and the chip can then be reprogrammed",
          ["Its contents can be changed electrically while the chip stays in the device",
           "It is programmed once at manufacture and can never be changed",
           "It loses its contents whenever the power is switched off"],
          "PROM: programmable once. EPROM: erased by UV light. EEPROM: erased electrically, in place."),
        Q(CH, m, 1, "Which type of read-only memory can be erased and rewritten electrically without being removed from the circuit?",
          "EEPROM", ["PROM", "EPROM", "Mask ROM"],
          "EEPROM = electrically erasable programmable ROM."),
        Q(CH, m, 2, "A computer sends a large document to a slow printer. What is the purpose of the buffer used?",
          "To hold the data temporarily so the processor can carry on with other tasks while the printer catches up",
          ["To speed up the printer by increasing the quality of the print",
           "To check that the document contains no errors before it is printed",
           "To store the document permanently in case the printer fails"],
          "A buffer compensates for the difference in speed between devices."),
        Q(CH, m, 2, "Which is a typical drawback of an embedded system?",
          "Its program is fixed, so it is hard to upgrade or change its function",
          ["It needs a keyboard and monitor to be used",
           "It can run many different general-purpose applications",
           "It always needs a connection to a network to work"],
          "An embedded system is built into a device to perform a dedicated task; its software is stored in ROM-type memory."),
        Q(CH, m, 1, "Which is an example of an embedded system?",
          "The controller inside a washing machine",
          ["A desktop computer used for gaming", "A laptop running a word processor",
           "A web server in a data centre"],
          "Embedded systems are dedicated computer systems built into a larger device."),
        Q(CH, m, 2, "Which statement about a solid state drive (SSD) compared with a magnetic hard disk drive is correct?",
          "It has no moving parts, so it gives faster access and is more resistant to physical shock",
          ["It stores data on spinning platters, which gives it a larger capacity for the same cost",
           "It has an unlimited number of write cycles and so lasts longer",
           "It is cheaper per gigabyte than a magnetic hard disk drive"],
          "Flash memory has no moving parts but is dearer per GB and has a finite number of write cycles."),
        Q(CH, m, 2, "How are data read from a magnetic hard disk drive?",
          "A read/write head detects the direction of magnetisation of areas on a spinning platter",
          ["A laser detects the reflection from pits and lands on the surface",
           "The charge stored in floating-gate transistors is measured",
           "A needle detects the shape of grooves cut into the disk"],
          "Magnetic storage uses magnetised regions; optical uses pits/lands; SSDs use charge."),
        Q(CH, m, 1, "How does an optical disc drive read data from a CD?",
          "It detects the way laser light is reflected from pits and lands on the surface",
          ["It measures the magnetic field of tiny areas on the surface",
           "It measures the charge held in transistors on the disc",
           "It detects changes in the electrical resistance of the surface"],
          "A laser is reflected differently from pits and lands, which represent the binary data."),
        Q(CH, d, 1, "What is the role of the fuser in a laser printer?",
          "To heat the paper so the toner melts and sticks to it",
          ["To charge the drum with static electricity", "To draw the image on the drum using a laser",
           "To attract toner onto the charged parts of the drum"],
          "The fuser uses heat and pressure to fix the toner to the paper."),
        Q(CH, d, 1, "How does a 3D printer create an object?",
          "By depositing material layer by layer from a digital model",
          ["By cutting material away from a solid block", "By heating toner and fixing it onto paper",
           "By projecting a hologram into the air"],
          "3D printing is additive manufacturing, usually using melted plastic or resin."),
        Q(CH, d, 2, "How does a capacitive touchscreen detect where it has been touched?",
          "It detects the change in the screen's electrical field caused by the conductive finger",
          ["It detects pressure that pushes two conductive layers together",
           "It detects the position at which an infra-red beam is broken by a sensor on the finger",
           "It detects the reflection of ultrasonic waves from the user's hand"],
          "A resistive screen detects pressure; capacitive detects the finger's effect on the electric field."),
        Q(CH, d, 1, "What does a microphone do?",
          "It converts sound waves into electrical signals",
          ["It converts electrical signals into sound waves", "It converts light into electrical signals",
           "It converts digital data into analogue voltage for a monitor"],
          "A microphone is an input device; a speaker performs the reverse."),
        Q(CH, d, 2, "A virtual reality headset gives the user a view that changes as they turn their head. Which components make this possible?",
          "Two small screens, one for each eye, and sensors that track movement of the head",
          ["One large screen and a microphone that detects speech",
           "A printer and a scanner that capture the surroundings",
           "A touchscreen and a GPS receiver"],
          "The headset displays slightly different images to each eye and uses motion sensors to update them."),
        Q(CH, c, 2, "Which is an example of a control system rather than a monitoring system?",
          "A thermostat reading switches a heater on or off to keep a room at a set temperature",
          ["A hospital machine that displays a patient's heart rate on a screen",
           "A weather station that records the temperature every hour",
           "A data logger that stores light levels in a greenhouse"],
          "A monitoring system only records/displays; a control system also changes the process using actuators."),
        Q(CH, c, 1, "What is the role of an actuator in a control system?",
          "To convert a signal from the processor into physical movement, such as opening a valve",
          ["To measure a physical quantity and send it to the processor",
           "To store the readings taken by the sensors",
           "To convert analogue readings into digital values"],
          "Sensors input data; actuators carry out the physical actions."),
        Q(CH, c, 2, "What is meant by feedback in a control system?",
          "The output of the process affects the sensor readings, which determine the next action taken",
          ["The processor sends a copy of every sensor reading to a printer",
           "The actuator reports an error message to the user",
           "The system is switched off when a sensor value is outside its range"],
          "Feedback lets the system respond to the result of its own previous actions."),
        Q(CH, c, 1, "Which sensor is most suitable for detecting a person entering a room?",
          "Infra-red", ["pH", "Moisture", "Magnetic field"],
          "Infra-red (motion) sensors detect heat/movement."),
        Q(CH, g, 1, "Which logic gate gives an output of 0 only when both of its inputs are 1?",
          "NAND", ["AND", "NOR", "XOR"], "NAND is the inverse of AND."),
        Q(CH, g, 1, "Which logic gate gives an output of 1 only when both of its inputs are 0?",
          "NOR", ["OR", "NAND", "XOR"], "NOR is the inverse of OR."),
        Q(CH, g, 1, "Which logic gate gives an output of 1 when its two inputs are different?",
          "XOR", ["OR", "NOR", "AND"], "Exclusive OR is true when exactly one input is 1."),
        Q(CH, g, 2, "A warning light X is on when sensor A is on and at least one of sensors B or C is on. Which expression represents this?",
          "X = A AND (B OR C)",
          ["X = (A AND B) OR C", "X = A OR (B AND C)", "X = A AND B AND C"],
          "A must be on AND (B or C) on. The bracket is essential."),
        Q(CH, g, 2, "An alarm X sounds when the door is open (D = 1) and the system is NOT switched off (S = 1 means switched off). Which expression represents this?",
          "X = D AND (NOT S)",
          ["X = (NOT D) AND S", "X = D OR (NOT S)", "X = NOT (D AND S)"],
          "The alarm needs the door to be open AND the system not switched off."),
    ]


def _g(name, a, b=None):
    return {
        "AND": lambda: a & b, "OR": lambda: a | b, "XOR": lambda: a ^ b,
        "NAND": lambda: 1 - (a & b), "NOR": lambda: 1 - (a | b),
        "NOT": lambda: 1 - a,
    }[name]()


TEMPLATES = [
    ("(A AND B) OR NOT C", lambda A, B, C: _g("OR", _g("AND", A, B), _g("NOT", C))),
    ("NOT (A OR B) AND C", lambda A, B, C: _g("AND", _g("NOT", _g("OR", A, B)), C)),
    ("(A XOR B) AND C", lambda A, B, C: _g("AND", _g("XOR", A, B), C)),
    ("(A NAND B) OR (B NOR C)", lambda A, B, C: _g("OR", _g("NAND", A, B), _g("NOR", B, C))),
    ("(A OR B) AND NOT (B AND C)", lambda A, B, C: _g("AND", _g("OR", A, B), _g("NOT", _g("AND", B, C)))),
    ("(A XOR C) OR (B AND NOT A)", lambda A, B, C: _g("OR", _g("XOR", A, C), _g("AND", B, _g("NOT", A)))),
    ("NOT (A AND B) AND (B OR C)", lambda A, B, C: _g("AND", _g("NOT", _g("AND", A, B)), _g("OR", B, C))),
    ("(A NOR B) XOR C", lambda A, B, C: _g("XOR", _g("NOR", A, B), C)),
]


def generated():
    rng = random.Random(303)
    out = []
    g = "Logic gates"
    rows = list(product((0, 1), repeat=3))
    tmpl = TEMPLATES[:]
    rng.shuffle(tmpl)
    for i, (expr, f) in enumerate(tmpl):
        ones = [r for r in rows if f(*r)]
        zeros = [r for r in rows if not f(*r)]
        fmt = lambda r: f"A = {r[0]}, B = {r[1]}, C = {r[2]}"
        if i % 2 == 0 and len(zeros) >= 3 and ones:
            c = rng.choice(ones)
            w = rng.sample(zeros, 3)
            out.append(Q(CH, g, 2, f"A logic circuit implements X = {expr}. Which inputs give X = 1?",
                         fmt(c), [fmt(x) for x in w],
                         "Evaluate each bracket separately for the inputs: " +
                         f"for {fmt(c)} the expression evaluates to 1."))
        else:
            n = len(ones)
            cands = [k for k in range(0, 9) if k != n]
            near = sorted(cands, key=lambda k: (abs(k - n), rng.random()))[:3]
            out.append(Q(CH, g, 2,
                         f"A logic circuit implements X = {expr}. How many of the 8 rows of its truth table give X = 1?",
                         str(n), [str(k) for k in near],
                         "Complete the truth table for all 8 input combinations and count the rows where X = 1."))
    return out
