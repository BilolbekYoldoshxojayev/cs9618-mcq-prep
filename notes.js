window.NOTES = {
1: {html: `
<h2>1.1 Data representation</h2>
<div class="key"><b>Prefixes.</b> Binary: kibi (2<sup>10</sup> = 1024), mebi (2<sup>20</sup>), gibi (2<sup>30</sup>), tebi (2<sup>40</sup>). Decimal: kilo (10<sup>3</sup>), mega (10<sup>6</sup>), giga (10<sup>9</sup>), tera (10<sup>12</sup>).</div>
<h3>Number systems</h3>
<ul>
<li><b>Binary → denary:</b> add the place values (128 64 32 16 8 4 2 1) of the 1 bits.</li>
<li><b>Hex ↔ binary:</b> one hex digit = one nibble (4 bits). <code>&amp;4A = 0100 1010</code>. Hex is only a shorthand for humans (memory addresses, colour codes, error codes, MAC addresses).</li>
<li><b>BCD:</b> each denary digit in its own 4 bits. <code>259 → 0010 0101 1001</code>. Used for digit displays (clocks, calculators, meters).</li>
</ul>
<h3>Negative numbers: two's complement (n bits)</h3>
<ul>
<li>Most significant bit has a <b>negative</b> place value: for 8 bits it is −128.</li>
<li>To negate: write the positive number, <b>invert all bits, add 1</b>. −37: <code>00100101 → 11011010 → 11011011</code>.</li>
<li>Range of n bits: <code>−2<sup>n−1</sup> to +2<sup>n−1</sup> − 1</code> (8 bits: −128 to +127). Only one zero.</li>
<li>Subtraction = add the two's complement of the number and ignore any carry out of the top bit: <code>105 − 28 = 01101001 + 11100100 = 01001101</code> (77).</li>
<li><b>One's complement:</b> just invert every bit (−45 = <code>11010010</code>); it has two zeros. <b>Sign-and-magnitude:</b> top bit is the sign, the rest the size (−45 = <code>10101101</code>).</li>
<li><b>Overflow</b>: the result is outside the range that n bits can hold (two positives giving a negative, or two negatives giving a positive).</li>
</ul>
<div class="trap"><b>Common traps.</b> Forgetting the "+1"; using sign-and-magnitude when two's complement is asked; treating an 8-bit byte starting with 1 as unsigned; mixing 1000 and 1024.</div>
<h3>Character sets</h3>
<p>ASCII: 7 bits (128 characters). Extended ASCII: 8 bits (256 characters), a superset of ASCII. Unicode: far larger repertoire covering many languages and symbols, at the cost of more bits per character (e.g. 16 or 32). Characters are stored in order, so if 'A' = 65 then 'F' = 70. You are not expected to memorise codes.</p>

<h2>1.2 Multimedia</h2>
<h3>Bitmap images</h3>
<ul>
<li>A grid of <b>pixels</b>; each pixel stores a colour in <b>colour (bit) depth</b> bits; <b>resolution</b> = number of pixels (width × height).</li>
<li>The <b>file header</b> holds metadata (dimensions, colour depth).</li>
<li><b>File size</b> = width × height × colour depth (bits) ÷ 8 = bytes. Ignore the header unless told.</li>
<li>Higher resolution or colour depth → better quality but larger file. <b>Screen resolution</b> is the number of pixels the <i>display</i> can show; <b>image resolution</b> is the number of pixels in the <i>image</i>.</li>
</ul>
<h3>Vector graphics</h3>
<p>Stored as a <b>drawing list</b> of objects, each with <b>properties</b> (shape, coordinates, line/fill colour). Scales without pixelation and has small files for simple shapes (logos, diagrams). Bitmaps suit photographs.</p>
<h3>Sound</h3>
<ul>
<li>Sound is <b>analogue</b> (continuous); computers store <b>digital</b> (discrete) values, so it is <b>sampled</b>: amplitude is measured at regular intervals. <b>Sampling rate</b> = samples per second (Hz); <b>sampling resolution</b> = bits per sample.</li>
<li><b>File size</b> = sampling rate × resolution × seconds ÷ 8 (× number of channels).</li>
<li>Higher rate or resolution → closer to the original, bigger file.</li>
</ul>

<h2>1.3 Compression</h2>
<ul>
<li><b>Lossless</b>: original can be rebuilt exactly (text, programs). Example: <b>run-length encoding</b> (<code>WWWWBB → 4W 2B</code>) – works best with long runs, can make data with few runs bigger.</li>
<li><b>Lossy</b>: data is permanently discarded (JPEG images, MP3 sound – removes sounds people can barely hear, reduces colour depth/resolution).</li>
<li>Reasons: smaller storage, faster transmission.</li>
<li><b>By file type:</b> text – lossless (RLE, dictionary methods); bitmap – lossless (RLE) or lossy (reduce colour depth/resolution); vector graphic – lossless; sound – lossy (remove inaudible frequencies, lower sampling rate or resolution).</li>
</ul>`},

2: {html: `
<h2>2.1 Networks</h2>
<ul>
<li><b>LAN</b>: small area (building/site), owned by one organisation. <b>WAN</b>: large area, often uses public/leased telecom links (the internet is the largest WAN).</li>
<li><b>Client-server</b>: a server provides services (files, security, backup) to clients; central management; if the server fails the service stops; server is costly. <b>Peer-to-peer</b>: every computer is both client and server; cheap and simple but no central control – backup/security harder.</li>
<li><b>Thin client</b>: relies on a server for processing and storage; cheap, easy to manage, useless without the server/connection. <b>Thick client</b>: does its own processing and storage; works offline, costs more, each needs updates.</li>
<li><b>Cloud computing</b>: storage/software hosted by a provider and accessed over the internet. <b>Public</b> cloud is shared by many customers; <b>private</b> cloud is dedicated to one organisation. Benefits: scalable, accessible anywhere. Drawbacks: needs internet, data held by a third party.</li>
</ul>
<h3>Topologies</h3>
<table>
<tr><th>Topology</th><th>Features</th></tr>
<tr><td>Bus</td><td>One shared backbone. Cheap, little cable. Backbone fault stops everything; collisions grow with traffic.</td></tr>
<tr><td>Star</td><td>Each device cabled to a central switch. One cable fails → only that device is lost. More cable; the switch is a single point of failure.</td></tr>
<tr><td>Mesh</td><td>Devices interconnected, multiple paths. Very reliable; expensive and complex.</td></tr>
<tr><td>Hybrid</td><td>Combination of two or more topologies.</td></tr>
</table>
<h3>Transmission media</h3>
<ul>
<li><b>Copper cable</b>: electrical signals, cheap, interference/attenuation. <b>Fibre-optic</b>: light pulses, very high bandwidth, no electromagnetic interference, dearer.</li>
<li><b>Radio waves (Wi-Fi)</b>: no cables, but interference and easier to intercept. <b>Microwaves</b>: need line of sight (towers). <b>Satellite</b>: long distances, remote areas, delay.</li>
</ul>
<h3>Hardware</h3>
<table>
<tr><th>Device</th><th>Purpose</th></tr>
<tr><td>NIC / WNIC</td><td>Connects a computer to a wired / wireless network (has a MAC address)</td></tr>
<tr><td>Switch</td><td>Forwards data only to the intended device (uses MAC addresses)</td></tr>
<tr><td>WAP</td><td>Lets wireless devices join a wired network</td></tr>
<tr><td>Bridge</td><td>Joins two network segments / LANs</td></tr>
<tr><td>Repeater</td><td>Regenerates a weak signal so it can go further</td></tr>
<tr><td>Router</td><td>Forwards packets between networks using IP addresses; connects LAN to the internet</td></tr>
<tr><td>Modem</td><td>Converts digital ↔ analogue for the PSTN / phone line</td></tr>
</table>
<h3>Ethernet and bit streaming</h3>
<ul>
<li><b>CSMA/CD</b>: a device <b>listens</b> until the channel is idle, then transmits and keeps listening. If two devices transmit together there is a <b>collision</b>: the devices stop, send a <b>jamming signal</b>, each waits a <b>random time</b> (longer after repeated collisions) and tries again. Heavy traffic means many collisions. Write about what the <i>devices</i> do – the protocol does not act.</li>
<li><b>Bit streaming</b>: <i>on-demand</i> – pre-recorded file stored on a server, starts after buffering, can be paused/re-watched; <i>real-time</i> – live event sent as it happens, cannot be re-watched. Needs a bit rate (broadband speed) at least equal to the stream's, or the buffer empties and playback stalls.</li>
</ul>
<h3>Internet and WWW</h3>
<p>The <b>internet</b> is the global infrastructure of connected networks; the <b>World Wide Web</b> is the collection of web pages (HTTP/HTTPS) accessed over it.</p>
<h3>IP addresses, URL and DNS</h3>
<ul>
<li><b>IPv4</b>: 32 bits (4 bytes), four denary numbers 0–255 (e.g. <code>192.168.1.20</code>). <b>IPv6</b>: 128 bits as <b>eight groups of four hex digits</b> separated by colons (<code>2001:0db8:0000:0000:ff00:0042:8329</code> …); one run of zero groups may be written <code>::</code> once; introduced because IPv4 addresses are running out.</li>
<li>A device gets its IP address from the router/<b>DHCP</b> server (dynamic) or is set manually (static). Devices in a subnet share the <b>network ID</b> and have different <b>host IDs</b>.</li>
<li>An IP address has a network part and a host part; <b>subnetting</b> divides a network into smaller logical parts (better traffic and security management).</li>
<li><b>Public</b> IP: unique on the internet, routable. <b>Private</b> IP: used inside a LAN, reusable in other LANs, not directly reachable from the internet (adds security).</li>
<li><b>Static</b>: fixed address (servers). <b>Dynamic</b>: assigned temporarily (most user devices).</li>
<li><b>URL</b> = protocol + domain name + path, e.g. <code>https://www.example.com/shop/index.html</code>. <b>DNS</b> translates the domain name into an IP address; if a DNS server does not know it, it asks another DNS server.</li>
</ul>
<div class="trap"><b>Common traps.</b> Switch vs hub vs router; bridge vs repeater; saying the "internet" and "WWW" are the same; DNS gives an IP address (not a MAC address and not the page).</div>`},

3: {html: `
<h2>3.1 Computers and their components</h2>
<ul>
<li><b>Primary memory</b> (RAM, ROM) is directly accessible by the CPU. <b>Secondary storage</b> (HDD, SSD, optical) is non-volatile, larger and slower; needed to keep programs/data when power is off.</li>
<li><b>Embedded system</b>: computer built into a device for a dedicated task (washing machine, car engine controller). Benefits: cheap, reliable, small. Drawbacks: fixed function, hard to upgrade.</li>
<li><b>Buffer</b>: temporary store that compensates for differences in speed between devices (e.g. CPU and printer, video streaming).</li>
</ul>
<h3>Memory types</h3>
<table>
<tr><th></th><th>Details</th></tr>
<tr><td>RAM</td><td>Volatile, read/write; holds running programs and data.</td></tr>
<tr><td>ROM</td><td>Non-volatile, normally read only; holds bootstrap/BIOS and fixed firmware.</td></tr>
<tr><td>SRAM</td><td>Flip-flops, no refresh, faster, dearer, less dense → <b>cache</b>.</td></tr>
<tr><td>DRAM</td><td>Capacitors, must be refreshed, slower, cheaper, denser → <b>main memory</b>.</td></tr>
<tr><td>PROM</td><td>Programmed once after manufacture.</td></tr>
<tr><td>EPROM</td><td>Erased with UV light, then reprogrammed.</td></tr>
<tr><td>EEPROM</td><td>Erased electrically, in place, without removing the chip.</td></tr>
</table>
<h3>Devices</h3>
<ul>
<li><b>Laser printer</b>: laser draws the image as static charge on a drum; toner sticks to the charged areas; paper picks up the toner; the <b>fuser</b> heats it to fix it.</li>
<li><b>3D printer</b>: builds an object layer by layer from a digital model.</li>
<li><b>Magnetic HDD</b>: platters + read/write heads detect magnetised regions; moving parts. <b>SSD</b> (flash): transistors store charge; no moving parts, faster, silent, robust, dearer per GB, limited write cycles. <b>Optical</b>: laser reflected from pits and lands.</li>
<li><b>Touchscreen</b>: <i>resistive</i> – pressure pushes two conductive layers together, completing a circuit, and the processor calculates the position (works with gloves/stylus); <i>capacitive</i> – a conductive finger changes the electric field/charge (supports multi-touch). <b>Microphone</b>: sound → electrical signal. <b>Speaker</b>: varying current in a coil in a magnetic field moves a cone that vibrates the air. <b>VR headset</b>: two screens (one per eye) plus motion sensors.</li>
</ul>
<h3>Monitoring and control</h3>
<ul>
<li><b>Sensors</b> input data (temperature, pressure, infra-red, sound). <b>Actuators</b> convert the processor's signals into physical action (motor, valve, heater switch).</li>
<li><b>Monitoring</b>: only measures/records/displays. <b>Control</b>: also changes the process using actuators.</li>
<li><b>Feedback</b>: the output affects the input readings, so the system adjusts itself (thermostat).</li>
</ul>

<h2>3.2 Logic gates</h2>
<table>
<tr><th>Gate</th><th>Output is 1 when…</th><th>Expression</th></tr>
<tr><td>NOT</td><td>input is 0</td><td>X = NOT A</td></tr>
<tr><td>AND</td><td>both inputs are 1</td><td>X = A AND B</td></tr>
<tr><td>OR</td><td>at least one input is 1</td><td>X = A OR B</td></tr>
<tr><td>NAND</td><td>not both inputs are 1 (inverse of AND)</td><td>X = NOT (A AND B)</td></tr>
<tr><td>NOR</td><td>both inputs are 0 (inverse of OR)</td><td>X = NOT (A OR B)</td></tr>
<tr><td>XOR</td><td>the inputs are different</td><td>X = A XOR B</td></tr>
</table>
<p><b>Expression from a truth table:</b> for each row where X = 1 write an AND term (use NOT for inputs that are 0), then OR the terms together and simplify. Rows 110 and 111 (X = 1) simplify to <code>A AND B</code>.</p>
<p>For circuits: work from the inputs, evaluating each bracket/gate in turn. A 3-input truth table has 8 rows (000 to 111). Brackets matter: <code>A AND (B OR C)</code> is not <code>(A AND B) OR C</code>.</p>`},

4: {html: `
<h2>4.1 CPU architecture</h2>
<div class="key"><b>Von Neumann model / stored program concept:</b> instructions and data are stored together in main memory and instructions are fetched and executed one after another.</div>
<h3>Registers</h3>
<table>
<tr><th>Register</th><th>Holds</th></tr>
<tr><td>PC</td><td>Address of the next instruction to fetch</td></tr>
<tr><td>MAR</td><td>Address of the memory location to be read/written</td></tr>
<tr><td>MDR</td><td>Data/instruction just read from, or about to be written to, memory</td></tr>
<tr><td>CIR</td><td>The instruction being decoded/executed</td></tr>
<tr><td>ACC</td><td>Data being processed; ALU results</td></tr>
<tr><td>IX</td><td>Index register – used for indexed addressing</td></tr>
<tr><td>Status register</td><td>Flags (e.g. zero, carry, overflow)</td></tr>
</table>
<ul>
<li><b>General-purpose registers</b> can hold any data; <b>special-purpose registers</b> (PC, MAR, MDR, CIR, ACC, IX, status) have fixed roles. The <b>IAS</b> (immediate access store) is main memory.</li>
<li><b>ALU</b>: arithmetic and logic. <b>CU</b>: decodes instructions and sends control signals. <b>System clock</b>: synchronises operations.</li>
<li><b>Address bus</b>: unidirectional, carries addresses; <b>data bus</b>: bidirectional, carries data/instructions; <b>control bus</b>: control signals. n address lines → 2<sup>n</sup> locations.</li>
<li><b>Performance</b>: clock speed (cycles per second), number of cores (only helps if software can use them), data bus width (bits per transfer), cache size.</li>
<li><b>Ports</b>: USB (general peripherals), HDMI (digital video + audio), VGA (analogue video).</li>
</ul>
<h3>Fetch-execute cycle (register transfer notation)</h3>
<pre class="code">MAR ← [PC]
PC  ← [PC] + 1
MDR ← [[MAR]]
CIR ← [MDR]
(decode, then execute)</pre>
<p><code>[x]</code> means <i>the contents of x</i>; <code>[[MAR]]</code> is the contents of the memory location whose address is in the MAR.</p>
<h3>Interrupts</h3>
<ul>
<li>Causes: key press, printer needs attention, software error, timer, hardware fault.</li>
<li>The processor checks for interrupts <b>at the end of each fetch-execute cycle</b>. If the interrupt has higher priority than the current task, the register contents are saved (on the <b>stack</b>), the start address of the <b>interrupt service routine (ISR)</b> is loaded into the PC and the ISR runs. Afterwards the processor checks for further interrupts, restores the registers from the stack and the original program resumes.</li>
</ul>

<h2>4.2 Assembly language</h2>
<ul>
<li>Assembly uses mnemonics; an <b>assembler</b> translates it into machine code. A machine code instruction has an <b>opcode</b> and an <b>operand</b>.</li>
<li><b>Two-pass assembler:</b> pass 1 builds the <b>symbol table</b> (labels → addresses); pass 2 translates opcodes/operands to machine code, replacing labels using the table.</li>
</ul>
<table>
<tr><th>Mode</th><th>Meaning</th><th>Example</th></tr>
<tr><td>Immediate</td><td>Operand is the value</td><td>LDM #5 → ACC = 5</td></tr>
<tr><td>Direct</td><td>Operand is the address of the data</td><td>LDD 200 → ACC = [200]</td></tr>
<tr><td>Indirect</td><td>Operand is the address of the address</td><td>LDI 200 → ACC = [[200]]</td></tr>
<tr><td>Indexed</td><td>Address = operand + IX</td><td>LDX 200 → ACC = [200 + IX]</td></tr>
<tr><td>Relative</td><td>Address = current address + offset</td><td>(jumps)</td></tr>
</table>
<h3>Instructions you must know</h3>
<p><code>OUT</code> displays the <i>character</i> whose ASCII value is in ACC; <code>IN</code> stores a key's ASCII value in ACC. <code>CMI</code> compares ACC with the contents of the address held in the given location (indirect). Operand prefixes: <code>#</code> denary, <code>B</code> binary, <code>&amp;</code> hexadecimal.</p>
<p><code>LDM LDD LDI LDX LDR #n</code> (load; LDR loads IX) · <code>STO</code> · <code>ADD SUB</code> (address or #n/Bn/&amp;n) · <code>INC DEC</code> · <code>CMP</code> / <code>CMI</code> then <code>JPE</code> (jump if equal) or <code>JPN</code> (jump if not equal) · <code>JMP</code> · <code>IN OUT</code> · <code>END</code>. Only one general-purpose register: ACC.</p>
<div class="trap"><b>Tracing tips.</b> Write a small table of ACC, IX and the memory locations that change, one row per instruction. <code>LDD 50</code> loads the <i>contents</i> of 50; <code>LDM #50</code> loads the number 50. A compare does not change ACC.</div>

<h2>4.3 Bit manipulation</h2>
<ul>
<li><b>Arithmetic shift right</b> copies the sign bit into the vacated places (keeps the sign of a two's complement number; <code>10110101 → 11101101</code>). <b>Cyclic (rotate) shift:</b> bits leaving one end re-enter at the other (<code>10010110</code> rotated left 2 = <code>01011010</code>).</li>
<li><b>Logical shift left</b> (<code>LSL #n</code>): bits move left n places, zeros enter on the right, bits leaving the left end are lost (×2 per place). <b>Logical shift right</b> (<code>LSR #n</code>): zeros enter on the left (÷2 per place, rounding down).</li>
<li><b>Masks:</b> <code>AND</code> with 0 clears a bit, with 1 keeps it (also used to <i>test</i> a bit). <code>OR</code> with 1 sets a bit, with 0 keeps it. <code>XOR</code> with 1 toggles a bit, with 0 keeps it.</li>
<li>Example: set bits 7 and 6 only → <code>OR B11000000</code>; clear low nibble → <code>AND B11110000</code>; toggle bit 7 → <code>XOR B10000000</code>.</li>
<li>Monitoring/control: individual bits of a register can represent sensor/actuator states, so masks read or change one device without affecting the others.</li>
</ul>`},

5: {html: `
<h2>5.1 Operating systems</h2>
<p>The OS manages the hardware and provides a platform and interface for application software and users. Key management tasks:</p>
<table>
<tr><th>Task</th><th>What it does</th></tr>
<tr><td>Memory management</td><td>Allocates memory to processes, keeps processes apart so one cannot overwrite another</td></tr>
<tr><td>File management</td><td>Directory structure; naming, moving, opening, deleting; access control</td></tr>
<tr><td>Security management</td><td>User accounts, passwords, access rights; backup and firewall support</td></tr>
<tr><td>Hardware management</td><td>Device drivers, handling input/output and interrupts from peripherals</td></tr>
<tr><td>Process management</td><td>Scheduling processes on the CPU so many programs appear to run together</td></tr>
</table>
<h3>Utility software</h3>
<ul>
<li><b>Disk repair</b>: checks for bad sectors/inconsistencies and repairs or marks them. <b>Disk formatter</b>: prepares a disk (tracks/sectors/file system). <b>Defragmentation</b>: stores a file's parts together – helps magnetic disks (not SSDs).</li>
<li><b>Virus checker</b>: scans for/removes malware. <b>Back-up</b>: copies for recovery. <b>File compression</b>: reduces file size. <b>Disk contents analysis</b>: shows how space is used. <b>Disk repair</b>: fixes disk errors.</li>
</ul>
<h3>Program libraries</h3>
<p>Pre-written, tested routines that developers reuse – saves time and reduces errors. A <b>DLL</b> (dynamic link library) is loaded when needed and shared by several programs; an update to the DLL benefits every program that uses it without recompiling them. Drawback: if the DLL is missing or an incompatible version is installed, programs that depend on it may fail.</p>

<h2>5.2 Language translators</h2>
<table>
<tr><th>Translator</th><th>Notes</th></tr>
<tr><td>Assembler</td><td>Assembly → machine code</td></tr>
<tr><td>Compiler</td><td>Translates the whole high-level program to machine code before it runs and reports errors after the translation. Output runs without the compiler, is usually faster, source code is not given to users. Must be recompiled after every change.</td></tr>
<tr><td>Interpreter</td><td>Translates and executes one statement at a time and stops at the first error. Easy testing/debugging (error where it occurs); no separate executable; slower; interpreter needed on every run.</td></tr>
</table>
<p>Some languages are part compiled, part interpreted: e.g. Java compiles to intermediate bytecode which a virtual machine interprets (portable).</p>
<h3>IDE features</h3>
<ul>
<li><b>Coding:</b> context-sensitive prompts.</li>
<li><b>Initial error detection:</b> dynamic syntax checks while typing.</li>
<li><b>Presentation:</b> prettyprint, expand/collapse code blocks.</li>
<li><b>Debugging:</b> single stepping, breakpoints, variable/expression watch, report window.</li>
</ul>`}
};

