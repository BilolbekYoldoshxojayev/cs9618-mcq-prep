(function () {
'use strict';
const BANK = window.QBANK || [];
const NOTES = window.NOTES || {};
const BYID = new Map(BANK.map(q => [q.id, q]));
const CH = {1: 'Information representation', 2: 'Communication', 3: 'Hardware', 4: 'Processor fundamentals', 5: 'System software'};
const DEFAULT_QUOTA = {1: 7, 2: 5, 3: 6, 4: 8, 5: 4};
const SEC_PER_Q = 180;                      // 30 questions -> 90 minutes
const BOX_DAYS = [0, 1, 3, 7, 14];          // Leitner intervals
const DAY = 864e5;
const LET = 'ABCD';
const app = document.getElementById('app');
let timer = null;
let live = false;                           // a mock is on screen
let liveCheck = null;

/* ---------- storage (never required) ---------- */
const store = {
  get(k, d) { try { const v = localStorage.getItem('cs9618:' + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('cs9618:' + k, JSON.stringify(v)); } catch (e) { /* ignore */ } },
  del(k) { try { localStorage.removeItem('cs9618:' + k); } catch (e) { /* ignore */ } }
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
  for (const c of kids.flat(Infinity)) if (c != null && c !== false) n.append(c.nodeType ? c : document.createTextNode(String(c)));
  return n;
}
function tx(s) {                            // "2^20" -> 2<sup>20</sup>
  const f = document.createDocumentFragment(), re = /(\d+)\^(-?\d+)/g;
  let last = 0, m;
  while ((m = re.exec(s))) {
    f.append(s.slice(last, m.index) + m[1]);
    const sp = document.createElement('sup'); sp.textContent = m[2]; f.append(sp);
    last = re.lastIndex;
  }
  f.append(s.slice(last));
  return f;
}
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function maxRun(a) { let m = 1, r = 1; for (let i = 1; i < a.length; i++) { r = a[i] === a[i - 1] ? r + 1 : 1; if (r > m) m = r; } return m; }
function lagMatch(a, k) { let c = 0; for (let i = 0; i + k < a.length; i++) if (a[i] === a[i + k]) c++; return a.length > k ? c / (a.length - k) : 0; }
/* answer-position key: independent random positions. Only absurd keys are rejected
   (run of 4+, or a letter far from its fair share) so there is no predictable structure. */
function balancedKey(n) {
  const lo = Math.floor(n / 8), hi = Math.ceil(n * 0.38);
  let k;
  for (let t = 0; t < 500; t++) {
    k = Array.from({length: n}, () => Math.floor(Math.random() * 4));
    if (n < 12) return k;
    const c = [0, 0, 0, 0]; k.forEach(x => c[x]++);
    if (maxRun(k) <= 3 && c.every(x => x >= lo && x <= hi)) return k;
  }
  return k;
}
function present(q, pos) {
  const right = q.opts[q.ans];
  const others = shuffle(q.opts.filter((_, i) => i !== q.ans));
  const opts = others.slice(0, pos).concat([right], others.slice(pos));
  return Object.assign({}, q, {opts, ans: pos});
}
function presentAll(list) { const key = balancedKey(list.length); return list.map((q, i) => present(q, key[i])); }
function fmt(s) { s = Math.max(0, s); const h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60); return (h ? h + ':' + String(m).padStart(2, '0') : String(m).padStart(2, '0')) + ':' + String(s % 60).padStart(2, '0'); }
function stopLive() { liveCheck = null; clearInterval(timer); timer = null; live = false; document.body.classList.remove('exam'); document.onkeydown = null; window.onbeforeunload = null; }
function mount(...nodes) {
  stopLive();
  app.replaceChildren(...nodes.flat(Infinity).filter(n => n != null && n !== false));
  window.scrollTo(0, 0);
  const h = app.querySelector('h1');
  if (h) { h.tabIndex = -1; h.focus({preventScroll: true}); }
}
function setNav(hash) {
  document.querySelectorAll('.top nav a').forEach(a => {
    a.removeAttribute('aria-current');
    const base = a.getAttribute('href').split('/').slice(0, 2).join('/');
    if (hash.startsWith(base)) a.setAttribute('aria-current', 'page');
  });
}
function modsOk(e) { return !(e.repeat || e.ctrlKey || e.metaKey || e.altKey || (e.target && e.target.closest && e.target.closest('input,select,textarea'))); }

/* ---------- spaced repetition (Leitner) ---------- */
function loadSrs() {
  let srs = store.get('srs', null);
  if (!srs) {                                   // migrate v1 data
    srs = {};
    for (const id of store.get('wrong', [])) srs[id] = {box: 0, due: 0, seen: 1, right: 0};
    store.set('srs', srs);
  }
  return srs;
}
function record(q, ok, skipped) {
  const srs = loadSrs();
  const r = srs[q.id] || {box: 0, due: 0, seen: 0, right: 0};
  if (skipped) { r.due = 0; if (!r.seen) r.seen = 0; r.skipped = true; srs[q.id] = r; if (!r.seen) { r.seen = 1; } store.set('srs', srs); return; }
  r.seen++; r.skipped = false;
  if (ok) { r.right++; r.box = Math.min(4, r.box + 1); } else r.box = 0;
  r.due = Date.now() + BOX_DAYS[r.box] * DAY;
  r.last = ok ? 1 : 0;
  srs[q.id] = r; store.set('srs', srs);
}
function dueList() {
  const srs = loadSrs(), now = Date.now();
  return BANK.filter(q => srs[q.id] && srs[q.id].seen && srs[q.id].due <= now).sort((a, b) => srs[a.id].due - srs[b.id].due);
}
function orderPool(pool, unseenOnly) {
  const srs = loadSrs(), now = Date.now(), due = [], unseen = [], rest = [];
  pool.forEach(q => { const r = srs[q.id]; if (!r || !r.seen) unseen.push(q); else if (r.due <= now) due.push(q); else rest.push(q); });
  return unseenOnly ? shuffle(unseen) : [...shuffle(due), ...shuffle(unseen), ...shuffle(rest)];
}
function chapterStats(c) {
  const srs = loadSrs(), qs = BANK.filter(q => q.ch === c);
  let seen = 0, attempts = 0, right = 0, due = 0; const now = Date.now();
  qs.forEach(q => { const r = srs[q.id]; if (r && r.seen) { seen++; attempts += r.seen; right += r.right; if (r.due <= now) due++; } });
  return {total: qs.length, seen, unseen: qs.length - seen, pct: attempts ? Math.round(100 * right / attempts) : null, due};
}

/* ---------- shared question rendering ---------- */
function questionBody(q, o) {
  o = o || {};
  const kids = [el('div', {class: 'qhead'},
    el('span', {class: 'muted'}, o.hideTopic ? `Question ${o.no || ''}` : `Chapter ${q.ch} · ${q.topic}`),
    el('span', {class: 'pill'}, `${q.marks} mark${q.marks > 1 ? 's' : ''}`))];
  kids.push(el('p', {class: 'qtext', id: o.id || null}, tx(q.q)));
  if (q.code) kids.push(el('pre', {class: 'code'}, q.code));
  return kids;
}

/* ---------- views ---------- */
function home() {
  const hist = store.get('hist', []);
  const due = dueList().length;
  const tiles = [1, 2, 3, 4, 5].map(c => {
    const s = chapterStats(c);
    return el('div', {class: 'tile'},
      el('b', {}, `${c}. ${CH[c]}`),
      el('span', {class: 'muted'}, `${s.total} questions · ${s.pct === null ? 'not started' : s.pct + '% correct'}${s.unseen && s.seen ? ` · ${s.unseen} unseen` : ''}`),
      el('div', {class: 'row tilebtns'}, el('a', {class: 'btn', href: `#/notes/${c}`}, 'Notes'), el('a', {class: 'btn', href: `#/practice?c=${c}`}, 'Practise')));
  });
  const last3 = hist.slice(-3);
  const avg = last3.length ? Math.round(last3.reduce((s, h) => s + 100 * h.score / h.max, 0) / last3.length) : null;
  const last = hist[hist.length - 1];
  mount(
    el('h1', {}, 'Cambridge 9618 · chapters 1–5'),
    el('p', {}, 'Study the notes, practise by chapter, then sit timed mock tests that copy the real test: 30 single-answer questions (20 × 2 marks + 10 × 1 mark = 50 marks) in 90 minutes.'),
    el('div', {class: 'row'},
      el('a', {class: 'btn primary', href: '#/mock'}, 'Start a mock test'),
      el('a', {class: 'btn', href: '#/practice'}, 'Practise by chapter'),
      el('a', {class: 'btn', href: '#/weak'}, `Due for review (${due})`),
      el('a', {class: 'btn', href: '#/progress'}, 'Progress')),
    last ? el('p', {class: 'muted'}, `Last mock: ${last.score}/${last.max} (${Math.round(100 * last.score / last.max)}%). ${avg !== null ? `Average of last ${last3.length}: ${avg}%. ` : ''}${hist.length} taken.`) : null,
    el('h2', {}, 'Chapters'),
    el('div', {class: 'grid'}, tiles),
    el('p', {class: 'muted'}, `Question bank: ${BANK.length} questions. Answer order is shuffled every time, and each mock uses a balanced A–D key. Progress is saved only in this browser.`));
}

function notes(c) {
  c = Math.min(5, Math.max(1, Math.floor(Number(c)) || 1));
  const n = NOTES[c];
  const links = [1, 2, 3, 4, 5].map(i => el('a', {class: 'btn' + (i === c ? ' primary' : ''), href: `#/notes/${i}`, 'aria-current': i === c ? 'page' : null}, `Ch ${i}`));
  const body = el('div', {class: 'notes'});
  body.innerHTML = n ? n.html : '<p>No notes.</p>';          // trusted, authored in notes.js
  mount(el('div', {class: 'row'}, links), el('h1', {}, `${c}. ${CH[c]}`), body,
    el('div', {class: 'row'}, el('a', {class: 'btn primary', href: `#/practice?c=${c}`}, `Practise chapter ${c}`),
      c < 5 ? el('a', {class: 'btn', href: `#/notes/${c + 1}`}, 'Next chapter →') : null));
}

function practiceSetup(preset) {
  const sel = new Set(preset.length ? preset : [1, 2, 3, 4, 5]);
  const boxes = [1, 2, 3, 4, 5].map(c => {
    const s = chapterStats(c);
    const cb = el('input', {type: 'checkbox', value: c, checked: sel.has(c)});
    cb.addEventListener('change', () => cb.checked ? sel.add(c) : sel.delete(c));
    return el('label', {class: 'chk'}, cb, `${c}. ${CH[c]} (${s.total}, ${s.unseen} unseen)`);
  });
  const count = el('select', {}, el('option', {value: 10}, '10'), el('option', {value: 20, selected: true}, '20'), el('option', {value: 0}, 'All'));
  const unseen = el('input', {type: 'checkbox'});
  mount(el('h1', {}, 'Practice'), el('p', {class: 'muted'}, 'Instant feedback and an explanation after every answer. Questions due for review come first, then ones you have not seen.'),
    el('div', {class: 'card'}, boxes, el('p', {}, 'Questions: ', count), el('label', {class: 'chk'}, unseen, 'Unseen questions only')),
    el('button', {class: 'primary', onclick: () => {
      let pool = BANK.filter(q => sel.has(q.ch));
      if (!pool.length) return;
      pool = orderPool(pool, unseen.checked);
      if (!pool.length) { alert('You have seen every question in these chapters.'); return; }
      const n = Number(count.value); if (n) pool = pool.slice(0, n);
      runQuiz(presentAll(pool), 'Practice');
    }}, 'Start'));
}

function runQuiz(list, title) {
  stopLive();
  let i = 0, right = 0, locked = false;
  const missed = [];
  function render(first) {
    const q = list[i]; locked = false;
    const opts = q.opts.map((o, k) => el('button', {class: 'opt', onclick: () => pick(k)}, el('span', {class: 'l', 'aria-hidden': 'true'}, LET[k]), el('span', {class: 'ot'}, tx(o))));
    const fb = el('div', {'aria-live': 'polite'});
    const next = el('button', {class: 'primary', disabled: true, onclick: () => { i++; i < list.length ? render() : finish(); }}, i === list.length - 1 ? 'Finish' : 'Next');
    function pick(k) {
      if (locked) return; locked = true;
      const ok = k === q.ans; if (ok) right++; else missed.push(q);
      record(q, ok);
      opts.forEach((b, j) => {
        b.disabled = true;
        if (j === q.ans) { b.classList.add('ok'); b.append(el('span', {class: 'tag'}, '✓ Correct answer')); }
        else if (j === k) { b.classList.add('bad'); b.append(el('span', {class: 'tag'}, '✗ Your answer')); }
      });
      fb.append(el('div', {class: 'explain'}, el('b', {}, ok ? 'Correct. ' : `Not quite — the answer is ${LET[q.ans]}. `), tx(q.why), ' ',
        el('a', {href: `#/notes/${q.ch}`}, 'Review in notes →')));
      bar.firstChild.style.width = `${100 * (i + 1) / list.length}%`;
      next.disabled = false; next.focus();
    }
    document.onkeydown = e => {
      if (!modsOk(e)) return;
      const m = {a: 0, b: 1, c: 2, d: 3, 1: 0, 2: 1, 3: 2, 4: 3}[e.key.toLowerCase()];
      if (m !== undefined && !locked) pick(m); else if ((e.key === 'Enter' || e.key === 'ArrowRight') && locked) next.click();
    };
    const bar = el('div', {class: 'bar', role: 'progressbar', 'aria-valuemin': 0, 'aria-valuemax': list.length, 'aria-valuenow': i}, el('i', {style: `width:${100 * i / list.length}%`}));
    const head = el('h2', {class: 'qh', tabindex: '-1'}, `${title} — question ${i + 1} of ${list.length}`);
    app.replaceChildren(head, bar,
      el('div', {class: 'card'}, questionBody(q, {id: 'qt'}), el('div', {class: 'opts', role: 'group', 'aria-labelledby': 'qt'}, opts), fb), next);
    if (!first) window.scrollTo(0, 0);
    head.focus({preventScroll: true});
  }
  function finish() {
    mount(el('h1', {}, `${title} complete`), el('p', {class: 'score'}, `${right} / ${list.length}`),
      el('div', {class: 'row'},
        missed.length ? el('button', {class: 'primary', onclick: () => runQuiz(presentAll(missed), 'Retry missed')}, `Retry ${missed.length} missed`) : null,
        el('a', {class: 'btn', href: '#/practice'}, 'New practice'), el('a', {class: 'btn', href: '#/mock'}, 'Mock test')));
  }
  render(true);
}

function weak() {
  const pool = dueList().slice(0, 20);
  if (!pool.length) return mount(el('h1', {}, 'Due for review'),
    el('p', {}, 'Nothing is due. Questions you get wrong, or skip in a mock, come back here until you answer them correctly again; correct answers return after 1, 3, 7 and 14 days.'),
    el('a', {class: 'btn primary', href: '#/practice'}, 'Practise'));
  runQuiz(presentAll(shuffle(pool)), `Due for review (${pool.length})`);
}

function sheet() {
  const body = el('div', {class: 'notes'});
  body.innerHTML = NOTES.sheet ? NOTES.sheet.html : '';
  mount(el('h1', {}, 'Cheat sheet'), body, el('div', {class: 'row'}, el('button', {onclick: () => window.print()}, 'Print / save as PDF')));
}

function progress() {
  const srs = loadSrs(), hist = store.get('hist', []), now = Date.now();
  const rows = [1, 2, 3, 4, 5].map(c => { const s = chapterStats(c); return el('tr', {}, el('td', {}, `${c}. ${CH[c]}`), el('td', {}, `${s.seen}/${s.total}`), el('td', {}, s.pct === null ? '–' : `${s.pct}%`), el('td', {}, s.due)); });
  const topics = {};
  BANK.forEach(q => { const t = topics[q.ch + '|' + q.topic] || (topics[q.ch + '|' + q.topic] = {ch: q.ch, topic: q.topic, n: 0, seen: 0, att: 0, right: 0}); t.n++; const r = srs[q.id]; if (r && r.seen) { t.seen++; t.att += r.seen; t.right += r.right; } });
  const trows = Object.values(topics).sort((a, b) => a.ch - b.ch || a.topic.localeCompare(b.topic)).map(t => el('tr', {}, el('td', {}, `${t.ch} · ${t.topic}`), el('td', {}, `${t.seen}/${t.n}`), el('td', {}, t.att ? `${Math.round(100 * t.right / t.att)}%` : '–')));
  const hrows = hist.slice(-10).reverse().map(h => el('tr', {}, el('td', {}, h.t ? new Date(h.t).toLocaleDateString() : '–'), el('td', {}, `${h.score}/${h.max}`), el('td', {}, `${Math.round(100 * h.score / h.max)}%`), el('td', {}, h.mins + ' min')));
  mount(el('h1', {}, 'Progress'),
    el('h2', {}, 'Chapters'), el('table', {}, el('thead', {}, el('tr', {}, ['Chapter', 'Seen', 'Correct', 'Due'].map(x => el('th', {}, x)))), el('tbody', {}, rows)),
    el('h2', {}, 'Topics'), el('table', {}, el('thead', {}, el('tr', {}, ['Topic', 'Seen', 'Correct'].map(x => el('th', {}, x)))), el('tbody', {}, trows)),
    el('h2', {}, 'Mock tests'), hist.length ? el('table', {}, el('thead', {}, el('tr', {}, ['Date', 'Score', '%', 'Time'].map(x => el('th', {}, x)))), el('tbody', {}, hrows)) : el('p', {class: 'muted'}, 'No mock tests yet.'),
    el('h2', {}, 'Back up'), el('p', {class: 'muted'}, 'Progress lives only in this browser. Export it to move to another device or keep a copy.'),
    el('div', {class: 'row'}, el('button', {onclick: exportData}, 'Export progress'), el('label', {class: 'btn'}, 'Import progress', el('input', {type: 'file', accept: 'application/json', class: 'sr', onchange: importData}))),
    el('div', {class: 'row'}, el('button', {onclick: () => { if (confirm('Erase all progress stored in this browser?')) { ['srs', 'hist', 'wrong', 'stats', 'activeMock'].forEach(store.del); progress(); } }}, 'Reset progress')));
}

function exportData() {
  const d = {}; ['srs', 'hist', 'quota'].forEach(k => { const v = store.get(k, null); if (v !== null) d[k] = v; });
  const a = el('a', {href: URL.createObjectURL(new Blob([JSON.stringify(d)], {type: 'application/json'})), download: 'cs9618-progress.json'});
  document.body.append(a); a.click(); a.remove();
}
function importData(e) {
  const f = e.target.files[0]; if (!f) return;
  f.text().then(t => {
    const d = JSON.parse(t);
    if (!d || typeof d !== 'object' || (d.srs && typeof d.srs !== 'object') || (d.hist && !Array.isArray(d.hist))) throw new Error('bad');
    if (!confirm('Replace the progress in this browser with the imported file?')) return;
    ['srs', 'hist', 'quota'].forEach(k => { if (d[k] !== undefined) store.set(k, d[k]); });
    progress();
  }).catch(() => alert('That file is not a valid progress export.'));
}

/* ---------- mock test ---------- */
function buildMock(quota) {
  const total = Object.values(quota).reduce((a, b) => a + b, 0);
  const wantMarks = total === 30 ? 50 : null;
  let best = null;
  for (let t = 0; t < 4000; t++) {
    const pick = [];
    for (const c of [1, 2, 3, 4, 5]) pick.push(...shuffle(BANK.filter(q => q.ch === c)).slice(0, quota[c]));
    const keys = pick.map(q => q.q + '|' + (q.code || ''));
    if (new Set(keys).size !== keys.length) continue;
    best = pick;
    if (wantMarks === null || pick.reduce((s, q) => s + q.marks, 0) === wantMarks) break;
  }
  return presentAll(shuffle(best || []));
}
function restoreMock(a) {
  const list = a.ids.map((id, k) => {
    const q = BYID.get(id), right = q.opts[q.ans];
    return Object.assign({}, q, {opts: a.ord[k], ans: a.ord[k].indexOf(right)});
  });
  return {list, st: {sel: a.sel, flag: a.flag, i: a.i, endAt: a.endAt, startedAt: a.startedAt, secs: a.secs}};
}

function mockSetup() {
  const quota = Object.assign({}, DEFAULT_QUOTA, store.get('quota', {}));
  const active = store.get('activeMock', null);
  const nodes = [el('h1', {}, 'Mock test')];
  if (active) {
    const left = Math.round((active.endAt - Date.now()) / 1000);
    if (left <= 0) {                                  // expired while away: mark it
      const {list, st} = restoreMock(active);
      store.del('activeMock');
      return results(list, st.sel, st.flag, Math.round(st.secs / 60), true);
    }
    const {list, st} = restoreMock(active);
    nodes.push(el('div', {class: 'card resume'}, el('b', {}, 'A test is in progress'),
      el('p', {}, `${st.sel.filter(s => s >= 0).length} of ${list.length} answered · ${fmt(left)} left`),
      el('div', {class: 'row'}, el('button', {class: 'primary', onclick: () => runMock(list, st)}, 'Resume test'),
        el('button', {onclick: () => { if (confirm('Discard this test and its answers?')) { store.del('activeMock'); mockSetup(); } }}, 'Discard'))));
  }
  const total = el('b', {}), warn = el('p', {class: 'warnline'});
  const inputs = [1, 2, 3, 4, 5].map(c => {
    const max = Math.min(BANK.filter(q => q.ch === c).length, 15);
    const inp = el('input', {type: 'number', min: 0, max, value: quota[c], 'aria-label': `Chapter ${c} questions`});
    inp.addEventListener('input', () => { quota[c] = Math.max(0, Math.min(Math.floor(Number(inp.value)) || 0, max)); upd(); });
    return el('label', {class: 'chk'}, inp, ` ${c}. ${CH[c]}`);
  });
  function upd() {
    const t = Object.values(quota).reduce((a, b) => a + b, 0);
    total.textContent = t;
    warn.textContent = t === 30 ? '' : `Not the exam format: ${t} questions, ${Math.round(t * SEC_PER_Q / 60)} minutes, marks vary.`;
  }
  upd();
  nodes.push(el('div', {class: 'card'},
    el('p', {}, el('b', {}, '30 questions · 50 marks · 90 minutes.'), ' 20 questions are worth 2 marks and 10 are worth 1. No answers or topic hints are shown until you submit; you can flag questions and review before handing in.'),
    el('div', {class: 'row'}, el('button', {class: 'primary', onclick: () => {
      if (store.get('activeMock', null) && !confirm('Starting a new test discards the one in progress. Continue?')) return;
      store.set('quota', quota); runMock(buildMock(quota), null);
    }}, 'Start 90-minute mock')),
    el('details', {}, el('summary', {}, 'Custom mix (default 7 / 5 / 6 / 8 / 4)'), inputs, el('p', {}, 'Total questions: ', total), warn,
      el('button', {onclick: () => { store.del('quota'); mockSetup(); }}, 'Reset mix'))));
  mount(...nodes);
}

function runMock(list, state) {
  stopLive();
  const n = list.length;
  const st = state || {sel: list.map(() => -1), flag: list.map(() => false), i: 0, startedAt: Date.now(), secs: n * SEC_PER_Q};
  if (!st.endAt) st.endAt = st.startedAt + st.secs * 1000;
  live = true;
  document.body.classList.add('exam');
  history.replaceState(null, '', '#/mock/run');
  window.onbeforeunload = e => { e.preventDefault(); e.returnValue = ''; };
  const clock = el('span', {class: 'timer', role: 'timer'}, fmt(Math.round((st.endAt - Date.now()) / 1000)));
  let optEls = [], navEls = [], info = null, view = 'q';

  const save = () => store.set('activeMock', {ids: list.map(q => q.id), ord: list.map(q => q.opts), sel: st.sel, flag: st.flag, i: st.i, endAt: st.endAt, startedAt: st.startedAt, secs: st.secs});
  const pace = () => { const per = st.secs * 1000 / n, el_ = Date.now() - st.startedAt, target = Math.min(n, Math.floor(el_ / per) + 1); const behind = target - (st.i + 1); return behind >= 3 ? ` · pace: be on Q${target}` : ''; };
  const counts = () => `${st.sel.filter(s => s >= 0).length}/${n} answered · ${st.flag.filter(Boolean).length} flagged`;
  function submit(auto) {
    const mins = Math.max(1, Math.round((Date.now() - st.startedAt) / 60000));
    stopLive(); store.del('activeMock');
    results(list, st.sel, st.flag, mins, auto);
  }
  function bar(extra) {
    info = el('span', {class: 'binfo'}, view === 'q' ? `Q ${st.i + 1}/${n} · ${counts()}${pace()}` : counts());
    return el('div', {class: 'examBar'}, info, el('span', {class: 'tbox'}, 'Time ', clock), extra);
  }
  function refresh() {
    if (info) info.textContent = view === 'q' ? `Q ${st.i + 1}/${n} · ${counts()}${pace()}` : counts();
    navEls.forEach((b, k) => { b.className = (st.sel[k] >= 0 ? 'a ' : '') + (st.flag[k] ? 'f ' : '') + (k === st.i ? 'cur' : ''); b.setAttribute('aria-label', `Question ${k + 1}${st.sel[k] >= 0 ? ', answered' : ', not answered'}${st.flag[k] ? ', flagged' : ''}`); if (k === st.i) b.setAttribute('aria-current', 'step'); else b.removeAttribute('aria-current'); });
    optEls.forEach((b, k) => { const on = st.sel[st.i] === k; b.setAttribute('aria-checked', on); b.tabIndex = on || (st.sel[st.i] < 0 && k === 0) ? 0 : -1; });
    save();
  }
  function go(k) { st.i = k; view = 'q'; render(); }
  function choose(k) { st.sel[st.i] = k; refresh(); }

  function render() {
    view = 'q';
    const q = list[st.i];
    optEls = q.opts.map((o, k) => el('button', {class: 'opt', role: 'radio', 'aria-checked': false, tabindex: -1, onclick: () => choose(k), onkeydown: e => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); const t = optEls[(k + (e.key === 'ArrowDown' ? 1 : 3)) % 4]; t.focus(); }
    }}, el('span', {class: 'l', 'aria-hidden': 'true'}, LET[k]), el('span', {class: 'ot'}, tx(o))));
    navEls = list.map((_, k) => el('button', {onclick: () => go(k)}, k + 1));
    const flagBtn = el('button', {onclick: () => { st.flag[st.i] = !st.flag[st.i]; flagBtn.textContent = st.flag[st.i] ? '⚑ Unflag' : '⚐ Flag'; refresh(); }}, st.flag[st.i] ? '⚑ Unflag' : '⚐ Flag');
    const head = el('h2', {class: 'qh', tabindex: '-1'}, `Question ${st.i + 1} of ${n}`);
    app.replaceChildren(
      bar(el('button', {class: 'primary sm', onclick: () => review()}, 'Review & submit')),
      head,
      el('details', {class: 'map'}, el('summary', {}, 'Question map'), el('div', {class: 'nav'}, navEls)),
      el('div', {class: 'card'}, questionBody(q, {hideTopic: true, no: st.i + 1, id: 'qt'}), el('div', {class: 'opts', role: 'radiogroup', 'aria-labelledby': 'qt'}, optEls)),
      el('div', {class: 'actions'},
        el('button', {disabled: st.i === 0, onclick: () => go(st.i - 1)}, '← Back'), flagBtn,
        el('button', {class: 'primary', disabled: st.i === n - 1, onclick: () => go(st.i + 1)}, 'Next →')));
    refresh(); window.scrollTo(0, 0); head.focus({preventScroll: true});
  }
  function review() {
    view = 'r';
    const un = list.map((_, k) => k).filter(k => st.sel[k] < 0), fl = list.map((_, k) => k).filter(k => st.flag[k]);
    const chips = (ids, empty) => ids.length ? el('div', {class: 'nav'}, ids.map(k => el('button', {onclick: () => go(k)}, k + 1))) : el('p', {class: 'muted'}, empty);
    const head = el('h2', {class: 'qh', tabindex: '-1'}, 'Review before submitting');
    navEls = [];
    app.replaceChildren(bar(null), head,
      el('div', {class: 'card'}, el('h3', {}, `Unanswered (${un.length})`), chips(un, 'All questions answered.'),
        el('h3', {}, `Flagged (${fl.length})`), chips(fl, 'No flagged questions.')),
      el('div', {class: 'row'}, el('button', {onclick: () => go(Math.min(st.i, n - 1))}, '← Return to test'),
        el('button', {class: 'primary', onclick: () => submit(false)}, 'Submit now')));
    window.scrollTo(0, 0); head.focus({preventScroll: true});
  }

  document.onkeydown = e => {
    if (!modsOk(e) || view !== 'q') return;
    const m = {a: 0, b: 1, c: 2, d: 3, 1: 0, 2: 1, 3: 2, 4: 3}[e.key.toLowerCase()];
    if (m !== undefined) choose(m);
    else if (e.key === 'ArrowRight' && st.i < n - 1) go(st.i + 1);
    else if (e.key === 'ArrowLeft' && st.i > 0) go(st.i - 1);
  };
  liveCheck = () => { if (st.endAt - Date.now() <= 0) submit(true); };
  render();
  timer = setInterval(() => {
    const left = Math.round((st.endAt - Date.now()) / 1000);
    clock.textContent = fmt(left) + (left <= 300 && left > 0 ? ' · 5 min left' : '');
    clock.classList.toggle('low', left <= 300);
    if (view === 'q' && info) info.textContent = `Q ${st.i + 1}/${n} · ${counts()}${pace()}`;
    if (left <= 0) submit(true);
  }, 1000);
}

