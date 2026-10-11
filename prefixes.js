// ═══════════════════════════════════════════════════════════
// prefixes.js — ЛОАДЕР
// Загружает: prefixes-data.js → prefixes-render.js → prefixes-router.js
// ═══════════════════════════════════════════════════════════

(function () {
  'use strict';

  const MODULES = [
    'prefixes-data.js',
    'prefixes-render.js',
    'prefixes-router.js'
  ];

  let idx = 0;
  function loadNext() {
    if (idx >= MODULES.length) {
      if (typeof window.init === 'function') {
        try { window.init(); }
        catch (e) { console.warn('[prefixes-loader] init error:', e); }
      }
      window.dispatchEvent(new Event('prefixesReady'));
      return;
    }
    const src = MODULES[idx++];
    const s = document.createElement('script');
    s.src = src;
    s.async = false;
    s.onload = loadNext;
    s.onerror = () => {
      console.warn('[prefixes-loader] не найден:', src);
      loadNext();
    };
    document.head.appendChild(s);
  }
  loadNext();
})();
