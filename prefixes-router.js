// ═══════════════════════════════════════════════════════════
// РОУТЕР: главный renderPrefixes, MEGA_NAV, switchMegaTab
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

function renderMegaNav() { /* ... */ }
function switchMegaTab(id) { /* ... */ }
function toggleRootLearned(root) { /* ... */ }

function renderPrefixes() {
  // ⬇️ полностью ваш существующий роутер, без изменений ⬇️
  const container = document.getElementById('prefixesContainer');
  if (!container) return;
  if (typeof prefixes === 'undefined') {
    container.innerHTML = '<div style="padding:40px;text-align:center;">⚠️ prefixes.js не загружен</div>';
    return;
  }

  // новые модули
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

  // старые модули
  if (currentPrefixType === 'modal')      { container.innerHTML = renderModalVerbs();     return; }
  if (currentPrefixType === 'confusing')  { container.innerHTML = renderConfusingVerbs(); return; }
  if (currentPrefixType === 'formation')  { container.innerHTML = renderWordFormation();  return; }
  if (currentPrefixType === 'traps')      { container.innerHTML = renderTrapPairs();      return; }
  if (currentPrefixType === 'twins')      { container.innerHTML = renderTwinWords();      return; }

  if (currentPrefixType === 'discourse') { /* ... */ return; }
  if (currentPrefixType === 'alltime')   { /* ... */ return; }
  if (currentPrefixType === 'timeprep')  { container.innerHTML = renderTimePrepositions(); return; }
  if (currentPrefixType === 'essay')     { /* ... */ return; }
  if (currentPrefixType === 'useful')    { /* ... */ return; }
  if (currentPrefixType === 'question')  { /* ... */ return; }

  // корни — полностью как раньше
  // ...

  // приставки/суффиксы — полностью как раньше
  // ...
}

function searchPrefixes() { /* ... */ }