function results(list, sel, flag, mins, auto) {
  stopLive();
  let score = 0, max = 0; const per = {};
  list.forEach((q, i) => {
    const ok = sel[i] === q.ans;
    max += q.marks; if (ok) score += q.marks;
    const p = per[q.ch] || (per[q.ch] = {got: 0, of: 0, n: 0, right: 0});
    p.of += q.marks; p.n++; if (ok) { p.got += q.marks; p.right++; }
    record(q, ok, sel[i] < 0);
  });
  const hist = store.get('hist', []);
  hist.push({t: Date.now(), score, max, mins, per: Object.fromEntries(Object.entries(per).map(([c, p]) => [c, [p.got, p.of]]))});
  store.set('hist', hist.slice(-30));
  const onlyWrong = el('input', {type: 'checkbox', checked: score < max});
  const review = el('div', {});
  const cards = [];
  function drawReview() {
    review.replaceChildren(...list.map((q, i) => ({q, i})).filter(({q, i}) => !onlyWrong.checked || sel[i] !== q.ans || flag[i]).map(({q, i}) => {
      const ok = sel[i] === q.ans;
      const c = el('div', {class: 'card', id: `r-${i}`}, questionBody(q, {no: i + 1}),
        el('div', {class: 'opts'}, q.opts.map((o, k) => el('div', {class: 'opt ' + (k === q.ans ? 'ok' : k === sel[i] ? 'bad' : '')}, el('span', {class: 'l', 'aria-hidden': 'true'}, LET[k]), el('span', {class: 'ot'}, tx(o)),
          k === q.ans ? el('span', {class: 'tag'}, '✓ Correct answer') : k === sel[i] ? el('span', {class: 'tag'}, '✗ Your answer') : null))),
        el('div', {class: 'explain'}, el('b', {}, `Question ${i + 1}: ` + (ok ? `correct (+${q.marks}). ` : sel[i] < 0 ? `unanswered (0/${q.marks}). Answer ${LET[q.ans]}. ` : `wrong (0/${q.marks}). Answer ${LET[q.ans]}. `)), flag[i] ? '⚑ flagged. ' : '', tx(q.why), ' ', el('a', {href: `#/notes/${q.ch}`}, 'Review in notes →')));
      cards[i] = c; return c;
    }));
  }
  onlyWrong.addEventListener('change', drawReview); drawReview();
  const grid = el('div', {class: 'nav rgrid'}, list.map((q, i) => {
    const ok = sel[i] === q.ans, none = sel[i] < 0;
    return el('button', {class: ok ? 'ok' : none ? 'none' : 'bad', 'aria-label': `Question ${i + 1}: ${ok ? 'correct' : none ? 'unanswered' : 'wrong'}${flag[i] ? ', flagged' : ''}`, onclick: () => { if (!cards[i]) { onlyWrong.checked = false; drawReview(); } cards[i].scrollIntoView({behavior: 'smooth', block: 'start'}); }}, (ok ? '✓' : none ? '–' : '✗') + (flag[i] ? '⚑' : ''), el('small', {}, i + 1));
  }));
  mount(el('h1', {}, 'Test result'), auto ? el('p', {class: 'warnline'}, 'Time ran out, so the test was submitted automatically.') : null,
    el('p', {class: 'score'}, `${score} / ${max}`),
    el('p', {class: 'muted'}, `${Math.round(100 * score / max)}% · ${mins} min used`),
    grid,
    el('table', {}, el('thead', {}, el('tr', {}, ['Chapter', 'Questions right', 'Marks'].map(h => el('th', {}, h)))),
      el('tbody', {}, Object.keys(per).sort().map(c => el('tr', {}, el('td', {}, `${c}. ${CH[c]}`), el('td', {}, `${per[c].right} / ${per[c].n}`), el('td', {}, `${per[c].got} / ${per[c].of}`))))),
    el('div', {class: 'row'}, el('a', {class: 'btn primary', href: '#/mock'}, 'Another mock'), el('a', {class: 'btn', href: '#/weak'}, 'Drill due questions')),
    el('h2', {}, 'Review'), el('label', {class: 'chk'}, onlyWrong, 'Show only questions I got wrong or flagged'), review);
}

/* ---------- router ---------- */
function route() {
  const h = location.hash || '#/';
  if (live) {
    if (h === '#/mock/run') return;
    if (!confirm('Leave the test? Your answers are saved and the timer keeps running; you can resume from the Mock test page.')) { history.replaceState(null, '', '#/mock/run'); return; }
  }
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
  if (parts[0] === 'progress') return progress();
  if (parts[0] === 'sheet') return sheet();
  home();
}
window.addEventListener('hashchange', route);
document.addEventListener('visibilitychange', () => { if (!document.hidden && liveCheck) liveCheck(); });
document.addEventListener('click', e => {           // link to the page you are already on
  const a = e.target.closest && e.target.closest('a[href^="#/"]');
  if (a && a.getAttribute('href') === location.hash && !live) { e.preventDefault(); route(); }
});
route();
if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
  navigator.serviceWorker.register('sw.js').catch(() => { /* offline support is optional */ });
}
})();
