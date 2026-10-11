// ═══════════════════════════════════════════════════════════
// prefixes-router.js — ГЛАВНЫЙ РОУТЕР
// ═══════════════════════════════════════════════════════════

const MEGA_NAV = [
    { id: 'all',        emoji: '📚', label: 'Все' },
    { id: 'builder',    emoji: '🏗️', label: 'Конструктор слов' },
    { id: 'cheatsheet', emoji: '📋', label: 'Справочник' },
    { id: 'chains',     emoji: '🔗', label: 'Цепочки' },
    { id: 'flipcards',  emoji: '🎴', label: 'Карточки' },
    { id: 'rules',      emoji: '📏', label: 'Правила' },
    { id: 'trainer',    emoji: '🎯', label: 'Тренажёр' },
    { id: 'mistakes',   emoji: '🚫', label: 'Ошибки' },
    { id: 'drill',      emoji: '🔊', label: 'Озвучка' },
    { id: 'power',      emoji: '💪', label: 'Топ-100' },
    { id: 'stories',    emoji: '📖', label: 'Мини-истории' },
    { id: 'dictation',  emoji: '✍️', label: 'Диктант' },
    { id: 'essayb',     emoji: '📝', label: 'Конструктор эссе' },
    { id: 'affixmap',   emoji: '🗺️', label: 'Карта аффиксов' },
    { id: 'families',   emoji: '👨‍👩‍👧', label: 'Семьи слов' },
    { id: 'opposites',  emoji: '⚖️', label: 'Антонимы' },
    { id: 'converter',  emoji: '🔀', label: 'Конвертер' },
    { id: 'quizzes',    emoji: '🧩', label: 'Квизы' },
    { id: 'dialogues',  emoji: '💬', label: 'Диалоги' },
    { id: 'hooks',      emoji: '🎨', label: 'Мнемо' },
    { id: 'quicktips',  emoji: '⚡', label: 'Быстро' },
    { id: 'wordofday',  emoji: '📅', label: 'Слово дня' },
    { id: 'path',       emoji: '🗺️', label: 'Маршрут' }
];

function renderMegaNav() {
    const active = MEGA_NAV.find(n => n.id === currentPrefixType);
    let html = `<div class="memory-hack" style="background:#e8f0d4;border-left-color:#6b8e23;margin-bottom:14px;padding:14px;">
        <div style="font-weight:bold;margin-bottom:10px;color:#3d2b1a;">🎓 Мега-пак изучения ${active && active.id !== 'all' ? '· <span style="color:#6b8e23;">' + active.label + '</span>' : ''}</div>
        <div style="display:flex;flex-wrap:wrap;gap:6px;">`;
    MEGA_NAV.forEach(n => {
        const isAct = n.id === currentPrefixType;
        html += `<button onclick="switchMegaTab('${n.id}')" style="background:${isAct ? '#6b8e23' : '#fff6e8'};color:${isAct ? 'white' : '#3d2b1a'};border:1px solid #c49a6c;padding:6px 12px;border-radius:20px;font-size:.78rem;cursor:pointer;font-family:Georgia,serif;font-weight:${isAct ? 'bold' : 'normal'};">${n.emoji} ${n.label}</button>`;
    });
    html += `</div></div>`;
    return html;
}
function switchMegaTab(id) {
    currentPrefixType = id;
    const ptf = document.getElementById('prefixTypeFilters');
    if (ptf) ptf.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    renderPrefixes();
}

function toggleRootLearned(root) {
  const idx = learnedRoots.indexOf(root);
  if (idx >= 0) learnedRoots.splice(idx, 1); else learnedRoots.push(root);
  localStorage.setItem('learnedRoots', JSON.stringify(learnedRoots));
  renderPrefixes();
}

