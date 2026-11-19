import random
from common import Q, distract

CH = 1


def static():
    t = "Data representation"
    m = "Multimedia"
    c = "Compression"
    return [
        Q(CH, t, 1, "How many bytes are there in one kibibyte (KiB)?", "1024",
          ["1000", "8192", "1 048 576"],
          "The binary prefix kibi means 2^10 = 1024. Kilo (decimal) means 1000."),
        Q(CH, t, 2, "Which statement correctly distinguishes a mebibyte (MiB) from a megabyte (MB)?",
          "1 MiB is 2^20 bytes whereas 1 MB is 10^6 bytes",
          ["1 MiB is 10^6 bytes whereas 1 MB is 2^20 bytes",
           "1 MiB is 2^10 bytes whereas 1 MB is 10^3 bytes",
           "1 MiB is 2^20 bits whereas 1 MB is 10^6 bits"],
          "Binary prefixes (kibi, mebi, gibi, tebi) are powers of 2; decimal prefixes (kilo, mega, giga, tera) are powers of 10."),
        Q(CH, t, 1, "Which is a typical use of Binary Coded Decimal (BCD)?",
          "Displaying each digit of a number on a seven-segment display",
          ["Storing the pixels of a photograph", "Encrypting a message before sending",
           "Compressing a text file"],
          "BCD stores each denary digit in its own 4 bits, so it converts easily to digit-by-digit displays (clocks, calculators, meters)."),
        Q(CH, t, 1, "Why do programmers often write memory addresses in hexadecimal rather than binary?",
          "Each hex digit represents 4 bits, so addresses are shorter and easier for humans to read and check",
          ["Hexadecimal numbers take less memory to store in the computer",
           "The processor can only execute instructions written in hexadecimal",
           "Hexadecimal avoids the need for any conversion to binary"],
          "Hex is only a human-friendly shorthand; the computer still stores everything in binary."),
        Q(CH, t, 1, "Which is a reason for using Unicode instead of ASCII?",
          "Unicode can represent characters from many different languages and scripts",
          ["Unicode uses fewer bits per character, so text files are smaller",
           "Unicode is the only character set that includes lowercase letters",
           "Unicode stores every character in exactly 7 bits"],
          "Unicode has a far larger repertoire (many scripts, symbols, emoji) at the cost of more bits per character."),
        Q(CH, t, 1, "An overflow error occurs when a calculation produces a result that is",
          "too large to be represented in the number of bits available",
          ["negative when a positive result was expected",
           "stored in a different number system from the operands",
           "rounded because it has too many decimal places"],
          "With a fixed number of bits only a limited range can be stored; a result outside this range overflows."),
        Q(CH, t, 2, "Which is an advantage of two's complement over sign-and-magnitude representation?",
          "Subtraction can be done by addition and there is only one representation of zero",
          ["It can store larger positive numbers using the same number of bits",
           "It uses fewer bits to store negative numbers than positive numbers",
           "It makes overflow impossible when adding two numbers"],
          "Two's complement has a single zero and lets the same adder circuit perform addition and subtraction."),
        Q(CH, m, 1, "What does the term 'colour depth' mean for a bitmap image?",
          "The number of bits used to represent the colour of each pixel",
          ["The number of pixels along the width of the image",
           "The number of different file formats the image can be saved in",
           "The number of bytes in the file header"],
          "Colour (bit) depth = bits per pixel. More bits per pixel allows more colours."),
        Q(CH, m, 1, "What is meant by the 'resolution' of a bitmap image?",
          "The number of pixels the image contains (width × height)",
          ["The number of colours that appear in the image",
           "The physical size of the screen displaying the image",
           "The number of bits used for each colour"],
          "Image resolution is the pixel dimensions of the image."),
        Q(CH, m, 1, "Which data would be stored in the file header of a bitmap image?",
          "The image dimensions and the colour depth",
          ["The colour of every pixel in the image", "The drawing list of objects in the image",
           "The date on which the image was last viewed"],
          "The header holds metadata needed to interpret the pixel data, such as width, height and colour depth."),
        Q(CH, m, 2, "A vector graphic is stored as a list of drawing objects. Which is stored for each object?",
          "Its properties, such as shape type, coordinates, line colour and fill colour",
          ["The colour of each pixel inside the object", "The resolution at which it was first drawn",
           "A sampled value taken at regular intervals"],
          "A drawing list stores objects with properties; the image is re-drawn from these so it scales without loss of quality."),
        Q(CH, m, 2, "A company logo must be printed on a small business card and on a large billboard with no loss of quality. Which format is most suitable and why?",
          "Vector graphic, because it is defined mathematically and can be scaled without pixelation",
          ["Bitmap, because each pixel can be enlarged to fill the larger area",
           "Bitmap, because it stores a list of the shapes in the logo",
           "Vector graphic, because it stores a colour for every pixel"],
          "Bitmaps become blocky when enlarged; vector graphics are re-calculated at any size."),
        Q(CH, m, 2, "A photograph is to be stored. Which is the best format and reason?",
          "Bitmap, because each pixel can hold a slightly different colour to capture fine detail",
          ["Vector graphic, because photographs are made of a small number of simple shapes",
           "Vector graphic, because its file size is always smaller than a bitmap",
           "Bitmap, because it is stored as a list of drawing objects"],
          "Photographs have continuous colour variation that cannot be described by a few shapes."),
        Q(CH, m, 2, "The sampling rate used to record a sound is increased. What is the effect?",
          "The recording is a closer approximation of the original sound and the file size increases",
          ["The recording is a closer approximation of the original sound and the file size decreases",
           "The range of amplitudes that can be stored increases but the file size stays the same",
           "The sound is stored with fewer samples so the file size decreases"],
          "More samples per second capture the waveform more accurately but need more storage."),
        Q(CH, m, 2, "The sampling resolution (bit depth) used to record a sound is decreased. What is the effect?",
          "Each sampled amplitude is stored less accurately and the file becomes smaller",
          ["Samples are taken less often and the file becomes smaller",
           "Each sampled amplitude is stored more accurately and the file becomes larger",
           "The highest frequency that can be captured is reduced but file size is unchanged"],
          "Sampling resolution is the number of bits per sample; fewer bits means fewer possible amplitude levels."),
        Q(CH, m, 2, "The colour depth of a bitmap image is reduced while its resolution stays the same. What is the effect?",
          "The file size decreases and fewer different colours can be shown",
          ["The file size decreases and the image has fewer pixels",
           "The file size increases and more colours can be shown",
           "The file size stays the same but the image becomes lower quality"],
          "File size = pixels × bits per pixel (+ header). Reducing bits per pixel reduces both size and available colours."),
        Q(CH, c, 1, "A text document must be compressed so that it can be restored exactly. Which type of compression is required?",
          "Lossless", ["Lossy", "Perceptual", "Analogue"],
          "Lossless compression allows the original data to be rebuilt exactly; this is essential for text and program files."),
        Q(CH, c, 1, "For which data is run-length encoding (RLE) most effective?",
          "An image with large areas of identical colour",
          ["A photograph with a different colour at almost every pixel",
           "An encrypted text file", "A sound recording of speech"],
          "RLE replaces runs of identical values with a value and a count; it works best when long runs exist."),
        Q(CH, c, 2, "MP3 compression reduces file size by removing sounds that most people cannot hear. Which statement is correct?",
          "It is lossy because the removed data cannot be recovered",
          ["It is lossless because the file can be played on any device",
           "It is lossy because the sampling rate is increased",
           "It is lossless because only silent sections are removed"],
          "Perceptual compression permanently discards information, so it is lossy."),
        Q(CH, c, 1, "Which is a benefit of compressing a file before emailing it?",
          "It reduces the time taken to transmit the file and the storage space needed",
          ["It prevents the file from being intercepted", "It increases the quality of the file",
           "It checks the file for errors during transmission"],
          "Compression reduces file size; it does not encrypt or verify data."),
        Q(CH, c, 2, "A user compresses a bitmap image using lossy compression and then opens it. Which statement is true?",
          "The file is smaller but some of the original image detail has been permanently lost",
          ["The file is smaller and the original image can be rebuilt exactly",
           "The file is the same size but the colours are less accurate",
           "The file is larger because a compression dictionary has been added"],
          "Lossy compression discards data permanently in exchange for a smaller file."),
    ]


