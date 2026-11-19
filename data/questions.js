window.QBANK = [
{
"id": "C1-001",
"ch": 1,
"topic": "Data representation",
"marks": 1,
"q": "How many bytes are there in one kibibyte (KiB)?",
"code": null,
"opts": [
"1 048 576",
"1024",
"8192",
"1000"
],
"ans": 1,
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
"1 MiB is 2^20 bytes whereas 1 MB is 10^6 bytes",
"1 MiB is 2^20 bits whereas 1 MB is 10^6 bits",
"1 MiB is 2^10 bytes whereas 1 MB is 10^3 bytes",
"1 MiB is 10^6 bytes whereas 1 MB is 2^20 bytes"
],
"ans": 0,
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
"Encrypting a message before it is sent over a network",
"Showing each digit of a number on a seven-segment display",
"Compressing a long text file to save storage space",
"Storing the pixels of a photograph in a bitmap file"
],
"ans": 1,
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
"Hexadecimal removes the need to convert the values to binary at all",
"Each hex digit stands for 4 bits, so addresses are shorter and easier to read",
"Hexadecimal numbers take up less space when stored in the computer's memory"
],
"ans": 2,
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
"Unicode can represent characters from many different languages",
"Unicode stores each character in 7 bits, the same as ASCII",
"Unicode uses fewer bits per character, so text files are smaller",
"Unicode is the only character set that includes lowercase letters"
],
"ans": 0,
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
"stored in a different number system from the operands",
"negative when a positive result was expected",
"too large to be represented in the number of bits available",
"rounded because it has too many decimal places"
],
"ans": 2,
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
"Subtraction can use addition and zero has a single representation",
"It can store larger positive numbers using the same number of bits",
"It means overflow cannot occur when two negative numbers are added"
],
"ans": 1,
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
"The number of pixels along the width of the image",
"The number of bytes in the file header",
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
"The number of colours that appear in the image",
"The number of bits used for each colour",
"The physical size of the screen displaying the image",
"The number of pixels the image contains (width × height)"
],
"ans": 3,
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
"The image dimensions and the colour depth",
"The drawing list of objects in the image",
"The date on which the image was last viewed",
"The colour of every pixel in the image"
],
"ans": 0,
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
"A sampled amplitude value taken at regular time intervals",
"The colour value of each individual pixel inside the object",
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
"Vector graphic, because it scales to any size without loss of quality",
"Bitmap, because each pixel can be enlarged to fill the larger area",
"Bitmap, because it stores a list of the shapes in the logo",
"Vector graphic, because it stores a colour for every pixel"
],
"ans": 0,
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
"Bitmap, because each pixel can be a slightly different colour",
"Vector graphic, because it gives a smaller file for detailed images",
"Bitmap, because it is stored as a list of drawing objects"
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
"The recording is a closer approximation of the original sound and the file size decreases",
"The range of amplitudes that can be stored increases but the file size stays the same",
"The sound is stored with fewer samples so the file size decreases",
"The recording is a closer approximation of the original sound and the file size increases"
],
"ans": 3,
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
"Samples are taken less often and the file becomes smaller",
"Each sampled amplitude is stored more accurately and the file becomes larger",
"Each sampled amplitude is stored less accurately and the file becomes smaller",
"The highest frequency that can be captured is reduced but file size is unchanged"
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
"The file size decreases and the image has fewer pixels",
"The file size decreases and fewer different colours can be shown",
"The file size stays the same but the image becomes lower quality",
"The file size increases and more colours can be shown"
],
"ans": 1,
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
"Lossy at the highest quality setting",
"Perceptual",
"Lossless",
"Lossy"
],
"ans": 2,
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
"A sound recording of speech",
"A photograph with a different colour at almost every pixel",
"An encrypted text file",
"An image with large areas of identical colour"
],
"ans": 3,
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
"It is lossless because only silent sections are removed",
"It is lossy because the sampling rate is increased"
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
"It increases the resolution and quality of the file",
"It checks the file for errors as it is being transmitted",
"It reduces transmission time and the storage space needed",
"It prevents the file from being intercepted while in transit"
],
"ans": 2,
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
"The file is smaller and the original image can be rebuilt exactly",
"The file is larger because a compression dictionary has been added",
"The file is smaller but some detail has been permanently lost",
"The file is the same size but the colours are less accurate"
],
"ans": 2,
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
"91",
"218",
"210",
"227"
],
"ans": 1,
"why": "Add the place values of the 1 bits: 218."
},
{
"id": "C1-023",
"ch": 1,
"topic": "Data representation",
"marks": 1,
"q": "What is the denary value of the unsigned 8-bit binary number 01011100?",
"code": null,
"opts": [
"92",
"91",
"58",
"84"
],
"ans": 0,
"why": "Add the place values of the 1 bits: 92."
},
{
"id": "C1-024",
"ch": 1,
"topic": "Data representation",
"marks": 1,
"q": "Which 8-bit binary number represents the denary number 230?",
"code": null,
"opts": [
"11110110",
"11100110",
"10100110",
"11100010"
],
"ans": 1,
"why": "230 = 11100110 (check by adding place values)."
},
{
"id": "C1-025",
"ch": 1,
"topic": "Data representation",
"marks": 1,
"q": "Which 8-bit binary number represents the denary number 168?",
"code": null,
"opts": [
"10101000",
"10101100",
"00010101",
"11101000"
],
"ans": 0,
"why": "168 = 10101000 (check by adding place values)."
},
{
"id": "C1-026",
"ch": 1,
"topic": "Data representation",
"marks": 1,
"q": "What is the denary value of the hexadecimal number 1B?",
"code": null,
"opts": [
"26",
"43",
"52",
"27"
],
"ans": 3,
"why": "1 × 16 + B = 27."
},
{
"id": "C1-027",
"ch": 1,
"topic": "Data representation",
"marks": 1,
"q": "What is the denary value of the hexadecimal number DD?",
"code": null,
"opts": [
"237",
"222",
"221",
"243"
],
"ans": 2,
"why": "D × 16 + D = 221."
},
{
"id": "C1-028",
"ch": 1,
"topic": "Data representation",
"marks": 1,
"q": "Which hexadecimal number is equivalent to the binary number 11110111?",
"code": null,
"opts": [
"F6",
"07",
"F7",
"F8"
],
"ans": 2,
"why": "Split into nibbles 1111 0111 = F7."
},
{
"id": "C1-029",
"ch": 1,
"topic": "Data representation",
"marks": 1,
"q": "Which hexadecimal number is equivalent to the binary number 11101011?",
"code": null,
"opts": [
"E4",
"EA",
"BE",
"EB"
],
"ans": 3,
"why": "Split into nibbles 1110 1011 = EB."
},
{
"id": "C1-030",
"ch": 1,
"topic": "Data representation",
"marks": 2,
"q": "Which 8-bit two's complement binary number represents -46?",
"code": null,
"opts": [
"11010010",
"11010001",
"10101110",
"00101110"
],
"ans": 0,
"why": "Write +46 in binary, invert all bits, add 1 → 11010010. Sign-and-magnitude or forgetting to add 1 gives the wrong answers."
},
{
"id": "C1-031",
"ch": 1,
"topic": "Data representation",
"marks": 2,
"q": "Which 8-bit two's complement binary number represents -40?",
"code": null,
"opts": [
"10101000",
"11010111",
"11011010",
"11011000"
],
"ans": 3,
"why": "Write +40 in binary, invert all bits, add 1 → 11011000. Sign-and-magnitude or forgetting to add 1 gives the wrong answers."
},
{
"id": "C1-032",
"ch": 1,
"topic": "Data representation",
"marks": 2,
"q": "Which 8-bit two's complement binary number represents -29?",
"code": null,
"opts": [
"00011101",
"11100010",
"11100011",
"11100101"
],
"ans": 2,
"why": "Write +29 in binary, invert all bits, add 1 → 11100011. Sign-and-magnitude or forgetting to add 1 gives the wrong answers."
},
{
"id": "C1-033",
"ch": 1,
"topic": "Data representation",
"marks": 2,
"q": "What is the denary value of the 8-bit two's complement number 11000011?",
"code": null,
"opts": [
"-66",
"-68",
"-61",
"-60"
],
"ans": 2,
"why": "The most significant bit has place value -128: -128 + 67 = -61."
},
{
"id": "C1-034",
"ch": 1,
"topic": "Data representation",
"marks": 2,
"q": "What is the denary value of the 8-bit two's complement number 11010110?",
"code": null,
"opts": [
"-42",
"-43",
"-86",
"-36"
],
"ans": 0,
"why": "The most significant bit has place value -128: -128 + 86 = -42."
},
{
"id": "C1-035",
"ch": 1,
"topic": "Data representation",
"marks": 2,
"q": "What is the denary value of the 8-bit two's complement number 11100111?",
"code": null,
"opts": [
"-18",
"-30",
"-28",
"-25"
],
"ans": 3,
"why": "The most significant bit has place value -128: -128 + 103 = -25."
},
{
"id": "C1-036",
"ch": 1,
"topic": "Data representation",
"marks": 2,
"q": "Two positive numbers 01101000 and 01101001 are added using 8-bit two's complement. What denary value does the 8-bit result show, and has overflow occurred?",
"code": null,
"opts": [
"-47 (overflow has occurred)",
"209 (no overflow)",
"209 (overflow has occurred)",
"-47 (no overflow)"
],
"ans": 0,
"why": "104 + 105 = 209 exceeds +127, so the sign bit becomes 1 and the stored value is 209 - 256 = -47. Overflow."
},
{
"id": "C1-037",
"ch": 1,
"topic": "Data representation",
"marks": 2,
"q": "Two positive numbers 01010110 and 01010101 are added using 8-bit two's complement. What denary value does the 8-bit result show, and has overflow occurred?",
"code": null,
"opts": [
"-85 (overflow has occurred)",
"-85 (no overflow)",
"171 (no overflow)",
"85 (overflow has occurred)"
],
"ans": 0,
"why": "86 + 85 = 171 exceeds +127, so the sign bit becomes 1 and the stored value is 171 - 256 = -85. Overflow."
},
{
"id": "C1-038",
"ch": 1,
"topic": "Data representation",
"marks": 1,
"q": "Which is the Binary Coded Decimal (BCD) representation of the denary number 424?",
"code": null,
"opts": [
"0001 1010 1000",
"0100 0010 0100",
"0100 0101 0100",
"0101 0011 0101"
],
"ans": 1,
"why": "Convert each denary digit separately into a 4-bit binary number."
},
{
"id": "C1-039",
"ch": 1,
"topic": "Data representation",
"marks": 1,
"q": "Which is the Binary Coded Decimal (BCD) representation of the denary number 569?",
"code": null,
"opts": [
"0110 0111 0000",
"0010 0011 1001",
"1001 0110 0101",
"0101 0110 1001"
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
"-32 to +32",
"-32 to +31",
"-31 to +31",
"0 to 63"
],
"ans": 1,
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
"-511 to +511",
"-512 to +511",
"0 to 1023",
"-512 to +512"
],
"ans": 1,
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
"64",
"36",
"32",
"6"
],
"ans": 0,
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
"4096",
"512",
"2048",
"1024"
],
"ans": 3,
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
"16 KiB",
"256 KiB",
"64 KiB",
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
"2359.3 KiB",
"1152 KiB",
"2304 KiB",
"288 KiB"
],
"ans": 2,
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
"614.4 KiB",
"600 KiB",
"300 KiB",
"75 KiB"
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
"32,000 bytes",
"640,000 bytes",
"320,000 bytes",
"80,000 bytes"
],
"ans": 1,
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
"1,323,000 bytes",
"3,528,000 bytes",
"882,000 bytes",
"441,000 bytes"
],
"ans": 2,
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
"960,000 bytes",
"360,000 bytes",
"240,000 bytes",
"30,000 bytes"
],
"ans": 2,
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
"4W 3B 6W 1K",
"5W 3B 6W 1K",
"W4 B3 W6 K1",
"1K 6W 3B 4W"
],
"ans": 0,
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
"R2 G6 B8 R1",
"1R 8B 6G 2R",
"2R 6G 8B 1R",
"3R 6G 8B 1R"
],
"ans": 2,
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
"A7 B2 C4",
"8A 2B 4C",
"4C 2B 7A",
"7A 2B 4C"
],
"ans": 3,
"why": "Count each run of identical characters and write the count then the character."
},
{
"id": "C1-053",
"ch": 1,
"topic": "Data representation",
"marks": 1,
"q": "Which is the 8-bit one's complement representation of -45?",
"code": null,
"opts": [
"10101101",
"00101101",
"11010011",
"11010010"
],
"ans": 3,
"why": "+45 = 00101101; invert every bit to get 11010010. Adding 1 would give two's complement (11010011); 10101101 is sign-and-magnitude."
},
{
"id": "C1-054",
"ch": 1,
"topic": "Data representation",
"marks": 2,
"q": "What is the denary value of the 8-bit one's complement number 11100110?",
"code": null,
"opts": [
"-25",
"-26",
"230",
"-102"
],
"ans": 0,
"why": "The MSB is 1, so the number is negative: invert to 00011001 = 25. -26 is the two's complement reading; -102 is sign-and-magnitude."
},
{
"id": "C1-055",
"ch": 1,
"topic": "Data representation",
"marks": 2,
"q": "00011100 is subtracted from 01101001 by adding the two's complement of 00011100 (8 bits, carry out ignored). What is the result?",
"code": null,
"opts": [
"01010101",
"01001101",
"01001100",
"10000101"
],
"ans": 1,
"why": "105 - 28 = 77 = 01001101. 01001100 (76) comes from adding the one's complement without the +1; 10000101 is 105 + 28."
},
{
"id": "C1-056",
"ch": 1,
"topic": "Data representation",
"marks": 2,
"q": "50 - 75 is calculated using 8-bit two's complement. What is the result?",
"code": null,
"opts": [
"11100110",
"00011001",
"11100111",
"10011001"
],
"ans": 2,
"why": "50 - 75 = -25. 25 = 00011001, invert = 11100110, add 1 = 11100111. 10011001 is sign-and-magnitude; 11100110 forgets the +1."
},
{
"id": "C1-057",
"ch": 1,
"topic": "Data representation",
"marks": 1,
"q": "Two negative 8-bit two's complement numbers are added and the result has a most significant bit of 0. What has happened?",
"code": null,
"opts": [
"Overflow: the true result is below -128 so cannot be stored",
"No error: the result is a valid positive number and can be used",
"Underflow of the fractional part: the result has been rounded",
"A carry out of the top bit shows that the result is correct"
],
"ans": 0,
"why": "Adding two negative numbers cannot give a positive one; the true sum is outside the range -128 to +127."
},
{
"id": "C1-058",
"ch": 1,
"topic": "Data representation",
"marks": 1,
"q": "In ASCII the letter 'A' is 01000001. What is the code for 'E'?",
"code": null,
"opts": [
"01100101",
"01000101",
"01000100",
"01000110"
],
"ans": 1,
"why": "Codes are consecutive: A = 65 so E = 69 = 01000101. 01100101 is lower case 'e'."
},
{
"id": "C1-059",
"ch": 1,
"topic": "Data representation",
"marks": 1,
"q": "A message of 200 characters is stored using 16 bits per character. What is its size?",
"code": null,
"opts": [
"400 bytes",
"3200 bytes",
"175 bytes",
"200 bytes"
],
"ans": 0,
"why": "200 × 16 = 3200 bits; ÷ 8 = 400 bytes."
},
{
"id": "C1-060",
"ch": 1,
"topic": "Data representation",
"marks": 2,
"q": "A file is 3 GiB in size. How many bytes is this?",
"code": null,
"opts": [
"3 145 728",
"3 221 225 472",
"3 000 000 000",
"25 769 803 776"
],
"ans": 1,
"why": "3 × 2^30 = 3 221 225 472. 3 × 10^9 would be 3 GB; 3 145 728 is 3 MiB; the last value is the size in bits."
},
{
"id": "C1-061",
"ch": 1,
"topic": "Multimedia",
"marks": 1,
"q": "What is meant by screen resolution?",
"code": null,
"opts": [
"The number of pixels in the image that is being displayed",
"The number of pixels the screen can display across and down",
"The number of bits used to store each pixel on the screen",
"The size of the screen measured diagonally in inches"
],
"ans": 1,
"why": "Screen resolution belongs to the display; image resolution belongs to the image file."
},
{
"id": "C1-062",
"ch": 1,
"topic": "Compression",
"marks": 2,
"q": "Which method reduces the size of a sound file using lossy compression?",
"code": null,
"opts": [
"Replacing runs of identical samples with a count and a value",
"Storing each sample in hexadecimal instead of binary",
"Increasing the sampling resolution of every sample",
"Removing frequencies that humans cannot hear"
],
"ans": 3,
"why": "Perceptual coding permanently discards data; RLE is lossless; hexadecimal does not change the stored size."
},
{
"id": "C1-063",
"ch": 1,
"topic": "Multimedia",
"marks": 1,
"q": "Why must a sound be sampled before a computer can store it?",
"code": null,
"opts": [
"Sound is already digital but has to be compressed first",
"Sampling removes the background noise from the recording",
"Sound is analogue and a computer can only store digital values",
"Sampling increases the volume of the sound that is stored"
],
"ans": 2,
"why": "Sampling measures the continuous amplitude at intervals and converts it to digital values."
},
{
"id": "C2-064",
"ch": 2,
"topic": "Networks",
"marks": 1,
"q": "Which statement best describes a wide area network (WAN)?",
"code": null,
"opts": [
"A network that connects computers only through the public telephone system",
"A network in which every device must be connected wirelessly to it",
"A network confined to a single building and owned by one organisation",
"A network covering a large area, often using leased or public telecom links"
],
"ans": 3,
"why": "A LAN covers a small area such as a building; a WAN spans cities or countries, e.g. the internet."
},
{
"id": "C2-065",
"ch": 2,
"topic": "Networks",
"marks": 1,
"q": "Which is a benefit of connecting computers in a network?",
"code": null,
"opts": [
"Resources such as printers, files and internet access can be shared",
"Each computer can process data faster than when it is standalone",
"Hardware faults on one computer cannot affect any other computer",
"Passwords are no longer needed to access shared files"
],
"ans": 0,
"why": "Networking allows sharing of hardware, software and data."
},
{
"id": "C2-066",
"ch": 2,
"topic": "Networks",
"marks": 2,
"q": "A school stores all student files on one central computer. Staff log in from their own computers and request files as needed. Which model is used and what is a benefit?",
"code": null,
"opts": [
"Peer-to-peer; every computer holds a copy so work continues if one fails",
"Client-server; files and security can be managed centrally",
"Peer-to-peer; security and backups are controlled from one place",
"Client-server; each computer acts as both client and server so the cost is lower"
],
"ans": 1,
"why": "In client-server, the server provides services to clients and administration (backup, security) is centralised."
},
{
"id": "C2-067",
"ch": 2,
"topic": "Networks",
"marks": 1,
"q": "Which is a drawback of a peer-to-peer network compared with a client-server network?",
"code": null,
"opts": [
"Computers on the network cannot share printers with each other",
"There is no central control, so backup and security are harder",
"A dedicated server computer must be bought and maintained",
"If the server fails, no computer can access shared files"
],
"ans": 1,
"why": "Peer-to-peer has no central management; each computer manages its own resources."
},
{
"id": "C2-068",
"ch": 2,
"topic": "Networks",
"marks": 2,
"q": "Which statement describes a thin client?",
"code": null,
"opts": [
"It provides services such as file storage to other computers on the network",
"It has a powerful processor and stores and runs its own software",
"It relies on a server to carry out most of the processing and to store the data",
"It can only be used when it has no connection to a network"
],
"ans": 2,
"why": "A thick client does most processing locally; a thin client depends on the server."
},
{
"id": "C2-069",
"ch": 2,
"topic": "Networks",
"marks": 2,
"q": "Which is a drawback of using thin clients rather than thick clients?",
"code": null,
"opts": [
"They can only be used by one person at a time",
"Each one needs its own expensive processor and large storage",
"Software must be installed and updated separately on every device",
"They cannot be used if the connection to the server is lost"
],
"ans": 3,
"why": "Because the server does the processing, the thin client is useless without the network/server."
},
{
"id": "C2-070",
"ch": 2,
"topic": "Networks",
"marks": 2,
"q": "Which is an advantage of a star topology over a bus topology?",
"code": null,
"opts": [
"It does not need a central device such as a switch",
"Only the device on a failed cable loses its connection",
"It needs less cable because devices share one backbone",
"All data is sent to every device so it cannot be lost"
],
"ans": 1,
"why": "In a star every device has its own cable to the central switch; a bus relies on a shared backbone."
},
{
"id": "C2-071",
"ch": 2,
"topic": "Networks",
"marks": 2,
"q": "Device A sends data to device B in a star network that has a switch at the centre. How does the data travel?",
"code": null,
"opts": [
"From A to every other device, each of which forwards it onwards",
"Directly from A to B along a shared backbone cable",
"From A to a server, which stores it until B asks for it",
"From A to the switch, which forwards it to B"
],
"ans": 3,
"why": "All traffic in a star network passes through the central device."
},
{
"id": "C2-072",
"ch": 2,
"topic": "Networks",
"marks": 1,
"q": "Which topology provides several paths between devices so data can still arrive if one link fails?",
"code": null,
"opts": [
"Mesh",
"Ring",
"Bus",
"Star"
],
"ans": 0,
"why": "A mesh has multiple interconnections, giving redundancy."
},
{
"id": "C2-073",
"ch": 2,
"topic": "Networks",
"marks": 2,
"q": "Which is a drawback of a mesh topology?",
"code": null,
"opts": [
"All of the data must pass through one single central device",
"A large number of links is needed, so it is expensive to install",
"A single cable fault stops all communication across the network",
"Only one device at a time is able to transmit its data"
],
"ans": 1,
"why": "The number of links grows rapidly with the number of devices."
},
{
"id": "C2-074",
"ch": 2,
"topic": "Networks",
"marks": 1,
"q": "A hybrid network topology is one that",
"code": null,
"opts": [
"has all devices connected to a single backbone cable",
"uses both wired and wireless links for every device",
"combines two or more different topologies",
"connects a LAN to the internet"
],
"ans": 2,
"why": "For example, several star networks joined by a bus backbone."
},
{
"id": "C2-075",
"ch": 2,
"topic": "Networks",
"marks": 2,
"q": "Which is a drawback of a bus topology?",
"code": null,
"opts": [
"Data cannot be sent unless a central server is available",
"Every device needs its own cable to a central switch",
"A fault in the backbone cable can disrupt the whole network",
"It cannot be used for more than two devices"
],
"ans": 2,
"why": "All devices share one backbone, so a break affects every device and collisions increase with traffic."
},
{
"id": "C2-076",
"ch": 2,
"topic": "Networks",
"marks": 2,
"q": "Which is a drawback of cloud computing for an organisation?",
"code": null,
"opts": [
"Access needs a reliable internet connection and a third party stores the data",
"Files can only be accessed from a single registered computer",
"The organisation must buy, house and maintain all of the servers itself",
"Storage capacity cannot be increased once a contract has been agreed"
],
"ans": 0,
"why": "Cloud storage is hosted by a provider; users need connectivity, and must trust the provider's security."
},
{
"id": "C2-077",
"ch": 2,
"topic": "Networks",
"marks": 2,
"q": "How does a private cloud differ from a public cloud?",
"code": null,
"opts": [
"It can only be accessed by users on wireless connections",
"The data is stored on the user's own device instead of on servers",
"The infrastructure is cheaper because it is shared by many customers",
"The infrastructure is used by a single organisation and is not shared"
],
"ans": 3,
"why": "A private cloud is dedicated to one organisation, giving more control but higher cost."
},
{
"id": "C2-078",
"ch": 2,
"topic": "Networks",
"marks": 2,
"q": "Which is a drawback of a wireless network compared with a wired network?",
"code": null,
"opts": [
"The signal can suffer interference and can be intercepted",
"The network can only be used with fibre-optic cable",
"Data transfer is slower to set up because every device needs its own switch port",
"Mobile devices such as phones cannot join the network"
],
"ans": 0,
"why": "Wireless signals travel through the air, so they are weaker, can be interfered with and can be intercepted."
},
{
"id": "C2-079",
"ch": 2,
"topic": "Networks",
"marks": 2,
"q": "Which statement correctly describes fibre-optic cable?",
"code": null,
"opts": [
"It sends data as microwaves, which require a clear line of sight",
"It sends data as pulses of light and is not affected by interference",
"It sends data as radio waves and needs no cable between devices",
"It sends data as electrical signals and can suffer from crosstalk"
],
"ans": 1,
"why": "Fibre-optic cable has high bandwidth and low attenuation; copper uses electrical signals."
},
{
"id": "C2-080",
"ch": 2,
"topic": "Networks",
"marks": 1,
"q": "Which transmission medium requires a clear line of sight between transmitter and receiver?",
"code": null,
"opts": [
"Microwave links",
"Fibre-optic cable",
"Wi-Fi inside a building",
"Copper cable"
],
"ans": 0,
"why": "Microwave transmission is directional and needs line of sight, often via towers or satellites."
},
{
"id": "C2-081",
"ch": 2,
"topic": "Network hardware",
"marks": 1,
"q": "What does a network switch do with the data it receives?",
"code": null,
"opts": [
"It forwards the data only to the device it is addressed to",
"It sends a copy of the data to every connected device",
"It translates domain names into the IP addresses of servers",
"It converts the digital signals into analogue signals"
],
"ans": 0,
"why": "A switch uses MAC addresses to forward frames to the correct device; a hub broadcasts to all."
},
{
"id": "C2-082",
"ch": 2,
"topic": "Network hardware",
"marks": 1,
"q": "What is the purpose of a Network Interface Card (NIC)?",
"code": null,
"opts": [
"To translate domain names into IP addresses for the browser",
"To store the web pages that the user has recently visited",
"To connect a computer to a network and give it a MAC address",
"To increase the overall processing speed of the computer"
],
"ans": 2,
"why": "A NIC provides the physical interface to the network; wireless versions are WNICs."
},
{
"id": "C2-083",
"ch": 2,
"topic": "Network hardware",
"marks": 1,
"q": "What is the purpose of a wireless access point (WAP)?",
"code": null,
"opts": [
"To regenerate a weak signal on a long cable",
"To convert analogue signals to digital signals",
"To allow wireless devices to connect to a wired network",
"To connect a network to the internet using public IP addresses"
],
"ans": 2,
"why": "A WAP is a transceiver connected to a wired network that lets wireless devices join."
},
{
"id": "C2-084",
"ch": 2,
"topic": "Network hardware",
"marks": 1,
"q": "What is the purpose of a bridge in a network?",
"code": null,
"opts": [
"To boost a weakened signal so it can travel further along a cable",
"To connect two network segments so that they act as a single network",
"To store files that are shared across the network",
"To give each device on the network a unique IP address"
],
"ans": 1,
"why": "A bridge joins two LAN segments; a repeater only regenerates the signal."
},
{
"id": "C2-085",
"ch": 2,
"topic": "Network hardware",
"marks": 1,
"q": "What is the purpose of a repeater?",
"code": null,
"opts": [
"To connect two different networks and forward packets between them",
"To check packets for malicious content",
"To regenerate a weakened signal so that it can travel further",
"To assign IP addresses to devices as they join the network"
],
"ans": 2,
"why": "Signals attenuate over distance; a repeater amplifies/regenerates them."
},
{
"id": "C2-086",
"ch": 2,
"topic": "Network hardware",
"marks": 2,
"q": "Which task is carried out by a router?",
"code": null,
"opts": [
"Forwarding packets between different networks using their IP addresses",
"Forwarding frames between devices on the same LAN using MAC addresses",
"Regenerating signals that have been weakened over long cables",
"Converting digital signals into analogue signals for a telephone line"
],
"ans": 0,
"why": "A router connects networks together (e.g. a LAN to the internet) and chooses the route for each packet."
},
{
"id": "C2-087",
"ch": 2,
"topic": "Network hardware",
"marks": 2,
"q": "Which statement describes how Ethernet uses CSMA/CD?",
"code": null,
"opts": [
"A device checks the channel is idle first; after a collision it sends a jam signal and waits a random time",
"A device transmits at once and the switch silently discards any data that collides with other traffic",
"A device may transmit only while it holds a token that is passed from device to device on the network",
"A device asks the server for permission and the server decides the order in which devices transmit"
],
"ans": 0,
"why": "Carrier Sense Multiple Access / Collision Detection: listen first, detect collisions, back off randomly and retransmit."
},
{
"id": "C2-088",
"ch": 2,
"topic": "Network hardware",
"marks": 1,
"q": "In an Ethernet network, a collision occurs when",
"code": null,
"opts": [
"a packet reaches its destination but is corrupted by a virus",
"two devices transmit data on the same medium at the same time",
"a device sends a packet to an IP address that does not exist",
"a switch runs out of memory to store packets"
],
"ans": 1,
"why": "Simultaneous transmissions on a shared medium collide."
},
{
"id": "C2-089",
"ch": 2,
"topic": "Network hardware",
"marks": 2,
"q": "Which statement about on-demand bit streaming is correct?",
"code": null,
"opts": [
"A pre-recorded file is held on a server and starts playing once part of it is buffered",
"The video is encoded and sent as the event happens, so it cannot be rewound",
"The whole file must be downloaded in full before any playback can begin",
"No buffer is needed because the server sends the data at the playback rate"
],
"ans": 0,
"why": "On-demand streaming plays pre-stored content; real-time streaming sends live events as they happen."
},
{
"id": "C2-090",
"ch": 2,
"topic": "Network hardware",
"marks": 2,
"q": "A user's broadband speed falls below the bit rate needed by a video stream. What is the most likely effect?",
"code": null,
"opts": [
"The buffer empties faster than it is refilled, so playback pauses",
"The video is played at a higher quality than it would normally be",
"The video file is permanently deleted from the server that holds it",
"The video is played back at a faster speed so that it finishes sooner"
],
"ans": 0,
"why": "If the data arrives slower than it is consumed, the buffer runs dry and the stream stalls."
},
{
"id": "C2-091",
"ch": 2,
"topic": "Network hardware",
"marks": 2,
"q": "Which statement about the internet and the World Wide Web (WWW) is correct?",
"code": null,
"opts": [
"The WWW is the global network of connected networks; the internet is a collection of web pages",
"The WWW is the set of protocols, such as TCP/IP, that the internet uses",
"The internet is the global network of networks; the WWW is a collection of web pages",
"The WWW is the hardware that is used to connect computers to the internet"
],
"ans": 2,
"why": "The web is one service that runs on the internet (others include email and file transfer)."
},
{
"id": "C2-092",
"ch": 2,
"topic": "Network hardware",
"marks": 1,
"q": "Why is a modem needed to connect a computer to the Public Switched Telephone Network (PSTN)?",
"code": null,
"opts": [
"To convert digital signals to analogue for the telephone line and back",
"To encrypt the data so that it cannot be intercepted on the line",
"To translate private IP addresses into public IP addresses",
"To store the data temporarily until the telephone line is free"
],
"ans": 0,
"why": "The PSTN carries analogue signals; a modem modulates and demodulates."
},
{
"id": "C2-093",
"ch": 2,
"topic": "IP, URL and DNS",
"marks": 1,
"q": "How many bits are used for an IPv6 address?",
"code": null,
"opts": [
"32",
"128",
"64",
"256"
],
"ans": 1,
"why": "IPv4 uses 32 bits; IPv6 uses 128 bits, usually written as hexadecimal groups."
},
{
"id": "C2-094",
"ch": 2,
"topic": "IP, URL and DNS",
"marks": 2,
"q": "Why was IPv6 introduced?",
"code": null,
"opts": [
"IPv6 addresses are much shorter and so are easier to type in",
"IPv6 removes the need for routers to forward packets between networks",
"IPv4 addresses cannot be used by devices on wireless networks",
"IPv4 addresses were running out and IPv6 provides far more"
],
"ans": 3,
"why": "IPv4's 32 bits give about 4.3 billion addresses; IPv6's 128 bits give vastly more."
},
{
"id": "C2-095",
"ch": 2,
"topic": "IP, URL and DNS",
"marks": 2,
"q": "Which is a purpose of subnetting?",
"code": null,
"opts": [
"To split a network into smaller parts that are easier to manage",
"To allow devices on different networks to share the same IP address",
"To convert the domain names of websites into IP addresses",
"To make every one of the devices on the network a web server"
],
"ans": 0,
"why": "An IP address has a network part and a host part; subnetting splits a network into sub-networks."
},
{
"id": "C2-096",
"ch": 2,
"topic": "IP, URL and DNS",
"marks": 2,
"q": "Which statement about public and private IP addresses is correct?",
"code": null,
"opts": [
"Private IP addresses are required for a device to be reached from anywhere on the internet",
"Public IP addresses are given to devices inside a LAN by the router",
"Private IP addresses are unique across the whole of the internet and cannot be reused",
"A public IP address is unique on the internet but private addresses can be reused in other LANs"
],
"ans": 3,
"why": "Private addresses are not routable on the internet; hiding devices behind a router improves security."
},
{
"id": "C2-097",
"ch": 2,
"topic": "IP, URL and DNS",
"marks": 2,
"q": "Which device should be given a static IP address?",
"code": null,
"opts": [
"A laptop that connects to different networks each day",
"A web server that must always be reachable at one address",
"A visitor's smartphone that is using a café's guest Wi-Fi",
"A tablet that is only switched on occasionally at home"
],
"ans": 1,
"why": "Dynamic addresses are assigned temporarily (e.g. by DHCP); servers need a fixed address."
},
{
"id": "C2-098",
"ch": 2,
"topic": "IP, URL and DNS",
"marks": 1,
"q": "In the URL https://www.example.com/shop/index.html, which part specifies the protocol?",
"code": null,
"opts": [
"/shop/index.html",
"https",
"example.com",
"www"
],
"ans": 1,
"why": "The protocol comes before '://'; the domain name is www.example.com and the rest is the path to the file."
},
{
"id": "C2-099",
"ch": 2,
"topic": "IP, URL and DNS",
"marks": 1,
"q": "In the URL https://www.example.com/shop/index.html, which part identifies the file on the web server?",
"code": null,
"opts": [
"www.example.com",
"www",
"/shop/index.html",
"https"
],
"ans": 2,
"why": "The path (/shop/index.html) locates the page on the server."
},
{
"id": "C2-100",
"ch": 2,
"topic": "IP, URL and DNS",
"marks": 2,
"q": "A user enters a URL into a browser. What is the role of the Domain Name Service (DNS)?",
"code": null,
"opts": [
"It encrypts the URL so that it cannot be read by other users",
"It downloads the web page from the web server and displays it in the browser",
"It finds the IP address that matches the domain name in the URL",
"It finds the MAC address of the user's router from the domain name"
],
"ans": 2,
"why": "A DNS server holds a table of domain names and IP addresses; if it doesn't know the name it asks another DNS server."
},
{
"id": "C2-101",
"ch": 2,
"topic": "IP, URL and DNS",
"marks": 2,
"q": "A DNS server does not hold an entry for the domain name requested by a browser. What happens next?",
"code": null,
"opts": [
"The web server is asked to translate its own domain name for the browser",
"The request is discarded and the user's IP address is then blocked",
"The browser displays the page using the last IP address it received",
"The request is passed to another DNS server until the IP address is found"
],
"ans": 3,
"why": "DNS servers form a hierarchy and forward requests that they cannot resolve."
},
{
"id": "C2-102",
"ch": 2,
"topic": "IP, URL and DNS",
"marks": 1,
"q": "Which of the following is a valid IPv4 address?",
"code": null,
"opts": [
"45.240.209.306",
"45.240.209.224",
"45.240.209.224.51",
"45.240.209"
],
"ans": 1,
"why": "IPv4 addresses have four denary numbers from 0 to 255 separated by full stops."
},
{
"id": "C2-103",
"ch": 2,
"topic": "IP, URL and DNS",
"marks": 1,
"q": "A network technician types in one address for a device. Which is a valid IPv4 address?",
"code": null,
"opts": [
"203.203.28.110.116",
"203.203.28",
"203.203.28.110",
"203.203.28.369"
],
"ans": 2,
"why": "IPv4 addresses have four denary numbers from 0 to 255 separated by full stops."
},
{
"id": "C2-104",
"ch": 2,
"topic": "IP, URL and DNS",
"marks": 1,
"q": "Which is a valid IPv6 address?",
"code": null,
"opts": [
"2001:0db8:85g3::8a2e:0370",
"2001.0db8.0000.ff00.0042.8329",
"2001:db8::ff00::8329",
"2001:db8::ff00:42:8329"
],
"ans": 3,
"why": "IPv6 uses hexadecimal groups separated by colons; '::' may replace a run of zero groups once only; 'g' is not a hex digit; dots belong to IPv4."
},
{
"id": "C2-105",
"ch": 2,
"topic": "IP, URL and DNS",
"marks": 2,
"q": "Which statement describes the format of an IPv6 address?",
"code": null,
"opts": [
"Eight groups of denary numbers from 0 to 255 separated by colons or hyphens",
"Sixteen groups of two hex digits separated by full stops or dashes",
"Four groups of denary numbers from 0 to 255 separated by full stops",
"Eight groups of four hex digits separated by colons, with :: for a run of zeros"
],
"ans": 3,
"why": "An IPv6 address is 128 bits: eight 16-bit groups written in hexadecimal."
},
{
"id": "C2-106",
"ch": 2,
"topic": "IP, URL and DNS",
"marks": 2,
"q": "A laptop joins a school network and is given an IP address automatically. How is this done?",
"code": null,
"opts": [
"A DNS server works the address out from the name of the laptop",
"The address is permanently built into the network card when it is made",
"A DHCP server, often in the router, assigns a free address for a limited time",
"The laptop chooses any address that is not already in its own cache"
],
"ans": 2,
"why": "The MAC address is built into the NIC, not the IP address; DNS maps names to IP addresses."
},
{
"id": "C2-107",
"ch": 2,
"topic": "IP, URL and DNS",
"marks": 1,
"q": "Which statement about a dynamic IP address is correct?",
"code": null,
"opts": [
"It is set once by the user and then stays the same for ever",
"It is the same thing as the MAC address of the device",
"It is needed by any web server that must always be found",
"It may change each time the device connects to the network"
],
"ans": 3,
"why": "Dynamic addresses are leased and can change; servers normally use static addresses."
},
{
"id": "C2-108",
"ch": 2,
"topic": "IP, URL and DNS",
"marks": 2,
"q": "A device has the IP address 192.168.4.17 and is in a subnetwork. Which statement is correct?",
"code": null,
"opts": [
"The network ID identifies the individual device rather than the subnet",
"All devices in that subnet share the same network ID but have different host IDs",
"All devices in that subnet have the same host ID but different network IDs",
"Each device in the subnet has a different network ID and the same host ID"
],
"ans": 1,
"why": "The network ID identifies the subnet; the host ID identifies the device within it."
},
{
"id": "C2-109",
"ch": 2,
"topic": "Network hardware",
"marks": 2,
"q": "A transmitting device on an Ethernet bus detects a collision. What does it do next?",
"code": null,
"opts": [
"It carries on sending because the switch repairs the damaged frame later",
"It resends the frame at once but at a higher bit rate than before",
"It stops sending, transmits a jamming signal, then waits a random time before resending",
"It waits a fixed time agreed with the other device and then resends"
],
"ans": 2,
"why": "Random back-off makes a repeat collision unlikely."
},
{
"id": "C2-110",
"ch": 2,
"topic": "Network hardware",
"marks": 1,
"q": "Which is a feature of real-time bit streaming?",
"code": null,
"opts": [
"The event is sent as it happens, so it cannot be fast-forwarded",
"The file is stored on a server first so the viewer can rewind it",
"No buffering is used at the receiving device at any point",
"The whole file is downloaded before any playback can start"
],
"ans": 0,
"why": "On-demand streaming uses pre-recorded files that can be paused or re-watched."
},
{
"id": "C2-111",
"ch": 2,
"topic": "Networks",
"marks": 2,
"q": "In a bus network, device A sends a packet to device C. How does the packet travel?",
"code": null,
"opts": [
"It passes from device to device, each one storing it before forwarding it",
"It travels along the shared backbone to all devices, and only C accepts it",
"It travels along a dedicated cable that connects A directly to C",
"It is sent through a central switch, which forwards the packet to device C alone"
],
"ans": 1,
"why": "All devices on a bus see every packet; the destination address decides which device keeps it."
},
{
"id": "C2-112",
"ch": 2,
"topic": "Network hardware",
"marks": 1,
"q": "Which is a benefit of a dedicated (leased) line for connecting to the internet?",
"code": null,
"opts": [
"It needs no modem or router at the user's end of the line",
"It is wireless, so the connection can move with the user",
"It is the cheapest possible way of connecting a business to the internet",
"It is not shared, so the bandwidth is consistent and more secure"
],
"ans": 3,
"why": "Leased lines are expensive but private and give guaranteed bandwidth."
},
{
"id": "C2-113",
"ch": 2,
"topic": "Network hardware",
"marks": 1,
"q": "Which is an advantage of copper cable compared with fibre-optic cable?",
"code": null,
"opts": [
"It has a much higher bandwidth than fibre",
"Its signal weakens less over long distances",
"It is not affected by electromagnetic interference at all",
"It is cheaper and easier to install and to join"
],
"ans": 3,
"why": "Fibre has higher bandwidth, no electromagnetic interference and lower attenuation; copper is cheap and easy to fit."
},
{
"id": "C3-114",
"ch": 3,
"topic": "Memory and storage",
"marks": 1,
"q": "Why does a computer need secondary storage as well as primary memory?",
"code": null,
"opts": [
"To store the results of calculations while the ALU is working",
"To keep programs and data permanently, even when the power is switched off",
"To hold the instruction that is currently being decoded",
"To give the processor faster access to data than primary memory can"
],
"ans": 1,
"why": "Primary memory (RAM) is volatile; secondary storage is non-volatile and has a larger capacity."
},
{
"id": "C3-115",
"ch": 3,
"topic": "Memory and storage",
"marks": 2,
"q": "Which statement correctly compares RAM and ROM?",
"code": null,
"opts": [
"RAM is volatile and can be read and written to; ROM is non-volatile and is normally only read",
"RAM is volatile and can only be read; ROM is non-volatile and can be freely written to",
"RAM is non-volatile and can be read and written to; ROM is volatile and is normally only read",
"RAM and ROM are both volatile, but ROM can be written to more quickly"
],
"ans": 0,
"why": "RAM holds the running programs and data; ROM holds fixed start-up instructions."
},
{
"id": "C3-116",
"ch": 3,
"topic": "Memory and storage",
"marks": 1,
"q": "Which of the following is normally stored in ROM?",
"code": null,
"opts": [
"The document the user is currently editing",
"The user's saved files",
"The operating system processes that are currently running",
"The bootstrap program that starts the computer"
],
"ans": 3,
"why": "ROM keeps the bootstrap/BIOS instructions that run at power-up."
},
{
"id": "C3-117",
"ch": 3,
"topic": "Memory and storage",
"marks": 2,
"q": "Which statement correctly compares SRAM and DRAM?",
"code": null,
"opts": [
"DRAM does not need refreshing and is faster but costs more per bit than SRAM",
"DRAM is non-volatile whereas SRAM loses its contents when power is lost",
"SRAM does not need refreshing and is faster but costs more per bit than DRAM",
"SRAM needs refreshing but costs less per bit and is slower than DRAM"
],
"ans": 2,
"why": "DRAM stores each bit as charge on a capacitor which leaks and needs refreshing; SRAM uses flip-flops."
},
{
"id": "C3-118",
"ch": 3,
"topic": "Memory and storage",
"marks": 2,
"q": "Which type of memory is most suitable for a processor's cache, and why?",
"code": null,
"opts": [
"SRAM, because it is faster to access than DRAM",
"EEPROM, because its contents are kept when power is off",
"ROM, because its contents cannot be changed by mistake",
"DRAM, because it is cheaper per bit and can store more data"
],
"ans": 0,
"why": "Cache must be very fast, which justifies the higher cost and lower density of SRAM."
},
{
"id": "C3-119",
"ch": 3,
"topic": "Memory and storage",
"marks": 2,
"q": "A manufacturer wants a large, low-cost main memory for a personal computer. Which memory should be used and why?",
"code": null,
"opts": [
"SRAM, because it does not need to be refreshed and is cheaper",
"DRAM, because it is faster to access than SRAM",
"DRAM, because more bits can be stored per chip at lower cost",
"ROM, because it is volatile and can be written to quickly"
],
"ans": 2,
"why": "DRAM is denser and cheaper; its slower speed and need for refreshing are acceptable for main memory."
},
{
"id": "C3-120",
"ch": 3,
"topic": "Memory and storage",
"marks": 2,
"q": "Which statement correctly describes EPROM?",
"code": null,
"opts": [
"Its contents can be changed electrically while the chip stays in the device",
"It loses its contents whenever the power is switched off",
"Its contents can be erased with ultraviolet light and then reprogrammed",
"It is programmed once by the user and cannot then be erased"
],
"ans": 2,
"why": "PROM: programmable once. EPROM: erased by UV light. EEPROM: erased electrically, in place."
},
{
"id": "C3-121",
"ch": 3,
"topic": "Memory and storage",
"marks": 1,
"q": "A router's firmware must be updatable over the internet without removing the chip. Which memory should hold it?",
"code": null,
"opts": [
"PROM",
"EEPROM",
"EPROM",
"SRAM"
],
"ans": 1,
"why": "EEPROM = electrically erasable programmable ROM."
},
{
"id": "C3-122",
"ch": 3,
"topic": "Memory and storage",
"marks": 2,
"q": "A computer sends a large document to a slow printer. What is the purpose of the buffer used?",
"code": null,
"opts": [
"To hold the data temporarily so the processor can carry on with other tasks",
"To store the document permanently on disk in case the printer fails",
"To speed up the printer by increasing the print quality of each page",
"To check that the document contains no errors before it is printed"
],
"ans": 0,
"why": "A buffer compensates for the difference in speed between devices."
},
{
"id": "C3-123",
"ch": 3,
"topic": "Memory and storage",
"marks": 2,
"q": "Which is a typical drawback of an embedded system?",
"code": null,
"opts": [
"It needs an internet connection to load its program each time it starts",
"It needs a keyboard, mouse and monitor in order to be used",
"Its program is fixed, so it is hard to upgrade or change",
"It can run many different general-purpose applications"
],
"ans": 2,
"why": "An embedded system is built into a device to perform a dedicated task; its software is stored in ROM-type memory."
},
{
"id": "C3-124",
"ch": 3,
"topic": "Memory and storage",
"marks": 1,
"q": "Which is an example of an embedded system?",
"code": null,
"opts": [
"A laptop running a word processor",
"The controller inside a washing machine",
"A desktop computer used for gaming",
"A web server in a data centre"
],
"ans": 1,
"why": "Embedded systems are dedicated computer systems built into a larger device."
},
{
"id": "C3-125",
"ch": 3,
"topic": "Memory and storage",
"marks": 2,
"q": "Which statement about a solid state drive (SSD) compared with a magnetic hard disk drive is correct?",
"code": null,
"opts": [
"It can be rewritten more times than a magnetic disk before it wears out",
"It is cheaper per gigabyte than a magnetic hard disk drive",
"It has no moving parts, so access is faster and it is more robust",
"It stores data on spinning platters, which gives it a larger capacity for the same cost"
],
"ans": 2,
"why": "Flash memory has no moving parts but is dearer per GB and has a finite number of write cycles."
},
{
"id": "C3-126",
"ch": 3,
"topic": "Memory and storage",
"marks": 2,
"q": "How are data read from a magnetic hard disk drive?",
"code": null,
"opts": [
"A laser detects the reflection from pits and lands on the disk surface",
"The charge stored in each of the floating-gate transistors is measured",
"A needle detects the shape of tiny grooves cut into the surface of the disk",
"A read/write head detects the direction of magnetisation of areas on a platter"
],
"ans": 3,
"why": "Magnetic storage uses magnetised regions; optical uses pits/lands; SSDs use charge."
},
{
"id": "C3-127",
"ch": 3,
"topic": "Memory and storage",
"marks": 1,
"q": "How does an optical disc drive read data from a CD?",
"code": null,
"opts": [
"It measures the magnetic field of tiny areas on the surface",
"It measures the charge held in tiny transistors on the disc surface",
"It detects changes in the electrical resistance of the surface",
"It detects how laser light is reflected from pits and lands"
],
"ans": 3,
"why": "A laser is reflected differently from pits and lands, which represent the binary data."
},
{
"id": "C3-128",
"ch": 3,
"topic": "Input/output devices",
"marks": 1,
"q": "What is the role of the fuser in a laser printer?",
"code": null,
"opts": [
"To heat the paper so the toner melts and sticks to it",
"To draw the image on the drum using a laser",
"To charge the drum with static electricity",
"To attract toner onto the charged parts of the drum"
],
"ans": 0,
"why": "The fuser uses heat and pressure to fix the toner to the paper."
},
{
"id": "C3-129",
"ch": 3,
"topic": "Input/output devices",
"marks": 1,
"q": "How does a 3D printer create an object?",
"code": null,
"opts": [
"By cutting material away from a larger solid block of plastic",
"By heating toner so that it is fixed onto the surface of paper",
"By projecting a solid hologram of the object into the air",
"By depositing material layer by layer from a digital model"
],
"ans": 3,
"why": "3D printing is additive manufacturing, usually using melted plastic or resin."
},
{
"id": "C3-130",
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
"id": "C3-131",
"ch": 3,
"topic": "Input/output devices",
"marks": 1,
"q": "What does a microphone do?",
"code": null,
"opts": [
"It converts digital data into analogue voltage for a monitor",
"It converts electrical signals into sound waves",
"It converts sound waves into electrical signals",
"It converts light into electrical signals"
],
"ans": 2,
"why": "A microphone is an input device; a speaker performs the reverse."
},
{
"id": "C3-132",
"ch": 3,
"topic": "Input/output devices",
"marks": 2,
"q": "A virtual reality headset gives the user a view that changes as they turn their head. Which components make this possible?",
"code": null,
"opts": [
"Two small screens, one for each eye, and sensors that track head movement",
"A touchscreen display and a GPS receiver that tracks the user",
"One large flat screen and a microphone that detects speech commands",
"A printer and a scanner that capture the user's surroundings in 3D"
],
"ans": 0,
"why": "The headset displays slightly different images to each eye and uses motion sensors to update them."
},
{
"id": "C3-133",
"ch": 3,
"topic": "Monitoring and control",
"marks": 2,
"q": "Which is an example of a control system rather than a monitoring system?",
"code": null,
"opts": [
"A weather station that records the air temperature at the end of every hour",
"A data logger that stores the light levels measured in a greenhouse each day",
"A hospital machine that continuously displays a patient's heart rate on a screen",
"A thermostat switches a heater on or off to keep a room at a set temperature"
],
"ans": 3,
"why": "A monitoring system only records/displays; a control system also changes the process using actuators."
},
{
"id": "C3-134",
"ch": 3,
"topic": "Monitoring and control",
"marks": 1,
"q": "What is the role of an actuator in a control system?",
"code": null,
"opts": [
"To convert a processor signal into physical movement, e.g. opening a valve",
"To convert the analogue readings from sensors into digital values",
"To store all of the readings that have been taken by the sensors",
"To measure a physical quantity and then send the value to the processor"
],
"ans": 0,
"why": "Sensors input data; actuators carry out the physical actions."
},
{
"id": "C3-135",
"ch": 3,
"topic": "Monitoring and control",
"marks": 2,
"q": "What is meant by feedback in a control system?",
"code": null,
"opts": [
"The system is switched off when a sensor value is outside its range",
"The processor sends a copy of every sensor reading to a printer for the user",
"The actuator reports an error message to the user if it fails to move",
"Readings caused by the last output are used to decide the next output"
],
"ans": 3,
"why": "Feedback lets the system respond to the result of its own previous actions."
},
{
"id": "C3-136",
"ch": 3,
"topic": "Monitoring and control",
"marks": 1,
"q": "Which sensor is most suitable for detecting a person entering a room?",
"code": null,
"opts": [
"Infra-red",
"Moisture",
"Humidity",
"pH"
],
"ans": 0,
"why": "Infra-red (motion) sensors detect heat/movement."
},
{
"id": "C3-137",
"ch": 3,
"topic": "Logic gates",
"marks": 1,
"q": "Which logic gate gives an output of 0 only when both of its inputs are 1?",
"code": null,
"opts": [
"AND",
"NOR",
"XOR",
"NAND"
],
"ans": 3,
"why": "NAND is the inverse of AND."
},
{
"id": "C3-138",
"ch": 3,
"topic": "Logic gates",
"marks": 1,
"q": "Which logic gate gives an output of 1 only when both of its inputs are 0?",
"code": null,
"opts": [
"NOR",
"XOR",
"NAND",
"OR"
],
"ans": 0,
"why": "NOR is the inverse of OR."
},
{
"id": "C3-139",
"ch": 3,
"topic": "Logic gates",
"marks": 1,
"q": "Which logic gate gives an output of 1 when its two inputs are different?",
"code": null,
"opts": [
"OR",
"AND",
"NOR",
"XOR"
],
"ans": 3,
"why": "Exclusive OR is true when exactly one input is 1."
},
{
"id": "C3-140",
"ch": 3,
"topic": "Logic gates",
"marks": 2,
"q": "A warning light X is on when sensor A is on and at least one of sensors B or C is on. Which expression represents this?",
"code": null,
"opts": [
"X = (A AND B) OR C",
"X = A OR (B AND C)",
"X = A AND (B OR C)",
"X = A AND B AND C"
],
"ans": 2,
"why": "A must be on AND (B or C) on. The bracket is essential."
},
{
"id": "C3-141",
"ch": 3,
"topic": "Logic gates",
"marks": 2,
"q": "An alarm X sounds when the door is open (D = 1) and the system is NOT switched off (S = 1 means switched off). Which expression represents this?",
"code": null,
"opts": [
"X = (NOT D) AND S",
"X = D OR (NOT S)",
"X = D AND (NOT S)",
"X = NOT (D AND S)"
],
"ans": 2,
"why": "The alarm needs the door to be open AND the system not switched off."
},
{
"id": "C3-142",
"ch": 3,
"topic": "Logic gates",
"marks": 2,
"q": "A logic circuit implements X = (A NAND B) OR (B NOR C). How many of the 8 rows of its truth table give X = 1?",
"code": null,
"opts": [
"5",
"6",
"4",
"7"
],
"ans": 1,
"why": "Complete the truth table for all 8 input combinations and count the rows where X = 1."
},
{
"id": "C3-143",
"ch": 3,
"topic": "Logic gates",
"marks": 2,
"q": "A logic circuit implements X = (A OR B) AND NOT (B AND C). How many of the 8 rows of its truth table give X = 1?",
"code": null,
"opts": [
"6",
"4",
"3",
"5"
],
"ans": 1,
"why": "Complete the truth table for all 8 input combinations and count the rows where X = 1."
},
{
"id": "C3-144",
"ch": 3,
"topic": "Logic gates",
"marks": 2,
"q": "A logic circuit implements X = (A XOR B) AND C. Which inputs give X = 1?",
"code": null,
"opts": [
"A = 0, B = 0, C = 1",
"A = 0, B = 1, C = 0",
"A = 0, B = 1, C = 1",
"A = 1, B = 1, C = 1"
],
"ans": 2,
"why": "Evaluate each bracket separately for the inputs: for A = 0, B = 1, C = 1 the expression evaluates to 1."
},
{
"id": "C3-145",
"ch": 3,
"topic": "Logic gates",
"marks": 2,
"q": "A logic circuit implements X = (A NOR B) XOR C. How many of the 8 rows of its truth table give X = 1?",
"code": null,
"opts": [
"5",
"4",
"3",
"2"
],
"ans": 1,
"why": "Complete the truth table for all 8 input combinations and count the rows where X = 1."
},
{
"id": "C3-146",
"ch": 3,
"topic": "Logic gates",
"marks": 2,
"q": "A logic circuit implements X = NOT (A AND B) AND (B OR C). Which inputs give X = 1?",
"code": null,
"opts": [
"A = 0, B = 1, C = 0",
"A = 1, B = 1, C = 0",
"A = 0, B = 0, C = 0",
"A = 1, B = 0, C = 0"
],
"ans": 0,
"why": "Evaluate each bracket separately for the inputs: for A = 0, B = 1, C = 0 the expression evaluates to 1."
},
{
"id": "C3-147",
"ch": 3,
"topic": "Logic gates",
"marks": 2,
"q": "A logic circuit implements X = (A XOR C) OR (B AND NOT A). How many of the 8 rows of its truth table give X = 1?",
"code": null,
"opts": [
"6",
"5",
"3",
"4"
],
"ans": 1,
"why": "Complete the truth table for all 8 input combinations and count the rows where X = 1."
},
{
"id": "C3-148",
"ch": 3,
"topic": "Logic gates",
"marks": 2,
"q": "A logic circuit implements X = NOT (A OR B) AND C. Which inputs give X = 1?",
"code": null,
"opts": [
"A = 0, B = 1, C = 0",
"A = 0, B = 0, C = 0",
"A = 0, B = 0, C = 1",
"A = 1, B = 0, C = 1"
],
"ans": 2,
"why": "Evaluate each bracket separately for the inputs: for A = 0, B = 0, C = 1 the expression evaluates to 1."
},
{
"id": "C3-149",
"ch": 3,
"topic": "Logic gates",
"marks": 2,
"q": "A logic circuit implements X = (A AND B) OR NOT C. How many of the 8 rows of its truth table give X = 1?",
"code": null,
"opts": [
"6",
"4",
"5",
"3"
],
"ans": 2,
"why": "Complete the truth table for all 8 input combinations and count the rows where X = 1."
},
{
"id": "C3-150",
"ch": 3,
"topic": "Input/output devices",
"marks": 2,
"q": "How does a resistive touchscreen detect a touch?",
"code": null,
"opts": [
"A grid of infra-red beams is broken by the finger and the position is calculated",
"Pressure pushes two conductive layers together and the coordinates are calculated",
"The finger changes the electric charge or field on the surface of the screen, which is measured",
"A camera behind the screen detects the position of the finger and passes it to the processor"
],
"ans": 1,
"why": "Capacitive screens detect a change in charge or electric field; resistive screens detect pressure."
},
{
"id": "C3-151",
"ch": 3,
"topic": "Input/output devices",
"marks": 2,
"q": "A factory worker wears thick gloves. Which touchscreen type is suitable and why?",
"code": null,
"opts": [
"Resistive, because it responds to pressure from any object",
"Capacitive, because it responds to any object that touches it",
"Resistive, because it detects the electric charge in the glove",
"Capacitive, because it supports several touches at the same time"
],
"ans": 0,
"why": "Capacitive screens need a conductive touch such as bare skin; resistive screens only need pressure."
},
{
"id": "C3-152",
"ch": 3,
"topic": "Input/output devices",
"marks": 1,
"q": "How does a loudspeaker produce sound?",
"code": null,
"opts": [
"A varying current in a coil in a magnetic field moves a cone that vibrates the air",
"Sound waves move a diaphragm, which produces a varying electric current in a coil",
"A laser makes a thin membrane vibrate at the same frequency as the sound",
"Charged particles are printed onto the air at the frequency of the sound"
],
"ans": 0,
"why": "The second option describes a microphone."
},
{
"id": "C3-153",
"ch": 3,
"topic": "Monitoring and control",
"marks": 2,
"q": "A greenhouse must be kept at 25 °C. Which pair of devices is needed to control this?",
"code": null,
"opts": [
"A temperature sensor and a display screen showing the readings",
"A light sensor and a motor that opens the roof",
"A moisture sensor and a heater switched by the readings",
"A temperature sensor and a heater or fan actuator"
],
"ans": 3,
"why": "Control needs a sensor for the controlled quantity and an actuator; a display only monitors."
},
{
"id": "C3-154",
"ch": 3,
"topic": "Memory and storage",
"marks": 1,
"q": "How is data stored in solid state (flash) memory?",
"code": null,
"opts": [
"Capacitors store a charge that must be refreshed regularly",
"Pits are burned into the surface of the disc by a laser",
"Tiny areas of a spinning platter are magnetised in one of two directions",
"Electrons are trapped in floating gates and stay there without power"
],
"ans": 3,
"why": "The last option describes DRAM, the second describes optical discs and the first a magnetic disk."
},
{
"id": "C3-155",
"ch": 3,
"topic": "Logic gates",
"marks": 2,
"q": "X is 1 only for the input patterns (A, B, C) = (1, 1, 0) and (1, 1, 1). Which expression gives this?",
"code": null,
"opts": [
"X = A OR B",
"X = A AND B",
"X = A AND B AND C",
"X = (A AND B) AND NOT C"
],
"ans": 1,
"why": "C makes no difference in the two rows, so X = A AND B."
},
{
"id": "C3-156",
"ch": 3,
"topic": "Logic gates",
"marks": 2,
"q": "X is 1 only for the input patterns (A, B, C) = (0, 1, 1), (1, 0, 1) and (1, 1, 1). Which expression gives this?",
"code": null,
"opts": [
"X = (A AND B) OR C",
"X = C AND (A OR B)",
"X = (A XOR B) AND C",
"X = A AND B AND C"
],
"ans": 1,
"why": "C must be 1, and at least one of A or B must be 1."
},
{
"id": "C3-157",
"ch": 3,
"topic": "Logic gates",
"marks": 1,
"q": "X is 1 only when A = 0 and B = 0. Which single logic gate behaves like this?",
"code": null,
"opts": [
"AND",
"XOR",
"NAND",
"NOR"
],
"ans": 3,
"why": "NOR is the inverse of OR."
},
{
"id": "C4-158",
"ch": 4,
"topic": "CPU architecture",
"marks": 2,
"q": "Which statement describes the stored program concept of the Von Neumann model?",
"code": null,
"opts": [
"Each instruction is read directly from the keyboard when it is needed",
"Program and data are held in one memory and instructions run in sequence",
"The program is held in the CPU registers while data is held in memory",
"Instructions are held in ROM and data is held in a separate memory"
],
"ans": 1,
"why": "In a Von Neumann machine both program and data are in the same memory and are fetched using the same buses."
},
{
"id": "C4-159",
"ch": 4,
"topic": "CPU architecture",
"marks": 1,
"q": "What is held in the Program Counter (PC)?",
"code": null,
"opts": [
"The address of the data being written to memory",
"The result of the last calculation carried out by the ALU",
"The address of the next instruction to be fetched",
"The instruction that is currently being decoded"
],
"ans": 2,
"why": "The PC is incremented after each fetch so that it points to the next instruction."
},
{
"id": "C4-160",
"ch": 4,
"topic": "CPU architecture",
"marks": 1,
"q": "What is held in the Memory Address Register (MAR)?",
"code": null,
"opts": [
"The address of the location about to be read from or written to",
"The result of the last arithmetic operation carried out by the ALU",
"The instruction that is currently being decoded and executed",
"The data that has just been read from memory by the processor"
],
"ans": 0,
"why": "The MAR places an address on the address bus."
},
{
"id": "C4-161",
"ch": 4,
"topic": "CPU architecture",
"marks": 1,
"q": "What is held in the Memory Data Register (MDR)?",
"code": null,
"opts": [
"The status flags set by the last comparison carried out by the ALU",
"The data or instruction just fetched from, or about to be written to, memory",
"The address of the next instruction that is to be fetched from memory",
"The address of the memory location that is about to be accessed"
],
"ans": 1,
"why": "The MDR is the buffer between the processor and the data bus."
},
{
"id": "C4-162",
"ch": 4,
"topic": "CPU architecture",
"marks": 1,
"q": "What is held in the Current Instruction Register (CIR)?",
"code": null,
"opts": [
"The value that was most recently stored in memory",
"The instruction that is being decoded and executed",
"The base address for indexed addressing",
"The address of the next instruction to be fetched"
],
"ans": 1,
"why": "After the fetch, the instruction is copied from the MDR into the CIR for decoding."
},
{
"id": "C4-163",
"ch": 4,
"topic": "CPU architecture",
"marks": 1,
"q": "What is the purpose of the accumulator (ACC)?",
"code": null,
"opts": [
"To count the number of instructions that have been executed so far",
"To store the flags that are set by comparisons and calculations",
"To hold the address of the next instruction that will be fetched",
"To hold data being processed and the results of the ALU's calculations"
],
"ans": 3,
"why": "The accumulator is the register used for the ALU's inputs/outputs."
},
{
"id": "C4-164",
"ch": 4,
"topic": "CPU architecture",
"marks": 1,
"q": "What is the purpose of the status register?",
"code": null,
"opts": [
"To hold flags that record the outcome of operations, such as overflow",
"To hold a copy of the instruction that is being executed",
"To hold the address of the next instruction in the program",
"To hold the data that is waiting to be written to memory"
],
"ans": 0,
"why": "Bits in the status register act as flags (zero, carry, overflow, etc.)."
},
{
"id": "C4-165",
"ch": 4,
"topic": "CPU architecture",
"marks": 2,
"q": "Which statement about the buses is correct?",
"code": null,
"opts": [
"The control bus carries the addresses of the memory locations used",
"The address bus is unidirectional whereas the data bus is bidirectional",
"The data bus carries addresses from the CPU to memory",
"The address bus is bidirectional whereas the data bus is unidirectional"
],
"ans": 1,
"why": "Addresses are only sent by the CPU; data and instructions travel both ways; control signals travel on the control bus."
},
{
"id": "C4-166",
"ch": 4,
"topic": "CPU architecture",
"marks": 1,
"q": "What is the function of the control unit (CU)?",
"code": null,
"opts": [
"To convert the digital data into analogue data for output",
"To carry out all of the arithmetic and logic operations",
"To decode instructions and signal the other components what to do",
"To store programs and data permanently when power is off"
],
"ans": 2,
"why": "The ALU does the calculations; the CU directs the operation."
},
{
"id": "C4-167",
"ch": 4,
"topic": "CPU architecture",
"marks": 2,
"q": "A computer's data bus is widened from 32 bits to 64 bits. What is the main effect?",
"code": null,
"opts": [
"The number of memory locations that can be addressed is increased",
"More bits can be moved in each clock cycle, which can improve performance",
"The clock speed of the processor is increased as a result",
"Instructions are executed in a different order from before"
],
"ans": 1,
"why": "Bus width affects how much data can be transferred at once. Address bus width determines the addressable memory."
},
{
"id": "C4-168",
"ch": 4,
"topic": "CPU architecture",
"marks": 2,
"q": "A processor with two cores is replaced by one with four cores running at the same clock speed. Which statement is correct?",
"code": null,
"opts": [
"Performance doubles because each core runs at double speed",
"Performance is unchanged because the clock speed is unchanged",
"Performance may fall because the cores must share the same cache",
"Performance may improve, but only if the software can share the work"
],
"ans": 3,
"why": "More cores allow parallel execution, but the gain depends on how well the software is written."
},
{
"id": "C4-169",
"ch": 4,
"topic": "CPU architecture",
"marks": 2,
"q": "Why does adding cache memory generally improve performance?",
"code": null,
"opts": [
"The processor's clock speed is increased to match the speed of the cache",
"More programs can be kept permanently inside the computer without secondary storage",
"The width of the address bus is increased to give more memory locations",
"Frequently used data is held in fast memory near the processor, so fetching is quicker"
],
"ans": 3,
"why": "Cache is small, very fast memory (SRAM)."
},
{
"id": "C4-170",
"ch": 4,
"topic": "CPU architecture",
"marks": 1,
"q": "Which port can carry a digital video and audio signal to a monitor or television in a single cable?",
"code": null,
"opts": [
"PS/2",
"HDMI",
"VGA",
"Serial"
],
"ans": 1,
"why": "VGA carries an analogue video signal only; HDMI carries digital video and audio."
},
{
"id": "C4-171",
"ch": 4,
"topic": "CPU architecture",
"marks": 2,
"q": "A computer's clock speed is increased. What is the most direct effect?",
"code": null,
"opts": [
"More fetch-execute cycles can be carried out each second",
"More memory locations can be addressed by the processor",
"Each instruction is made shorter so it is fetched faster",
"The width of the data bus is increased to carry more bits"
],
"ans": 0,
"why": "Clock speed is the number of cycles per second; more cycles generally mean more instructions executed."
},
{
"id": "C4-172",
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
"id": "C4-173",
"ch": 4,
"topic": "Fetch-execute and interrupts",
"marks": 1,
"q": "Which register transfer places the fetched instruction in the CIR?",
"code": null,
"opts": [
"CIR ← [PC]",
"CIR ← [MAR]",
"CIR ← [MDR]",
"MDR ← [CIR]"
],
"ans": 2,
"why": "The instruction arrives in the MDR from memory and is then copied to the CIR."
},
{
"id": "C4-174",
"ch": 4,
"topic": "Fetch-execute and interrupts",
"marks": 2,
"q": "During the fetch-execute cycle, what happens to the PC after the address of the next instruction has been copied to the MAR?",
"code": null,
"opts": [
"It is incremented to point at the next instruction",
"It is replaced by the instruction held in the CIR",
"It is copied into the accumulator for the ALU to use",
"It is cleared to zero ready for the next program"
],
"ans": 0,
"why": "PC ← [PC] + 1 happens during the fetch stage (unless a jump later changes it)."
},
{
"id": "C4-175",
"ch": 4,
"topic": "Fetch-execute and interrupts",
"marks": 2,
"q": "When does a processor normally check whether an interrupt has occurred?",
"code": null,
"opts": [
"After the decode stage but before the instruction has been executed",
"Only when no program is running and the CPU is sitting idle",
"At the end of each cycle, after the current instruction has executed",
"Each time the PC is incremented during the fetch stage of a cycle"
],
"ans": 2,
"why": "The processor completes the current instruction cycle, then checks for interrupts."
},
{
"id": "C4-176",
"ch": 4,
"topic": "Fetch-execute and interrupts",
"marks": 2,
"q": "An interrupt with a higher priority than the current task is detected. What happens?",
"code": null,
"opts": [
"The current program is deleted from memory and the computer restarts",
"Register contents are saved, the ISR runs, then the saved values are restored",
"The interrupt is ignored until the current program has finished running",
"The ISR runs and the interrupted program restarts from its first instruction"
],
"ans": 1,
"why": "The processor saves the state, executes the ISR, restores the state and resumes the interrupted program."
},
{
"id": "C4-177",
"ch": 4,
"topic": "Fetch-execute and interrupts",
"marks": 1,
"q": "Which is a possible cause of an interrupt?",
"code": null,
"opts": [
"The PC is incremented",
"The ALU completes an addition",
"A user presses a key on the keyboard",
"The MAR is loaded with an address"
],
"ans": 2,
"why": "Interrupts come from hardware events (key press, printer needs attention), software (error, division by zero) or timers."
},
{
"id": "C4-178",
"ch": 4,
"topic": "Assembly language",
"marks": 2,
"q": "What is carried out in the first pass of a two-pass assembler?",
"code": null,
"opts": [
"The programmer is asked to enter the missing addresses",
"A symbol table is built that links each label to its address",
"The machine code is executed once to check that it works",
"The high-level program is converted into assembly code"
],
"ans": 1,
"why": "Pass 1 builds the symbol table; pass 2 translates the instructions to machine code using it."
},
{
"id": "C4-179",
"ch": 4,
"topic": "Assembly language",
"marks": 2,
"q": "What is carried out in the second pass of a two-pass assembler?",
"code": null,
"opts": [
"The machine code is loaded into the CIR and then executed at once",
"Instructions are translated to machine code using the symbol table",
"Labels are found and entered into the symbol table with addresses",
"The source program is compressed in order to save memory space"
],
"ans": 1,
"why": "In the second pass every label is replaced by its address and the machine code is produced."
},
{
"id": "C4-180",
"ch": 4,
"topic": "Assembly language",
"marks": 1,
"q": "A machine code instruction is made up of",
"code": null,
"opts": [
"an opcode and an operand",
"an address and a buffer",
"a header and a footer",
"a label and a comment"
],
"ans": 0,
"why": "The opcode specifies the operation; the operand holds the data or address."
},
{
"id": "C4-181",
"ch": 4,
"topic": "Assembly language",
"marks": 2,
"q": "Which statement describes indirect addressing?",
"code": null,
"opts": [
"The operand is the data to be used",
"The address is found by adding the operand to the value in the index register",
"The address is found by adding an offset to the address of the current instruction",
"The operand is an address that holds the address of the data to be used"
],
"ans": 3,
"why": "In LDI, the contents of the given address are used as the address of the actual data."
},
{
"id": "C4-182",
"ch": 4,
"topic": "Assembly language",
"marks": 2,
"q": "Which statement describes indexed addressing?",
"code": null,
"opts": [
"The address used is the operand plus the contents of the index register",
"The address used is found by multiplying the operand by the accumulator",
"The operand is an address that itself holds the address of the data",
"The operand is the data that is to be used directly by the instruction"
],
"ans": 0,
"why": "LDX uses address = operand + IX, which is useful for processing arrays."
},
{
"id": "C4-183",
"ch": 4,
"topic": "Assembly language",
"marks": 2,
"q": "Which statement describes relative addressing?",
"code": null,
"opts": [
"The address used is the operand plus the contents of the index register",
"The address is found by adding an offset to the current instruction's address",
"The operand is the address of the address of the data",
"The operand is the data value that is to be used immediately by the CPU"
],
"ans": 1,
"why": "Relative addressing is useful for jumps, because code stays valid if it is loaded elsewhere."
},
{
"id": "C4-184",
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
"id": "C4-185",
"ch": 4,
"topic": "Bit manipulation",
"marks": 2,
"q": "Which instruction sets the two most significant bits of the accumulator to 1 and leaves all other bits unchanged?",
"code": null,
"opts": [
"OR B00111111",
"XOR B11000000",
"OR B11000000",
"AND B11000000"
],
"ans": 2,
"why": "OR with 1 sets a bit; OR with 0 leaves it unchanged. XOR would toggle the bits."
},
{
"id": "C4-186",
"ch": 4,
"topic": "Bit manipulation",
"marks": 2,
"q": "Which instruction sets the four least significant bits of the accumulator to 0 and leaves the other bits unchanged?",
"code": null,
"opts": [
"OR B11110000",
"AND B00001111",
"XOR B00001111",
"AND B11110000"
],
"ans": 3,
"why": "AND with 0 clears a bit; AND with 1 leaves it unchanged."
},
{
"id": "C4-187",
"ch": 4,
"topic": "Bit manipulation",
"marks": 2,
"q": "Which instruction toggles (inverts) only the most significant bit of the accumulator?",
"code": null,
"opts": [
"AND B10000000",
"OR B10000000",
"XOR B01111111",
"XOR B10000000"
],
"ans": 3,
"why": "XOR with 1 inverts a bit; XOR with 0 leaves it unchanged."
},
{
"id": "C4-188",
"ch": 4,
"topic": "Bit manipulation",
"marks": 2,
"q": "A program uses AND B00000100 on the accumulator and then compares the result with zero to test a sensor bit. What does it test?",
"code": null,
"opts": [
"Whether bit 2 (counting from 0 on the right) is a 1",
"Whether bit 5 (counting from 0 on the right) is a 1",
"Whether bit 3 (counting from 0 on the right) is a 1",
"Whether every bit except bit 2 is a 1"
],
"ans": 0,
"why": "A bit mask isolates one bit; a non-zero result means that bit was 1."
},
{
"id": "C4-189",
"ch": 4,
"topic": "CPU architecture",
"marks": 1,
"q": "A processor has an address bus with 16 lines. What is the maximum number of memory locations it can address?",
"code": null,
"opts": [
"256",
"131,072",
"65,536",
"262,144"
],
"ans": 2,
"why": "2^16 = 65,536."
},
{
"id": "C4-190",
"ch": 4,
"topic": "CPU architecture",
"marks": 1,
"q": "A processor has an address bus with 24 lines. What is the maximum number of memory locations it can address?",
"code": null,
"opts": [
"33,554,432",
"576",
"16,777,216",
"67,108,864"
],
"ans": 2,
"why": "2^24 = 16,777,216."
},
{
"id": "C4-191",
"ch": 4,
"topic": "Bit manipulation",
"marks": 2,
"q": "The accumulator contains 01010101. The instruction LSL #1 is executed. What does the accumulator now contain?",
"code": null,
"opts": [
"00101010",
"10101110",
"01010100",
"10101010"
],
"ans": 3,
"why": "A logical shift moves bits 1 place(s) left; zeros enter at the other end and bits shifted out are lost."
},
{
"id": "C4-192",
"ch": 4,
"topic": "Bit manipulation",
"marks": 2,
"q": "The accumulator contains 01101001. The instruction LSR #3 is executed. What does the accumulator now contain?",
"code": null,
"opts": [
"00001101",
"00011010",
"00000110",
"00101101"
],
"ans": 0,
"why": "A logical shift moves bits 3 place(s) right; zeros enter at the other end and bits shifted out are lost."
},
{
"id": "C4-193",
"ch": 4,
"topic": "Bit manipulation",
"marks": 2,
"q": "The accumulator contains 10110000. The instruction LSL #3 is executed. What does the accumulator now contain?",
"code": null,
"opts": [
"00010110",
"10000101",
"10000000",
"11000000"
],
"ans": 2,
"why": "A logical shift moves bits 3 place(s) left; zeros enter at the other end and bits shifted out are lost."
},
{
"id": "C4-194",
"ch": 4,
"topic": "Bit manipulation",
"marks": 2,
"q": "The accumulator contains 01101010. The instruction LSR #1 is executed. What does the accumulator now contain?",
"code": null,
"opts": [
"11010100",
"00011010",
"00110101",
"01110101"
],
"ans": 2,
"why": "A logical shift moves bits 1 place(s) right; zeros enter at the other end and bits shifted out are lost."
},
{
"id": "C4-195",
"ch": 4,
"topic": "Bit manipulation",
"marks": 2,
"q": "The accumulator contains 01111110. The instruction OR B01100110 is executed. What does the accumulator now contain?",
"code": null,
"opts": [
"01111110",
"00011000",
"10000001",
"01100110"
],
"ans": 0,
"why": "Apply OR to each pair of bits: 01111110 OR 01100110 = 01111110."
},
{
"id": "C4-196",
"ch": 4,
"topic": "Bit manipulation",
"marks": 2,
"q": "The accumulator contains 10100000. The instruction XOR B00001111 is executed. What does the accumulator now contain?",
"code": null,
"opts": [
"10101111",
"10001111",
"00000000",
"01011111"
],
"ans": 0,
"why": "Apply XOR to each pair of bits: 10100000 XOR 00001111 = 10101111."
},
{
"id": "C4-197",
"ch": 4,
"topic": "Bit manipulation",
"marks": 2,
"q": "The accumulator contains 10000111. The instruction AND B00111100 is executed. What does the accumulator now contain?",
"code": null,
"opts": [
"10111011",
"10111111",
"01111000",
"00000100"
],
"ans": 3,
"why": "Apply AND to each pair of bits: 10000111 AND 00111100 = 00000100."
},
{
"id": "C4-198",
"ch": 4,
"topic": "Bit manipulation",
"marks": 2,
"q": "The accumulator contains 11000100. The instruction OR B10101010 is executed. What does the accumulator now contain?",
"code": null,
"opts": [
"01101110",
"10000000",
"11101110",
"00111011"
],
"ans": 2,
"why": "Apply OR to each pair of bits: 11000100 OR 10101010 = 11101110."
},
{
"id": "C4-199",
"ch": 4,
"topic": "Assembly language",
"marks": 2,
"q": "What is stored in location 305 after this program is run?",
"code": "Memory (address: contents)\n300: 17\n301: 38\n302: 7\n303: 14\n304: 27\n305: 9\n\nProgram\nLDD 303\nADD 300\nSTO 305",
"opts": [
"17",
"14",
"603",
"31"
],
"ans": 3,
"why": "LDD loads the contents of the first address, ADD adds the contents of the second, STO stores the sum. Result: 31."
},
{
"id": "C4-200",
"ch": 4,
"topic": "Assembly language",
"marks": 2,
"q": "What number is in the accumulator when OUT is reached?",
"code": "Memory (address: contents)\n300: 303\n301: 10\n302: 44\n303: 40\n304: 10\n305: 21\n\nProgram\nLDI 300\nADD #10\nOUT",
"opts": [
"50",
"48",
"40",
"49"
],
"ans": 0,
"why": "LDI uses the contents of the given address as the address of the data (a pointer). Result: 50."
},
{
"id": "C4-201",
"ch": 4,
"topic": "Assembly language",
"marks": 2,
"q": "What number is in the accumulator after the program has run?",
"code": "Memory (address: contents)\n300: 13\n301: 53\n302: 38\n303: 55\n304: 57\n305: 42\n\nProgram\nLDR #4\nLDX 300\nADD #1",
"opts": [
"58",
"57",
"14",
"305"
],
"ans": 0,
"why": "LDX uses address = operand + IX, where IX was set by LDR. Result: 58."
},
{
"id": "C4-202",
"ch": 4,
"topic": "Assembly language",
"marks": 2,
"q": "What is stored in location 305 after this program is run?",
"code": "Memory (address: contents)\n300: 7\n301: 32\n302: 58\n303: 42\n304: 28\n305: 55\n\nProgram\nLDD 304\nADD 300\nSTO 305",
"opts": [
"328",
"35",
"41",
"21"
],
"ans": 1,
"why": "LDD loads the contents of the first address, ADD adds the contents of the second, STO stores the sum. Result: 35."
},
{
"id": "C4-203",
"ch": 4,
"topic": "Assembly language",
"marks": 2,
"q": "What number is in the accumulator when OUT is reached?",
"code": "Memory (address: contents)\n300: 303\n301: 7\n302: 12\n303: 45\n304: 36\n305: 32\n\nProgram\nLDI 300\nADD #10\nOUT",
"opts": [
"46",
"45",
"61",
"55"
],
"ans": 3,
"why": "LDI uses the contents of the given address as the address of the data (a pointer). Result: 55."
},
{
"id": "C4-204",
"ch": 4,
"topic": "Assembly language",
"marks": 2,
"q": "What number is in the accumulator after the program has run?",
"code": "Memory (address: contents)\n300: 35\n301: 48\n302: 50\n303: 32\n304: 37\n305: 27\n\nProgram\nLDR #4\nLDX 300\nADD #1",
"opts": [
"34",
"38",
"37",
"36"
],
"ans": 1,
"why": "LDX uses address = operand + IX, where IX was set by LDR. Result: 38."
},
{
"id": "C4-205",
"ch": 4,
"topic": "Assembly language",
"marks": 2,
"q": "How many times is the instruction ADD #2 executed?",
"code": "      LDM #0\nloop: ADD #2\n      CMP #8\n      JPN loop\n      END",
"opts": [
"8",
"2",
"4",
"6"
],
"ans": 2,
"why": "ACC goes 2, 4, ... 8. JPN jumps back while ACC is not equal to 8, so ADD #2 runs 4 times."
},
{
"id": "C4-206",
"ch": 4,
"topic": "Assembly language",
"marks": 2,
"q": "How many times is the instruction ADD #2 executed?",
"code": "      LDM #0\nloop: ADD #2\n      CMP #12\n      JPN loop\n      END",
"opts": [
"5",
"4",
"12",
"6"
],
"ans": 3,
"why": "ACC goes 2, 4, ... 12. JPN jumps back while ACC is not equal to 12, so ADD #2 runs 6 times."
},
{
"id": "C4-207",
"ch": 4,
"topic": "Assembly language",
"marks": 2,
"q": "What is the value in the accumulator when OUT is executed?",
"code": "      LDM #0\nloop: ADD #2\n      CMP #6\n      JPN loop\n      OUT\n      END",
"opts": [
"10",
"12",
"6",
"8"
],
"ans": 2,
"why": "The loop stops when ACC equals 6."
},
{
"id": "C4-208",
"ch": 4,
"topic": "Assembly language",
"marks": 2,
"q": "What is the value in the accumulator when OUT is executed?",
"code": "      LDM #0\nloop: ADD #2\n      CMP #10\n      JPN loop\n      OUT\n      END",
"opts": [
"10",
"12",
"14",
"20"
],
"ans": 0,
"why": "The loop stops when ACC equals 10."
},
{
"id": "C4-209",
"ch": 4,
"topic": "Fetch-execute and interrupts",
"marks": 1,
"q": "Which register transfer copies the contents of the memory location addressed by the MAR into the MDR?",
"code": null,
"opts": [
"MAR ← [[MDR]]",
"MDR ← [PC]",
"MDR ← [MAR]",
"MDR ← [[MAR]]"
],
"ans": 3,
"why": "[MAR] is the address itself; [[MAR]] is the contents of the location at that address."
},
{
"id": "C4-210",
"ch": 4,
"topic": "Fetch-execute and interrupts",
"marks": 2,
"q": "Which is a correct order for the register transfers in the fetch stage?",
"code": null,
"opts": [
"MAR ← [PC]; CIR ← [MDR]; MDR ← [[MAR]]; PC ← [PC] + 1",
"MAR ← [PC]; PC ← [PC] + 1; MDR ← [[MAR]]; CIR ← [MDR]",
"PC ← [PC] + 1; MAR ← [PC]; MDR ← [[MAR]]; CIR ← [MDR]",
"MDR ← [PC]; MAR ← [[MDR]]; CIR ← [MAR]; PC ← [PC] + 1"
],
"ans": 1,
"why": "The address in the PC goes to the MAR, the PC is incremented, memory is read into the MDR and the instruction is copied to the CIR."
},
{
"id": "C4-211",
"ch": 4,
"topic": "CPU architecture",
"marks": 1,
"q": "What is the purpose of the Index Register (IX)?",
"code": null,
"opts": [
"It holds the address of the next instruction that is to be fetched",
"It holds the result of the most recent comparison of two values",
"It holds a value that is added to an address in indexed addressing",
"It holds the instruction that is being decoded by the control unit"
],
"ans": 2,
"why": "The index register is used to step through arrays and similar structures."
},
{
"id": "C4-212",
"ch": 4,
"topic": "CPU architecture",
"marks": 1,
"q": "What is the role of the system clock?",
"code": null,
"opts": [
"To set the number of bits that the data bus can carry at one time",
"To send timing signals along the control bus to synchronise the components",
"To record the date and time at which each file on the computer was last saved",
"To count the number of instructions the processor has executed so far"
],
"ans": 1,
"why": "The clock paces the fetch-execute cycle."
},
{
"id": "C4-213",
"ch": 4,
"topic": "CPU architecture",
"marks": 1,
"q": "Which statement about a general-purpose register is correct?",
"code": null,
"opts": [
"It permanently holds the address of the next instruction to be fetched",
"It holds the flags produced by the ALU after each calculation",
"It can only be used by the operating system and not by programs",
"It can temporarily hold any data the program is working on"
],
"ans": 3,
"why": "Special-purpose registers (PC, MAR, MDR, CIR, status register) have fixed roles."
},
{
"id": "C4-214",
"ch": 4,
"topic": "CPU architecture",
"marks": 1,
"q": "Which is a feature of a USB port?",
"code": null,
"opts": [
"It connects many types of peripheral and can supply them with power",
"It carries an analogue video signal and nothing else",
"It can only be used to connect a single external monitor",
"It needs a different type of port for each type of device"
],
"ans": 0,
"why": "VGA carries analogue video; USB is a general-purpose serial connection."
},
{
"id": "C4-215",
"ch": 4,
"topic": "Bit manipulation",
"marks": 2,
"q": "The accumulator contains 10110101, a two's complement number. An arithmetic shift right of 2 places is carried out. What does the accumulator now contain?",
"code": null,
"opts": [
"11010100",
"00101101",
"01101101",
"11101101"
],
"ans": 3,
"why": "An arithmetic shift copies the sign bit into the vacated places (-75 becomes -19). 00101101 is a logical shift; 01101101 a cyclic shift; 11010100 a left shift."
},
{
"id": "C4-216",
"ch": 4,
"topic": "Bit manipulation",
"marks": 2,
"q": "The accumulator contains 10010110. A cyclic shift left of 2 places is carried out. What does the accumulator now contain?",
"code": null,
"opts": [
"10100101",
"01011010",
"01011000",
"00100101"
],
"ans": 1,
"why": "Bits that leave the left end re-enter at the right. 01011000 would be a logical shift left; 10100101 a cyclic shift right."
},
{
"id": "C4-217",
"ch": 4,
"topic": "Assembly language",
"marks": 1,
"q": "The accumulator contains 65 and the instruction OUT is executed. What appears on the screen?",
"code": null,
"opts": [
"The binary number 01000001",
"The number 65",
"The character A",
"The character stored at address 65"
],
"ans": 2,
"why": "OUT displays the character whose ASCII value is in the accumulator."
},
{
"id": "C4-218",
"ch": 4,
"topic": "Assembly language",
"marks": 2,
"q": "Address 200 contains 205 and address 205 contains 17. The accumulator contains 17. The instruction CMI 200 is followed by JPE 300. What happens?",
"code": null,
"opts": [
"The jump is not taken because the value 205 does not equal 17",
"The jump is not taken because CMI stores the value 205 in the accumulator",
"The jump is taken because the value 200 is less than the address 300",
"The jump is taken because the contents of 205 equal the accumulator"
],
"ans": 3,
"why": "CMI uses indirect addressing: it compares ACC with the contents of the address held in location 200, i.e. with the contents of 205."
},
{
"id": "C4-219",
"ch": 4,
"topic": "Assembly language",
"marks": 1,
"q": "Which instruction belongs to the data movement group?",
"code": null,
"opts": [
"JPE 200",
"STO 200",
"CMP 200",
"ADD 200"
],
"ans": 1,
"why": "The groups are data movement, input/output, arithmetic, jumps and compare."
},
{
"id": "C4-220",
"ch": 4,
"topic": "Assembly language",
"marks": 1,
"q": "The instruction LDM &1F is executed. What denary value is now in the accumulator?",
"code": null,
"opts": [
"31",
"241",
"16",
"115"
],
"ans": 0,
"why": "& means hexadecimal: 1 × 16 + 15 = 31."
},
{
"id": "C4-221",
"ch": 4,
"topic": "Assembly language",
"marks": 2,
"q": "Why does an assembler need two passes over a program?",
"code": null,
"opts": [
"A label can be used before its definition, so addresses are found first",
"The first pass checks the logic of the program and reports any errors found",
"The first pass runs the program once to test that it works correctly",
"The machine code is too large to be produced in a single pass"
],
"ans": 0,
"why": "Forward references need the symbol table to be complete before the machine code is produced."
},
{
"id": "C4-222",
"ch": 4,
"topic": "Fetch-execute and interrupts",
"marks": 2,
"q": "The registers have been saved on the stack because of an interrupt. How does the processor start the interrupt service routine?",
"code": null,
"opts": [
"It restarts the interrupted program from its first instruction",
"It copies the whole ISR into the CIR in a single step",
"It loads the start address of the ISR into the PC",
"It loads the ISR address into the MDR and then decodes it"
],
"ans": 2,
"why": "The PC then points at the ISR, so the next fetch reads the ISR's first instruction."
},
{
"id": "C5-223",
"ch": 5,
"topic": "Operating systems",
"marks": 2,
"q": "Why does a general-purpose computer need an operating system?",
"code": null,
"opts": [
"To store the user's files permanently in RAM",
"To provide the processor with a copy of every file on the disk",
"To translate high-level programs into machine code before they run",
"To manage the hardware and provide a platform for application software"
],
"ans": 3,
"why": "The OS hides the complexity of the hardware and manages resources for applications and users."
},
{
"id": "C5-224",
"ch": 5,
"topic": "Operating systems",
"marks": 2,
"q": "Which task is carried out by the memory management part of an operating system?",
"code": null,
"opts": [
"Deciding which process will use the processor next, and for how long",
"Allocating memory to programs and stopping one overwriting another's memory",
"Creating user accounts and controlling which files each user can open",
"Creating folders and controlling the names that are given to files"
],
"ans": 1,
"why": "Memory management allocates/frees memory and protects each process's memory area."
},
{
"id": "C5-225",
"ch": 5,
"topic": "Operating systems",
"marks": 2,
"q": "Which task is carried out by the file management part of an operating system?",
"code": null,
"opts": [
"Allocating blocks of memory to each of the programs that are running",
"Sharing out processor time between all of the running programs",
"Providing a directory structure and controlling how files are named and moved",
"Installing the correct drivers for any newly connected devices"
],
"ans": 2,
"why": "File management provides the means to create, name, organise, open and delete files."
},
{
"id": "C5-226",
"ch": 5,
"topic": "Operating systems",
"marks": 2,
"q": "Which task is part of the security management carried out by an operating system?",
"code": null,
"opts": [
"Allocating memory to each of the programs that are currently running",
"Setting up user accounts and controlling each user's access rights to files",
"Translating assembly language programs into machine code for the CPU",
"Rearranging file fragments on disk so that they are stored together"
],
"ans": 1,
"why": "Security management includes accounts, passwords, access rights and often backup and firewall support."
},
{
"id": "C5-227",
"ch": 5,
"topic": "Operating systems",
"marks": 2,
"q": "Which task is part of the hardware (device) management carried out by an operating system?",
"code": null,
"opts": [
"Providing the user with an editor with context-sensitive prompts",
"Compressing files that are not often used to save space on the disk",
"Checking every file on the disk for signatures of known malware",
"Using drivers to communicate with peripherals and handle their interrupts"
],
"ans": 3,
"why": "The OS uses drivers to control hardware and to manage input/output."
},
{
"id": "C5-228",
"ch": 5,
"topic": "Operating systems",
"marks": 2,
"q": "Which task is part of the process management carried out by an operating system?",
"code": null,
"opts": [
"Converting a high-level program into a machine code program",
"Scheduling which program uses the processor at any one time",
"Formatting a disk so that it can store files",
"Giving each file a unique name in a folder"
],
"ans": 1,
"why": "Process management allows multi-tasking by sharing processor time between processes."
},
{
"id": "C5-229",
"ch": 5,
"topic": "Operating systems",
"marks": 1,
"q": "What is the purpose of a device driver?",
"code": null,
"opts": [
"To protect the computer from malware that arrives over the internet",
"To store the user's files on a disk so that they can be found again",
"To let the operating system communicate with a particular hardware device",
"To translate a program written in a high-level language into machine code"
],
"ans": 2,
"why": "Each device needs a driver that understands how to control it."
},
{
"id": "C5-230",
"ch": 5,
"topic": "Utility software and libraries",
"marks": 1,
"q": "What is the purpose of a disk formatter?",
"code": null,
"opts": [
"To rearrange fragments of files so that they are stored together",
"To set up the tracks, sectors and file system on a disk",
"To make a copy of files in case the originals are lost",
"To scan every file stored on a disk for any malicious code"
],
"ans": 1,
"why": "A new or erased disk must be formatted before the OS can store files on it."
},
{
"id": "C5-231",
"ch": 5,
"topic": "Utility software and libraries",
"marks": 2,
"q": "What is the purpose of defragmentation software, and which storage device benefits most?",
"code": null,
"opts": [
"It stores the parts of each file together, speeding up access on a magnetic disk",
"It scans for viruses on a magnetic hard disk",
"It deletes files not used for a year, freeing up space so that programs load faster",
"It splits each file into smaller blocks, which speeds up access on a solid state drive"
],
"ans": 0,
"why": "Fragmented files cause extra head movement on magnetic disks; SSDs have no moving parts so gain little."
},
{
"id": "C5-232",
"ch": 5,
"topic": "Utility software and libraries",
"marks": 1,
"q": "What does a virus checker do?",
"code": null,
"opts": [
"It reduces the size of files so they can be sent more quickly",
"It controls which users are allowed to access which of the files",
"It makes a copy of all of the files stored on the computer",
"It scans files for malicious code and quarantines or removes it"
],
"ans": 3,
"why": "Virus checkers compare files with known malware patterns and monitor for suspicious behaviour."
},
{
"id": "C5-233",
"ch": 5,
"topic": "Utility software and libraries",
"marks": 1,
"q": "What is the purpose of back-up software?",
"code": null,
"opts": [
"To copy files so they can be restored if the originals are lost or damaged",
"To scan the files on a disk for any malicious code before use",
"To format a new disk so that it can be used to store files",
"To rearrange files on a disk drive so that they are stored together"
],
"ans": 0,
"why": "Backups protect against hardware failure, accidental deletion or malware."
},
{
"id": "C5-234",
"ch": 5,
"topic": "Utility software and libraries",
"marks": 1,
"q": "An email service limits attachments to 10 MB and a student's files total 25 MB. Which utility software would help?",
"code": null,
"opts": [
"Disk formatter",
"Defragmentation software",
"File compression software",
"Back-up software"
],
"ans": 2,
"why": "Compression utilities reduce file size (e.g. as zip files)."
},
{
"id": "C5-235",
"ch": 5,
"topic": "Utility software and libraries",
"marks": 1,
"q": "What is the purpose of disk contents analysis software?",
"code": null,
"opts": [
"To repair files that have been infected by a virus",
"To translate files into machine code",
"To show how the space on a disk is being used",
"To give each file a unique name"
],
"ans": 2,
"why": "It reports file/folder sizes and free space; disk repair software fixes errors on the disk."
},
{
"id": "C5-236",
"ch": 5,
"topic": "Utility software and libraries",
"marks": 2,
"q": "Which is a benefit to a programmer of using library routines when developing software?",
"code": null,
"opts": [
"The programmer no longer needs to test the rest of the program",
"Tested code already exists, so development time and errors are reduced",
"The program does not need to be translated into machine code",
"The program will run faster because library code is interpreted instead of compiled"
],
"ans": 1,
"why": "Libraries provide ready-written, tested routines for common tasks."
},
{
"id": "C5-237",
"ch": 5,
"topic": "Utility software and libraries",
"marks": 2,
"q": "Which statement about Dynamic Link Library (DLL) files is correct?",
"code": null,
"opts": [
"A DLL must be stored inside the executable file of each program",
"A DLL is copied into every program that uses it when the program is compiled",
"A DLL is loaded into memory when needed and can be shared by several programs",
"A DLL must be re-compiled each time a program that uses it is run again"
],
"ans": 2,
"why": "Sharing a DLL reduces duplication; updating it improves every program that uses it without recompiling them."
},
{
"id": "C5-238",
"ch": 5,
"topic": "Utility software and libraries",
"marks": 2,
"q": "A DLL file used by several programs is updated to fix an error. What is a benefit of this?",
"code": null,
"opts": [
"Every program using the DLL gets the fix without being recompiled",
"Every program must be re-linked by the programmer to use the fixed DLL",
"The size of every program that uses the DLL becomes much larger",
"Every program that uses the DLL must be recompiled before it can run"
],
"ans": 0,
"why": "Because programs link to the DLL at run time, one fix is shared by all of them."
},
{
"id": "C5-239",
"ch": 5,
"topic": "Language translators",
"marks": 1,
"q": "What is the purpose of an assembler?",
"code": null,
"opts": [
"To translate a high-level language program into assembly language",
"To execute a high-level language program one line at a time",
"To organise the files stored on a disk",
"To translate an assembly language program into machine code"
],
"ans": 3,
"why": "Assembly language has a (mostly) one-to-one relationship with machine code."
},
{
"id": "C5-240",
"ch": 5,
"topic": "Language translators",
"marks": 2,
"q": "Which statement about a compiler is correct?",
"code": null,
"opts": [
"It must be present on the user's computer every time the program is run",
"It translates assembly language programs into machine code for the CPU",
"It translates the whole program into machine code before the program runs",
"It translates the program and then executes it one line at a time"
],
"ans": 2,
"why": "The compiled object code can run without the compiler, and the source need not be given to users."
},
{
"id": "C5-241",
"ch": 5,
"topic": "Language translators",
"marks": 2,
"q": "A company wants to sell its software without giving customers the source code. Which type of translator should it use and why?",
"code": null,
"opts": [
"A compiler, because the customers receive only the machine code",
"An interpreter, because the source code is hidden when it runs",
"An interpreter, because it makes the program run faster",
"An assembler, because it translates high-level language into machine code"
],
"ans": 0,
"why": "Compiled programs are distributed as executables; interpreted programs need the source code."
},
{
"id": "C5-242",
"ch": 5,
"topic": "Language translators",
"marks": 2,
"q": "Which is an advantage of using an interpreter while a program is being developed?",
"code": null,
"opts": [
"The program can be tested straight away and an error is reported where it occurs",
"The whole program is translated into machine code before the first line is executed",
"The program can be sent to customers without giving away its source code",
"The program will run faster than the same program after it has been compiled"
],
"ans": 0,
"why": "Interpreters translate and run one statement at a time, which helps when testing and debugging."
},
{
"id": "C5-243",
"ch": 5,
"topic": "Language translators",
"marks": 2,
"q": "Which is a drawback of an interpreter compared with a compiler?",
"code": null,
"opts": [
"The program cannot be used until all of the syntax errors have been fixed",
"The whole program must be translated again after every small change before testing can begin",
"The translated program cannot be run on a different computer",
"The program usually runs more slowly and the interpreter must be present each time"
],
"ans": 3,
"why": "Statements are translated each time they are executed."
},
{
"id": "C5-244",
"ch": 5,
"topic": "Language translators",
"marks": 2,
"q": "Why is Java described as being partially compiled and partially interpreted?",
"code": null,
"opts": [
"Source code is compiled to intermediate code, which a virtual machine interprets",
"Half of the program is written in assembly language and half in Java",
"The source code is interpreted to produce object code, which is then compiled",
"The compiler translates the first half of the program and the interpreter the second half"
],
"ans": 0,
"why": "Java bytecode is portable across systems, each running its own virtual machine."
},
{
"id": "C5-245",
"ch": 5,
"topic": "IDEs",
"marks": 1,
"q": "Which IDE feature allows a programmer to run a program one statement at a time while checking the values of variables?",
"code": null,
"opts": [
"Pretty-printing",
"Context-sensitive prompts",
"Collapsing code blocks",
"Single stepping"
],
"ans": 3,
"why": "Single stepping is a debugging feature, often used with a variable (watch) window."
},
{
"id": "C5-246",
"ch": 5,
"topic": "IDEs",
"marks": 1,
"q": "Which IDE feature stops a program at a chosen line so that the programmer can inspect the values of variables?",
"code": null,
"opts": [
"A code prompt",
"A prettyprint option",
"A breakpoint",
"A syntax check"
],
"ans": 2,
"why": "A breakpoint pauses execution at a selected statement."
},
{
"id": "C5-247",
"ch": 5,
"topic": "IDEs",
"marks": 1,
"q": "An IDE highlights a mistake in a statement while the programmer is typing it. Which feature is this?",
"code": null,
"opts": [
"Dynamic syntax checking",
"A report window",
"Pretty-printing",
"Single stepping"
],
"ans": 0,
"why": "Dynamic syntax checks provide initial error detection as code is typed."
},
{
"id": "C5-248",
"ch": 5,
"topic": "IDEs",
"marks": 2,
"q": "An IDE automatically indents code and colours keywords differently from variable names. Which purpose does this serve?",
"code": null,
"opts": [
"It checks the logic of the code for run-time errors",
"It reduces the number of statements that are executed when it runs",
"It improves the presentation of the code so it is easier to read",
"It translates the code into machine code that can be executed"
],
"ans": 2,
"why": "Pretty-printing is a presentation feature; it does not change how the program runs."
},
{
"id": "C5-249",
"ch": 5,
"topic": "IDEs",
"marks": 2,
"q": "Which IDE feature offers a list of valid commands or variable names while the programmer is typing?",
"code": null,
"opts": [
"A variable watch window",
"Context-sensitive prompts",
"Single stepping",
"A breakpoint"
],
"ans": 1,
"why": "Context-sensitive prompts help with coding by suggesting valid completions."
},
{
"id": "C5-250",
"ch": 5,
"topic": "Utility software and libraries",
"marks": 1,
"q": "What is the purpose of disk repair software?",
"code": null,
"opts": [
"It scans the files on a disk for known malicious code and removes any it finds",
"It rearranges the fragments of files so that they are stored in adjacent sectors",
"It shows the user how the space on a disk is being used by folders and files",
"It checks a disk for bad sectors or errors and repairs them or marks them unusable"
],
"ans": 3,
"why": "The other options describe disk contents analysis, defragmentation and a virus checker."
},
{
"id": "C5-251",
"ch": 5,
"topic": "Utility software and libraries",
"marks": 2,
"q": "Which is a drawback of using DLL files?",
"code": null,
"opts": [
"If the DLL is missing or incompatible, programs that use it may fail",
"Every program that uses the DLL becomes larger when the DLL is added",
"Only one program can use the DLL at any one time on a computer",
"The DLL must be recompiled with each program that is going to use it"
],
"ans": 0,
"why": "A DLL is an external dependency of every program that uses it."
},
{
"id": "C5-252",
"ch": 5,
"topic": "IDEs",
"marks": 1,
"q": "Which IDE feature hides the body of a procedure so that only its header is shown?",
"code": null,
"opts": [
"Dynamic syntax checking",
"Collapsing code blocks",
"Single stepping",
"Pretty-printing"
],
"ans": 1,
"why": "It is a presentation feature."
},
{
"id": "C5-253",
"ch": 5,
"topic": "IDEs",
"marks": 1,
"q": "Which IDE feature shows the current values of chosen variables while a program is being debugged?",
"code": null,
"opts": [
"Context-sensitive prompts",
"A watch window",
"A dynamic syntax check",
"Pretty-printing"
],
"ans": 1,
"why": "Watch/report windows support debugging."
}
];