function renderPrefixes() {
  const container = document.getElementById('prefixesContainer');
  if (!container) return;
  if (typeof prefixes === 'undefined') {
    container.innerHTML = '<div style="padding:40px;text-align:center;">⚠️ prefixes.js не загружен</div>';
    return;
  }

  // 🆕 НОВЫЕ МОДУЛИ
  if (currentPrefixType === 'builder'    && typeof renderWordBuilder   === 'function') { container.innerHTML = renderWordBuilder();    return; }
  if (currentPrefixType === 'cheatsheet' && typeof renderSuffixCheat   === 'function') { container.innerHTML = renderSuffixCheat();    return; }
  if (currentPrefixType === 'chains'     && typeof renderWordChains    === 'function') { container.innerHTML = renderWordChains();     return; }
  if (currentPrefixType === 'flipcards'  && typeof renderFlipCards     === 'function') { container.innerHTML = renderFlipCards();      return; }
  if (currentPrefixType === 'rules'      && typeof renderRuleReminders === 'function') { container.innerHTML = renderRuleReminders();  return; }
  if (currentPrefixType === 'trainer'    && typeof renderAffixTrainer  === 'function') { container.innerHTML = renderAffixTrainer();   return; }
  if (currentPrefixType === 'mistakes'   && typeof renderCommonMistakes === 'function') { container.innerHTML = renderCommonMistakes(); return; }
  if (currentPrefixType === 'drill'      && typeof renderSpeechDrill   === 'function') { container.innerHTML = renderSpeechDrill();    return; }
  if (currentPrefixType === 'power'      && typeof renderPowerPrefixes === 'function') { container.innerHTML = renderPowerPrefixes();  return; }
  if (currentPrefixType === 'stories'    && typeof renderMiniStories   === 'function') { container.innerHTML = renderMiniStories();    return; }
  if (currentPrefixType === 'dictation'  && typeof renderDictation     === 'function') { container.innerHTML = renderDictation();      return; }
  if (currentPrefixType === 'essayb'     && typeof renderEssayBuilder  === 'function') { container.innerHTML = renderEssayBuilder();   return; }
  if (currentPrefixType === 'affixmap'   && typeof renderAffixMap      === 'function') { container.innerHTML = renderAffixMap();       return; }
  if (currentPrefixType === 'families'   && typeof renderWordFamilies  === 'function') { container.innerHTML = renderWordFamilies();   return; }
  if (currentPrefixType === 'opposites'  && typeof renderOpposites     === 'function') { container.innerHTML = renderOpposites();      return; }
  if (currentPrefixType === 'converter'  && typeof renderConverter     === 'function') { container.innerHTML = renderConverter();      return; }
  if (currentPrefixType === 'quizzes'    && typeof renderMiniQuizzes   === 'function') { container.innerHTML = renderMiniQuizzes();    return; }
  if (currentPrefixType === 'dialogues'  && typeof renderMiniDialogues === 'function') { container.innerHTML = renderMiniDialogues();  return; }
  if (currentPrefixType === 'hooks'      && typeof renderMemoryHooks   === 'function') { container.innerHTML = renderMemoryHooks();    return; }
  if (currentPrefixType === 'quicktips'  && typeof renderQuickTips     === 'function') { container.innerHTML = renderQuickTips();      return; }
  if (currentPrefixType === 'wordofday'  && typeof renderWordOfTheDay  === 'function') { container.innerHTML = renderWordOfTheDay();   return; }
  if (currentPrefixType === 'path'       && typeof renderLearningPath  === 'function') { container.innerHTML = renderLearningPath();   return; }

  // СТАРЫЕ МОДУЛИ
  if (currentPrefixType === 'modal')      { container.innerHTML = renderModalVerbs();     return; }
  if (currentPrefixType === 'confusing')  { container.innerHTML = renderConfusingVerbs(); return; }
  if (currentPrefixType === 'formation')  { container.innerHTML = renderWordFormation();  return; }
  if (currentPrefixType === 'traps')      { container.innerHTML = renderTrapPairs();      return; }
  if (currentPrefixType === 'twins')      { container.innerHTML = renderTwinWords();      return; }

  if (currentPrefixType === 'discourse') {
    container.innerHTML = renderDiscourseMarkers();
    setTimeout(() => {
      const df = document.getElementById('discourseFilters');
      if (df) df.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => { currentDiscourseGroup = btn.dataset.discourse; renderPrefixes(); });
      });
    }, 0);
    return;
  }
  if (currentPrefixType === 'alltime') {
    container.innerHTML = renderAllTimeWords();
    setTimeout(() => {
      const tf = document.getElementById('allTimeFilters');
      if (tf) tf.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => { currentAllTimeFilter = btn.dataset.timefilter; renderPrefixes(); });
      });
    }, 0);
    return;
  }
  if (currentPrefixType === 'timeprep') { container.innerHTML = renderTimePrepositions(); return; }
  if (currentPrefixType === 'essay') {
    container.innerHTML = renderEssayLinkers();
    setTimeout(() => {
      const ef = document.getElementById('essayFilters');
      if (ef) ef.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => { currentEssayGroup = btn.dataset.essay; renderPrefixes(); });
      });
    }, 0);
    return;
  }
  if (currentPrefixType === 'useful') {
    container.innerHTML = renderUsefulLinkers();
    setTimeout(() => {
      const uf = document.getElementById('usefulFilters');
      if (uf) uf.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => { currentUsefulGroup = btn.dataset.useful; renderPrefixes(); });
      });
    }, 0);
    return;
  }
  if (currentPrefixType === 'question') {
    container.innerHTML = renderQuestionWords();
    setTimeout(() => {
      const qf = document.getElementById('questionFilters');
      if (qf) qf.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => { currentQuestionGroup = btn.dataset.question; renderPrefixes(); });
      });
    }, 0);
    return;
  }

  // КОРНИ
  const query = (document.getElementById('prefixSearchInput')?.value || '').toLowerCase().trim();
  if (currentPrefixType === 'root') {
    if (typeof wordRoots === 'undefined') { container.innerHTML = '<div style="padding:40px;text-align:center;">⚠️ Корни не найдены</div>'; return; }
    const total = wordRoots.length, learned = learnedRoots.length;
    const progress = Math.round((learned / total) * 100);
    let html = `<div style="background:#ecdca8;border-radius:28px;padding:14px 18px;margin-bottom:16px;"><div style="display:flex;justify-content:space-between;align-items:center;"><strong>🧱 Изучено: ${learned}/${total}</strong><span>${progress}%</span></div><div style="background:#fff6e8;border-radius:20px;height:12px;margin-top:8px;"><div style="background:#6b8e23;height:100%;width:${progress}%;"></div></div></div><div class="filters" id="rootTopicFilters" style="margin-bottom:12px;">`;
    rootTopics.forEach(t => { html += `<button class="filter-btn ${currentRootTopic === t.id ? 'active' : ''}" data-topic="${t.id}">${t.emoji} ${t.name}</button>`; });
    html += `</div>`;
    let roots = [...wordRoots];
    if (currentRootTopic !== 'all') roots = roots.filter(r => r.topic === currentRootTopic);
    if (query) roots = roots.filter(r => r.root.toLowerCase().includes(query) || r.meaning.toLowerCase().includes(query) || r.words.some(w => w.word.toLowerCase().includes(query)));
    if (!roots.length) { container.innerHTML = html + '<div style="text-align:center;padding:30px;">😔 Ничего не найдено</div>'; return; }
    roots.forEach(r => {
      const isLearned = learnedRoots.includes(r.root);
      html += `<div class="tense-card" style="cursor:default;border-left:6px solid #6b8e23;"><div class="tense-header" style="justify-content:space-between;"><div><div class="tense-name" style="font-family:monospace;font-size:1.6rem;">${r.root}</div><div style="font-size:.9rem;color:#8b6946;">🔑 ${r.meaning}</div></div><button class="speak-btn-small" onclick="event.stopPropagation();toggleRootLearned('${r.root}')" style="background:${isLearned ? '#6b8e23' : '#c49a6c'};">${isLearned ? '✅' : '☐'}</button></div>`;
      r.words.forEach(w => {
        const cleanEx = w.ex.replace(/'/g, "\\'");
        html += `<div class="tense-example" onclick="openModalWithSpeech('${w.pre}','${cleanEx}','${w.exRu}','${w.pre} + ${r.root} = ${w.word}')"><div class="tense-example-text"><div class="tense-example-eng"><b>${w.pre}</b> + <b>${r.root}</b> = <b>${w.word}</b> — ${w.trans}</div><div class="tense-example-ru">${w.exRu}</div></div><button class="speak-btn-small" onclick="event.stopPropagation();speakText('${cleanEx}')">🔈</button></div>`;
      });
      html += `</div>`;
    });
    container.innerHTML = html;
    const rtf = document.getElementById('rootTopicFilters');
    if (rtf) rtf.querySelectorAll('.filter-btn').forEach(btn => { btn.addEventListener('click', () => { currentRootTopic = btn.dataset.topic; renderPrefixes(); }); });
    return;
  }

  // ПРИСТАВКИ / СУФФИКСЫ
  let filtered = [...prefixes];
  if (currentPrefixType !== 'all') filtered = filtered.filter(p => p.type === currentPrefixType);
  if (query) filtered = filtered.filter(p => p.affix.toLowerCase().includes(query) || p.meaning.toLowerCase().includes(query));
  if (!filtered.length) { container.innerHTML = '<div style="text-align:center;padding:30px;">😔 Ничего не найдено</div>'; return; }
  let html = '';
  filtered.forEach(p => {
    html += `<div class="tense-card" style="cursor:default;"><div class="tense-header"><div class="tense-emoji">${p.emoji}</div><div><div class="tense-name" style="font-family:monospace;font-size:1.6rem;">${p.affix}</div><div style="font-size:.85rem;color:#8b6946;">${p.meaning}</div></div></div><div class="memory-hack" style="margin:10px 0;font-size:.9rem;">${p.explanation}</div>`;
    p.words.forEach(w => {
      const cleanEx = w.ex.replace(/<[^>]*>/g, '').replace(/'/g, "\\'");
      html += `<div class="tense-example" onclick="openModalWithSpeech('${p.affix}','${cleanEx}','${w.exRu}','${w.word}')"><div class="tense-example-text"><div class="tense-example-eng">${w.ex}</div><div class="tense-example-ru">${w.exRu}</div></div><button class="speak-btn-small" onclick="event.stopPropagation();speakText('${cleanEx}')">🔈</button></div>`;
    });
    html += `</div>`;
  });
  container.innerHTML = html;
}

function searchPrefixes() {
  const clearBtn = document.getElementById('clearPrefixSearchBtn');
  const input = document.getElementById('prefixSearchInput');
  if (clearBtn && input) clearBtn.style.display = input.value ? 'flex' : 'none';
  renderPrefixes();
}
