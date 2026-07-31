// public/sw.js
const CACHE_NAME = 'baka-dico-v1';
const urlsToCache = [
  '/',
  '/dictionnaire-baka',
  '/apprendre-compter-baka',
  '/proverbes-expressions-baka',
  '/rites-danses-baka',
  '/baka-culture',
  '/manifest.json',
  '/images/mama.jpeg',
  '/images/1000605240.jpg',
  '/images/JHHH.jpeg',
  '/images/WhatsApp Image 2025-12-24 at 15.35.02.jpeg',
  '/images/WhatsApp Image 2025-12-24 at 15.35.04 (1).jpeg',
  '/images/WhatsApp Image 2025-12-24 at 15.35.05.jpeg',
  '/images/WhatsApp Image 2025-12-24 at 15.35.07.jpeg',
  '/images/WhatsApp Image 2025-12-24 at 15.35.49.jpeg',
  '/images/WhatsApp Image 2025-12-24 at 15.54.59.jpeg',
  '/images/WhatsApp Image 2026-01-27 at 11.41.39.jpeg',
  '/videos/video1.mp4',
  '/videos/video2.mp4',
  '/videos/WhatsApp Video 2025-12-24 at 13.36.11.mp4',
  '/videos/WhatsApp Video 2025-12-24 at 13.36.17.mp4',
  '/videos/WhatsApp Video 2025-12-24 at 13.19.20.mp4',
  '/videos/WhatsApp Video 2026-02-01 at 20.03.51.mp4',
  '/videos/WhatsApp Video 2026-02-01 at 20.09.27.mp4',
  '/videos/WhatsApp Video 2026-02-01 at 20.19.27.mp4'
];

// Installation du Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Activation du Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interception des requêtes
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(
          (response) => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            return response;
          }
        );
      })
  );
});