window.NOTES.sheet = {html: `
<p class="muted">One page of the facts and formulas that questions in chapters 1–5 use. Use the browser's print function to save it as a PDF.</p>
<div class="grid">
<div class="card"><h3>Prefixes and powers of 2</h3>
<p>kibi 2<sup>10</sup> = 1024 · mebi 2<sup>20</sup> · gibi 2<sup>30</sup> · tebi 2<sup>40</sup><br>kilo 10<sup>3</sup> · mega 10<sup>6</sup> · giga 10<sup>9</sup> · tera 10<sup>12</sup></p>
<p>2<sup>8</sup>=256 · 2<sup>10</sup>=1024 · 2<sup>12</sup>=4096 · 2<sup>16</sup>=65 536 · 2<sup>20</sup>=1 048 576 · 2<sup>24</sup>=16 777 216 · 2<sup>32</sup>=4 294 967 296</p>
<p>1 byte = 8 bits. n address lines → 2<sup>n</sup> locations.</p></div>
<div class="card"><h3>Number systems</h3>
<p>Place values: 128 64 32 16 8 4 2 1</p>
<p>Hex: 0–9 then A=10 B=11 C=12 D=13 E=14 F=15; one hex digit = 4 bits.</p>
<p>BCD: each denary digit → 4 bits (259 = 0010 0101 1001).</p></div>
<div class="card"><h3>Negative numbers (n bits)</h3>
<p><b>Two's complement:</b> invert all bits, add 1. MSB has weight −2<sup>n−1</sup>. Range −2<sup>n−1</sup> to 2<sup>n−1</sup>−1 (8 bits: −128 to +127).</p>
<p><b>One's complement:</b> invert all bits only. <b>Sign-and-magnitude:</b> MSB is the sign.</p>
<p>A − B = A + (two's complement of B); ignore the carry out. Overflow: result outside the range.</p></div>
<div class="card"><h3>File sizes</h3>
<p><b>Bitmap</b> (bytes) = width × height × colour depth ÷ 8<br>colours = 2<sup>depth</sup></p>
<p><b>Sound</b> (bytes) = sampling rate (Hz) × resolution (bits) × seconds ÷ 8 (× channels)</p>
<p><b>RLE:</b> WWWWBB → 4W 2B (lossless; lossy = permanent loss, e.g. MP3, JPEG).</p>
<p>ASCII 7 bits (128) · extended ASCII 8 bits (256) · Unicode: many more characters.</p></div>
<div class="card"><h3>Logic gates</h3>
<table><tr><th>A B</th><th>AND</th><th>OR</th><th>NAND</th><th>NOR</th><th>XOR</th></tr>
<tr><td>0 0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td></tr>
<tr><td>0 1</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td></tr>
<tr><td>1 0</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td></tr>
<tr><td>1 1</td><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td></tr></table>
<p>NOT: 0→1, 1→0. 3 inputs → 8 rows.</p></div>
<div class="card"><h3>Registers and fetch</h3>
<p>PC next instruction address · MAR address to access · MDR data/instruction · CIR current instruction · ACC working value · IX index · status flags.</p>
<pre class="code">MAR ← [PC]
PC  ← [PC] + 1
MDR ← [[MAR]]
CIR ← [MDR]</pre>
<p>Interrupts are checked at the end of each cycle; save registers, ISR address → PC, run ISR, restore.</p></div>
<div class="card"><h3>Assembly (one register: ACC)</h3>
<p><b>Load:</b> LDM #n (immediate) · LDD addr (direct) · LDI addr (indirect) · LDX addr (indexed: addr + IX) · LDR #n (IX) · STO addr</p>
<p><b>Arithmetic:</b> ADD · SUB (addr or #n/Bn/&amp;n) · INC · DEC (ACC or IX)</p>
<p><b>Compare/jump:</b> CMP addr/#n · CMI addr · JPE (if equal) · JPN (if not equal) · JMP</p>
<p><b>I/O:</b> IN (key → ASCII in ACC) · OUT (shows the character) · END</p>
<p><b>Bits:</b> AND · OR · XOR (clear / set / toggle with a mask) · LSL #n · LSR #n</p>
<p># denary · B binary · &amp; hex</p></div>
<div class="card"><h3>Shifts and masks</h3>
<p>LSL: zeros in at right, ×2 each place. LSR: zeros in at left, ÷2. Arithmetic right keeps the sign bit. Cyclic: bits wrap round.</p>
<p>AND mask: 0 clears, 1 keeps (test a bit). OR mask: 1 sets. XOR mask: 1 toggles.</p></div>
<div class="card"><h3>Networks</h3>
<p>IPv4: 32 bits, four numbers 0–255. IPv6: 128 bits, eight groups of four hex digits, :: once.</p>
<p>Switch: forwards to one device (MAC). Router: between networks (IP). Bridge: joins segments. Repeater: regenerates signal. WAP: wireless access. Modem: digital ↔ analogue. NIC: network interface.</p>
<p>CSMA/CD: listen, send, collision → jam signal, random wait, retry. DNS: domain name → IP address.</p></div>
<div class="card"><h3>Memory and software</h3>
<p>SRAM: fast, dear, no refresh (cache). DRAM: refresh, cheap, dense (main memory). ROM non-volatile. PROM once · EPROM UV · EEPROM electrical.</p>
<p>Compiler: whole program first, executable, hides source. Interpreter: line by line, stops at first error. Assembler: assembly → machine code. DLL: loaded when needed, shared.</p></div>
</div>`};
