// ═══════════════════════════════════════════════════════════
// prefixes.js — ЛОАДЕР (маленький, только загрузка)
// ═══════════════════════════════════════════════════════════

(function () {
  'use strict';

  // Порядок ВАЖЕН: данные → рендеры → роутер
  const MODULES = [
    'prefixes-data.js',     // все массивы и объекты
    'prefixes-render.js',   // все функции render*()
    'prefixes-router.js'    // renderPrefixes, MEGA_NAV, switchMegaTab
  ];

  let idx = 0;
  function loadNext() {
    if (idx >= MODULES.length) {
      // Все модули загружены → запускаем init() из index.html
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
    s.async = false;      // 🔑 гарантирует порядок
    s.onload = loadNext;
    s.onerror = () => {
      console.warn('[prefixes-loader] не найден:', src);
      loadNext();
    };
    document.head.appendChild(s);
  }
  loadNext();
})();
