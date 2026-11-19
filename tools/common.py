"""Shared helpers for the question bank. Authoring convention: the correct
option is passed separately; build.py places it at a balanced position."""


def Q(ch, topic, marks, text, correct, wrongs, why, code=None, fixed=False):
    assert marks in (1, 2)
    assert len(wrongs) == 3, text
    return dict(ch=ch, topic=topic, marks=marks, q=text, code=code,
                correct=str(correct), wrongs=[str(w) for w in wrongs],
                why=why, fixed=fixed)


def distract(correct, cands, rng, fallback=None):
    """Return 3 unique wrong options (as str) != correct."""
    correct = str(correct)
    seen, out = {correct}, []
    for c in cands:
        c = str(c)
        if c not in seen:
            seen.add(c)
            out.append(c)
    tries = 0
    while len(out) < 3 and fallback and tries < 200:
        tries += 1
        c = str(fallback(rng))
        if c not in seen:
            seen.add(c)
            out.append(c)
    assert len(out) >= 3, (correct, cands)
    rng.shuffle(out)
    return out[:3]
