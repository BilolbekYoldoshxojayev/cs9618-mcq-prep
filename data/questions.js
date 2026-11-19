window.QBANK = [
{
"id": "C1-001",
"ch": 1,
"topic": "Data representation",
"marks": 1,
"q": "How many bytes are there in one kibibyte (KiB)?",
"code": null,
"opts": [
"1024",
"1000",
"1 048 576",
"8192"
],
"ans": 0,
"why": "The binary prefix kibi means 2^10 = 1024. Kilo (decimal) means 1000."
},
{
"id": "C1-002",
"ch": 1,
"topic": "Data representation",
"marks": 2,
"q": "Which statement correctly distinguishes a mebibyte (MiB) from a megabyte (MB)?",
"code": null,
"opts": [
"1 MiB is 2^20 bits whereas 1 MB is 10^6 bits",
"1 MiB is 10^6 bytes whereas 1 MB is 2^20 bytes",
"1 MiB is 2^20 bytes whereas 1 MB is 10^6 bytes",
"1 MiB is 2^10 bytes whereas 1 MB is 10^3 bytes"
],
"ans": 2,
"why": "Binary prefixes (kibi, mebi, gibi, tebi) are powers of 2; decimal prefixes (kilo, mega, giga, tera) are powers of 10."
},
{
"id": "C1-003",
"ch": 1,
"topic": "Data representation",
"marks": 1,
"q": "Which is a typical use of Binary Coded Decimal (BCD)?",
"code": null,
"opts": [
"Showing each digit of a number on a seven-segment display",
"Compressing a long text file to save storage space",
"Encrypting a message before it is sent over a network",
"Storing the pixels of a photograph in a bitmap file"
],
"ans": 0,
"why": "BCD stores each denary digit in its own 4 bits, so it converts easily to digit-by-digit displays (clocks, calculators, meters)."
},
{
"id": "C1-004",
"ch": 1,
"topic": "Data representation",
"marks": 1,
"q": "Why do programmers often write memory addresses in hexadecimal rather than binary?",
"code": null,
"opts": [
"The processor can only execute instructions that are written in hexadecimal",
"Each hex digit stands for 4 bits, so addresses are shorter and easier to read",
"Hexadecimal numbers take up less space when stored in the computer's memory",
"Hexadecimal removes the need to convert the values to binary at all"
],
"ans": 1,
"why": "Hex is only a human-friendly shorthand; the computer still stores everything in binary."
},
{
"id": "C1-005",
"ch": 1,
"topic": "Data representation",
"marks": 1,
"q": "Which is a reason for using Unicode instead of ASCII?",
"code": null,
"opts": [
"Unicode stores every character in exactly 7 bits",
"Unicode is the only character set that includes lowercase letters",
"Unicode can represent characters from many different languages",
"Unicode uses fewer bits per character, so text files are smaller"
],
"ans": 2,
"why": "Unicode has a far larger repertoire (many scripts, symbols, emoji) at the cost of more bits per character."
},
{
"id": "C1-006",
"ch": 1,
"topic": "Data representation",
"marks": 1,
"q": "An overflow error occurs when a calculation produces a result that is",
"code": null,
"opts": [
"too large to be represented in the number of bits available",
"rounded because it has too many decimal places",
"stored in a different number system from the operands",
"negative when a positive result was expected"
],
"ans": 0,
"why": "With a fixed number of bits only a limited range can be stored; a result outside this range overflows."
},
{
"id": "C1-007",
"ch": 1,
"topic": "Data representation",
"marks": 2,
"q": "Which is an advantage of two's complement over sign-and-magnitude representation?",
"code": null,
"opts": [
"It uses fewer bits to store negative numbers than positive numbers",
"It makes overflow impossible when adding two positive numbers together",
"It can store larger positive numbers using the same number of bits",
"Subtraction can use addition and zero has a single representation"
],
"ans": 3,
"why": "Two's complement has a single zero and lets the same adder circuit perform addition and subtraction."
},
{
"id": "C1-008",
"ch": 1,
"topic": "Multimedia",
"marks": 1,
"q": "What does the term 'colour depth' mean for a bitmap image?",
"code": null,
"opts": [
"The number of different file formats the image can be saved in",
"The number of bytes in the file header",
"The number of pixels along the width of the image",
"The number of bits used to represent the colour of each pixel"
],
"ans": 3,
"why": "Colour (bit) depth = bits per pixel. More bits per pixel allows more colours."
},
{
"id": "C1-009",
"ch": 1,
"topic": "Multimedia",
"marks": 1,
"q": "What is meant by the 'resolution' of a bitmap image?",
"code": null,
"opts": [
"The number of bits used for each colour",
"The number of pixels the image contains (width × height)",
"The number of colours that appear in the image",
"The physical size of the screen displaying the image"
],
"ans": 1,
"why": "Image resolution is the pixel dimensions of the image."
},
{
"id": "C1-010",
"ch": 1,
"topic": "Multimedia",
"marks": 1,
"q": "Which data would be stored in the file header of a bitmap image?",
"code": null,
"opts": [
"The drawing list of objects in the image",
"The image dimensions and the colour depth",
"The colour of every pixel in the image",
"The date on which the image was last viewed"
],
"ans": 1,
"why": "The header holds metadata needed to interpret the pixel data, such as width, height and colour depth."
},
{
"id": "C1-011",
"ch": 1,
"topic": "Multimedia",
"marks": 2,
"q": "A vector graphic is stored as a list of drawing objects. Which is stored for each object?",
"code": null,
"opts": [
"The image resolution at which the object was first drawn",
"The colour value of each individual pixel inside the object",
"A sampled amplitude value taken at regular time intervals",
"Its properties, such as shape, coordinates and colours"
],
"ans": 3,
"why": "A drawing list stores objects with properties; the image is re-drawn from these so it scales without loss of quality."
},
{
"id": "C1-012",
"ch": 1,
"topic": "Multimedia",
"marks": 2,
"q": "A company logo must be printed on a small business card and on a large billboard with no loss of quality. Which format is most suitable and why?",
"code": null,
"opts": [
"Bitmap, because it stores a list of the shapes in the logo",
"Bitmap, because each pixel can be enlarged to fill the larger area",
"Vector graphic, because it stores a colour for every pixel",
"Vector graphic, because it scales to any size without loss of quality"
],
"ans": 3,
"why": "Bitmaps become blocky when enlarged; vector graphics are re-calculated at any size."
},
{
"id": "C1-013",
"ch": 1,
"topic": "Multimedia",
"marks": 2,
"q": "A photograph is to be stored. Which is the best format and reason?",
"code": null,
"opts": [
"Vector graphic, because photographs are made of a small number of simple shapes",
"Bitmap, because each pixel can hold a slightly different colour to capture fine detail",
"Bitmap, because it is stored as a list of drawing objects",
"Vector graphic, because its file size is always smaller than a bitmap"
],
"ans": 1,
"why": "Photographs have continuous colour variation that cannot be described by a few shapes."
},
{
"id": "C1-014",
"ch": 1,
"topic": "Multimedia",
"marks": 2,
"q": "The sampling rate used to record a sound is increased. What is the effect?",
"code": null,
"opts": [
"The range of amplitudes that can be stored increases but the file size stays the same",
"The sound is stored with fewer samples so the file size decreases",
"The recording is a closer approximation of the original sound and the file size increases",
"The recording is a closer approximation of the original sound and the file size decreases"
],
"ans": 2,
"why": "More samples per second capture the waveform more accurately but need more storage."
},
{
"id": "C1-015",
"ch": 1,
"topic": "Multimedia",
"marks": 2,
"q": "The sampling resolution (bit depth) used to record a sound is decreased. What is the effect?",
"code": null,
"opts": [
"Each sampled amplitude is stored more accurately and the file becomes larger",
"The highest frequency that can be captured is reduced but file size is unchanged",
"Each sampled amplitude is stored less accurately and the file becomes smaller",
"Samples are taken less often and the file becomes smaller"
],
"ans": 2,
"why": "Sampling resolution is the number of bits per sample; fewer bits means fewer possible amplitude levels."
},
{
"id": "C1-016",
"ch": 1,
"topic": "Multimedia",
"marks": 2,
"q": "The colour depth of a bitmap image is reduced while its resolution stays the same. What is the effect?",
"code": null,
"opts": [
"The file size decreases and fewer different colours can be shown",
"The file size decreases and the image has fewer pixels",
"The file size increases and more colours can be shown",
"The file size stays the same but the image becomes lower quality"
],
"ans": 0,
"why": "File size = pixels × bits per pixel (+ header). Reducing bits per pixel reduces both size and available colours."
},
{
"id": "C1-017",
"ch": 1,
"topic": "Compression",
"marks": 1,
"q": "A text document must be compressed so that it can be restored exactly. Which type of compression is required?",
"code": null,
"opts": [
"Lossless",
"Lossy",
"Perceptual",
"Analogue"
],
"ans": 0,
"why": "Lossless compression allows the original data to be rebuilt exactly; this is essential for text and program files."
},
{
"id": "C1-018",
"ch": 1,
"topic": "Compression",
"marks": 1,
"q": "For which data is run-length encoding (RLE) most effective?",
"code": null,
"opts": [
"A photograph with a different colour at almost every pixel",
"An encrypted text file",
"An image with large areas of identical colour",
"A sound recording of speech"
],
"ans": 2,
"why": "RLE replaces runs of identical values with a value and a count; it works best when long runs exist."
},
{
"id": "C1-019",
"ch": 1,
"topic": "Compression",
"marks": 2,
"q": "MP3 compression reduces file size by removing sounds that most people cannot hear. Which statement is correct?",
"code": null,
"opts": [
"It is lossy because the removed data cannot be recovered",
"It is lossless because the file can be played on any device",
"It is lossy because the sampling rate is increased",
"It is lossless because only silent sections are removed"
],
"ans": 0,
"why": "Perceptual compression permanently discards information, so it is lossy."
},
{
"id": "C1-020",
"ch": 1,
"topic": "Compression",
"marks": 1,
"q": "Which is a benefit of compressing a file before emailing it?",
"code": null,
"opts": [
"It prevents the file from being intercepted while in transit",
"It checks the file for errors as it is being transmitted",
"It increases the resolution and quality of the file",
"It reduces transmission time and the storage space needed"
],
"ans": 3,
"why": "Compression reduces file size; it does not encrypt or verify data."
},
{
"id": "C1-021",
"ch": 1,
"topic": "Compression",
"marks": 2,
"q": "A user compresses a bitmap image using lossy compression and then opens it. Which statement is true?",
"code": null,
"opts": [
"The file is larger because a compression dictionary has been added",
"The file is the same size but the colours are less accurate",
"The file is smaller and the original image can be rebuilt exactly",
"The file is smaller but some detail has been permanently lost"
],
"ans": 3,
"why": "Lossy compression discards data permanently in exchange for a smaller file."
},
{
"id": "C1-022",
"ch": 1,
"topic": "Data representation",
"marks": 1,
"q": "What is the denary value of the unsigned 8-bit binary number 11011010?",
"code": null,
"opts": [
"234",
"91",
"218",
"217"
],
"ans": 2,
"why": "Add the place values of the 1 bits: 218."
},
{
"id": "C1-023",
"ch": 1,
"topic": "Data representation",
"marks": 1,
"q": "What is the denary value of the unsigned 8-bit binary number 10111101?",
"code": null,
"opts": [
"205",
"189",
"61",
"188"
],
"ans": 1,
"why": "Add the place values of the 1 bits: 189."
},
{
"id": "C1-024",
"ch": 1,
"topic": "Data representation",
"marks": 1,
"q": "Which 8-bit binary number represents the denary number 214?",
"code": null,
"opts": [
"11000110",
"10010110",
"11011110",
"11010110"
],
"ans": 3,
"why": "214 = 11010110 (check by adding place values)."
},
{
"id": "C1-025",
"ch": 1,
"topic": "Data representation",
"marks": 1,
"q": "Which 8-bit binary number represents the denary number 144?",
"code": null,
"opts": [
"00001001",
"10010100",
"11010000",
"10010000"
],
"ans": 3,
"why": "144 = 10010000 (check by adding place values)."
},
{
"id": "C1-026",
"ch": 1,
"topic": "Data representation",
"marks": 1,
"q": "What is the denary value of the hexadecimal number 43?",
"code": null,
"opts": [
"43",
"67",
"68",
"83"
],
"ans": 1,
"why": "4 × 16 + 3 = 67."
},
{
"id": "C1-027",
"ch": 1,
"topic": "Data representation",
"marks": 1,
"q": "What is the denary value of the hexadecimal number 4B?",
"code": null,
"opts": [
"75",
"180",
"51",
"76"
],
"ans": 0,
"why": "4 × 16 + B = 75."
},
{
"id": "C1-028",
"ch": 1,
"topic": "Data representation",
"marks": 1,
"q": "Which hexadecimal number is equivalent to the binary number 10001101?",
"code": null,
"opts": [
"8C",
"82",
"8D",
"D8"
],
"ans": 2,
"why": "Split into nibbles 1000 1101 = 8D."
},
{
"id": "C1-029",
"ch": 1,
"topic": "Data representation",
"marks": 1,
"q": "Which hexadecimal number is equivalent to the binary number 10011000?",
"code": null,
"opts": [
"89",
"A8",
"98",
"97"
],
"ans": 2,
"why": "Split into nibbles 1001 1000 = 98."
},
{
"id": "C1-030",
"ch": 1,
"topic": "Data representation",
"marks": 2,
"q": "Which 8-bit two's complement binary number represents -35?",
"code": null,
"opts": [
"11011101",
"10100011",
"11011111",
"11011100"
],
"ans": 0,
"why": "Write +35 in binary, invert all bits, add 1 → 11011101. Sign-and-magnitude or forgetting to add 1 gives the wrong answers."
},
{
"id": "C1-031",
"ch": 1,
"topic": "Data representation",
"marks": 2,
"q": "Which 8-bit two's complement binary number represents -71?",
"code": null,
"opts": [
"11000111",
"01000111",
"10111001",
"10111000"
],
"ans": 2,
"why": "Write +71 in binary, invert all bits, add 1 → 10111001. Sign-and-magnitude or forgetting to add 1 gives the wrong answers."
},
{
"id": "C1-032",
"ch": 1,
"topic": "Data representation",
"marks": 2,
"q": "Which 8-bit two's complement binary number represents -30?",
"code": null,
"opts": [
"11100010",
"10011110",
"11100001",
"00011110"
],
"ans": 0,
"why": "Write +30 in binary, invert all bits, add 1 → 11100010. Sign-and-magnitude or forgetting to add 1 gives the wrong answers."
},
{
"id": "C1-033",
"ch": 1,
"topic": "Data representation",
"marks": 2,
"q": "What is the denary value of the 8-bit two's complement number 10001000?",
"code": null,
"opts": [
"-8",
"-119",
"136",
"-120"
],
"ans": 3,
"why": "The most significant bit has place value -128: -128 + 8 = -120."
},
{
"id": "C1-034",
"ch": 1,
"topic": "Data representation",
"marks": 2,
"q": "What is the denary value of the 8-bit two's complement number 11001100?",
"code": null,
"opts": [
"-51",
"204",
"-76",
"-52"
],
"ans": 3,
"why": "The most significant bit has place value -128: -128 + 76 = -52."
},
{
"id": "C1-035",
"ch": 1,
"topic": "Data representation",
"marks": 2,
"q": "What is the denary value of the 8-bit two's complement number 11101101?",
"code": null,
"opts": [
"-18",
"-19",
"237",
"-109"
],
"ans": 1,
"why": "The most significant bit has place value -128: -128 + 109 = -19."
},
{
"id": "C1-036",
"ch": 1,
"topic": "Data representation",
"marks": 2,
"q": "Two positive numbers 01011101 and 01000110 are added using 8-bit two's complement. What does the result represent?",
"code": null,
"opts": [
"-93 (overflow has occurred)",
"163 (overflow has occurred)",
"163 (no overflow)",
"-93 (no overflow)"
],
"ans": 0,
"why": "93 + 70 = 163 exceeds +127, so the sign bit becomes 1 and the stored value is 163 - 256 = -93. Overflow."
},
{
"id": "C1-037",
"ch": 1,
"topic": "Data representation",
"marks": 2,
"q": "Two positive numbers 01001000 and 01100001 are added using 8-bit two's complement. What does the result represent?",
"code": null,
"opts": [
"169 (no overflow)",
"87 (overflow has occurred)",
"-87 (overflow has occurred)",
"169 (overflow has occurred)"
],
"ans": 2,
"why": "72 + 97 = 169 exceeds +127, so the sign bit becomes 1 and the stored value is 169 - 256 = -87. Overflow."
},
{
"id": "C1-038",
"ch": 1,
"topic": "Data representation",
"marks": 1,
"q": "Which is the Binary Coded Decimal (BCD) representation of the denary number 901?",
"code": null,
"opts": [
"0001 0010",
"1001 0000 0001",
"001110000101",
"0011 1000 0101"
],
"ans": 1,
"why": "Convert each denary digit separately into a 4-bit binary number."
},
{
"id": "C1-039",
"ch": 1,
"topic": "Data representation",
"marks": 1,
"q": "Which is the Binary Coded Decimal (BCD) representation of the denary number 788?",
"code": null,
"opts": [
"001100010100",
"1000 1001 1001",
"1000 1000 0111",
"0111 1000 1000"
],
"ans": 3,
"why": "Convert each denary digit separately into a 4-bit binary number."
},
{
"id": "C1-040",
"ch": 1,
"topic": "Data representation",
"marks": 1,
"q": "What is the range of denary values that can be stored in a 6-bit two's complement number?",
"code": null,
"opts": [
"-31 to +31",
"0 to 63",
"-32 to +31",
"-32 to +32"
],
"ans": 2,
"why": "-2^5 to 2^5 - 1."
},
{
"id": "C1-041",
"ch": 1,
"topic": "Data representation",
"marks": 1,
"q": "What is the range of denary values that can be stored in a 10-bit two's complement number?",
"code": null,
"opts": [
"0 to 1023",
"-512 to +512",
"-512 to +511",
"-511 to +511"
],
"ans": 2,
"why": "-2^9 to 2^9 - 1."
},
{
"id": "C1-042",
"ch": 1,
"topic": "Multimedia",
"marks": 1,
"q": "A bitmap image uses a colour depth of 6 bits. How many different colours can it display?",
"code": null,
"opts": [
"36",
"6",
"32",
"64"
],
"ans": 3,
"why": "2^6 = 64."
},
{
"id": "C1-043",
"ch": 1,
"topic": "Multimedia",
"marks": 1,
"q": "A bitmap image uses a colour depth of 10 bits. How many different colours can it display?",
"code": null,
"opts": [
"512",
"1024",
"20",
"100"
],
"ans": 1,
"why": "2^10 = 1024."
},
{
"id": "C1-044",
"ch": 1,
"topic": "Multimedia",
"marks": 2,
"q": "A bitmap image is 512 pixels wide and 256 pixels high with a colour depth of 8 bits. Ignoring the file header, what is the file size?",
"code": null,
"opts": [
"256 KiB",
"1024 KiB",
"16 KiB",
"128 KiB"
],
"ans": 3,
"why": "512 × 256 × 8 = 1048576 bits; ÷ 8 = 131072 bytes; ÷ 1024 = 128 KiB."
},
{
"id": "C1-045",
"ch": 1,
"topic": "Multimedia",
"marks": 2,
"q": "A bitmap image is 1024 pixels wide and 768 pixels high with a colour depth of 24 bits. Ignoring the file header, what is the file size?",
"code": null,
"opts": [
"2304 KiB",
"4608 KiB",
"288 KiB",
"2359.3 KiB"
],
"ans": 0,
"why": "1024 × 768 × 24 = 18874368 bits; ÷ 8 = 2359296 bytes; ÷ 1024 = 2304 KiB."
},
{
"id": "C1-046",
"ch": 1,
"topic": "Multimedia",
"marks": 2,
"q": "A bitmap image is 640 pixels wide and 480 pixels high with a colour depth of 16 bits. Ignoring the file header, what is the file size?",
"code": null,
"opts": [
"1200 KiB",
"600 KiB",
"614.4 KiB",
"4800 KiB"
],
"ans": 1,
"why": "640 × 480 × 16 = 4915200 bits; ÷ 8 = 614400 bytes; ÷ 1024 = 600 KiB."
},
{
"id": "C1-047",
"ch": 1,
"topic": "Multimedia",
"marks": 2,
"q": "A mono sound is recorded for 20 seconds with a sampling rate of 16000 Hz and a sampling resolution of 16 bits. What is the size of the sound data?",
"code": null,
"opts": [
"640,000 bytes",
"80,000 bytes",
"5,120,000 bytes",
"1,280,000 bytes"
],
"ans": 0,
"why": "16000 × 16 × 20 = 5120000 bits; ÷ 8 = 640000 bytes."
},
{
"id": "C1-048",
"ch": 1,
"topic": "Multimedia",
"marks": 2,
"q": "A mono sound is recorded for 10 seconds with a sampling rate of 44100 Hz and a sampling resolution of 16 bits. What is the size of the sound data?",
"code": null,
"opts": [
"110,250 bytes",
"882,000 bytes",
"7,056,000 bytes",
"1,764,000 bytes"
],
"ans": 1,
"why": "44100 × 16 × 10 = 7056000 bits; ÷ 8 = 882000 bytes."
},
{
"id": "C1-049",
"ch": 1,
"topic": "Multimedia",
"marks": 2,
"q": "A mono sound is recorded for 30 seconds with a sampling rate of 8000 Hz and a sampling resolution of 8 bits. What is the size of the sound data?",
"code": null,
"opts": [
"240,000 bytes",
"8,000 bytes",
"480,000 bytes",
"1,920,000 bytes"
],
"ans": 0,
"why": "8000 × 8 × 30 = 1920000 bits; ÷ 8 = 240000 bytes."
},
{
"id": "C1-050",
"ch": 1,
"topic": "Compression",
"marks": 2,
"q": "Run-length encoding (count followed by character) is applied to the data WWWWBBBWWWWWWK. What is the result?",
"code": null,
"opts": [
"1K 6W 3B 4W",
"4W 3B 6W 1K",
"W4 B3 W6 K1",
"5W 3B 6W 1K"
],
"ans": 1,
"why": "Count each run of identical characters and write the count then the character."
},
{
"id": "C1-051",
"ch": 1,
"topic": "Compression",
"marks": 2,
"q": "Run-length encoding (count followed by character) is applied to the data RRGGGGGGBBBBBBBBR. What is the result?",
"code": null,
"opts": [
"1R 8B 6G 2R",
"2R 6G 8B 1R",
"3R 6G 8B 1R",
"R2 G6 B8 R1"
],
"ans": 1,
"why": "Count each run of identical characters and write the count then the character."
},
{
"id": "C1-052",
"ch": 1,
"topic": "Compression",
"marks": 2,
"q": "Run-length encoding (count followed by character) is applied to the data AAAAAAABBCCCC. What is the result?",
"code": null,
"opts": [
"8A 2B 4C",
"4C 2B 7A",
"7A 2B 4C",
"A7 B2 C4"
],
"ans": 2,
"why": "Count each run of identical characters and write the count then the character."
},
{
"id": "C2-053",
"ch": 2,
"topic": "Networks",
"marks": 1,
"q": "Which statement best describes a wide area network (WAN)?",
"code": null,
"opts": [
"A network that connects exactly two computers with a single cable",
"A network covering a large area, often using leased or public telecom links",
"A network confined to a single building and owned by one organisation",
"A network in which every device must be connected wirelessly to it"
],
"ans": 1,
"why": "A LAN covers a small area such as a building; a WAN spans cities or countries, e.g. the internet."
},
{
"id": "C2-054",
"ch": 2,
"topic": "Networks",
"marks": 1,
"q": "Which is a benefit of connecting computers in a network?",
"code": null,
"opts": [
"Resources such as printers, files and internet access can be shared",
"Passwords are no longer needed to access shared files",
"Hardware faults on one computer cannot affect any other computer",
"Each computer can process data faster than when it is standalone"
],
"ans": 0,
"why": "Networking allows sharing of hardware, software and data."
},
{
"id": "C2-055",
"ch": 2,
"topic": "Networks",
"marks": 2,
"q": "A school stores all student files on one central computer. Staff log in from their own computers and request files as needed. Which model is used and what is a benefit?",
"code": null,
"opts": [
"Peer-to-peer; security and backups are controlled from one place",
"Client-server; each computer acts as both client and server so the cost is lower",
"Client-server; files and security can be managed centrally",
"Peer-to-peer; every computer holds a copy so work continues if one fails"
],
"ans": 2,
"why": "In client-server, the server provides services to clients and administration (backup, security) is centralised."
},
{
"id": "C2-056",
"ch": 2,
"topic": "Networks",
"marks": 1,
"q": "Which is a drawback of a peer-to-peer network compared with a client-server network?",
"code": null,
"opts": [
"Computers on the network cannot share printers with each other",
"A dedicated server computer must be bought and maintained",
"There is no central control, so backup and security are harder",
"If the server fails, no computer can access shared files"
],
"ans": 2,
"why": "Peer-to-peer has no central management; each computer manages its own resources."
},
{
"id": "C2-057",
"ch": 2,
"topic": "Networks",
"marks": 2,
"q": "Which statement describes a thin client?",
"code": null,
"opts": [
"It provides services such as file storage to other computers on the network",
"It relies on a server to carry out most of the processing and to store the data",
"It has a powerful processor and stores and runs its own software",
"It can only be used when it has no connection to a network"
],
"ans": 1,
"why": "A thick client does most processing locally; a thin client depends on the server."
},
{
"id": "C2-058",
"ch": 2,
"topic": "Networks",
"marks": 2,
"q": "Which is a drawback of using thin clients rather than thick clients?",
"code": null,
"opts": [
"Each one needs its own expensive processor and large storage",
"They can only be used by one person at a time",
"Software must be installed and updated separately on every device",
"They cannot be used if the connection to the server is lost"
],
"ans": 3,
"why": "Because the server does the processing, the thin client is useless without the network/server."
},
{
"id": "C2-059",
"ch": 2,
"topic": "Networks",
"marks": 2,
"q": "Which is an advantage of a star topology over a bus topology?",
"code": null,
"opts": [
"It does not need a central device such as a switch",
"It needs less cable because devices share one backbone",
"All data is sent to every device so it cannot be lost",
"Only the device on a failed cable loses its connection"
],
"ans": 3,
"why": "In a star every device has its own cable to the central switch; a bus relies on a shared backbone."
},
{
"id": "C2-060",
"ch": 2,
"topic": "Networks",
"marks": 2,
"q": "Device A sends data to device B in a star network that has a switch at the centre. How does the data travel?",
"code": null,
"opts": [
"From A to the switch, which forwards it to B",
"From A to every other device, each of which forwards it onwards",
"From A to a server, which stores it until B asks for it",
"Directly from A to B along a shared backbone cable"
],
"ans": 0,
"why": "All traffic in a star network passes through the central device."
},
{
"id": "C2-061",
"ch": 2,
"topic": "Networks",
"marks": 1,
"q": "Which topology provides several paths between devices so data can still arrive if one link fails?",
"code": null,
"opts": [
"Mesh",
"Bus",
"Ring",
"Star"
],
"ans": 0,
"why": "A mesh has multiple interconnections, giving redundancy."
},
{
"id": "C2-062",
"ch": 2,
"topic": "Networks",
"marks": 2,
"q": "Which is a drawback of a mesh topology?",
"code": null,
"opts": [
"A single cable fault stops all communication across the network",
"A large number of links is needed, so it is expensive to install",
"Only one device at a time is able to transmit its data",
"All of the data must pass through one single central device"
],
"ans": 1,
"why": "The number of links grows rapidly with the number of devices."
},
{
"id": "C2-063",
"ch": 2,
"topic": "Networks",
"marks": 1,
"q": "A hybrid network topology is one that",
"code": null,
"opts": [
"uses both wired and wireless links for every device",
"has all devices connected to a single backbone cable",
"connects a LAN to the internet",
"combines two or more different topologies"
],
"ans": 3,
"why": "For example, several star networks joined by a bus backbone."
},
{
"id": "C2-064",
"ch": 2,
"topic": "Networks",
"marks": 2,
"q": "Which is a drawback of a bus topology?",
"code": null,
"opts": [
"Data cannot be sent unless a central server is available",
"It cannot be used for more than two devices",
"Every device needs its own cable to a central switch",
"A fault in the backbone cable can disrupt the whole network"
],
"ans": 3,
"why": "All devices share one backbone, so a break affects every device and collisions increase with traffic."
},
{
"id": "C2-065",
"ch": 2,
"topic": "Networks",
"marks": 2,
"q": "Which is a drawback of cloud computing for an organisation?",
"code": null,
"opts": [
"The organisation must buy, house and maintain all of the servers itself",
"Storage capacity cannot be increased once a contract has been agreed",
"Access needs a reliable internet connection and a third party stores the data",
"Files can only be accessed from a single registered computer"
],
"ans": 2,
"why": "Cloud storage is hosted by a provider; users need connectivity, and must trust the provider's security."
},
{
"id": "C2-066",
"ch": 2,
"topic": "Networks",
"marks": 2,
"q": "How does a private cloud differ from a public cloud?",
"code": null,
"opts": [
"The infrastructure is used by a single organisation and is not shared",
"The infrastructure is cheaper because it is shared by many customers",
"It can only be accessed by users on wireless connections",
"The data is stored on the user's own device instead of on servers"
],
"ans": 0,
"why": "A private cloud is dedicated to one organisation, giving more control but higher cost."
},
{
"id": "C2-067",
"ch": 2,
"topic": "Networks",
"marks": 2,
"q": "Which is a drawback of a wireless network compared with a wired network?",
"code": null,
"opts": [
"Devices must always be physically plugged in to a switch",
"The signal can suffer interference and can be intercepted",
"The network can only be used with fibre-optic cable",
"Mobile devices such as phones cannot join the network"
],
"ans": 1,
"why": "Wireless signals travel through the air, so they are weaker, can be interfered with and can be intercepted."
},
{
"id": "C2-068",
"ch": 2,
"topic": "Networks",
"marks": 2,
"q": "Which statement correctly describes fibre-optic cable?",
"code": null,
"opts": [
"It sends data as radio waves and needs no cable between devices",
"It sends data as microwaves, which require a clear line of sight",
"It sends data as electrical signals and can suffer from crosstalk",
"It sends data as pulses of light and is not affected by interference"
],
"ans": 3,
"why": "Fibre-optic cable has high bandwidth and low attenuation; copper uses electrical signals."
},
{
"id": "C2-069",
"ch": 2,
"topic": "Networks",
"marks": 1,
"q": "Which transmission medium requires a clear line of sight between transmitter and receiver?",
"code": null,
"opts": [
"Microwave links",
"Copper cable",
"Wi-Fi inside a building",
"Fibre-optic cable"
],
"ans": 0,
"why": "Microwave transmission is directional and needs line of sight, often via towers or satellites."
},
{
"id": "C2-070",
"ch": 2,
"topic": "Network hardware",
"marks": 1,
"q": "What does a network switch do with the data it receives?",
"code": null,
"opts": [
"It converts the digital signals into analogue signals",
"It sends a copy of the data to every connected device",
"It forwards the data only to the device it is addressed to",
"It translates domain names into the IP addresses of servers"
],
"ans": 2,
"why": "A switch uses MAC addresses to forward frames to the correct device; a hub broadcasts to all."
},
{
"id": "C2-071",
"ch": 2,
"topic": "Network hardware",
"marks": 1,
"q": "What is the purpose of a Network Interface Card (NIC)?",
"code": null,
"opts": [
"To translate domain names into IP addresses for the browser",
"To increase the overall processing speed of the computer",
"To connect a computer to a network and give it a MAC address",
"To store the web pages that the user has recently visited"
],
"ans": 2,
"why": "A NIC provides the physical interface to the network; wireless versions are WNICs."
},
{
"id": "C2-072",
"ch": 2,
"topic": "Network hardware",
"marks": 1,
"q": "What is the purpose of a wireless access point (WAP)?",
"code": null,
"opts": [
"To regenerate a weak signal on a long cable",
"To allow wireless devices to connect to a wired network",
"To connect a network to the internet using public IP addresses",
"To convert analogue signals to digital signals"
],
"ans": 1,
"why": "A WAP is a transceiver connected to a wired network that lets wireless devices join."
},
{
"id": "C2-073",
"ch": 2,
"topic": "Network hardware",
"marks": 1,
"q": "What is the purpose of a bridge in a network?",
"code": null,
"opts": [
"To give each device on the network a unique IP address",
"To store files that are shared across the network",
"To boost a weakened signal so it can travel further along a cable",
"To connect two network segments so that they act as a single network"
],
"ans": 3,
"why": "A bridge joins two LAN segments; a repeater only regenerates the signal."
},
{
"id": "C2-074",
"ch": 2,
"topic": "Network hardware",
"marks": 1,
"q": "What is the purpose of a repeater?",
"code": null,
"opts": [
"To regenerate a weakened signal so that it can travel further",
"To check packets for malicious content",
"To assign IP addresses automatically",
"To connect two different networks and forward packets between them"
],
"ans": 0,
"why": "Signals attenuate over distance; a repeater amplifies/regenerates them."
},
{
"id": "C2-075",
"ch": 2,
"topic": "Network hardware",
"marks": 2,
"q": "Which task is carried out by a router?",
"code": null,
"opts": [
"Converting digital signals into analogue signals for a telephone line",
"Forwarding frames between devices on the same LAN using MAC addresses",
"Regenerating signals that have been weakened over long cables",
"Forwarding packets between different networks using their IP addresses"
],
"ans": 3,
"why": "A router connects networks together (e.g. a LAN to the internet) and chooses the route for each packet."
},
{
"id": "C2-076",
"ch": 2,
"topic": "Network hardware",
"marks": 2,
"q": "Which statement describes how Ethernet uses CSMA/CD?",
"code": null,
"opts": [
"A device transmits immediately and the switch discards any data that collides",
"A device listens for a free channel; after a collision all wait a random time and resend",
"A device waits for the server to give it permission before each transmission",
"A device may only transmit when it holds a token that is passed around the network"
],
"ans": 1,
"why": "Carrier Sense Multiple Access / Collision Detection: listen first, detect collisions, back off randomly and retransmit."
},
{
"id": "C2-077",
"ch": 2,
"topic": "Network hardware",
"marks": 1,
"q": "In an Ethernet network, a collision occurs when",
"code": null,
"opts": [
"a switch runs out of memory to store packets",
"a packet reaches its destination but is corrupted by a virus",
"two devices transmit data on the same medium at the same time",
"a device sends a packet to an IP address that does not exist"
],
"ans": 2,
"why": "Simultaneous transmissions on a shared medium collide."
},
{
"id": "C2-078",
"ch": 2,
"topic": "Network hardware",
"marks": 2,
"q": "Which statement about on-demand bit streaming is correct?",
"code": null,
"opts": [
"No buffer is needed because the data is delivered at exactly the playback rate",
"The video is captured and sent as it happens so the full file never exists on a server",
"A pre-recorded file is held on a server and starts playing once part of it is buffered",
"The whole file must be downloaded in full before any playback can begin"
],
"ans": 2,
"why": "On-demand streaming plays pre-stored content; real-time streaming sends live events as they happen."
},
{
"id": "C2-079",
"ch": 2,
"topic": "Network hardware",
"marks": 2,
"q": "A user's broadband speed falls below the bit rate needed by a video stream. What is the most likely effect?",
"code": null,
"opts": [
"The video is played back at a faster speed so that it finishes sooner",
"The buffer empties faster than it is refilled, so playback pauses",
"The video is played at a higher quality than it would normally be",
"The video file is permanently deleted from the server that holds it"
],
"ans": 1,
"why": "If the data arrives slower than it is consumed, the buffer runs dry and the stream stalls."
},
{
"id": "C2-080",
"ch": 2,
"topic": "Network hardware",
"marks": 2,
"q": "Which statement about the internet and the World Wide Web (WWW) is correct?",
"code": null,
"opts": [
"The internet is the global network of networks; the WWW is a collection of web pages",
"The WWW is the hardware that is used to connect computers to the internet",
"The WWW is the global network of connected networks; the internet is a collection of web pages",
"The internet and the WWW are two different names for exactly the same thing"
],
"ans": 0,
"why": "The web is one service that runs on the internet (others include email and file transfer)."
},
{
"id": "C2-081",
"ch": 2,
"topic": "Network hardware",
"marks": 1,
"q": "Why is a modem needed to connect a computer to the Public Switched Telephone Network (PSTN)?",
"code": null,
"opts": [
"To store the data temporarily until the telephone line is free",
"To translate private IP addresses into public IP addresses",
"To convert digital signals to analogue for the telephone line and back",
"To encrypt the data so that it cannot be intercepted on the line"
],
"ans": 2,
"why": "The PSTN carries analogue signals; a modem modulates and demodulates."
},
{
"id": "C2-082",
"ch": 2,
"topic": "IP, URL and DNS",
"marks": 1,
"q": "How many bits are used for an IPv6 address?",
"code": null,
"opts": [
"256",
"64",
"32",
"128"
],
"ans": 3,
"why": "IPv4 uses 32 bits; IPv6 uses 128 bits, usually written as hexadecimal groups."
},
{
"id": "C2-083",
"ch": 2,
"topic": "IP, URL and DNS",
"marks": 2,
"q": "Why was IPv6 introduced?",
"code": null,
"opts": [
"IPv4 addresses cannot be used by devices on wireless networks",
"IPv4 addresses were running out and IPv6 provides far more",
"IPv6 removes the need for routers to forward packets between networks",
"IPv6 addresses are much shorter and so are easier to type in"
],
"ans": 1,
"why": "IPv4's 32 bits give about 4.3 billion addresses; IPv6's 128 bits give vastly more."
},
{
"id": "C2-084",
"ch": 2,
"topic": "IP, URL and DNS",
"marks": 2,
"q": "Which is a purpose of subnetting?",
"code": null,
"opts": [
"To split a network into smaller parts that are easier to manage",
"To make every one of the devices on the network a web server",
"To convert the domain names of websites into IP addresses",
"To allow devices on different networks to share the same IP address"
],
"ans": 0,
"why": "An IP address has a network part and a host part; subnetting splits a network into sub-networks."
},
{
"id": "C2-085",
"ch": 2,
"topic": "IP, URL and DNS",
"marks": 2,
"q": "Which statement about public and private IP addresses is correct?",
"code": null,
"opts": [
"Private IP addresses are required for a device to be reached from anywhere on the internet",
"A public IP address is unique on the internet but private addresses can be reused in other LANs",
"Private IP addresses are unique across the whole of the internet and cannot be reused",
"Public IP addresses can only be used by devices inside a LAN, never outside it"
],
"ans": 1,
"why": "Private addresses are not routable on the internet; hiding devices behind a router improves security."
},
{
"id": "C2-086",
"ch": 2,
"topic": "IP, URL and DNS",
"marks": 2,
"q": "Which device should be given a static IP address?",
"code": null,
"opts": [
"A laptop that connects to different networks each day",
"A visitor's smartphone that is using a café's guest Wi-Fi",
"A tablet that is only switched on occasionally at home",
"A web server that must always be reachable at one address"
],
"ans": 3,
"why": "Dynamic addresses are assigned temporarily (e.g. by DHCP); servers need a fixed address."
},
{
"id": "C2-087",
"ch": 2,
"topic": "IP, URL and DNS",
"marks": 1,
"q": "In the URL https://www.example.com/shop/index.html, which part specifies the protocol?",
"code": null,
"opts": [
"www",
"example.com",
"https",
"/shop/index.html"
],
"ans": 2,
"why": "The protocol comes before '://'; the domain name is www.example.com and the rest is the path to the file."
},
{
"id": "C2-088",
"ch": 2,
"topic": "IP, URL and DNS",
"marks": 1,
"q": "In the URL https://www.example.com/shop/index.html, which part identifies the file on the web server?",
"code": null,
"opts": [
"www.example.com",
"https",
"www",
"/shop/index.html"
],
"ans": 3,
"why": "The path (/shop/index.html) locates the page on the server."
},
{
"id": "C2-089",
"ch": 2,
"topic": "IP, URL and DNS",
"marks": 2,
"q": "A user enters a URL into a browser. What is the role of the Domain Name Service (DNS)?",
"code": null,
"opts": [
"It finds the IP address that matches the domain name in the URL",
"It encrypts the URL so that it cannot be read",
"It finds the MAC address of the user's router",
"It downloads the web page from the server and displays it"
],
"ans": 0,
"why": "A DNS server holds a table of domain names and IP addresses; if it doesn't know the name it asks another DNS server."
},
{
"id": "C2-090",
"ch": 2,
"topic": "IP, URL and DNS",
"marks": 2,
"q": "A DNS server does not hold an entry for the domain name requested by a browser. What happens next?",
"code": null,
"opts": [
"The browser displays the page using the last IP address it received",
"The web server is asked to translate its own domain name for the browser",
"The request is passed to another DNS server until the IP address is found",
"The request is discarded and the user's IP address is then blocked"
],
"ans": 2,
"why": "DNS servers form a hierarchy and forward requests that they cannot resolve."
},
{
"id": "C2-091",
"ch": 2,
"topic": "IP, URL and DNS",
"marks": 1,
"q": "Which of the following is a valid IPv4 address?",
"code": null,
"opts": [
"45.240.209.306",
"45.240.209.224",
"45.240.209",
"45.240.209.224.51"
],
"ans": 1,
"why": "IPv4 addresses have four denary numbers from 0 to 255 separated by full stops."
},
{
"id": "C2-092",
"ch": 2,
"topic": "IP, URL and DNS",
"marks": 1,
"q": "A network technician types in one address for a device. Which is a valid IPv4 address?",
"code": null,
"opts": [
"203.203.28.110",
"203.203.28",
"203.203.28.369",
"203.203.28.110.116"
],
"ans": 0,
"why": "IPv4 addresses have four denary numbers from 0 to 255 separated by full stops."
},
{
"id": "C3-093",
"ch": 3,
"topic": "Memory and storage",
"marks": 1,
"q": "Why does a computer need secondary storage as well as primary memory?",
"code": null,
"opts": [
"To store the results of calculations while the ALU is working",
"To hold the instruction that is currently being decoded",
"To give the processor faster access to data than primary memory can",
"To keep programs and data permanently, even when the power is switched off"
],
"ans": 3,
"why": "Primary memory (RAM) is volatile; secondary storage is non-volatile and has a larger capacity."
},
{
"id": "C3-094",
"ch": 3,
"topic": "Memory and storage",
"marks": 2,
"q": "Which statement correctly compares RAM and ROM?",
"code": null,
"opts": [
"RAM and ROM are both volatile, but ROM can be written to more quickly",
"RAM is non-volatile and can be read and written to; ROM is volatile and is normally only read",
"RAM is volatile and can only be read; ROM is non-volatile and can be freely written to",
"RAM is volatile and can be read and written to; ROM is non-volatile and is normally only read"
],
"ans": 3,
"why": "RAM holds the running programs and data; ROM holds fixed start-up instructions."
},
{
"id": "C3-095",
"ch": 3,
"topic": "Memory and storage",
"marks": 1,
"q": "Which of the following is normally stored in ROM?",
"code": null,
"opts": [
"The bootstrap program that starts the computer",
"The operating system processes that are currently running",
"The user's saved files",
"The document the user is currently editing"
],
"ans": 0,
"why": "ROM keeps the bootstrap/BIOS instructions that run at power-up."
},
{
"id": "C3-096",
"ch": 3,
"topic": "Memory and storage",
"marks": 2,
"q": "Which statement correctly compares SRAM and DRAM?",
"code": null,
"opts": [
"SRAM does not need refreshing and is faster but costs more per bit than DRAM",
"DRAM is non-volatile whereas SRAM loses its contents when power is lost",
"SRAM needs refreshing but costs less per bit and is slower than DRAM",
"DRAM does not need refreshing and is faster but costs more per bit than SRAM"
],
"ans": 0,
"why": "DRAM stores each bit as charge on a capacitor which leaks and needs refreshing; SRAM uses flip-flops."
},
{
"id": "C3-097",
"ch": 3,
"topic": "Memory and storage",
"marks": 2,
"q": "Which type of memory is most suitable for a processor's cache, and why?",
"code": null,
"opts": [
"EEPROM, because its contents are kept when power is off",
"SRAM, because it is faster to access than DRAM",
"DRAM, because it is cheaper per bit and can store more data",
"ROM, because its contents cannot be changed by mistake"
],
"ans": 1,
"why": "Cache must be very fast, which justifies the higher cost and lower density of SRAM."
},
{
"id": "C3-098",
"ch": 3,
"topic": "Memory and storage",
"marks": 2,
"q": "A manufacturer wants a large, low-cost main memory for a personal computer. Which memory should be used and why?",
"code": null,
"opts": [
"DRAM, because more bits can be stored per chip at lower cost",
"DRAM, because it is faster to access than SRAM",
"ROM, because it is volatile and can be written to quickly",
"SRAM, because it does not need to be refreshed and is cheaper"
],
"ans": 0,
"why": "DRAM is denser and cheaper; its slower speed and need for refreshing are acceptable for main memory."
},
{
"id": "C3-099",
"ch": 3,
"topic": "Memory and storage",
"marks": 2,
"q": "Which statement correctly describes EPROM?",
"code": null,
"opts": [
"Its contents can be changed electrically while the chip stays in the device",
"Its contents can be erased with ultraviolet light and then reprogrammed",
"It is programmed once at manufacture and can never be changed",
"It loses its contents whenever the power is switched off"
],
"ans": 1,
"why": "PROM: programmable once. EPROM: erased by UV light. EEPROM: erased electrically, in place."
},
{
"id": "C3-100",
"ch": 3,
"topic": "Memory and storage",
"marks": 1,
"q": "Which type of read-only memory can be erased and rewritten electrically without being removed from the circuit?",
"code": null,
"opts": [
"Mask ROM",
"EPROM",
"EEPROM",
"PROM"
],
"ans": 2,
"why": "EEPROM = electrically erasable programmable ROM."
},
{
"id": "C3-101",
"ch": 3,
"topic": "Memory and storage",
"marks": 2,
"q": "A computer sends a large document to a slow printer. What is the purpose of the buffer used?",
"code": null,
"opts": [
"To speed up the printer by increasing the print quality of each page",
"To store the document permanently on disk in case the printer fails",
"To hold the data temporarily so the processor can carry on with other tasks",
"To check that the document contains no errors before it is printed"
],
"ans": 2,
"why": "A buffer compensates for the difference in speed between devices."
},
{
"id": "C3-102",
"ch": 3,
"topic": "Memory and storage",
"marks": 2,
"q": "Which is a typical drawback of an embedded system?",
"code": null,
"opts": [
"It needs a keyboard, mouse and monitor in order to be used",
"It can run many different general-purpose applications",
"It always needs a connection to the network in order to work",
"Its program is fixed, so it is hard to upgrade or change"
],
"ans": 3,
"why": "An embedded system is built into a device to perform a dedicated task; its software is stored in ROM-type memory."
},
{
"id": "C3-103",
"ch": 3,
"topic": "Memory and storage",
"marks": 1,
"q": "Which is an example of an embedded system?",
"code": null,
"opts": [
"A desktop computer used for gaming",
"The controller inside a washing machine",
"A laptop running a word processor",
"A web server in a data centre"
],
"ans": 1,
"why": "Embedded systems are dedicated computer systems built into a larger device."
},
{
"id": "C3-104",
"ch": 3,
"topic": "Memory and storage",
"marks": 2,
"q": "Which statement about a solid state drive (SSD) compared with a magnetic hard disk drive is correct?",
"code": null,
"opts": [
"It stores data on spinning platters, which gives it a larger capacity for the same cost",
"It is cheaper per gigabyte than a magnetic hard disk drive",
"It has an unlimited number of write cycles and so lasts longer",
"It has no moving parts, so it gives faster access and is more resistant to physical shock"
],
"ans": 3,
"why": "Flash memory has no moving parts but is dearer per GB and has a finite number of write cycles."
},
{
"id": "C3-105",
"ch": 3,
"topic": "Memory and storage",
"marks": 2,
"q": "How are data read from a magnetic hard disk drive?",
"code": null,
"opts": [
"A read/write head detects the direction of magnetisation of areas on a platter",
"A needle detects the shape of tiny grooves cut into the surface of the disk",
"A laser detects the reflection from pits and lands on the disk surface",
"The charge stored in each of the floating-gate transistors is measured"
],
"ans": 0,
"why": "Magnetic storage uses magnetised regions; optical uses pits/lands; SSDs use charge."
},
{
"id": "C3-106",
"ch": 3,
"topic": "Memory and storage",
"marks": 1,
"q": "How does an optical disc drive read data from a CD?",
"code": null,
"opts": [
"It detects how laser light is reflected from pits and lands",
"It measures the magnetic field of tiny areas on the surface",
"It detects changes in the electrical resistance of the surface",
"It measures the charge held in tiny transistors on the disc surface"
],
"ans": 0,
"why": "A laser is reflected differently from pits and lands, which represent the binary data."
},
{
"id": "C3-107",
"ch": 3,
"topic": "Input/output devices",
"marks": 1,
"q": "What is the role of the fuser in a laser printer?",
"code": null,
"opts": [
"To draw the image on the drum using a laser",
"To heat the paper so the toner melts and sticks to it",
"To charge the drum with static electricity",
"To attract toner onto the charged parts of the drum"
],
"ans": 1,
"why": "The fuser uses heat and pressure to fix the toner to the paper."
},
{
"id": "C3-108",
"ch": 3,
"topic": "Input/output devices",
"marks": 1,
"q": "How does a 3D printer create an object?",
"code": null,
"opts": [
"By projecting a solid hologram of the object into the air",
"By cutting material away from a larger solid block of plastic",
"By depositing material layer by layer from a digital model",
"By heating toner so that it is fixed onto the surface of paper"
],
"ans": 2,
"why": "3D printing is additive manufacturing, usually using melted plastic or resin."
},
{
"id": "C3-109",
"ch": 3,
"topic": "Input/output devices",
"marks": 2,
"q": "How does a capacitive touchscreen detect where it has been touched?",
"code": null,
"opts": [
"It detects the position at which an infra-red beam is broken by a sensor on the finger",
"It detects the change in the screen's electrical field caused by the conductive finger",
"It detects the reflection of ultrasonic waves from the user's hand",
"It detects pressure that pushes two conductive layers together"
],
"ans": 1,
"why": "A resistive screen detects pressure; capacitive detects the finger's effect on the electric field."
},
{
"id": "C3-110",
"ch": 3,
"topic": "Input/output devices",
"marks": 1,
"q": "What does a microphone do?",
"code": null,
"opts": [
"It converts sound waves into electrical signals",
"It converts light into electrical signals",
"It converts digital data into analogue voltage for a monitor",
"It converts electrical signals into sound waves"
],
"ans": 0,
"why": "A microphone is an input device; a speaker performs the reverse."
},
{
"id": "C3-111",
"ch": 3,
"topic": "Input/output devices",
"marks": 2,
"q": "A virtual reality headset gives the user a view that changes as they turn their head. Which components make this possible?",
"code": null,
"opts": [
"One large flat screen and a microphone that detects speech commands",
"A printer and a scanner that capture the user's surroundings in 3D",
"Two small screens, one for each eye, and sensors that track head movement",
"A touchscreen display and a GPS receiver that tracks the user"
],
"ans": 2,
"why": "The headset displays slightly different images to each eye and uses motion sensors to update them."
},
{
"id": "C3-112",
"ch": 3,
"topic": "Monitoring and control",
"marks": 2,
"q": "Which is an example of a control system rather than a monitoring system?",
"code": null,
"opts": [
"A weather station that records the air temperature at the end of every hour",
"A hospital machine that continuously displays a patient's heart rate on a screen",
"A thermostat switches a heater on or off to keep a room at a set temperature",
"A data logger that stores the light levels measured in a greenhouse each day"
],
"ans": 2,
"why": "A monitoring system only records/displays; a control system also changes the process using actuators."
},
{
"id": "C3-113",
"ch": 3,
"topic": "Monitoring and control",
"marks": 1,
"q": "What is the role of an actuator in a control system?",
"code": null,
"opts": [
"To measure a physical quantity and then send the value to the processor",
"To convert a processor signal into physical movement, e.g. opening a valve",
"To convert the analogue readings from sensors into digital values",
"To store all of the readings that have been taken by the sensors"
],
"ans": 1,
"why": "Sensors input data; actuators carry out the physical actions."
},
{
"id": "C3-114",
"ch": 3,
"topic": "Monitoring and control",
"marks": 2,
"q": "What is meant by feedback in a control system?",
"code": null,
"opts": [
"The processor sends a copy of every sensor reading to a printer for the user",
"The actuator reports an error message to the user if it fails to move",
"The system is switched off when a sensor value is outside its range",
"The output of the process affects the sensor readings, which determine the next action taken"
],
"ans": 3,
"why": "Feedback lets the system respond to the result of its own previous actions."
},
{
"id": "C3-115",
"ch": 3,
"topic": "Monitoring and control",
"marks": 1,
"q": "Which sensor is most suitable for detecting a person entering a room?",
"code": null,
"opts": [
"Infra-red",
"Moisture",
"pH",
"Magnetic field"
],
"ans": 0,
"why": "Infra-red (motion) sensors detect heat/movement."
},
{
"id": "C3-116",
"ch": 3,
"topic": "Logic gates",
"marks": 1,
"q": "Which logic gate gives an output of 0 only when both of its inputs are 1?",
"code": null,
"opts": [
"NAND",
"XOR",
"NOR",
"AND"
],
"ans": 0,
"why": "NAND is the inverse of AND."
},
{
"id": "C3-117",
"ch": 3,
"topic": "Logic gates",
"marks": 1,
"q": "Which logic gate gives an output of 1 only when both of its inputs are 0?",
"code": null,
"opts": [
"NAND",
"NOR",
"OR",
"XOR"
],
"ans": 1,
"why": "NOR is the inverse of OR."
},
{
"id": "C3-118",
"ch": 3,
"topic": "Logic gates",
"marks": 1,
"q": "Which logic gate gives an output of 1 when its two inputs are different?",
"code": null,
"opts": [
"OR",
"NOR",
"XOR",
"AND"
],
"ans": 2,
"why": "Exclusive OR is true when exactly one input is 1."
},
{
"id": "C3-119",
"ch": 3,
"topic": "Logic gates",
"marks": 2,
"q": "A warning light X is on when sensor A is on and at least one of sensors B or C is on. Which expression represents this?",
"code": null,
"opts": [
"X = A AND B AND C",
"X = A OR (B AND C)",
"X = (A AND B) OR C",
"X = A AND (B OR C)"
],
"ans": 3,
"why": "A must be on AND (B or C) on. The bracket is essential."
},
{
"id": "C3-120",
"ch": 3,
"topic": "Logic gates",
"marks": 2,
"q": "An alarm X sounds when the door is open (D = 1) and the system is NOT switched off (S = 1 means switched off). Which expression represents this?",
"code": null,
"opts": [
"X = (NOT D) AND S",
"X = NOT (D AND S)",
"X = D OR (NOT S)",
"X = D AND (NOT S)"
],
"ans": 3,
"why": "The alarm needs the door to be open AND the system not switched off."
},
{
"id": "C3-121",
"ch": 3,
"topic": "Logic gates",
"marks": 2,
"q": "A logic circuit implements X = (A NAND B) OR (B NOR C). How many of the 8 rows of its truth table give X = 1?",
"code": null,
"opts": [
"4",
"7",
"6",
"5"
],
"ans": 2,
"why": "Complete the truth table for all 8 input combinations and count the rows where X = 1."
},
{
"id": "C3-122",
"ch": 3,
"topic": "Logic gates",
"marks": 2,
"q": "A logic circuit implements X = (A OR B) AND NOT (B AND C). How many of the 8 rows of its truth table give X = 1?",
"code": null,
"opts": [
"3",
"4",
"5",
"6"
],
"ans": 1,
"why": "Complete the truth table for all 8 input combinations and count the rows where X = 1."
},
{
"id": "C3-123",
"ch": 3,
"topic": "Logic gates",
"marks": 2,
"q": "A logic circuit implements X = (A XOR B) AND C. Which inputs give X = 1?",
"code": null,
"opts": [
"A = 1, B = 1, C = 1",
"A = 0, B = 0, C = 1",
"A = 0, B = 1, C = 1",
"A = 0, B = 1, C = 0"
],
"ans": 2,
"why": "Evaluate each bracket separately for the inputs: for A = 0, B = 1, C = 1 the expression evaluates to 1."
},
{
"id": "C3-124",
"ch": 3,
"topic": "Logic gates",
"marks": 2,
"q": "A logic circuit implements X = (A NOR B) XOR C. How many of the 8 rows of its truth table give X = 1?",
"code": null,
"opts": [
"3",
"5",
"2",
"4"
],
"ans": 3,
"why": "Complete the truth table for all 8 input combinations and count the rows where X = 1."
},
{
"id": "C3-125",
"ch": 3,
"topic": "Logic gates",
"marks": 2,
"q": "A logic circuit implements X = NOT (A AND B) AND (B OR C). Which inputs give X = 1?",
"code": null,
"opts": [
"A = 0, B = 1, C = 0",
"A = 1, B = 0, C = 0",
"A = 0, B = 0, C = 0",
"A = 1, B = 1, C = 0"
],
"ans": 0,
"why": "Evaluate each bracket separately for the inputs: for A = 0, B = 1, C = 0 the expression evaluates to 1."
},
{
"id": "C3-126",
"ch": 3,
"topic": "Logic gates",
"marks": 2,
"q": "A logic circuit implements X = (A XOR C) OR (B AND NOT A). How many of the 8 rows of its truth table give X = 1?",
"code": null,
"opts": [
"4",
"3",
"5",
"6"
],
"ans": 2,
"why": "Complete the truth table for all 8 input combinations and count the rows where X = 1."
},
{
"id": "C3-127",
"ch": 3,
"topic": "Logic gates",
"marks": 2,
"q": "A logic circuit implements X = NOT (A OR B) AND C. Which inputs give X = 1?",
"code": null,
"opts": [
"A = 0, B = 0, C = 0",
"A = 0, B = 0, C = 1",
"A = 1, B = 0, C = 1",
"A = 0, B = 1, C = 0"
],
"ans": 1,
"why": "Evaluate each bracket separately for the inputs: for A = 0, B = 0, C = 1 the expression evaluates to 1."
},
{
"id": "C3-128",
"ch": 3,
"topic": "Logic gates",
"marks": 2,
"q": "A logic circuit implements X = (A AND B) OR NOT C. How many of the 8 rows of its truth table give X = 1?",
"code": null,
"opts": [
"6",
"3",
"4",
"5"
],
"ans": 3,
"why": "Complete the truth table for all 8 input combinations and count the rows where X = 1."
},
{
"id": "C4-129",
"ch": 4,
"topic": "CPU architecture",
"marks": 2,
"q": "Which statement describes the stored program concept of the Von Neumann model?",
"code": null,
"opts": [
"Each instruction is read directly from the keyboard when it is needed",
"Instructions are held in ROM and data is held in a separate memory",
"The program is held in the CPU registers while data is held in memory",
"Program and data are held in one memory and instructions run in sequence"
],
"ans": 3,
"why": "In a Von Neumann machine both program and data are in the same memory and are fetched using the same buses."
},
{
"id": "C4-130",
"ch": 4,
"topic": "CPU architecture",
"marks": 1,
"q": "What is held in the Program Counter (PC)?",
"code": null,
"opts": [
"The address of the data being written to memory",
"The result of the last calculation carried out by the ALU",
"The instruction that is currently being decoded",
"The address of the next instruction to be fetched"
],
"ans": 3,
"why": "The PC is incremented after each fetch so that it points to the next instruction."
},
{
"id": "C4-131",
"ch": 4,
"topic": "CPU architecture",
"marks": 1,
"q": "What is held in the Memory Address Register (MAR)?",
"code": null,
"opts": [
"The address of the location about to be read from or written to",
"The instruction that is currently being decoded and executed",
"The result of the last arithmetic operation carried out by the ALU",
"The data that has just been read from memory by the processor"
],
"ans": 0,
"why": "The MAR places an address on the address bus."
},
{
"id": "C4-132",
"ch": 4,
"topic": "CPU architecture",
"marks": 1,
"q": "What is held in the Memory Data Register (MDR)?",
"code": null,
"opts": [
"The status flags set by the last comparison carried out by the ALU",
"The data or instruction just fetched from, or about to be written to, memory",
"The address of the memory location that is about to be accessed",
"The address of the next instruction that is to be fetched from memory"
],
"ans": 1,
"why": "The MDR is the buffer between the processor and the data bus."
},
{
"id": "C4-133",
"ch": 4,
"topic": "CPU architecture",
"marks": 1,
"q": "What is held in the Current Instruction Register (CIR)?",
"code": null,
"opts": [
"The base address for indexed addressing",
"The value that was most recently stored in memory",
"The address of the next instruction to be fetched",
"The instruction that is being decoded and executed"
],
"ans": 3,
"why": "After the fetch, the instruction is copied from the MDR into the CIR for decoding."
},
{
"id": "C4-134",
"ch": 4,
"topic": "CPU architecture",
"marks": 1,
"q": "What is the purpose of the accumulator (ACC)?",
"code": null,
"opts": [
"To store the flags that are set by comparisons and calculations",
"To hold data being processed and the results of the ALU's calculations",
"To hold the address of the next instruction that will be fetched",
"To count the number of instructions that have been executed so far"
],
"ans": 1,
"why": "The accumulator is the register used for the ALU's inputs/outputs."
},
{
"id": "C4-135",
"ch": 4,
"topic": "CPU architecture",
"marks": 1,
"q": "What is the purpose of the status register?",
"code": null,
"opts": [
"To hold a copy of the instruction that is being executed",
"To hold the data that is waiting to be written to memory",
"To hold flags that record the outcome of operations, such as overflow",
"To hold the address of the next instruction in the program"
],
"ans": 2,
"why": "Bits in the status register act as flags (zero, carry, overflow, etc.)."
},
{
"id": "C4-136",
"ch": 4,
"topic": "CPU architecture",
"marks": 2,
"q": "Which statement about the buses is correct?",
"code": null,
"opts": [
"The control bus carries the addresses of the memory locations used",
"The address bus is bidirectional whereas the data bus is unidirectional",
"The data bus carries only instructions and never any other data",
"The address bus is unidirectional whereas the data bus is bidirectional"
],
"ans": 3,
"why": "Addresses are only sent by the CPU; data and instructions travel both ways; control signals travel on the control bus."
},
{
"id": "C4-137",
"ch": 4,
"topic": "CPU architecture",
"marks": 1,
"q": "What is the function of the control unit (CU)?",
"code": null,
"opts": [
"To store programs and data permanently when power is off",
"To decode instructions and signal the other components what to do",
"To carry out all of the arithmetic and logic operations",
"To convert the digital data into analogue data for output"
],
"ans": 1,
"why": "The ALU does the calculations; the CU directs the operation."
},
{
"id": "C4-138",
"ch": 4,
"topic": "CPU architecture",
"marks": 2,
"q": "A computer's data bus is widened from 32 bits to 64 bits. What is the main effect?",
"code": null,
"opts": [
"Instructions are executed in a different order from before",
"The number of memory locations that can be addressed is increased",
"More bits can be moved in each clock cycle, which can improve performance",
"The clock speed of the processor is doubled automatically"
],
"ans": 2,
"why": "Bus width affects how much data can be transferred at once. Address bus width determines the addressable memory."
},
{
"id": "C4-139",
"ch": 4,
"topic": "CPU architecture",
"marks": 2,
"q": "A processor with two cores is replaced by one with four cores running at the same clock speed. Which statement is correct?",
"code": null,
"opts": [
"Performance may improve, but only if the software can share the work",
"Performance is always doubled exactly, whatever software is being run",
"Performance is reduced because the cores must share the same cache",
"Performance is unchanged because the clock speed is unchanged"
],
"ans": 0,
"why": "More cores allow parallel execution, but the gain depends on how well the software is written."
},
{
"id": "C4-140",
"ch": 4,
"topic": "CPU architecture",
"marks": 2,
"q": "Why does adding cache memory generally improve performance?",
"code": null,
"opts": [
"More programs can be kept permanently inside the computer without secondary storage",
"Frequently used data is held in fast memory near the processor, so fetching is quicker",
"The width of the address bus is increased to give more memory locations",
"The processor's clock speed is automatically increased whenever the cache is full"
],
"ans": 1,
"why": "Cache is small, very fast memory (SRAM)."
},
{
"id": "C4-141",
"ch": 4,
"topic": "CPU architecture",
"marks": 1,
"q": "Which port can carry a digital video and audio signal to a monitor or television in a single cable?",
"code": null,
"opts": [
"VGA",
"Serial",
"PS/2",
"HDMI"
],
"ans": 3,
"why": "VGA carries an analogue video signal only; HDMI carries digital video and audio."
},
{
"id": "C4-142",
"ch": 4,
"topic": "CPU architecture",
"marks": 2,
"q": "A computer's clock speed is increased. What is the most direct effect?",
"code": null,
"opts": [
"More memory locations can be addressed by the processor",
"More fetch-execute cycles can be carried out each second",
"The width of the data bus is increased to carry more bits",
"Each instruction is made shorter so it is fetched faster"
],
"ans": 1,
"why": "Clock speed is the number of cycles per second; more cycles generally mean more instructions executed."
},
{
"id": "C4-143",
"ch": 4,
"topic": "Fetch-execute and interrupts",
"marks": 1,
"q": "Which register transfer correctly copies the address of the next instruction into the MAR at the start of the fetch stage?",
"code": null,
"opts": [
"MAR ← [PC]",
"PC ← [MAR]",
"CIR ← [PC]",
"MDR ← [PC]"
],
"ans": 0,
"why": "The PC holds the address of the next instruction; it is copied to the MAR so memory can be accessed."
},
{
"id": "C4-144",
"ch": 4,
"topic": "Fetch-execute and interrupts",
"marks": 1,
"q": "Which register transfer places the fetched instruction in the CIR?",
"code": null,
"opts": [
"CIR ← [MAR]",
"CIR ← [MDR]",
"CIR ← [PC]",
"MDR ← [CIR]"
],
"ans": 1,
"why": "The instruction arrives in the MDR from memory and is then copied to the CIR."
},
{
"id": "C4-145",
"ch": 4,
"topic": "Fetch-execute and interrupts",
"marks": 2,
"q": "During the fetch-execute cycle, what happens to the PC after the address of the next instruction has been copied to the MAR?",
"code": null,
"opts": [
"It is cleared to zero ready for the next program",
"It is incremented to point at the next instruction",
"It is replaced by the instruction held in the CIR",
"It is copied into the accumulator for the ALU to use"
],
"ans": 1,
"why": "PC ← [PC] + 1 happens during the fetch stage (unless a jump later changes it)."
},
{
"id": "C4-146",
"ch": 4,
"topic": "Fetch-execute and interrupts",
"marks": 2,
"q": "When does a processor normally check whether an interrupt has occurred?",
"code": null,
"opts": [
"Only at the very start of the program",
"Only when the user restarts the computer",
"At the end of each fetch-execute cycle",
"In the middle of executing every instruction"
],
"ans": 2,
"why": "The processor completes the current instruction cycle, then checks for interrupts."
},
{
"id": "C4-147",
"ch": 4,
"topic": "Fetch-execute and interrupts",
"marks": 2,
"q": "An interrupt with a higher priority than the current task is detected. What happens?",
"code": null,
"opts": [
"Register contents are saved, the ISR runs, then the saved values are restored",
"The interrupt is ignored until the current program has finished running",
"The current program is deleted from memory and the computer restarts",
"The interrupt service routine is run immediately without saving any registers"
],
"ans": 0,
"why": "The processor saves the state, executes the ISR, restores the state and resumes the interrupted program."
},
{
"id": "C4-148",
"ch": 4,
"topic": "Fetch-execute and interrupts",
"marks": 1,
"q": "Which is a possible cause of an interrupt?",
"code": null,
"opts": [
"The ALU completes an addition",
"The PC is incremented",
"The MAR is loaded with an address",
"A user presses a key on the keyboard"
],
"ans": 3,
"why": "Interrupts come from hardware events (key press, printer needs attention), software (error, division by zero) or timers."
},
{
"id": "C4-149",
"ch": 4,
"topic": "Assembly language",
"marks": 2,
"q": "What is carried out in the first pass of a two-pass assembler?",
"code": null,
"opts": [
"The machine code is executed once to check that it works",
"The programmer is asked to enter the missing addresses",
"A symbol table is built that links each label to its address",
"The high-level program is converted into assembly code"
],
"ans": 2,
"why": "Pass 1 builds the symbol table; pass 2 translates the instructions to machine code using it."
},
{
"id": "C4-150",
"ch": 4,
"topic": "Assembly language",
"marks": 2,
"q": "What is carried out in the second pass of a two-pass assembler?",
"code": null,
"opts": [
"The machine code is loaded into the CIR and then executed at once",
"Labels are found and entered into the symbol table with addresses",
"Instructions are translated to machine code using the symbol table",
"The source program is compressed in order to save memory space"
],
"ans": 2,
"why": "In the second pass every label is replaced by its address and the machine code is produced."
},
{
"id": "C4-151",
"ch": 4,
"topic": "Assembly language",
"marks": 1,
"q": "A machine code instruction is made up of",
"code": null,
"opts": [
"a label and a comment",
"an address and a buffer",
"a header and a footer",
"an opcode and an operand"
],
"ans": 3,
"why": "The opcode specifies the operation; the operand holds the data or address."
},
{
"id": "C4-152",
"ch": 4,
"topic": "Assembly language",
"marks": 2,
"q": "Which statement describes indirect addressing?",
"code": null,
"opts": [
"The operand is the data to be used",
"The address is found by adding an offset to the address of the current instruction",
"The address is found by adding the operand to the value in the index register",
"The operand is an address that holds the address of the data to be used"
],
"ans": 3,
"why": "In LDI, the contents of the given address are used as the address of the actual data."
},
{
"id": "C4-153",
"ch": 4,
"topic": "Assembly language",
"marks": 2,
"q": "Which statement describes indexed addressing?",
"code": null,
"opts": [
"The address used is the operand plus the contents of the index register",
"The address used is found by multiplying the operand by the accumulator",
"The operand is the data that is to be used directly by the instruction",
"The operand is an address that itself holds the address of the data"
],
"ans": 0,
"why": "LDX uses address = operand + IX, which is useful for processing arrays."
},
{
"id": "C4-154",
"ch": 4,
"topic": "Assembly language",
"marks": 2,
"q": "Which statement describes relative addressing?",
"code": null,
"opts": [
"The address used is the operand plus the contents of the index register",
"The address is found by adding an offset to the current instruction's address",
"The address to be used is always held in a register called the PC",
"The operand is the data value that is to be used immediately by the CPU"
],
"ans": 1,
"why": "Relative addressing is useful for jumps, because code stays valid if it is loaded elsewhere."
},
{
"id": "C4-155",
"ch": 4,
"topic": "Assembly language",
"marks": 1,
"q": "Which instruction loads the number 25 into the accumulator?",
"code": null,
"opts": [
"LDD 25",
"LDR #25",
"LDI 25",
"LDM #25"
],
"ans": 3,
"why": "LDM is immediate addressing. LDD uses the contents of address 25; LDR loads IX."
},
{
"id": "C4-156",
"ch": 4,
"topic": "Bit manipulation",
"marks": 2,
"q": "Which instruction sets the two most significant bits of the accumulator to 1 and leaves all other bits unchanged?",
"code": null,
"opts": [
"XOR B11000000",
"OR B00111111",
"OR B11000000",
"AND B11000000"
],
"ans": 2,
"why": "OR with 1 sets a bit; OR with 0 leaves it unchanged. XOR would toggle the bits."
},
{
"id": "C4-157",
"ch": 4,
"topic": "Bit manipulation",
"marks": 2,
"q": "Which instruction sets the four least significant bits of the accumulator to 0 and leaves the other bits unchanged?",
"code": null,
"opts": [
"AND B11110000",
"AND B00001111",
"XOR B00001111",
"OR B11110000"
],
"ans": 0,
"why": "AND with 0 clears a bit; AND with 1 leaves it unchanged."
},
{
"id": "C4-158",
"ch": 4,
"topic": "Bit manipulation",
"marks": 2,
"q": "Which instruction toggles (inverts) only the most significant bit of the accumulator?",
"code": null,
"opts": [
"OR B10000000",
"XOR B10000000",
"XOR B01111111",
"AND B10000000"
],
"ans": 1,
"why": "XOR with 1 inverts a bit; XOR with 0 leaves it unchanged."
},
{
"id": "C4-159",
"ch": 4,
"topic": "Bit manipulation",
"marks": 2,
"q": "A program uses AND B00000100 on the accumulator and then compares the result with zero to test a sensor bit. What does it test?",
"code": null,
"opts": [
"Whether bit 2 has been cleared",
"Whether bit 2 (counting from 0 on the right) is a 1",
"Whether bit 4 is a 1",
"Whether all of the bits except bit 2 are 0 after the AND"
],
"ans": 1,
"why": "A bit mask isolates one bit; a non-zero result means that bit was 1."
},
{
"id": "C4-160",
"ch": 4,
"topic": "CPU architecture",
"marks": 1,
"q": "A processor has an address bus with 16 lines. What is the maximum number of memory locations it can address?",
"code": null,
"opts": [
"32,768",
"32",
"65,536",
"131,072"
],
"ans": 2,
"why": "2^16 = 65,536."
},
{
"id": "C4-161",
"ch": 4,
"topic": "CPU architecture",
"marks": 1,
"q": "A processor has an address bus with 24 lines. What is the maximum number of memory locations it can address?",
"code": null,
"opts": [
"16,777,216",
"48",
"33,554,432",
"8,388,608"
],
"ans": 0,
"why": "2^24 = 16,777,216."
},
{
"id": "C4-162",
"ch": 4,
"topic": "Bit manipulation",
"marks": 2,
"q": "The accumulator contains 01111010. The instruction LSL #1 is executed. What does the accumulator now contain?",
"code": null,
"opts": [
"10110100",
"11110100",
"11101000",
"00111101"
],
"ans": 1,
"why": "A logical shift moves bits 1 place(s) left; zeros enter at the other end and bits shifted out are lost."
},
{
"id": "C4-163",
"ch": 4,
"topic": "Bit manipulation",
"marks": 2,
"q": "The accumulator contains 11001100. The instruction LSR #3 is executed. What does the accumulator now contain?",
"code": null,
"opts": [
"00110011",
"01100000",
"00001100",
"00011001"
],
"ans": 3,
"why": "A logical shift moves bits 3 place(s) right; zeros enter at the other end and bits shifted out are lost."
},
{
"id": "C4-164",
"ch": 4,
"topic": "Bit manipulation",
"marks": 2,
"q": "The accumulator contains 01010010. The instruction LSL #3 is executed. What does the accumulator now contain?",
"code": null,
"opts": [
"10010000",
"00001010",
"10010010",
"01001000"
],
"ans": 0,
"why": "A logical shift moves bits 3 place(s) left; zeros enter at the other end and bits shifted out are lost."
},
{
"id": "C4-165",
"ch": 4,
"topic": "Bit manipulation",
"marks": 2,
"q": "The accumulator contains 10100110. The instruction LSR #3 is executed. What does the accumulator now contain?",
"code": null,
"opts": [
"11010100",
"00101001",
"00110000",
"00010100"
],
"ans": 3,
"why": "A logical shift moves bits 3 place(s) right; zeros enter at the other end and bits shifted out are lost."
},
{
"id": "C4-166",
"ch": 4,
"topic": "Bit manipulation",
"marks": 2,
"q": "The accumulator contains 10011011. The instruction AND B01100110 is executed. What does the accumulator now contain?",
"code": null,
"opts": [
"11111111",
"11111101",
"00000010",
"01100100"
],
"ans": 2,
"why": "Apply AND to each pair of bits: 10011011 AND 01100110 = 00000010."
},
{
"id": "C4-167",
"ch": 4,
"topic": "Bit manipulation",
"marks": 2,
"q": "The accumulator contains 01101000. The instruction OR B00001111 is executed. What does the accumulator now contain?",
"code": null,
"opts": [
"01101111",
"01100111",
"10010111",
"00001000"
],
"ans": 0,
"why": "Apply OR to each pair of bits: 01101000 OR 00001111 = 01101111."
},
{
"id": "C4-168",
"ch": 4,
"topic": "Bit manipulation",
"marks": 2,
"q": "The accumulator contains 11000101. The instruction XOR B00111100 is executed. What does the accumulator now contain?",
"code": null,
"opts": [
"00000100",
"11111101",
"11111001",
"00111010"
],
"ans": 2,
"why": "Apply XOR to each pair of bits: 11000101 XOR 00111100 = 11111001."
},
{
"id": "C4-169",
"ch": 4,
"topic": "Bit manipulation",
"marks": 2,
"q": "The accumulator contains 01110001. The instruction AND B01100110 is executed. What does the accumulator now contain?",
"code": null,
"opts": [
"10001110",
"01110111",
"01100000",
"00010111"
],
"ans": 2,
"why": "Apply AND to each pair of bits: 01110001 AND 01100110 = 01100000."
},
{
"id": "C4-170",
"ch": 4,
"topic": "Assembly language",
"marks": 2,
"q": "What is stored in location 305 after this program is run?",
"code": "Memory (address: contents)\n300: 6\n301: 51\n302: 38\n303: 25\n304: 27\n305: 47\n\nProgram\nLDD 302\nADD 301\nSTO 305",
"opts": [
"603",
"38",
"-13",
"89"
],
"ans": 3,
"why": "LDD loads the contents of the first address, ADD adds the contents of the second, STO stores the sum. Result: 89."
},
{
"id": "C4-171",
"ch": 4,
"topic": "Assembly language",
"marks": 2,
"q": "What number is in the accumulator when OUT is reached?",
"code": "Memory (address: contents)\n300: 303\n301: 21\n302: 21\n303: 37\n304: 24\n305: 17\n\nProgram\nLDI 300\nADD #10\nOUT",
"opts": [
"303",
"47",
"37",
"340"
],
"ans": 1,
"why": "LDI uses the contents of the given address as the address of the data (a pointer). Result: 47."
},
{
"id": "C4-172",
"ch": 4,
"topic": "Assembly language",
"marks": 2,
"q": "What number is in the accumulator after the program has run?",
"code": "Memory (address: contents)\n300: 9\n301: 34\n302: 5\n303: 35\n304: 32\n305: 12\n\nProgram\nLDR #1\nLDX 300\nADD #1",
"opts": [
"35",
"302",
"34",
"10"
],
"ans": 0,
"why": "LDX uses address = operand + IX, where IX was set by LDR. Result: 35."
},
{
"id": "C4-173",
"ch": 4,
"topic": "Assembly language",
"marks": 2,
"q": "What is stored in location 305 after this program is run?",
"code": "Memory (address: contents)\n300: 47\n301: 48\n302: 22\n303: 40\n304: 23\n305: 41\n\nProgram\nLDD 303\nADD 302\nSTO 305",
"opts": [
"18",
"605",
"62",
"40"
],
"ans": 2,
"why": "LDD loads the contents of the first address, ADD adds the contents of the second, STO stores the sum. Result: 62."
},
{
"id": "C4-174",
"ch": 4,
"topic": "Assembly language",
"marks": 2,
"q": "What number is in the accumulator when OUT is reached?",
"code": "Memory (address: contents)\n300: 303\n301: 10\n302: 44\n303: 40\n304: 10\n305: 21\n\nProgram\nLDI 300\nADD #10\nOUT",
"opts": [
"50",
"303",
"313",
"40"
],
"ans": 0,
"why": "LDI uses the contents of the given address as the address of the data (a pointer). Result: 50."
},
{
"id": "C4-175",
"ch": 4,
"topic": "Assembly language",
"marks": 2,
"q": "What number is in the accumulator after the program has run?",
"code": "Memory (address: contents)\n300: 12\n301: 31\n302: 57\n303: 13\n304: 19\n305: 15\n\nProgram\nLDR #4\nLDX 300\nADD #1",
"opts": [
"13",
"16",
"20",
"305"
],
"ans": 2,
"why": "LDX uses address = operand + IX, where IX was set by LDR. Result: 20."
},
{
"id": "C4-176",
"ch": 4,
"topic": "Assembly language",
"marks": 2,
"q": "How many times is the instruction ADD #2 executed?",
"code": "      LDM #0\nloop: ADD #2\n      CMP #8\n      JPN loop\n      END",
"opts": [
"5",
"4",
"8",
"3"
],
"ans": 1,
"why": "ACC goes 2, 4, ... 8. JPN jumps back while ACC is not equal to 8, so ADD #2 runs 4 times."
},
{
"id": "C4-177",
"ch": 4,
"topic": "Assembly language",
"marks": 2,
"q": "How many times is the instruction ADD #2 executed?",
"code": "      LDM #0\nloop: ADD #2\n      CMP #12\n      JPN loop\n      END",
"opts": [
"7",
"12",
"6",
"5"
],
"ans": 2,
"why": "ACC goes 2, 4, ... 12. JPN jumps back while ACC is not equal to 12, so ADD #2 runs 6 times."
},
{
"id": "C4-178",
"ch": 4,
"topic": "Assembly language",
"marks": 2,
"q": "What is the value in the accumulator when OUT is executed?",
"code": "      LDM #0\nloop: ADD #2\n      CMP #6\n      JPN loop\n      OUT\n      END",
"opts": [
"6",
"4",
"8",
"3"
],
"ans": 0,
"why": "The loop stops when ACC equals 6."
},
{
"id": "C4-179",
"ch": 4,
"topic": "Assembly language",
"marks": 2,
"q": "What is the value in the accumulator when OUT is executed?",
"code": "      LDM #0\nloop: ADD #2\n      CMP #10\n      JPN loop\n      OUT\n      END",
"opts": [
"10",
"5",
"8",
"12"
],
"ans": 0,
"why": "The loop stops when ACC equals 10."
},
{
"id": "C5-180",
"ch": 5,
"topic": "Operating systems",
"marks": 2,
"q": "Why does a general-purpose computer need an operating system?",
"code": null,
"opts": [
"To manage the hardware and provide a platform for application software",
"To prevent the computer from ever needing to be restarted again",
"To translate high-level programs into machine code before they run",
"To provide the processor with a copy of every file on the disk"
],
"ans": 0,
"why": "The OS hides the complexity of the hardware and manages resources for applications and users."
},
{
"id": "C5-181",
"ch": 5,
"topic": "Operating systems",
"marks": 2,
"q": "Which task is carried out by the memory management part of an operating system?",
"code": null,
"opts": [
"Creating folders and controlling the names that are given to files",
"Deciding which process will use the processor next, and for how long",
"Allocating memory to programs and stopping one overwriting another's memory",
"Creating user accounts and controlling which files each user can open"
],
"ans": 2,
"why": "Memory management allocates/frees memory and protects each process's memory area."
},
{
"id": "C5-182",
"ch": 5,
"topic": "Operating systems",
"marks": 2,
"q": "Which task is carried out by the file management part of an operating system?",
"code": null,
"opts": [
"Sharing out processor time between all of the running programs",
"Installing the correct drivers for any newly connected devices",
"Providing a directory structure and controlling how files are named and moved",
"Allocating blocks of memory to each of the programs that are running"
],
"ans": 2,
"why": "File management provides the means to create, name, organise, open and delete files."
},
{
"id": "C5-183",
"ch": 5,
"topic": "Operating systems",
"marks": 2,
"q": "Which task is part of the security management carried out by an operating system?",
"code": null,
"opts": [
"Rearranging file fragments on disk so that they are stored together",
"Setting up user accounts and controlling each user's access rights to files",
"Allocating memory to each of the programs that are currently running",
"Translating assembly language programs into machine code for the CPU"
],
"ans": 1,
"why": "Security management includes accounts, passwords, access rights and often backup and firewall support."
},
{
"id": "C5-184",
"ch": 5,
"topic": "Operating systems",
"marks": 2,
"q": "Which task is part of the hardware (device) management carried out by an operating system?",
"code": null,
"opts": [
"Providing the user with an editor with context-sensitive prompts",
"Compressing files that are not often used to save space on the disk",
"Using drivers to communicate with peripherals and handle their interrupts",
"Checking every file on the disk for signatures of known malware"
],
"ans": 2,
"why": "The OS uses drivers to control hardware and to manage input/output."
},
{
"id": "C5-185",
"ch": 5,
"topic": "Operating systems",
"marks": 2,
"q": "Which task is part of the process management carried out by an operating system?",
"code": null,
"opts": [
"Converting a high-level program into a machine code program",
"Formatting a disk so that it can store files",
"Giving each file a unique name in a folder",
"Scheduling which program uses the processor at any one time"
],
"ans": 3,
"why": "Process management allows multi-tasking by sharing processor time between processes."
},
{
"id": "C5-186",
"ch": 5,
"topic": "Operating systems",
"marks": 1,
"q": "What is the purpose of a device driver?",
"code": null,
"opts": [
"To let the operating system communicate with a particular hardware device",
"To protect the computer from malware that arrives over the internet",
"To translate a program written in a high-level language into machine code",
"To store the user's files on a disk so that they can be found again"
],
"ans": 0,
"why": "Each device needs a driver that understands how to control it."
},
{
"id": "C5-187",
"ch": 5,
"topic": "Utility software and libraries",
"marks": 1,
"q": "What is the purpose of a disk formatter?",
"code": null,
"opts": [
"To scan every file stored on a disk for any malicious code",
"To make a copy of files in case the originals are lost",
"To rearrange fragments of files so that they are stored together",
"To set up the tracks, sectors and file system on a disk"
],
"ans": 3,
"why": "A new or erased disk must be formatted before the OS can store files on it."
},
{
"id": "C5-188",
"ch": 5,
"topic": "Utility software and libraries",
"marks": 2,
"q": "What is the purpose of defragmentation software, and which storage device benefits most?",
"code": null,
"opts": [
"It splits files into smaller parts, which speeds up access on a solid state drive",
"It removes files that have not been used for a year, which frees up RAM",
"It stores the parts of each file together, which speeds up access on a magnetic hard disk",
"It scans for viruses on a magnetic hard disk"
],
"ans": 2,
"why": "Fragmented files cause extra head movement on magnetic disks; SSDs have no moving parts so gain little."
},
{
"id": "C5-189",
"ch": 5,
"topic": "Utility software and libraries",
"marks": 1,
"q": "What does a virus checker do?",
"code": null,
"opts": [
"It scans files for malicious code and quarantines or removes it",
"It controls which users are allowed to access which of the files",
"It makes a copy of all of the files stored on the computer",
"It reduces the size of files so they can be sent more quickly"
],
"ans": 0,
"why": "Virus checkers compare files with known malware patterns and monitor for suspicious behaviour."
},
{
"id": "C5-190",
"ch": 5,
"topic": "Utility software and libraries",
"marks": 1,
"q": "What is the purpose of back-up software?",
"code": null,
"opts": [
"To scan the files on a disk for any malicious code before use",
"To rearrange files on a disk drive so that they are stored together",
"To format a new disk so that it can be used to store files",
"To copy files so they can be restored if the originals are lost or damaged"
],
"ans": 3,
"why": "Backups protect against hardware failure, accidental deletion or malware."
},
{
"id": "C5-191",
"ch": 5,
"topic": "Utility software and libraries",
"marks": 1,
"q": "A student wants to send a large set of files by email. Which utility software would reduce the size of the files?",
"code": null,
"opts": [
"Disk formatter",
"Back-up software",
"Defragmentation software",
"File compression software"
],
"ans": 3,
"why": "Compression utilities reduce file size (e.g. as zip files)."
},
{
"id": "C5-192",
"ch": 5,
"topic": "Utility software and libraries",
"marks": 1,
"q": "What is the purpose of disk contents analysis software?",
"code": null,
"opts": [
"To repair files that have been infected by a virus",
"To show how the space on a disk is being used",
"To give each file a unique name",
"To translate files into machine code"
],
"ans": 1,
"why": "It reports file/folder sizes and free space; disk repair software fixes errors on the disk."
},
{
"id": "C5-193",
"ch": 5,
"topic": "Utility software and libraries",
"marks": 2,
"q": "Which is a benefit to a programmer of using library routines when developing software?",
"code": null,
"opts": [
"The program file will always be smaller than the same program written without libraries",
"The program will run faster than any program written without libraries",
"The program does not need to be translated into machine code",
"Tested code already exists, so development time is reduced and fewer errors are introduced"
],
"ans": 3,
"why": "Libraries provide ready-written, tested routines for common tasks."
},
{
"id": "C5-194",
"ch": 5,
"topic": "Utility software and libraries",
"marks": 2,
"q": "Which statement about Dynamic Link Library (DLL) files is correct?",
"code": null,
"opts": [
"A DLL is loaded into memory when needed and can be shared by several programs",
"A DLL is copied into every program that uses it when the program is compiled",
"A DLL can only ever be used by the one program that created it",
"A DLL must be re-compiled each time a program that uses it is run again"
],
"ans": 0,
"why": "Sharing a DLL reduces duplication; updating it improves every program that uses it without recompiling them."
},
{
"id": "C5-195",
"ch": 5,
"topic": "Utility software and libraries",
"marks": 2,
"q": "A DLL file used by several programs is updated to fix an error. What is a benefit of this?",
"code": null,
"opts": [
"Every program that uses the DLL must be recompiled before it can run",
"Every program using the DLL gets the fix without being recompiled",
"The DLL is automatically copied into every program's source code",
"The size of every program that uses the DLL becomes much larger"
],
"ans": 1,
"why": "Because programs link to the DLL at run time, one fix is shared by all of them."
},
{
"id": "C5-196",
"ch": 5,
"topic": "Language translators",
"marks": 1,
"q": "What is the purpose of an assembler?",
"code": null,
"opts": [
"To translate an assembly language program into machine code",
"To translate a high-level language program into assembly language",
"To execute a high-level language program one line at a time",
"To organise the files stored on a disk"
],
"ans": 0,
"why": "Assembly language has a (mostly) one-to-one relationship with machine code."
},
{
"id": "C5-197",
"ch": 5,
"topic": "Language translators",
"marks": 2,
"q": "Which statement about a compiler is correct?",
"code": null,
"opts": [
"It translates assembly language programs into machine code for the CPU",
"It translates the whole program into machine code before the program runs",
"It translates the program and then executes it one line at a time",
"It must be present on the user's computer every time the program is run"
],
"ans": 1,
"why": "The compiled object code can run without the compiler, and the source need not be given to users."
},
{
"id": "C5-198",
"ch": 5,
"topic": "Language translators",
"marks": 2,
"q": "A company wants to sell its software without giving customers the source code. Which type of translator should it use and why?",
"code": null,
"opts": [
"An interpreter, because it makes the program run faster",
"An assembler, because it translates high-level language into machine code",
"A compiler, because the customers receive only the machine code",
"An interpreter, because the source code is hidden when it runs"
],
"ans": 2,
"why": "Compiled programs are distributed as executables; interpreted programs need the source code."
},
{
"id": "C5-199",
"ch": 5,
"topic": "Language translators",
"marks": 2,
"q": "Which is an advantage of using an interpreter while a program is being developed?",
"code": null,
"opts": [
"The whole program is translated into machine code before the first line is executed",
"The program can be tested straight away and an error is reported where it occurs",
"The program will run faster than the same program after it has been compiled",
"The program can be sent to customers without giving away its source code"
],
"ans": 1,
"why": "Interpreters translate and run one statement at a time, which helps when testing and debugging."
},
{
"id": "C5-200",
"ch": 5,
"topic": "Language translators",
"marks": 2,
"q": "Which is a drawback of an interpreter compared with a compiler?",
"code": null,
"opts": [
"The program usually runs more slowly and the interpreter must be present each time it is run",
"The program cannot be used until all of the syntax errors have been fixed",
"The translated program cannot be run on a different computer",
"The whole program must be translated again after every small change before testing can begin"
],
"ans": 0,
"why": "Statements are translated each time they are executed."
},
{
"id": "C5-201",
"ch": 5,
"topic": "Language translators",
"marks": 2,
"q": "Why is Java described as being partially compiled and partially interpreted?",
"code": null,
"opts": [
"The source code is interpreted to produce object code, which is then compiled",
"Half of the program is written in assembly language and half in Java",
"The source code is compiled to intermediate code, which is then interpreted by a virtual machine",
"The compiler translates the first half of the program and the interpreter the second half"
],
"ans": 2,
"why": "Java bytecode is portable across systems, each running its own virtual machine."
},
{
"id": "C5-202",
"ch": 5,
"topic": "IDEs",
"marks": 1,
"q": "Which IDE feature allows a programmer to run a program one statement at a time while checking the values of variables?",
"code": null,
"opts": [
"Context-sensitive prompts",
"Single stepping",
"Collapsing code blocks",
"Pretty-printing"
],
"ans": 1,
"why": "Single stepping is a debugging feature, often used with a variable (watch) window."
},
{
"id": "C5-203",
"ch": 5,
"topic": "IDEs",
"marks": 1,
"q": "Which IDE feature stops a program at a chosen line so that the programmer can inspect the values of variables?",
"code": null,
"opts": [
"A syntax check",
"A code prompt",
"A breakpoint",
"A prettyprint option"
],
"ans": 2,
"why": "A breakpoint pauses execution at a selected statement."
},
{
"id": "C5-204",
"ch": 5,
"topic": "IDEs",
"marks": 1,
"q": "An IDE highlights a mistake in a statement while the programmer is typing it. Which feature is this?",
"code": null,
"opts": [
"Single stepping",
"A report window",
"Pretty-printing",
"Dynamic syntax checking"
],
"ans": 3,
"why": "Dynamic syntax checks provide initial error detection as code is typed."
},
{
"id": "C5-205",
"ch": 5,
"topic": "IDEs",
"marks": 2,
"q": "An IDE automatically indents code and colours keywords differently from variable names. Which purpose does this serve?",
"code": null,
"opts": [
"It reduces the number of statements that are executed when it runs",
"It improves the presentation of the code so it is easier to read",
"It checks that the program always produces the correct output when run",
"It translates the code into machine code that can be executed"
],
"ans": 1,
"why": "Pretty-printing is a presentation feature; it does not change how the program runs."
},
{
"id": "C5-206",
"ch": 5,
"topic": "IDEs",
"marks": 2,
"q": "Which IDE feature offers a list of valid commands or variable names while the programmer is typing?",
"code": null,
"opts": [
"Context-sensitive prompts",
"A variable watch window",
"A breakpoint",
"Single stepping"
],
"ans": 0,
"why": "Context-sensitive prompts help with coding by suggesting valid completions."
}
];
