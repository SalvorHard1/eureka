/* Eurêka — logique de l'application (vanilla JS, sans dépendance). */
(function () {
  'use strict';

  const STORE_KEY = 'cultureg_v1';
  // Intervalles de la répétition espacée (en jours) selon la « boîte » de Leitner.
  const INTERVALS = [0, 1, 3, 7, 14, 30, 60];
  const MASTERED_BOX = 4;
  const GOALS = [
    { xp: 20, label: 'Tranquille', desc: 'Environ 1 leçon par jour' },
    { xp: 40, label: 'Régulier', desc: 'Environ 2 leçons par jour' },
    { xp: 70, label: 'Motivé', desc: '3 à 4 leçons par jour' }
  ];
  const LEVEL_NAMES = ['Curieux', 'Apprenti', 'Explorateur', 'Connaisseur', 'Érudit', 'Savant', 'Sage', 'Encyclopédie vivante'];
  const XP = { lesson: 10, correct: 5, perfect: 5, deep: 5, review: 3 };

  /* ---------- Dates ---------- */
  const pad = n => String(n).padStart(2, '0');
  const keyOf = d => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  const today = () => keyOf(new Date());
  const shift = (k, n) => { const [y, m, d] = k.split('-').map(Number); return keyOf(new Date(y, m - 1, d + n)); };

  /* ---------- Index du contenu ---------- */
  const LESSONS = {};
  const THEME_OF = {};
  THEMES.forEach(t => t.lessons.forEach(l => { LESSONS[l.id] = l; THEME_OF[l.id] = t; }));
  const ALL_LESSONS = Object.values(LESSONS);
  const themeById = id => THEMES.find(t => t.id === id);

  function questionById(qid) {
    const [lid, i] = qid.split('#');
    const l = LESSONS[lid];
    if (!l || !l.quiz[+i]) return null;
    return Object.assign({}, l.quiz[+i], { qid, lesson: l });
  }

  /* ---------- État persistant ---------- */
  function freshState() {
    return {
      onboarded: false, name: '', goal: 40,
      xp: 0, days: {}, streak: 0, best: 0, last: null,
      done: {}, srs: {}, badges: {}, deep: {},
      stats: { reviewsOk: 0, perfect: 0, answers: 0, correct: 0, owl: false, bird: false }
    };
  }
  function load() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        const s = Object.assign(freshState(), JSON.parse(raw));
        s.stats = Object.assign(freshState().stats, s.stats);
        return s;
      }
    } catch (e) { /* stockage indisponible : on repart de zéro */ }
    return freshState();
  }
  let S = load();
  function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) { } }

  /* ---------- Série, XP, niveaux ---------- */
  function currentStreak() {
    if (!S.last) return 0;
    const t = today();
    return (S.last === t || S.last === shift(t, -1)) ? S.streak : 0;
  }
  function touchStreak() {
    const t = today();
    if (S.last === t) return;
    S.streak = S.last === shift(t, -1) ? S.streak + 1 : 1;
    S.last = t;
    S.best = Math.max(S.best, S.streak);
  }
  function gainXP(n) {
    S.xp += n;
    const t = today();
    S.days[t] = (S.days[t] || 0) + n;
    touchStreak();
  }
  const todayXP = () => S.days[today()] || 0;
  const levelStart = n => 25 * (n - 1) * n; // 0, 50, 150, 300, 500…
  function levelInfo(xp) {
    let n = 1;
    while (xp >= levelStart(n + 1)) n++;
    const from = levelStart(n), to = levelStart(n + 1);
    return { n, name: LEVEL_NAMES[Math.min(n - 1, LEVEL_NAMES.length - 1)], pct: (xp - from) / (to - from), left: to - xp };
  }

  /* ---------- Répétition espacée ---------- */
  function grade(qid, ok, fromLesson) {
    const e = S.srs[qid] || { box: 0, due: today() };
    if (ok) {
      e.box = Math.min(e.box + 1, INTERVALS.length - 1);
      e.due = shift(today(), INTERVALS[e.box]);
    } else {
      e.box = 0;
      // Une erreur pendant une leçon est à revoir dès aujourd'hui ; en révision, demain.
      e.due = fromLesson ? today() : shift(today(), 1);
    }
    S.srs[qid] = e;
    S.stats.answers++;
    if (ok) S.stats.correct++;
  }
  const dueQuestions = () => {
    const t = today();
    return Object.keys(S.srs).filter(q => S.srs[q].due <= t && questionById(q));
  };
  const masteredCount = () => Object.values(S.srs).filter(e => e.box >= MASTERED_BOX).length;

  /* ---------- Badges ---------- */
  const nDone = () => Object.keys(S.done).length;
  const themesTouched = () => new Set(Object.keys(S.done).map(id => THEME_OF[id] && THEME_OF[id].id).filter(Boolean)).size;
  const BADGES = [
    { id: 'first', icon: '🌱', name: 'Premier pas', desc: 'Terminer sa première leçon', test: () => nDone() >= 1 },
    { id: 'l10', icon: '📚', name: 'Studieux', desc: 'Terminer 10 leçons', test: () => nDone() >= 10 },
    { id: 'l25', icon: '🎓', name: 'Bachelier', desc: 'Terminer 25 leçons', test: () => nDone() >= 25 },
    { id: 'lall', icon: '👑', name: 'Encyclopédie', desc: 'Terminer toutes les leçons', test: () => nDone() >= ALL_LESSONS.length },
    { id: 's3', icon: '🔥', name: 'Ça chauffe', desc: 'Série de 3 jours', test: () => S.best >= 3 },
    { id: 's7', icon: '⚡', name: 'Semaine parfaite', desc: 'Série de 7 jours', test: () => S.best >= 7 },
    { id: 's30', icon: '🌋', name: 'Inarrêtable', desc: 'Série de 30 jours', test: () => S.best >= 30 },
    { id: 'goal', icon: '✅', name: 'Objectif atteint', desc: 'Atteindre son objectif du jour', test: () => Object.values(S.days).some(x => x >= S.goal) },
    { id: 'perfect', icon: '🎯', name: 'Sans faute', desc: 'Réussir un quiz à 100 %', test: () => S.stats.perfect >= 1 },
    { id: 'perfect10', icon: '🏹', name: 'Tireur d’élite', desc: '10 quiz sans faute', test: () => S.stats.perfect >= 10 },
    { id: 't5', icon: '🧭', name: 'Touche-à-tout', desc: 'Explorer 5 thématiques', test: () => themesTouched() >= 5 },
    { id: 'tall', icon: '🌍', name: 'Esprit universel', desc: 'Explorer toutes les thématiques', test: () => themesTouched() >= THEMES.length },
    { id: 'deep5', icon: '🔍', name: 'Curiosité insatiable', desc: 'Lire 5 approfondissements', test: () => Object.keys(S.deep).length >= 5 },
    { id: 'r25', icon: '🐘', name: 'Mémoire d’éléphant', desc: '25 bonnes réponses en révision', test: () => S.stats.reviewsOk >= 25 },
    { id: 'master20', icon: '💎', name: 'Gravé dans le marbre', desc: 'Maîtriser 20 questions', test: () => masteredCount() >= 20 },
    { id: 'xp500', icon: '⭐', name: '500 XP', desc: 'Cumuler 500 XP', test: () => S.xp >= 500 },
    { id: 'xp2000', icon: '🌟', name: '2 000 XP', desc: 'Cumuler 2 000 XP', test: () => S.xp >= 2000 },
    { id: 'owl', icon: '🦉', name: 'Oiseau de nuit', desc: 'Apprendre après 22 h', test: () => S.stats.owl },
    { id: 'bird', icon: '🐦', name: 'Lève-tôt', desc: 'Apprendre avant 8 h', test: () => S.stats.bird }
  ];
  function checkBadges() {
    const h = new Date().getHours();
    if (h >= 22) S.stats.owl = true;
    if (h < 8) S.stats.bird = true;
    const unlocked = [];
    BADGES.forEach(b => {
      if (!S.badges[b.id] && b.test()) { S.badges[b.id] = today(); unlocked.push(b); }
    });
    return unlocked;
  }

  /* ---------- Utilitaires ---------- */
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const md = s => s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>');
  function shuffle(a) {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  const plural = (n, w) => n + ' ' + w + (n > 1 ? 's' : '');
  const themeStyle = t => `style="--c:${t.color}"`;
  function lessonOfTheDay() {
    const pool = ALL_LESSONS.filter(l => !S.done[l.id]);
    const list = pool.length ? pool : ALL_LESSONS;
    let h = 0;
    for (const ch of today()) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
    return list[h % list.length];
  }
  function nextLessonInTheme(lesson) {
    const t = THEME_OF[lesson.id];
    return t.lessons.find(l => !S.done[l.id] && l.id !== lesson.id) || null;
  }

  /* ---------- Navigation ---------- */
  let view = { name: 'home' };
  let session = null; // leçon ou quiz en cours
  const root = document.getElementById('app');

  function go(name, params) {
    view = Object.assign({ name }, params || {});
    render();
    window.scrollTo(0, 0);
  }

  /* ---------- Composants ---------- */
  function ring(pct, size, stroke, label) {
    const r = (size - stroke) / 2, c = 2 * Math.PI * r, off = c * (1 - Math.min(pct, 1));
    return `<svg class="ring" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" aria-hidden="true">
      <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="var(--line)" stroke-width="${stroke}"/>
      <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="var(--ok)" stroke-width="${stroke}" stroke-linecap="round"
        stroke-dasharray="${c}" stroke-dashoffset="${off}" transform="rotate(-90 ${size / 2} ${size / 2})"/>
      <text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" class="ring-label">${label}</text></svg>`;
  }
  function weekDots() {
    const t = today(), names = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
    let out = '';
    for (let i = 6; i >= 0; i--) {
      const k = shift(t, -i), d = new Date(k + 'T12:00:00');
      out += `<span class="dot ${S.days[k] ? 'on' : ''} ${i === 0 ? 'now' : ''}"><i>${names[d.getDay()]}</i></span>`;
    }
    return `<div class="week">${out}</div>`;
  }
  function nav(active) {
    const items = [['home', '🏠', 'Accueil'], ['themes', '🧭', 'Thèmes'], ['review', '🔁', 'Révision'], ['profile', '👤', 'Profil']];
    const due = dueQuestions().length;
    return `<nav class="tabbar">${items.map(([id, ic, lb]) =>
      `<button data-a="go" data-v="${id}" class="${active === id ? 'active' : ''}" aria-label="${lb}">
        <span class="ic">${ic}${id === 'review' && due ? `<b class="badge-count">${due > 99 ? '99+' : due}</b>` : ''}</span><span>${lb}</span></button>`).join('')}</nav>`;
  }
  function topbar() {
    return `<header class="topbar">
      <div class="brand"><img src="icons/icon.svg" alt="">Eurêka</div>
      <div class="pills">
        <span class="pill fire" title="Série en cours">🔥 ${currentStreak()}</span>
        <span class="pill xp" title="XP total">⭐ ${S.xp}</span>
      </div></header>`;
  }
  function lessonRow(l) {
    const d = S.done[l.id], t = THEME_OF[l.id];
    return `<button class="lesson-row" data-a="lesson" data-v="${l.id}" ${themeStyle(t)}>
      <span class="dur">${l.min}<small>min</small></span>
      <span class="lr-body"><span class="lr-title">${esc(l.title)}</span>
        <span class="lr-meta">${l.quiz.length} questions${l.deep ? ' · 🔍 approfondir' : ''}</span></span>
      <span class="lr-state">${d ? `<span class="done">✓ ${d.score}/${d.total}</span>` : '<span class="new">Nouveau</span>'}</span>
    </button>`;
  }

  /* ---------- Écrans ---------- */
  function viewOnboarding() {
    const step = view.step || 1;
    if (step === 1) {
      return `<section class="onboard">
        <div class="hero-emoji">🧠✨</div>
        <h1>Transforme ton temps d’écran en culture générale</h1>
        <p class="muted">Des leçons de 1, 2 ou 5 minutes, ${THEMES.length} thématiques, des quiz pour mémoriser et une révision intelligente pour ne rien oublier.</p>
        <label class="field"><span>Comment t’appelles-tu ?</span>
          <input id="name" maxlength="24" placeholder="Ton prénom (facultatif)" value="${esc(S.name)}"></label>
        <button class="btn primary big" data-a="onboardName">C’est parti</button>
      </section>`;
    }
    return `<section class="onboard">
      <div class="hero-emoji">🎯</div>
      <h1>Choisis ton objectif quotidien</h1>
      <p class="muted">Tu pourras le modifier à tout moment dans ton profil.</p>
      <div class="goal-list">${GOALS.map(g => `<button class="goal-opt ${S.goal === g.xp ? 'sel' : ''}" data-a="setGoal" data-v="${g.xp}">
        <strong>${g.label}</strong><span>${g.desc}</span><em>${g.xp} XP / jour</em></button>`).join('')}</div>
      <button class="btn primary big" data-a="onboardDone">Commencer</button>
    </section>`;
  }

  function viewHome() {
    const streak = currentStreak(), txp = todayXP(), pct = txp / S.goal;
    const due = dueQuestions().length;
    const lod = lessonOfTheDay(), lodT = THEME_OF[lod.id];
    const hello = S.name ? `Bonjour ${esc(S.name)} 👋` : 'Bonjour 👋';
    const discover = shuffle(THEMES.filter(t => !t.lessons.some(l => S.done[l.id]))).slice(0, 6);
    return `${topbar()}
    <main class="page">
      <h1 class="hello">${hello}</h1>
      <p class="muted sub">${pct >= 1 ? 'Objectif du jour atteint, bravo ! Un petit bonus ?' : streak ? `Garde ta série de ${plural(streak, 'jour')} en vie !` : 'Une petite leçon pour bien démarrer ?'}</p>

      <div class="widgets">
        <div class="widget streak-w">
          <div class="w-head"><span class="flame ${S.last === today() ? 'lit' : ''}">🔥</span><div><strong>${streak}</strong><span>${streak > 1 ? 'jours' : 'jour'} de série</span></div></div>
          ${weekDots()}
        </div>
        <div class="widget goal-w">
          ${ring(pct, 58, 8, `${Math.min(100, Math.round(pct * 100))}%`)}
          <div><strong>${txp}/${S.goal} XP</strong><span>Objectif du jour</span></div>
        </div>
      </div>

      <h2 class="h2">J’ai quelques minutes…</h2>
      <div class="quick">
        ${[1, 2, 5].map(m => `<button class="quick-btn" data-a="quick" data-v="${m}"><b>${m}</b><span>min</span></button>`).join('')}
      </div>

      ${due ? `<button class="card review-cta" data-a="go" data-v="review">
        <span class="big-ic">🔁</span><span><strong>${plural(due, 'question')} à réviser</strong><span class="muted">La révision espacée ancre tes connaissances</span></span><span class="chev">›</span></button>` : ''}

      <h2 class="h2">Leçon du jour</h2>
      <button class="card lod" data-a="lesson" data-v="${lod.id}" ${themeStyle(lodT)}>
        <span class="lod-emoji">${lodT.emoji}</span>
        <span class="lod-body"><span class="tag">${lodT.name} · ${lod.min} min</span><strong>${esc(lod.title)}</strong></span>
        <span class="chev">›</span>
      </button>

      ${discover.length ? `<h2 class="h2">À découvrir</h2>
      <div class="hscroll">${discover.map(t => `<button class="mini-theme" data-a="theme" data-v="${t.id}" ${themeStyle(t)}><span>${t.emoji}</span>${t.name}</button>`).join('')}</div>` : ''}
    </main>${nav('home')}`;
  }

  function viewThemes() {
    return `${topbar()}
    <main class="page">
      <h1 class="h1">Thématiques</h1>
      <input class="search" id="search" type="search" placeholder="Rechercher une thématique ou une leçon…" autocomplete="off">
      <div class="theme-grid">${THEMES.map(t => {
        const done = t.lessons.filter(l => S.done[l.id]).length;
        const words = (t.name + ' ' + t.lessons.map(l => l.title).join(' ')).toLowerCase();
        return `<button class="theme-tile" data-a="theme" data-v="${t.id}" data-search="${esc(words)}" ${themeStyle(t)}>
          <span class="tt-emoji">${t.emoji}</span><span class="tt-name">${t.name}</span>
          <span class="tt-bar"><i style="width:${done / t.lessons.length * 100}%"></i></span>
          <span class="tt-meta">${done}/${t.lessons.length} leçons</span></button>`;
      }).join('')}</div>
      <p class="empty hidden" id="noresult">Aucun résultat.</p>
    </main>${nav('themes')}`;
  }

  function viewTheme() {
    const t = themeById(view.id), f = view.filter || 0;
    const list = t.lessons.filter(l => !f || l.min === f);
    const done = t.lessons.filter(l => S.done[l.id]).length;
    return `<main class="page theme-page" ${themeStyle(t)}>
      <div class="theme-hero">
        <button class="back" data-a="go" data-v="themes" aria-label="Retour">‹</button>
        <span class="th-emoji">${t.emoji}</span>
        <h1>${t.name}</h1><p>${esc(t.d)}</p>
        <span class="th-progress">${done}/${t.lessons.length} leçons terminées</span>
      </div>
      <div class="chips">${[0, 1, 2, 5].map(m => `<button class="chip ${f === m ? 'sel' : ''}" data-a="filter" data-v="${m}">${m ? m + ' min' : 'Toutes'}</button>`).join('')}</div>
      <div class="lesson-list">${list.length ? list.map(lessonRow).join('') : '<p class="empty">Pas encore de leçon de cette durée dans ce thème.</p>'}</div>
    </main>${nav('themes')}`;
  }

  function viewLesson() {
    const l = session.lesson, t = THEME_OF[l.id], i = session.card, n = l.cards.length;
    if (session.stage === 'end') return viewLessonEnd(l, t);
    if (session.stage === 'deep') return viewDeep(l, t);
    const [title, text] = l.cards[i];
    return `<main class="page lesson" ${themeStyle(t)}>
      <div class="lesson-top">
        <button class="close" data-a="quit" aria-label="Quitter">✕</button>
        <div class="progress"><i style="width:${(i + 1) / (n + 1) * 100}%"></i></div>
      </div>
      <article class="lesson-card" key="${i}">
        <span class="tag">${t.emoji} ${t.name} · ${i + 1}/${n}</span>
        <h2>${md(esc(title))}</h2>
        <p>${md(esc(text))}</p>
      </article>
      <div class="lesson-actions">
        ${i > 0 ? '<button class="btn ghost" data-a="prevCard">‹ Précédent</button>' : '<span></span>'}
        <button class="btn primary" data-a="nextCard">${i === n - 1 ? 'Terminer ›' : 'Suivant ›'}</button>
      </div>
    </main>`;
  }

  function viewLessonEnd(l, t) {
    return `<main class="page lesson" ${themeStyle(t)}>
      <div class="lesson-top"><button class="close" data-a="quit" aria-label="Quitter">✕</button>
        <div class="progress"><i style="width:100%"></i></div></div>
      <div class="end-card">
        <div class="hero-emoji">📖</div>
        <h2>Lecture terminée !</h2>
        <p class="muted">Place au quiz : ${plural(l.quiz.length, 'question')} pour ancrer ce que tu viens d’apprendre.</p>
        <button class="btn primary big" data-a="startQuiz">Passer au quiz ›</button>
        ${l.deep ? `<button class="btn soft big" data-a="deep">🔍 Approfondir le sujet ${S.deep[l.id] ? '' : `<small>+${XP.deep} XP</small>`}</button>` : ''}
        <button class="btn ghost" data-a="restartCards">Relire la leçon</button>
      </div>
    </main>`;
  }

  function viewDeep(l, t) {
    return `<main class="page lesson" ${themeStyle(t)}>
      <div class="lesson-top"><button class="close" data-a="backToEnd" aria-label="Retour">‹</button>
        <span class="deep-title">Pour aller plus loin</span></div>
      <article class="deep-card">
        <span class="tag">${t.emoji} ${esc(l.title)}</span>
        ${l.deep.map(p => `<p>${md(esc(p))}</p>`).join('')}
      </article>
      <div class="lesson-actions single"><button class="btn primary big" data-a="startQuiz">Passer au quiz ›</button></div>
    </main>`;
  }

  function viewQuiz() {
    const q = session.questions[session.idx], n = session.questions.length;
    const answered = session.answered;
    const t = THEME_OF[q.lesson.id];
    return `<main class="page quiz" ${themeStyle(t)}>
      <div class="lesson-top">
        <button class="close" data-a="quit" aria-label="Quitter">✕</button>
        <div class="progress"><i style="width:${(session.idx + (answered !== null ? 1 : 0)) / n * 100}%"></i></div>
        <span class="counter">${session.idx + 1}/${n}</span>
      </div>
      ${session.mode === 'review' ? `<span class="tag">${t.emoji} ${esc(q.lesson.title)}</span>` : `<span class="tag">Quiz · ${t.name}</span>`}
      <h2 class="question">${md(esc(q.q))}</h2>
      <div class="choices">${q.order.map((ci, pos) => {
        let cls = '';
        if (answered !== null) {
          if (ci === 0) cls = 'right';
          else if (pos === answered) cls = 'wrong';
          else cls = 'dim';
        }
        return `<button class="choice ${cls}" data-a="answer" data-v="${pos}" ${answered !== null ? 'disabled' : ''}>
          <span class="letter">${'ABCD'[pos]}</span><span>${md(esc(q.c[ci]))}</span></button>`;
      }).join('')}</div>
      ${answered !== null ? (() => {
        const ok = q.order[answered] === 0;
        return `<div class="feedback ${ok ? 'ok' : 'ko'}">
          <strong>${ok ? 'Bonne réponse ! 🎉' : 'Pas tout à fait…'}</strong>
          <p>${md(esc(q.e))}</p>
          <button class="btn ${ok ? 'success' : 'danger'} big" data-a="nextQ">${session.idx === n - 1 ? 'Voir le résultat' : 'Continuer'}</button>
        </div>`;
      })() : ''}
    </main>`;
  }

  function viewResult() {
    const r = view.result, pct = r.correct / r.total;
    const emoji = pct === 1 ? '🏆' : pct >= 0.66 ? '🎉' : pct >= 0.34 ? '💪' : '🌱';
    const msg = pct === 1 ? 'Sans faute, impressionnant !' : pct >= 0.66 ? 'Très bien joué !' : pct >= 0.34 ? 'Pas mal, la révision fera le reste.' : 'Chaque erreur est une occasion d’apprendre.';
    const txp = todayXP(), goalPct = txp / S.goal;
    const next = r.lessonId ? nextLessonInTheme(LESSONS[r.lessonId]) : null;
    return `<main class="page result">
      <div class="hero-emoji pop">${emoji}</div>
      <h1>${msg}</h1>
      <div class="score-row">
        <div class="score"><strong>${r.correct}/${r.total}</strong><span>bonnes réponses</span></div>
        <div class="score xp"><strong>+${r.xp}</strong><span>XP gagnés</span></div>
      </div>
      <div class="card goal-line">${ring(goalPct, 56, 7, goalPct >= 1 ? '✓' : Math.round(goalPct * 100) + '%')}
        <div><strong>Objectif du jour : ${Math.min(txp, S.goal)}/${S.goal} XP</strong>
        <span class="muted">${goalPct >= 1 ? `Atteint ! Série : 🔥 ${currentStreak()}` : `Encore ${S.goal - txp} XP pour l’atteindre`}</span></div></div>
      ${r.badges.length ? `<h2 class="h2">Nouveaux badges</h2><div class="badge-grid">${r.badges.map(b => badgeTile(b, true)).join('')}</div>` : ''}
      ${r.wrong ? `<p class="muted center">${r.wrong > 1 ? r.wrong + ' questions ratées reviendront' : '1 question ratée reviendra'} dans tes révisions.</p>` : ''}
      <div class="result-actions">
        ${next ? `<button class="btn primary big" data-a="lesson" data-v="${next.id}">Leçon suivante : ${esc(next.title)}</button>` : ''}
        ${r.lessonId ? `<button class="btn soft big" data-a="theme" data-v="${THEME_OF[r.lessonId].id}">Retour au thème</button>` : ''}
        ${r.mode === 'review' && dueQuestions().length ? `<button class="btn primary big" data-a="startReview">Continuer la révision</button>` : ''}
        <button class="btn ghost big" data-a="go" data-v="home">Accueil</button>
      </div>
    </main>`;
  }

  function viewReview() {
    const due = dueQuestions().length, total = Object.keys(S.srs).length;
    const boxes = [0, 0, 0, 0, 0, 0, 0];
    Object.values(S.srs).forEach(e => boxes[e.box]++);
    const max = Math.max(1, ...boxes);
    const labels = ['À revoir', '1 j', '3 j', '7 j', '14 j', '30 j', '60 j'];
    return `${topbar()}
    <main class="page">
      <h1 class="h1">Révision</h1>
      <p class="muted sub">Les questions reviennent juste avant que tu ne les oublies : de moins en moins souvent à mesure que tu les maîtrises.</p>
      <div class="stats3">
        <div><strong>${due}</strong><span>à réviser</span></div>
        <div><strong>${total}</strong><span>en mémoire</span></div>
        <div><strong>${masteredCount()}</strong><span>maîtrisées</span></div>
      </div>
      ${total ? `<div class="card boxes">
        <h3>Tes boîtes de mémoire</h3>
        <div class="box-bars">${boxes.map((b, i) => `<div class="bb"><span class="bb-n">${b}</span><i style="height:${b / max * 100}%" class="lvl${i}"></i><span class="bb-l">${labels[i]}</span></div>`).join('')}</div>
        <p class="muted small">Chaque bonne réponse fait avancer la question d’une boîte ; une erreur la renvoie au début.</p>
      </div>` : ''}
      ${due ? `<button class="btn primary big" data-a="startReview">Réviser maintenant (${Math.min(due, 10)} questions)</button>`
        : total ? `<div class="card empty-state"><span class="big-ic">🎉</span><strong>Tout est à jour !</strong><span class="muted">Reviens demain, ou entraîne-toi librement.</span></div>
          <button class="btn soft big" data-a="startPractice">Entraînement libre</button>`
        : `<div class="card empty-state"><span class="big-ic">📭</span><strong>Rien à réviser pour l’instant</strong><span class="muted">Termine une leçon : ses questions alimenteront ta révision.</span></div>
          <button class="btn primary big" data-a="quick" data-v="1">Faire une leçon d’1 minute</button>`}
    </main>${nav('review')}`;
  }

  function badgeTile(b, unlocked) {
    return `<div class="badge ${unlocked ? '' : 'locked'}" title="${esc(b.desc)}">
      <span class="b-ic">${unlocked ? b.icon : '🔒'}</span><strong>${b.name}</strong><span>${b.desc}</span></div>`;
  }

  function viewProfile() {
    const lv = levelInfo(S.xp);
    const rate = S.stats.answers ? Math.round(S.stats.correct / S.stats.answers * 100) : 0;
    const t = today();
    let cal = '';
    for (let i = 34; i >= 0; i--) {
      const k = shift(t, -i), x = S.days[k] || 0;
      const lvl = !x ? 0 : x >= S.goal ? 3 : x >= S.goal / 2 ? 2 : 1;
      cal += `<span class="cell l${lvl}" title="${k} : ${x} XP"></span>`;
    }
    const unlocked = BADGES.filter(b => S.badges[b.id]).length;
    return `${topbar()}
    <main class="page">
      <div class="profile-head">
        <div class="avatar">${S.name ? esc(S.name[0].toUpperCase()) : '🙂'}</div>
        <div><h1 class="h1">${S.name ? esc(S.name) : 'Mon profil'}</h1><span class="muted">Niveau ${lv.n} · ${lv.name}</span></div>
      </div>
      <div class="card level">
        <div class="lv-row"><strong>Niveau ${lv.n}</strong><span class="muted">${lv.left} XP avant le niveau ${lv.n + 1}</span></div>
        <div class="bar"><i style="width:${lv.pct * 100}%"></i></div>
      </div>
      <div class="stats-grid">
        <div><strong>${S.xp}</strong><span>XP total</span></div>
        <div><strong>${nDone()}/${ALL_LESSONS.length}</strong><span>leçons</span></div>
        <div><strong>🔥 ${currentStreak()}</strong><span>série actuelle</span></div>
        <div><strong>${S.best}</strong><span>meilleure série</span></div>
        <div><strong>${rate}%</strong><span>bonnes réponses</span></div>
        <div><strong>${themesTouched()}/${THEMES.length}</strong><span>thèmes explorés</span></div>
      </div>
      <div class="card">
        <h3>5 dernières semaines</h3>
        <div class="calendar">${cal}</div>
        <div class="legend"><span class="cell l0"></span>rien <span class="cell l1"></span>un peu <span class="cell l3"></span>objectif atteint</div>
      </div>
      <h2 class="h2">Badges <span class="muted">${unlocked}/${BADGES.length}</span></h2>
      <div class="badge-grid">${BADGES.map(b => badgeTile(b, !!S.badges[b.id])).join('')}</div>
      <h2 class="h2">Réglages</h2>
      <div class="card settings">
        <label class="field"><span>Prénom</span><input id="pname" maxlength="24" value="${esc(S.name)}" placeholder="Ton prénom"></label>
        <span class="field-label">Objectif quotidien</span>
        <div class="chips">${GOALS.map(g => `<button class="chip ${S.goal === g.xp ? 'sel' : ''}" data-a="changeGoal" data-v="${g.xp}">${g.label} · ${g.xp} XP</button>`).join('')}</div>
        <button class="btn danger-ghost" data-a="reset">Réinitialiser ma progression</button>
      </div>
      <p class="muted small center">Ta progression est enregistrée sur cet appareil.</p>
    </main>${nav('profile')}`;
  }

  /* ---------- Rendu ---------- */
  const VIEWS = { onboarding: viewOnboarding, home: viewHome, themes: viewThemes, theme: viewTheme, lesson: viewLesson, quiz: viewQuiz, result: viewResult, review: viewReview, profile: viewProfile };
  // Typographie française : espace insécable avant ? ! : ; » et après «, pour éviter
  // qu'une ponctuation se retrouve seule en début de ligne.
  function frenchSpacing(el) {
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const v = node.nodeValue;
      if (/ [?!:;»]|« /.test(v)) node.nodeValue = v.replace(/ ([?!:;»])/g, ' $1').replace(/« /g, '« ');
    }
  }

  function render() {
    if (!S.onboarded && view.name !== 'onboarding') view = { name: 'onboarding', step: 1 };
    root.innerHTML = VIEWS[view.name]();
    frenchSpacing(root);
    document.body.dataset.view = view.name;
  }

  function toast(html) {
    const el = document.createElement('div');
    el.className = 'toast';
    el.innerHTML = html;
    frenchSpacing(el);
    document.body.appendChild(el);
    setTimeout(() => el.classList.add('show'), 10);
    setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 400); }, 2600);
  }

  /* ---------- Sessions ---------- */
  function startLesson(id) {
    session = { type: 'lesson', lesson: LESSONS[id], card: 0, stage: 'cards' };
    go('lesson');
  }
  function buildQuestions(list) {
    return list.map(q => Object.assign({}, q, { order: shuffle(q.c.map((_, i) => i)) }));
  }
  function startQuiz() {
    const l = session.lesson;
    const qs = l.quiz.map((q, i) => Object.assign({}, q, { qid: l.id + '#' + i, lesson: l }));
    session = { type: 'quiz', mode: 'lesson', lesson: l, questions: buildQuestions(qs), idx: 0, answered: null, correct: 0, wrong: 0 };
    go('quiz');
  }
  function startReview(practice) {
    let ids = practice ? shuffle(Object.keys(S.srs)).slice(0, 8) : shuffle(dueQuestions()).slice(0, 10);
    const qs = ids.map(questionById).filter(Boolean);
    if (!qs.length) return go('review');
    session = { type: 'quiz', mode: 'review', practice: !!practice, questions: buildQuestions(qs), idx: 0, answered: null, correct: 0, wrong: 0 };
    go('quiz');
  }
  function finishQuiz() {
    const s = session, total = s.questions.length;
    let xp = 0;
    if (s.mode === 'lesson') {
      const first = !S.done[s.lesson.id];
      xp = (first ? XP.lesson : Math.round(XP.lesson / 2)) + s.correct * XP.correct;
      if (s.correct === total) { xp += XP.perfect; S.stats.perfect++; }
      const prev = S.done[s.lesson.id];
      S.done[s.lesson.id] = { score: Math.max(s.correct, prev ? prev.score : 0), total, date: today() };
    } else {
      xp = s.correct * XP.review;
    }
    const goalBefore = todayXP() >= S.goal;
    gainXP(xp);
    const badges = checkBadges();
    save();
    if (!goalBefore && todayXP() >= S.goal) toast('🎯 Objectif du jour atteint !');
    session = null;
    go('result', { result: { correct: s.correct, total, xp, badges, wrong: s.wrong, mode: s.mode, lessonId: s.lesson ? s.lesson.id : null } });
  }

  /* ---------- Actions ---------- */
  const ACTIONS = {
    go: v => go(v),
    theme: v => go('theme', { id: v, filter: 0 }),
    filter: v => go('theme', { id: view.id, filter: +v }),
    lesson: v => startLesson(v),
    quick: v => {
      const m = +v;
      const pool = ALL_LESSONS.filter(l => l.min === m);
      const fresh = pool.filter(l => !S.done[l.id]);
      const pick = shuffle(fresh.length ? fresh : pool)[0];
      if (pick) startLesson(pick.id);
    },
    nextCard: () => {
      if (session.card < session.lesson.cards.length - 1) session.card++;
      else session.stage = 'end';
      render();
    },
    prevCard: () => { if (session.card > 0) { session.card--; render(); } },
    restartCards: () => { session.card = 0; session.stage = 'cards'; render(); },
    deep: () => {
      const l = session.lesson;
      if (!S.deep[l.id]) {
        S.deep[l.id] = today();
        gainXP(XP.deep);
        checkBadges().forEach(b => toast(`${b.icon} Badge débloqué : <b>${b.name}</b>`));
        save();
      }
      session.stage = 'deep';
      render();
      window.scrollTo(0, 0);
    },
    backToEnd: () => { session.stage = 'end'; render(); },
    startQuiz: () => startQuiz(),
    answer: v => {
      if (session.answered !== null) return;
      const pos = +v, q = session.questions[session.idx], ok = q.order[pos] === 0;
      session.answered = pos;
      if (ok) session.correct++; else session.wrong++;
      grade(q.qid, ok, session.mode === 'lesson');
      if (session.mode === 'review' && ok) S.stats.reviewsOk++;
      save();
      if (navigator.vibrate) navigator.vibrate(ok ? 15 : [30, 40, 30]);
      render();
      const fb = document.querySelector('.feedback');
      if (fb) fb.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    },
    nextQ: () => {
      if (session.idx < session.questions.length - 1) { session.idx++; session.answered = null; render(); window.scrollTo(0, 0); }
      else finishQuiz();
    },
    quit: () => {
      if (confirm('Quitter ? Ta progression sur cette leçon ne sera pas enregistrée.')) {
        const back = session && session.lesson && session.mode !== 'review' ? THEME_OF[session.lesson.id].id : null;
        session = null;
        back ? go('theme', { id: back, filter: 0 }) : go('home');
      }
    },
    startReview: () => startReview(false),
    startPractice: () => startReview(true),
    onboardName: () => {
      const el = document.getElementById('name');
      S.name = el ? el.value.trim() : '';
      go('onboarding', { step: 2 });
    },
    setGoal: v => { S.goal = +v; render(); },
    onboardDone: () => { S.onboarded = true; save(); go('home'); },
    changeGoal: v => { S.goal = +v; save(); render(); },
    reset: () => {
      if (confirm('Effacer toute ta progression (XP, série, badges, révisions) ? Cette action est définitive.')) {
        S = freshState(); save(); go('onboarding', { step: 1 });
      }
    }
  };

  document.addEventListener('click', e => {
    const el = e.target.closest('[data-a]');
    if (!el || el.disabled) return;
    const fn = ACTIONS[el.dataset.a];
    if (fn) fn(el.dataset.v, el);
  });

  document.addEventListener('input', e => {
    if (e.target.id === 'search') {
      const q = e.target.value.trim().toLowerCase();
      let n = 0;
      document.querySelectorAll('.theme-tile').forEach(t => {
        const show = !q || t.dataset.search.includes(q);
        t.classList.toggle('hidden', !show);
        if (show) n++;
      });
      document.getElementById('noresult').classList.toggle('hidden', n > 0);
    }
    if (e.target.id === 'pname') { S.name = e.target.value.trim(); save(); }
  });

  document.addEventListener('keydown', e => {
    if (view.name === 'quiz' && session) {
      const k = e.key.toUpperCase();
      if (session.answered === null && k.length === 1 && 'ABCD1234'.includes(k)) {
        const pos = 'ABCD'.includes(k) ? 'ABCD'.indexOf(k) : +k - 1;
        if (pos < session.questions[session.idx].c.length) ACTIONS.answer(pos);
      } else if (session.answered !== null && e.key === 'Enter') ACTIONS.nextQ();
    } else if (view.name === 'lesson' && session && session.stage === 'cards') {
      if (e.key === 'ArrowRight' || e.key === 'Enter') ACTIONS.nextCard();
      if (e.key === 'ArrowLeft') ACTIONS.prevCard();
    }
  });

  // Glisser à gauche / à droite pour changer de carte.
  let touchX = null;
  document.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
  document.addEventListener('touchend', e => {
    if (touchX === null || view.name !== 'lesson' || !session || session.stage !== 'cards') return;
    const dx = e.changedTouches[0].clientX - touchX;
    touchX = null;
    if (dx < -60) ACTIONS.nextCard();
    else if (dx > 60) ACTIONS.prevCard();
  }, { passive: true });

  render();

  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('sw.js').catch(() => { });
  }
})();
