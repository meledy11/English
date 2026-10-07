// sw.js — English Cards Service Worker
// Простой кэш-первый обработчик

const CACHE_NAME = 'english-cards-v7';

// Файлы для кэширования (только те, что точно есть)
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
    './dictionary.js'
];

// ─── УСТАНОВКА ───
self.addEventListener('install', (event) => {
    console.log('[SW] Установка...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                // Кэшируем каждый файл по отдельности,
                // чтобы один отсутствующий не сломал всю установку
                return Promise.all(
                    ASSETS.map(url => 
                        cache.add(url).catch(err => 
                            console.warn('[SW] Не удалось кэшировать:', url, err.message)
                        )
                    )
                );
            })
            .then(() => {
                console.log('[SW] Установлен');
                return self.skipWaiting();
            })
    );
});

// ─── АКТИВАЦИЯ ───
self.addEventListener('activate', (event) => {
    console.log('[SW] Активация...');
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(
                keys.filter(key => key !== CACHE_NAME)
                    .map(key => {
                        console.log('[SW] Удаляю старый кэш:', key);
                        return caches.delete(key);
                    })
            ))
            .then(() => {
                console.log('[SW] Активирован');
                return self.clients.claim();
            })
    );
});

// ─── ОБРАБОТКА ЗАПРОСОВ ───
self.addEventListener('fetch', (event) => {
    // Только GET
    if (event.request.method !== 'GET') return;

    // Только с нашего origin
    const url = new URL(event.request.url);
    if (url.origin !== self.location.origin) return;

    event.respondWith(
        caches.match(event.request)
            .then(cached => {
                if (cached) {
                    // Есть в кэше — отдаём
                    return cached;
                }

                // Нет в кэше — идём в сеть
                return fetch(event.request)
                    .then(response => {
                        // Успешный ответ — кэшируем
                        if (response && response.status === 200) {
                            const clone = response.clone();
                            caches.open(CACHE_NAME)
                                .then(cache => cache.put(event.request, clone))
                                .catch(() => {});
                        }
                        return response;
                    })
                    .catch(() => {
                        // Офлайн — пробуем отдать index.html
                        if (event.request.mode === 'navigate') {
                            return caches.match('./index.html');
                        }
                        // Иначе — пустой ответ
                        return new Response('Офлайн', {
                            status: 503,
                            headers: { 'Content-Type': 'text/plain; charset=utf-8' }
                        });
                    });
            })
    );
});

// ─── СООБЩЕНИЯ ОТ СТРАНИЦЫ ───
self.addEventListener('message', (event) => {
    if (event.data === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    if (event.data === 'CLEAR_CACHE') {
        caches.keys().then(keys => 
            Promise.all(keys.map(k => caches.delete(k)))
        ).then(() => {
            console.log('[SW] Кэш очищен');
        });
    }
});

console.log('[SW] Скрипт загружен');
