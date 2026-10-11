// ═══════════════════════════════════════════════════════════
// prefixes.js — финальный лоадер
// • Ждёт DOM
// • Грузит модули по порядку
// • Диагностика на странице (только при проблемах)
// • Вызывает init() один раз
// ═══════════════════════════════════════════════════════════

(function () {
  'use strict';

  const MODULES = [
    'prefixes-data.js',
    'prefixes-render.js',
    'prefixes-router.js'
  ];

  const EXPECTED = [
    'prefixes','wordRoots','rootTopics','magicVerbs','magicWords',
    'survivalPhrases','modalVerbs','confusingVerbs','wordFormationRules',
    'trapPairs','twinWords','discourseMarkers','essayLinkers','usefulLinkers',
    'allTimeWords','timePrepositions','questionWords','wordBuilderKit',
    'suffixCheatsheet','wordChains','flipCards','ruleReminders','affixTrainer',
    'commonMistakes','speechDrill','powerPrefixes','miniStories','dictationBank',
    'essayTemplates','essayTopics','affixMap','wordFamilies','oppositeAffixes',
    'converterRules','converterExercises','miniQuizzes','miniDialogues',
    'memoryHooks','quickTips','wordOfTheDay','learningPath'
  ];

  const state = {
    loaded: [],
    failed: [],
    missing: [],
    initCalled: false,
    initError: null
  };

  // ─── Утилиты ───
  const log  = (...a) => console.log('%c[prefixes]', 'color:#c49a6c;font-weight:bold;', ...a);
  const ok   = (...a) => console.log('%c[prefixes] ✅', 'color:#6b8e23;font-weight:bold;', ...a);
  const warn = (...a) => console.warn('%c[prefixes] ⚠️', 'color:#b97f44;font-weight:bold;', ...a);
  const err  = (...a) => console.error('%c[prefixes] ❌', 'color:#b93a3a;font-weight:bold;', ...a);

  // ─── Загрузка одного скрипта ───
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.async = false;
      s.onload = () => { state.loaded.push(src); ok('загружен', src); resolve(); };
      s.onerror = () => { state.failed.push(src); err('не загрузился', src); reject(new Error('load failed: ' + src)); };
      document.head.appendChild(s);
    });
  }

  // ─── Проверка переменных ───
  function checkVars() {
    state.missing = EXPECTED.filter(n => typeof window[n] === 'undefined');
  }

  // ─── Ожидание DOM ───
  function waitDOM() {
    return new Promise(resolve => {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', resolve, { once: true });
      } else {
        resolve();
      }
    });
  }

  // ─── Панель диагностики ───
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function showPanel() {
    if (document.getElementById('prefixesDiag')) return;
    const p = document.createElement('div');
    p.id = 'prefixesDiag';
    p.style.cssText = `
      position: fixed; top: 12px; left: 12px; right: 12px; max-width: 720px; margin: 0 auto;
      background: #fff8ee; border: 3px solid #b93a3a; border-radius: 14px;
      padding: 16px 20px; font-family: -apple-system, BlinkMacSystemFont, ui-monospace, monospace;
      font-size: 13px; color: #3d2b1a; z-index: 99999;
      box-shadow: 0 10px 40px rgba(0,0,0,.35); max-height: 80vh; overflow-y: auto;
    `;
    const missingHtml = state.missing.length
      ? `<div style="background:#fde4c8;border-radius:10px;padding:10px;margin:8px 0;">
           <b>Отсутствуют (${state.missing.length}):</b><br>
           <span style="font-family:ui-monospace;font-size:12px;color:#5a0f0f;">${state.missing.map(esc).join(', ')}</span>
         </div>` : '';
    const failedHtml = state.failed.length
      ? `<div style="background:#fde4c8;border-radius:10px;padding:10px;margin:8px 0;">
           <b>Не загрузились файлы:</b><br>
           <span style="font-family:ui-monospace;font-size:12px;color:#5a0f0f;">${state.failed.map(esc).join('<br>')}</span>
         </div>` : '';
    const initHtml = state.initError
      ? `<div style="background:#fde4c8;border-radius:10px;padding:10px;margin:8px 0;">
           <b>init() упал:</b><br>
           <span style="font-family:ui-monospace;font-size:12px;color:#5a0f0f;">${esc(state.initError)}</span>
         </div>` : '';

    p.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <b style="color:#b93a3a;font-size:15px;">❌ prefixes.js — есть проблемы</b>
        <button onclick="this.closest('#prefixesDiag').style.display='none'"
          style="background:#b93a3a;border:none;color:#fff;width:26px;height:26px;border-radius:50%;cursor:pointer;">✕</button>
      </div>
      ${failedHtml}
      ${missingHtml}
      ${initHtml}
      <div style="background:#e8f0d4;border-radius:10px;padding:10px;font-size:12px;color:#2d4a0f;">
        <b>Что делать:</b><br>
        1. Откройте <b>F12 → Console</b> — там подробности.<br>
        2. Проверьте <b>F12 → Network</b> — все ли файлы загружены (200 OK).<br>
        3. Если переменные отсутствуют — убедитесь, что в <code>prefixes-data.js</code> они объявлены через <code>var</code>,<br>
           либо в конце файла есть <code>Object.assign(window, {...})</code>.
      </div>
    `;
    document.body.appendChild(p);
  }

  // ─── Основной поток ───
  async function main() {
    log('старт');

    // 1. Ждём DOM
    await waitDOM();
    log('DOM готов');

    // 2. Грузим модули по порядку
    for (const src of MODULES) {
      try {
        await loadScript(src);
      } catch (e) {
        // файл не загрузился — продолжать смысла мало, но идём дальше
        err('пропуск', src, '—', e.message);
      }
    }

    // 3. Проверяем переменные
    checkVars();
    if (state.missing.length > 0) {
      warn('отсутствуют переменные:', state.missing);
      showPanel();
      // всё равно пробуем init — может, часть функционала работает
    } else {
      ok('все переменные на месте (' + EXPECTED.length + ')');
    }

    // 4. Вызываем init() РОВНО ОДИН РАЗ
    if (state.initCalled) {
      warn('init() уже вызывался — пропускаю');
    } else if (typeof window.init === 'function') {
      state.initCalled = true;
      try {
        log('вызываю init()...');
        await window.init();
        ok('init() выполнен');
      } catch (e) {
        state.initError = (e && e.message) + '\n' + ((e && e.stack) || '');
        err('init() упал:', e);
        showPanel();
      }
    } else {
      warn('window.init не найден. Проверьте, что prefixes-render.js / prefixes-router.js загружены.');
    }

    // 5. Событие готовности
    window.dispatchEvent(new Event('prefixesReady'));
    log('готово. Модулей:', state.loaded.length, '/', MODULES.length,
        '| Отсутствует переменных:', state.missing.length);
  }

  // ─── Глобальный перехват ошибок (для диагностики) ───
  window.addEventListener('error', (e) => {
    const src = e.filename || '';
    if (!src.includes('prefixes-')) return;
    err('runtime:', src.split('/').pop(), 'строка', e.lineno + ':' + e.colno, '—', e.message);
  });

  window.addEventListener('unhandledrejection', (e) => {
    const stack = (e.reason && e.reason.stack) || '';
    if (!stack.includes('prefixes-')) return;
    err('promise:', e.reason);
  });

  // ─── Запуск ───
  main().catch(e => {
    err('критическая ошибка:', e);
    showPanel();
  });

})();
