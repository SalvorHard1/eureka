// Service worker : met l'application en cache pour qu'elle fonctionne hors ligne.
// Pensez à changer CACHE à chaque mise à jour du contenu.
const CACHE = 'eureka-v3';
const FILES = ['./', 'index.html', 'css/style.css', 'js/content.js', 'js/content-deep.js', 'js/content-lessons-1.js', 'js/content-lessons-2.js', 'js/content-themes.js', 'js/app.js', 'manifest.webmanifest', 'icons/icon.svg', 'icons/icon-full.svg', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// Réseau d'abord (pour récupérer les nouveautés), cache en secours hors ligne.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request)
      .then(res => {
        if (res.ok && new URL(e.request.url).origin === location.origin) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
