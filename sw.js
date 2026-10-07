// sw.js — English Cards Service Worker

const CACHE_NAME = 'english-cards-v8';

const ASSETS = [
    './',
    './index.html',
    './verbs.js',
    './tenses.js',
    './phrases.js',
    './prefixes.js',
    './magicWords.js',
    './quiz.js',
    './builder.js',
    './dictionary.js',
    './quizgen.js'
];

// ─── УСТАНОВКА ───
self.addEventListener('install', (event) => {
    console.log('[SW] Установка...');
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return Promise.all(
                ASSETS.map(url => 
                    cache.add(url).catch(err => 
                        console.warn('[SW] Не удалось кэшировать:', url, err.message)
                    )
                )
            );
        }).then(() => {
            console.log('[SW] Установлен');
            return self.skipWaiting();
        })
    );
});

// ─── АКТИВАЦИЯ ───
self.addEventListener('activate', (event) => {
    console.log('[SW] Активация...');
    event.waitUntil(
        caches.keys().then(keys => 
            Promise.all(
                keys.filter(k => k !== CACHE_NAME).map(k => {
                    console.log('[SW] Удаляю старый кэш:', k);
                    return caches.delete(k);
                })
            )
        ).then(() => {
            console.log('[SW] Активирован');
            return self.clients.claim();
        })
    );
});

// ─── FETCH ───
self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;
    const url = new URL(event.request.url);
    if (url.origin !== self.location.origin) return;

    event.respondWith(
        caches.match(event.request).then(cached => {
            if (cached) return cached;
            return fetch(event.request).then(response => {
                if (response && response.status === 200) {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone)).catch(() => {});
                }
                return response;
            }).catch(() => {
                if (event.request.mode === 'navigate') return caches.match('./index.html');
                return new Response('Офлайн', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
            });
        })
    );
});

self.addEventListener('message', (event) => {
    if (event.data === 'SKIP_WAITING') self.skipWaiting();
    if (event.data === 'CLEAR_CACHE') {
        caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k)))).then(() => console.log('[SW] Кэш очищен'));
    }
});

console.log('[SW] Скрипт загружен');
