(function () {
'use strict';
const BANK = window.QBANK || [];
const NOTES = window.NOTES || {};
const CH = {1: 'Information representation', 2: 'Communication', 3: 'Hardware', 4: 'Processor fundamentals', 5: 'System software'};
const DEFAULT_QUOTA = {1: 7, 2: 5, 3: 6, 4: 8, 5: 4};
const MOCK_SECONDS = 90 * 60;
const LET = 'ABCD';
const app = document.getElementById('app');
let timer = null;

/* ---------- storage (never required) ---------- */
const store = {
  get(k, d) { try { const v = localStorage.getItem('cs9618:' + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('cs9618:' + k, JSON.stringify(v)); } catch (e) { /* ignore */ } }
};

/* ---------- helpers ---------- */
function el(tag, attrs, ...kids) {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (k === 'class') n.className = v;
    else if (k.startsWith('on')) n.addEventListener(k.slice(2), v);
    else if (k.startsWith('aria-')) n.setAttribute(k, String(v));
    else if (v === true) n.setAttribute(k, '');
    else if (v !== false && v != null) n.setAttribute(k, v);
  }
  for (const c of kids.flat()) if (c != null && c !== false) n.append(c.nodeType ? c : document.createTextNode(String(c)));
  return n;
}
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function maxRun(a) { let m = 1, r = 1; for (let i = 1; i < a.length; i++) { r = a[i] === a[i - 1] ? r + 1 : 1; if (r > m) m = r; } return m; }
function lagMatch(a, k) { let c = 0; for (let i = 0; i + k < a.length; i++) if (a[i] === a[i + k]) c++; return a.length > k ? c / (a.length - k) : 0; }
/* balanced answer-position key: equal counts of A-D, no run >2, no repeating cycle */
function balancedKey(n) {
  let best = null;
  for (let t = 0; t < 3000; t++) {
    const k = shuffle(Array.from({length: n}, (_, i) => i % 4));
    if (maxRun(k) <= 2 && [1, 2, 3, 4].every(l => lagMatch(k, l) <= 0.36)) return k;
    best = k;
  }
  return best;
}
function present(q, pos) {
  const right = q.opts[q.ans];
  const others = shuffle(q.opts.filter((_, i) => i !== q.ans));
  const opts = others.slice(0, pos).concat([right], others.slice(pos));
  return Object.assign({}, q, {opts, ans: pos});
}
function presentAll(list) { const key = balancedKey(list.length); return list.map((q, i) => present(q, key[i])); }
function fmt(s) { s = Math.max(0, s); return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'); }
function mount(...nodes) { clearInterval(timer); timer = null; app.replaceChildren(...nodes); window.scrollTo(0, 0); }
function setNav(hash) { document.querySelectorAll('.top nav a').forEach(a => { a.removeAttribute('aria-current'); if (hash.startsWith(a.getAttribute('href').split('/').slice(0, 2).join('/'))) a.setAttribute('aria-current', 'page'); }); }
function record(q, ok) {
  const wrong = new Set(store.get('wrong', []));
  ok ? wrong.delete(q.id) : wrong.add(q.id);
  store.set('wrong', [...wrong]);
  const st = store.get('stats', {});
  const s = st[q.ch] || {seen: 0, right: 0};
  s.seen++; if (ok) s.right++; st[q.ch] = s; store.set('stats', st);
}
function questionBody(q, opts) {
  const kids = [
    el('div', {class: 'qhead'},
      el('span', {class: 'muted'}, `Chapter ${q.ch} · ${q.topic}`),
      el('span', {class: 'pill'}, `${q.marks} mark${q.marks > 1 ? 's' : ''}`)),
    el('p', {class: 'qtext'}, q.q)];
  if (q.code) kids.push(el('pre', {class: 'code'}, q.code));
  return kids;
}

/* ---------- views ---------- */
function home() {
  const st = store.get('stats', {});
  const hist = store.get('hist', []);
  const wrong = store.get('wrong', []).length;
  const tiles = [1, 2, 3, 4, 5].map(c => {
    const s = st[c], pct = s && s.seen ? Math.round(100 * s.right / s.seen) : null;
    return el('a', {class: 'tile', href: `#/notes/${c}`}, el('b', {}, `${c}. ${CH[c]}`),
      el('span', {class: 'muted'}, `${BANK.filter(q => q.ch === c).length} questions · ` + (pct === null ? 'not started' : `${pct}% correct so far`)));
  });
  const last = hist[hist.length - 1];
  mount(
    el('h1', {}, 'Cambridge 9618 · chapters 1–5'),
    el('p', {}, 'Study the notes, practise by chapter, then sit timed mock tests that copy the real test: 30 single-answer questions (20 × 2 marks + 10 × 1 mark = 50 marks) in 90 minutes.'),
    el('div', {class: 'row'},
      el('a', {class: 'btn primary', href: '#/mock'}, 'Start a mock test'),
      el('a', {class: 'btn', href: '#/practice'}, 'Practise by chapter'),
      el('a', {class: 'btn', href: '#/weak'}, `Weak spots (${wrong})`)),
    last ? el('p', {class: 'muted'}, `Last mock: ${last.score}/${last.max} (${Math.round(100 * last.score / last.max)}%) in ${last.mins} min. ${hist.length} mock${hist.length > 1 ? 's' : ''} taken.`) : null,
    el('h2', {}, 'Study notes'),
    el('div', {class: 'grid'}, tiles),
    el('p', {class: 'muted'}, `Question bank: ${BANK.length} questions. Answer order is shuffled every time, and each mock uses a balanced A–D key. Progress is saved only in this browser.`));
}

function notes(c) {
  c = Number(c) || 1;
  const n = NOTES[c];
  const links = [1, 2, 3, 4, 5].map(i => el('a', {class: 'btn' + (i === c ? ' primary' : ''), href: `#/notes/${i}`}, `Ch ${i}`));
  const body = el('div', {class: 'notes'});
  body.innerHTML = n ? n.html : '<p>No notes.</p>';
  mount(el('div', {class: 'row'}, links), el('h1', {}, `${c}. ${CH[c]}`), body,
    el('div', {class: 'row'}, el('a', {class: 'btn primary', href: `#/practice?c=${c}`}, `Practise chapter ${c}`),
      c < 5 ? el('a', {class: 'btn', href: `#/notes/${c + 1}`}, 'Next chapter →') : null));
}

function practiceSetup(preset) {
  const sel = new Set(preset.length ? preset : [1, 2, 3, 4, 5]);
  const boxes = [1, 2, 3, 4, 5].map(c => {
    const cb = el('input', {type: 'checkbox', value: c, checked: sel.has(c)});
    cb.addEventListener('change', () => cb.checked ? sel.add(c) : sel.delete(c));
    return el('label', {class: 'chk'}, cb, `${c}. ${CH[c]} (${BANK.filter(q => q.ch === c).length})`);
  });
  const count = el('select', {}, el('option', {value: 10}, '10'), el('option', {value: 20, selected: true}, '20'), el('option', {value: 0}, 'All'));
  mount(el('h1', {}, 'Practice'), el('p', {class: 'muted'}, 'Instant feedback and an explanation after every answer.'),
    el('div', {class: 'card'}, boxes, el('p', {}, 'Questions: ', count)),
    el('button', {class: 'primary', onclick: () => {
      let pool = BANK.filter(q => sel.has(q.ch));
      if (!pool.length) return;
      pool = shuffle(pool); const n = Number(count.value); if (n) pool = pool.slice(0, n);
      runQuiz(presentAll(pool), 'Practice');
    }}, 'Start'));
}

function runQuiz(list, title) {
  let i = 0, right = 0, locked = false;
  const missed = [];
  function render() {
    const q = list[i]; locked = false;
    const opts = q.opts.map((o, k) => el('button', {class: 'opt', onclick: () => pick(k)}, el('span', {class: 'l'}, LET[k]), el('span', {}, o)));
    const fb = el('div', {});
    const next = el('button', {class: 'primary', disabled: true, onclick: () => { i++; i < list.length ? render() : finish(); }}, i === list.length - 1 ? 'Finish' : 'Next');
    function pick(k) {
      if (locked) return; locked = true;
      const ok = k === q.ans; if (ok) right++; else missed.push(q);
      record(q, ok);
      opts.forEach((b, j) => { b.disabled = true; if (j === q.ans) b.classList.add('ok'); else if (j === k) b.classList.add('bad'); });
      fb.append(el('div', {class: 'explain'}, el('b', {}, ok ? 'Correct. ' : `Not quite — the answer is ${LET[q.ans]}. `), q.why));
      next.disabled = false; next.focus();
    }
    document.onkeydown = e => {
      const m = {a: 0, b: 1, c: 2, d: 3, 1: 0, 2: 1, 3: 2, 4: 3}[e.key.toLowerCase()];
      if (m !== undefined && !locked) pick(m); else if ((e.key === 'Enter' || e.key === 'ArrowRight') && locked) next.click();
    };
    mount(el('div', {class: 'row sb'}, el('b', {}, title), el('span', {class: 'muted'}, `${i + 1} / ${list.length}`)),
      el('div', {class: 'bar'}, el('i', {style: `width:${100 * i / list.length}%`})),
      el('div', {class: 'card'}, questionBody(q), el('div', {class: 'opts', role: 'group', 'aria-label': 'Answer options'}, opts), fb),
      next);
  }
  function finish() {
    document.onkeydown = null;
    mount(el('h1', {}, `${title} complete`), el('p', {class: 'score'}, `${right} / ${list.length}`),
      el('div', {class: 'row'},
        missed.length ? el('button', {class: 'primary', onclick: () => runQuiz(presentAll(missed), 'Retry missed')}, `Retry ${missed.length} missed`) : null,
        el('a', {class: 'btn', href: '#/practice'}, 'New practice'), el('a', {class: 'btn', href: '#/mock'}, 'Mock test')));
  }
  render();
}

function weak() {
  const ids = new Set(store.get('wrong', []));
  const pool = BANK.filter(q => ids.has(q.id));
  if (!pool.length) return mount(el('h1', {}, 'Weak spots'), el('p', {}, 'Nothing here yet. Questions you get wrong in practice or mock tests are collected here until you answer them correctly.'), el('a', {class: 'btn primary', href: '#/practice'}, 'Practise'));
  runQuiz(presentAll(shuffle(pool)), `Weak spots (${pool.length})`);
}

/* ---------- mock test ---------- */
function buildMock(quota) {
  const total = Object.values(quota).reduce((a, b) => a + b, 0);
  const wantMarks = total === 30 ? 50 : null;
  let best = null;
  for (let t = 0; t < 4000; t++) {
    const pick = [];
    for (const c of [1, 2, 3, 4, 5]) pick.push(...shuffle(BANK.filter(q => q.ch === c)).slice(0, quota[c]));
    const marks = pick.reduce((s, q) => s + q.marks, 0);
    best = pick;
    const keys = pick.map(q => q.q + '|' + (q.code || ''));
    if (new Set(keys).size !== keys.length) continue;
    if (wantMarks === null || marks === wantMarks) break;
  }
  return presentAll(shuffle(best));
}

function mockSetup() {
  const quota = Object.assign({}, store.get('quota', DEFAULT_QUOTA));
  const total = el('b', {});
  const inputs = [1, 2, 3, 4, 5].map(c => {
    const max = BANK.filter(q => q.ch === c).length;
    const inp = el('input', {type: 'number', min: 0, max: Math.min(max, 15), value: quota[c], 'aria-label': `Chapter ${c} questions`});
    inp.addEventListener('input', () => { quota[c] = Math.max(0, Math.min(Number(inp.value) || 0, Math.min(max, 15))); upd(); });
    return el('label', {class: 'chk'}, inp, ` ${c}. ${CH[c]}`);
  });
  function upd() { total.textContent = Object.values(quota).reduce((a, b) => a + b, 0); }
  upd();
  mount(el('h1', {}, 'Mock test'),
    el('div', {class: 'card'}, el('p', {}, '90 minutes. Answers and explanations appear only after you submit. With 30 questions the paper is always 20 × 2-mark + 10 × 1-mark = 50 marks.'),
      el('h3', {}, 'Questions per chapter (default 7 / 5 / 6 / 8 / 4)'), inputs,
      el('p', {}, 'Total questions: ', total),
      el('div', {class: 'row'},
        el('button', {onclick: () => { Object.assign(quota, DEFAULT_QUOTA); store.set('quota', quota); mockSetup(); }}, 'Reset mix'),
        el('button', {class: 'primary', onclick: () => {
          if (!Object.values(quota).some(Boolean)) return;
          store.set('quota', quota); runMock(buildMock(quota));
        }}, 'Start test'))));
}

function runMock(list) {
  const sel = list.map(() => -1), flag = list.map(() => false);
  let i = 0;
  const endAt = Date.now() + MOCK_SECONDS * 1000;
  const startedAt = Date.now();
  const clock = el('span', {class: 'timer'}, fmt(MOCK_SECONDS));
  function submit(auto) {
    const un = sel.filter(s => s < 0).length;
    if (!auto && un && !confirm(`${un} question${un > 1 ? 's are' : ' is'} unanswered. Submit anyway?`)) return;
    results(list, sel, Math.round((Date.now() - startedAt) / 60000));
  }
  function render() {
    const q = list[i];
    const opts = q.opts.map((o, k) => el('button', {class: 'opt', 'aria-pressed': sel[i] === k, onclick: () => { sel[i] = k; render(); }}, el('span', {class: 'l'}, LET[k]), el('span', {}, o)));
    const nav = el('div', {class: 'nav'}, list.map((_, k) => el('button', {class: (sel[k] >= 0 ? 'a ' : '') + (flag[k] ? 'f ' : '') + (k === i ? 'cur' : ''), 'aria-label': `Question ${k + 1}${sel[k] >= 0 ? ', answered' : ''}${flag[k] ? ', flagged' : ''}`, onclick: () => { i = k; render(); }}, k + 1)));
    document.onkeydown = e => {
      const m = {a: 0, b: 1, c: 2, d: 3, 1: 0, 2: 1, 3: 2, 4: 3}[e.key.toLowerCase()];
      if (m !== undefined) { sel[i] = m; render(); }
      else if (e.key === 'ArrowRight' && i < list.length - 1) { i++; render(); }
      else if (e.key === 'ArrowLeft' && i > 0) { i--; render(); }
    };
    app.replaceChildren(
      el('div', {class: 'row sb'}, el('b', {}, `Question ${i + 1} of ${list.length}`), el('span', {}, 'Time left ', clock)),
      nav,
      el('div', {class: 'card'}, questionBody(q), el('div', {class: 'opts', role: 'group', 'aria-label': 'Answer options'}, opts)),
      el('div', {class: 'row sb'},
        el('div', {class: 'row'},
          el('button', {disabled: i === 0, onclick: () => { i--; render(); }}, '← Back'),
          el('button', {onclick: () => { flag[i] = !flag[i]; render(); }}, flag[i] ? 'Unflag' : 'Flag for review'),
          el('button', {disabled: i === list.length - 1, onclick: () => { i++; render(); }}, 'Next →')),
        el('button', {class: 'primary', onclick: () => submit(false)}, 'Submit test')));
    if (i !== shown) { shown = i; window.scrollTo(0, 0); }
  }
  let shown = -1;
  mount(); render();
  timer = setInterval(() => {
    const left = Math.round((endAt - Date.now()) / 1000);
    clock.textContent = fmt(left); clock.classList.toggle('low', left <= 300);
    if (left <= 0) { clearInterval(timer); submit(true); }
  }, 1000);
}

function results(list, sel, mins) {
  clearInterval(timer); document.onkeydown = null;
  let score = 0, max = 0; const per = {};
  list.forEach((q, i) => {
    const ok = sel[i] === q.ans;
    max += q.marks; if (ok) score += q.marks;
    const p = per[q.ch] || (per[q.ch] = {got: 0, of: 0, n: 0, right: 0});
    p.of += q.marks; p.n++; if (ok) { p.got += q.marks; p.right++; }
    record(q, ok);
  });
  const hist = store.get('hist', []); hist.push({score, max, mins}); store.set('hist', hist.slice(-30));
  const onlyWrong = el('input', {type: 'checkbox'});
  const review = el('div', {});
  function drawReview() {
    review.replaceChildren(...list.map((q, i) => ({q, i})).filter(({q, i}) => !onlyWrong.checked || sel[i] !== q.ans).map(({q, i}) => {
      const ok = sel[i] === q.ans;
      return el('div', {class: 'card'}, questionBody(q),
        el('div', {class: 'opts'}, q.opts.map((o, k) => el('div', {class: 'opt ' + (k === q.ans ? 'ok' : k === sel[i] ? 'bad' : '')}, el('span', {class: 'l'}, LET[k]), el('span', {}, o)))),
        el('div', {class: 'explain'}, el('b', {}, ok ? `Correct (+${q.marks}). ` : sel[i] < 0 ? `Unanswered (0/${q.marks}). Answer ${LET[q.ans]}. ` : `Wrong (0/${q.marks}). Answer ${LET[q.ans]}. `), q.why));
    }));
  }
  onlyWrong.addEventListener('change', drawReview); drawReview();
  mount(el('h1', {}, 'Test result'), el('p', {class: 'score'}, `${score} / ${max}`),
    el('p', {class: 'muted'}, `${Math.round(100 * score / max)}% · ${mins} min used`),
    el('table', {}, el('thead', {}, el('tr', {}, ['Chapter', 'Questions right', 'Marks'].map(h => el('th', {}, h)))),
      el('tbody', {}, Object.keys(per).sort().map(c => el('tr', {}, el('td', {}, `${c}. ${CH[c]}`), el('td', {}, `${per[c].right} / ${per[c].n}`), el('td', {}, `${per[c].got} / ${per[c].of}`))))),
    el('div', {class: 'row'}, el('a', {class: 'btn primary', href: '#/mock'}, 'Another mock'), el('a', {class: 'btn', href: '#/weak'}, 'Drill weak spots')),
    el('h2', {}, 'Review'), el('label', {class: 'chk'}, onlyWrong, 'Show only questions I did not get right'), review);
}

/* ---------- router ---------- */
function route() {
  document.onkeydown = null;
  const h = location.hash || '#/';
  const [path, qs] = h.slice(1).split('?');
  const parts = path.split('/').filter(Boolean);
  setNav(h);
  if (!parts.length) return home();
  if (parts[0] === 'notes') return notes(parts[1]);
  if (parts[0] === 'practice') {
    const c = (new URLSearchParams(qs || '').get('c') || '').split(',').map(Number).filter(Boolean);
    return practiceSetup(c);
  }
  if (parts[0] === 'mock') return mockSetup();
  if (parts[0] === 'weak') return weak();
  home();
}
window.addEventListener('hashchange', route);
route();
})();
