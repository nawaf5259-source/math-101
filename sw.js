/* Service worker for رياض 101: lets the site open without internet
   once it has been visited. Pages and assets are served from the cache
   first and refreshed in the background. */

const VERSION = 'm101-v1';
const CACHE = `${VERSION}-site`;
const RUNTIME = `${VERSION}-runtime`;

// Core pages and assets cached on install (relative to this file)
const PRECACHE = [
    './',
    'index.html',
    'app.html',
    'styles.css',
    'main.js',
    'logo.svg',
    'manifest.webmanifest',
    'ex+.html',
    'qbanks.html',
    'resources.html',
    'u1.html', 'u2.html', 'u3.html', 'u4.html', 'u5.html', 'u6.html',
    'ex1.html', 'ex2.html', 'ex3.html', 'ex4.html', 'ex5.html', 'ex6.html',
    'icons/icon-192.png',
    'icons/icon-512.png',
    'icons/icon-maskable-512.png',
    'icons/apple-touch-icon.png',
    'icons/favicon-64.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE).then((cache) =>
            Promise.allSettled(PRECACHE.map((p) => cache.add(new Request(p, { cache: 'reload' }))))
        ).then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(keys.filter((k) => !k.startsWith(VERSION)).map((k) => caches.delete(k)))
        ).then(() => self.clients.claim())
    );
});

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

function isSameOrigin(url) {
    return url.origin === self.location.origin;
}

// Third-party assets the pages need (MathJax, fonts)
function isAllowedCrossOrigin(url) {
    return /(^|\.)(jsdelivr\.net|googleapis\.com|gstatic\.com)$/.test(url.hostname);
}

async function staleWhileRevalidate(request, cacheName) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request, { ignoreSearch: request.mode === 'navigate' });
    const network = fetch(request).then((response) => {
        if (response && (response.ok || response.type === 'opaque')) {
            cache.put(request, response.clone()).catch(() => { /* quota or opaque */ });
        }
        return response;
    }).catch(() => null);

    if (cached) {
        // Refresh in the background
        network.catch(() => { /* ignore */ });
        return cached;
    }
    const fresh = await network;
    if (fresh) return fresh;
    throw new Error('offline');
}

self.addEventListener('fetch', (event) => {
    const { request } = event;
    if (request.method !== 'GET') return;

    let url;
    try { url = new URL(request.url); } catch (e) { return; }

    // Feedback form and anything else we don't know: leave to the network
    if (!isSameOrigin(url) && !isAllowedCrossOrigin(url)) return;

    if (request.mode === 'navigate') {
        event.respondWith(
            staleWhileRevalidate(request, CACHE).catch(async () => {
                const cache = await caches.open(CACHE);
                return (await cache.match('app.html')) || (await cache.match('index.html')) ||
                    new Response('<!doctype html><html lang="ar" dir="rtl"><meta charset="utf-8"><title>غير متصل</title><body style="font-family:sans-serif;text-align:center;padding:3rem"><h1>لا يوجد اتصال بالإنترنت</h1><p>افتح هذه الصفحة مرة واحدة وأنت متصل لتُحفظ على جهازك.</p></body></html>',
                        { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
            })
        );
        return;
    }

    const cacheName = isSameOrigin(url) ? CACHE : RUNTIME;
    event.respondWith(
        staleWhileRevalidate(request, cacheName).catch(() => Response.error())
    );
});
