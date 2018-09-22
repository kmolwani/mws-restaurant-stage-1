const staticCacheName = 'restaurant-app-v1';
const cacheAssets = [
 '/js/dbhelper.js',
 '/js/main.js',
 '/js/restaurant_info.js',
 '/css/styles.css',
 '/img/',
 'index.html',
 'restaurant.html'
];

// installing service worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
        return cache.addAll(cacheAssets)
    })
  )
});

// call activate event
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('restaurant-') &&
                 cacheName != staticCacheName;
        }).map(function(cacheName) {
          return caches.delete(cacheName)
        })
      );
    })
  );
});
//

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
