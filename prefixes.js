// ═══════════════════════════════════════════════════════════
// prefixes.js — простой лоадер без проверок
// Загружает модули по порядку и вызывает init()
// ═══════════════════════════════════════════════════════════

(function () {
  'use strict';

  const MODULES = [
    'prefixes-data.js',
    'prefixes-render.js',
    'prefixes-router.js'
  ];

  function log(...a)  { console.log('%c[prefixes]', 'color:#c49a6c;font-weight:bold;', ...a); }
  function err(...a)  { console.error('%c[prefixes] ❌', 'color:#b93a3a;font-weight:bold;', ...a); }

  function loadScript(src) {
    return new Promise((resolve) => {
      const s = document.createElement('script');
      s.src = src;
      s.async = false;
      s.onload = () => { log('загружен', src); resolve(); };
      s.onerror = () => { err('не загрузился', src); resolve(); };
      document.head.appendChild(s);
    });
  }

  async function main() {
    // Ждём DOM
    if (document.readyState === 'loading') {
      await new Promise(r => document.addEventListener('DOMContentLoaded', r, { once: true }));
    }

    // Грузим модули по порядку
    for (const src of MODULES) {
      await loadScript(src);
    }

    // Вызываем init(), если он есть
    if (typeof window.init === 'function') {
      try {
        await window.init();
        log('init() выполнен');
      } catch (e) {
        err('init() упал:', e);
      }
    }

    window.dispatchEvent(new Event('prefixesReady'));
    log('готово');
  }

  main().catch(e => err('критическая ошибка:', e));

})();
