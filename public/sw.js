/* ANTERA service worker (v2)
 *
 * Rules that keep this SW fast and error-free:
 *  1. Never intercept media (video/audio) or Range requests — the browser's
 *     native media stack streams them with 206 Partial Content, which the
 *     Cache API rejects, and aborted media fetches used to synthesize fake
 *     503 responses.
 *  2. Never intercept Next.js dev/HMR assets — stale cached chunks break
 *     Turbopack HMR with ChunkLoadError.
 *  3. In development, get out of the way completely.
 */

const CACHE_NAME = 'antera-v2';

const PRECACHE_ASSETS = [
  '/',
  '/logo.png',
  '/favicon.svg',
  '/manifest.json',
  '/fonts/degarism-studio-alliance-no-2-light.otf',
  '/fonts/Williwaw-Book.otf',
];

const FLATICON_HOSTNAME = 'cdn-icons-png.flaticon.com';

const IS_DEV =
  self.location.hostname === 'localhost' ||
  self.location.hostname === '127.0.0.1' ||
  self.location.hostname === '[::1]';

self.addEventListener('install', (event) => {
  if (!IS_DEV) {
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(PRECACHE_ASSETS).catch((err) => {
          console.log('Static asset caching failed:', err);
        });
      })
    );
  }
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET') {
    return;
  }

  if (url.origin !== location.origin) {
    if (url.hostname === FLATICON_HOSTNAME) {
      event.respondWith(handleFlaticonRequest(request));
    }
    return;
  }

  // Development: never touch dev server / Turbopack HMR traffic.
  if (IS_DEV) {
    return;
  }

  // Media: bypass the SW entirely so the browser streams natively with
  // Range requests. Prevents fake 503s and 206 cache.put() crashes.
  if (/\.(mp4|webm|ogg|mov|m4v|mp3|wav|aac)$/i.test(url.pathname)) {
    return;
  }

  // Any request carrying a Range header must go straight to the network.
  if (request.headers.has('range')) {
    return;
  }

  const pathname = url.pathname;

  // Content-hashed Next.js assets are immutable -> cache first.
  if (pathname.startsWith('/_next/static/')) {
    event.respondWith(cacheFirst(request));
    return;
  }

  if (/\.(jpg|jpeg|png|gif|webp|avif|svg|ico)$/i.test(pathname)) {
    event.respondWith(cacheFirst(request));
    return;
  }

  if (/\.(woff|woff2|otf|ttf|eot)$/i.test(pathname)) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // API: always network, never cached.
  if (pathname.startsWith('/api/')) {
    return;
  }

  // Pages and everything else: network first, cache as offline fallback.
  event.respondWith(networkFirst(request));
});

/**
 * The Cache API rejects partial (206) responses. Only full 200 responses
 * are safe to store.
 */
function isCacheableResponse(response) {
  return response.status === 200 && !response.headers.has('content-range');
}

async function handleFlaticonRequest(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);

  try {
    const networkResponse = await fetch(request, { mode: 'cors', credentials: 'omit' });
    if (isCacheableResponse(networkResponse)) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    if (cachedResponse) {
      return cachedResponse;
    }
    return new Response('', { status: 404, statusText: 'Not Found' });
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    if (isCacheableResponse(networkResponse)) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    return new Response('Offline', { status: 503, statusText: 'Offline' });
  }
}

async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);

  try {
    const networkResponse = await fetch(request);
    if (isCacheableResponse(networkResponse)) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    return new Response('Offline', { status: 503, statusText: 'Offline' });
  }
}

self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});