def generated():
    rng = random.Random(101)
    out = []
    t = "Data representation"

    # binary -> denary (1 mark)
    for _ in range(2):
        n = rng.randint(70, 250)
        b = format(n, "08b")
        c = str(n)
        w = distract(c, [int(b[::-1], 2), n - 128 if n >= 128 else n + 64, n + 16, n - 1],
                     rng, lambda r: n + r.randint(-20, 20))
        out.append(Q(CH, t, 1, f"What is the denary value of the unsigned 8-bit binary number {b}?", c, w,
                     f"Add the place values of the 1 bits: {n}."))

    # denary -> binary (1 mark)
    for _ in range(2):
        n = rng.randint(60, 240)
        c = format(n, "08b")
        cands = [format(n ^ 0b00010000, "08b"), format(n ^ 0b00000100, "08b"),
                 c[::-1], format((n + 8) % 256, "08b"), format(n ^ 0b01000000, "08b")]
        w = distract(c, cands, rng)
        out.append(Q(CH, t, 1, f"Which 8-bit binary number represents the denary number {n}?", c, w,
                     f"{n} = {c} (check by adding place values)."))

    # hex -> denary (1 mark)
    for _ in range(2):
        h = rng.randint(0x1A, 0xEF)
        hs = format(h, "02X")
        sw = int(hs[::-1], 16)
        c = str(h)
        w = distract(c, [sw, int(hs[0], 16) * 10 + int(hs[1], 16), h + 16, h - 16, h + 1], rng,
                     lambda r: h + r.randint(-30, 30))
        out.append(Q(CH, t, 1, f"What is the denary value of the hexadecimal number {hs}?", c, w,
                     f"{hs[0]} × 16 + {hs[1]} = {h}."))

    # binary -> hex (1 mark)
    for _ in range(2):
        n = rng.randint(0x21, 0xFE)
        b = format(n, "08b")
        c = format(n, "02X")
        sw = c[::-1]
        w = distract(c, [sw, format((n + 0x10) % 256, "02X"), format((n ^ 0x0F), "02X"),
                         format(n - 1, "02X")], rng)
        out.append(Q(CH, t, 1, f"Which hexadecimal number is equivalent to the binary number {b}?", c, w,
                     f"Split into nibbles {b[:4]} {b[4:]} = {c}."))

    # negative denary -> two's complement (2 marks)
    for _ in range(3):
        n = rng.randint(21, 118)
        c = format((256 - n) % 256, "08b")
        sm = "1" + format(n, "07b")
        oc = format(255 - n, "08b")
        w = distract(c, [sm, oc, format(n, "08b"), format((256 - n + 2) % 256, "08b")], rng)
        out.append(Q(CH, t, 2, f"Which 8-bit two's complement binary number represents -{n}?", c, w,
                     f"Write +{n} in binary, invert all bits, add 1 → {c}. Sign-and-magnitude or forgetting to add 1 gives the wrong answers."))

    # two's complement byte value (2 marks)
    for _ in range(3):
        v = rng.randint(-120, -15)
        b = format(v & 0xFF, "08b")
        u = v & 0xFF
        c = str(v)
        sm = -(u & 0x7F)
        oc = -(255 - u)
        w = distract(c, [u, sm, oc, v - 1 if False else -(256 - u) - 0 if False else v + 1], rng,
                     lambda r: v + r.randint(-9, 9))
        out.append(Q(CH, t, 2, f"What is the denary value of the 8-bit two's complement number {b}?", c, w,
                     f"The most significant bit has place value -128: -128 + {u - 128} = {v}."))

    # addition with overflow (2 marks)
    for _ in range(2):
        a = rng.randint(70, 110)
        bb = rng.randint(70, 110)
        s = a + bb
        assert s > 127
        c = f"{s - 256} (overflow has occurred)"
        w = distract(c, [f"{s} (no overflow)", f"{s - 256} (no overflow)", f"{256 - s} (overflow has occurred)",
                         f"{s} (overflow has occurred)"], rng)
        out.append(Q(CH, t, 2,
                     f"Two positive numbers {format(a, '08b')} and {format(bb, '08b')} are added using 8-bit two's complement. What does the result represent?",
                     c, w,
                     f"{a} + {bb} = {s} exceeds +127, so the sign bit becomes 1 and the stored value is {s} - 256 = {s - 256}. Overflow."))

    # BCD (1 mark)
    for _ in range(2):
        n = rng.randint(120, 989)
        d = str(n)
        c = " ".join(format(int(x), "04b") for x in d)
        w = distract(c, [format(n, "012b"), " ".join(format(int(x), "04b") for x in d[::-1]),
                         " ".join(format(int(x) + 1, "04b") for x in d if int(x) < 9) or format(n, "012b"),
                         " ".join(format(int(x, 16), "04b") for x in
                                  [format(n, "03X")[i] for i in range(3)])], rng)
        out.append(Q(CH, t, 1, f"Which is the Binary Coded Decimal (BCD) representation of the denary number {n}?", c, w,
                     "Convert each denary digit separately into a 4-bit binary number."))

    # range of n-bit two's complement (1 mark)
    for n in (6, 10):
        lo, hi = -(2 ** (n - 1)), 2 ** (n - 1) - 1
        c = f"{lo} to +{hi}"
        w = [f"-{hi} to +{hi}", f"0 to {2 ** n - 1}", f"{lo} to +{hi + 1}"]
        out.append(Q(CH, t, 1, f"What is the range of denary values that can be stored in a {n}-bit two's complement number?",
                     c, w, f"-2^{n - 1} to 2^{n - 1} - 1."))

    # number of colours (1 mark)
    for d in (6, 10):
        c = str(2 ** d)
        w = distract(c, [d, d * d, 2 ** (d + 1) // 1 if False else 2 * d, 2 ** (d - 1)], rng)
        out.append(Q(CH, "Multimedia", 1, f"A bitmap image uses a colour depth of {d} bits. How many different colours can it display?",
                     c, w, f"2^{d} = {c}."))

    # bitmap file size (2 marks)
    for (w_, h_, d_) in [(512, 256, 8), (1024, 768, 24), (640, 480, 16)]:
        bits = w_ * h_ * d_
        kib = bits / 8 / 1024
        fmt = (lambda x: f"{x:g} KiB")
        c = fmt(kib)
        w = distract(c, [fmt(kib * 8), fmt(kib / 8), fmt(bits / 8 / 1000), fmt(kib * 2)], rng)
        out.append(Q(CH, "Multimedia", 2,
                     f"A bitmap image is {w_} pixels wide and {h_} pixels high with a colour depth of {d_} bits. Ignoring the file header, what is the file size?",
                     c, w,
                     f"{w_} × {h_} × {d_} = {bits} bits; ÷ 8 = {bits // 8} bytes; ÷ 1024 = {c}."))

    # sound file size (2 marks)
    for (rate, bits_, secs) in [(16000, 16, 20), (44100, 16, 10), (8000, 8, 30)]:
        by = rate * bits_ * secs // 8
        fmt = (lambda x: f"{int(x):,} bytes")
        c = fmt(by)
        w = distract(c, [fmt(by * 8), fmt(by // secs), fmt(by // 8), fmt(by * 2)], rng)
        out.append(Q(CH, "Multimedia", 2,
                     f"A mono sound is recorded for {secs} seconds with a sampling rate of {rate} Hz and a sampling resolution of {bits_} bits. What is the size of the sound data?",
                     c, w,
                     f"{rate} × {bits_} × {secs} = {rate * bits_ * secs} bits; ÷ 8 = {by} bytes."))

    # RLE (2 marks)
    for s in ["WWWWBBBWWWWWWK", "RRGGGGGGBBBBBBBBR", "AAAAAAABBCCCC"]:
        runs = []
        for ch_ in s:
            if runs and runs[-1][0] == ch_:
                runs[-1][1] += 1
            else:
                runs.append([ch_, 1])
        c = " ".join(f"{n}{x}" for x, n in runs)
        bad1 = " ".join(f"{x}{n}" for x, n in runs)
        bad2 = " ".join(f"{n + 1}{x}" if i == 0 else f"{n}{x}" for i, (x, n) in enumerate(runs))
        bad3 = " ".join(f"{n}{x}" for x, n in runs[::-1])
        out.append(Q(CH, "Compression", 2,
                     f"Run-length encoding (count followed by character) is applied to the data {s}. What is the result?",
                     c, [bad1, bad2, bad3], "Count each run of identical characters and write the count then the character."))
    return out
