# CS 9618 MCQ prep (chapters 1–5)

Static study site for Cambridge International AS Level Computer Science 9618 (syllabus 2027–2029), chapters 1–5:
information representation, communication, hardware (incl. logic gates), processor fundamentals (incl. assembly and bit manipulation), system software.

- **Study notes** per chapter, **practice** with instant explanations, **weak-spot drill**, and a **timed mock** (30 single-answer questions: 20 × 2 marks + 10 × 1 mark = 50 marks, 90 minutes).
- Questions are original (written from the syllabus and past-paper mark schemes). No Cambridge papers are included.
- Answer positions: options are re-shuffled every time and each mock uses a balanced A–D key (no run > 2, no repeating cycle).
- Progress is stored only in the browser (localStorage).

## Rebuild / check the question bank

```
python tools/build.py    # merge chapters, equalise, balance positions, write data/questions.js
python tools/verify.py   # re-solve every calculation / trace / logic question independently
```

Open `index.html` (or serve the folder) – no build step for the site itself.
