"""Shared helpers for the question bank. Authoring convention: the correct
option is passed separately; build.py places it at a balanced position."""


def Q(ch, topic, marks, text, correct, wrongs, why, code=None, fixed=False):
    assert marks in (1, 2)
    assert len(wrongs) == 3, text
    return dict(ch=ch, topic=topic, marks=marks, q=text, code=code,
                correct=str(correct), wrongs=[str(w) for w in wrongs],
                why=why, fixed=fixed)


def _num(x):
    import re as _re
    t = _re.sub(r"[^\d.\-]", "", str(x).replace(",", "").replace(" ", ""))
    return float(t)


def distract(correct, cands, rng, fallback=None, ranked=False):
    """Return 3 unique wrong options (as str) != correct.
    ranked=True: the options are numbers; the correct value's rank among the four
    is chosen at random (so 'pick a middle value' is not a strategy)."""
    correct = str(correct)
    seen, out = {correct}, []
    for c in cands:
        c = str(c)
        if c not in seen:
            seen.add(c)
            out.append(c)
    need = 9 if ranked else 3
    tries = 0
    while len(out) < need and fallback and tries < 400:
        tries += 1
        c = str(fallback(rng))
        if c not in seen:
            seen.add(c)
            out.append(c)
    assert len(out) >= 3, (correct, cands)
    if ranked:
        cv = _num(correct)
        below = [o for o in out if _num(o) < cv]
        above = [o for o in out if _num(o) > cv]
        rng.shuffle(below); rng.shuffle(above)
        r = rng.randint(0, 3)
        nb = min(r, len(below)); na = min(3 - r, len(above))
        pick = below[:nb] + above[:na]
        rest = [o for o in below[nb:] + above[na:]]
        rng.shuffle(rest)
        pick += rest[:3 - len(pick)]
        assert len(pick) == 3, (correct, out)
        return pick
    rng.shuffle(out)
    return out[:3]
