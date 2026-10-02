// Utils
const limitInCache = (key, size) => {
  caches.open(key).then((cache) => {
    cache.keys().then((keys) => {
      if (keys.length > size) {
        cache.delete(keys[0]).then(limitInCache(key, size));
      }
    });
  });
};

// Service Worker Codes
const cacheVersion = 40;

const activeCaches = {
  static: `static-v${cacheVersion}`,
  dynamic: `dynamic-v${cacheVersion}`,
};

self.addEventListener("install", (event) => {
  console.log("Service Worker Installed Successfully :))");

  event.waitUntil(
    caches.open(activeCaches.static).then((cache) => {
      cache.addAll([
        "/",
        "/notFound",
        // "js/script.js",
        // "js/app.js",
        // "js/code.js",
        // "css/style.css",
      ]);
    }),
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker Activated Successfully :))");

  const activeCacheNames = Object.values(activeCaches);

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.forEach((cacheName) => {
          if (!activeCacheNames.includes(cacheName)) {
            return caches.delete(cacheName); // :))
          }
        }),
      );
    }),
  );
});

self.addEventListener("fetch", (event) => {
  const urls = ["https://visionui-api.vercel.app"];

  if (!["http:", "https:"].includes(new URL(event.request.url).protocol)) {
    return;
  }

  if (urls.includes(event.request.url)) {
    return event.respondWith(
      fetch(event.request).then((res) => {
        return res;
      }),
    );
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      return response
        ? response
        : fetch(event.request)
            .then((serverResponse) => {
              return caches.open([activeCaches.dynamic]).then((cache) => {
                cache.put(event.request, serverResponse.clone());

                return serverResponse;
              });
            })
            .catch((error) => {
              // return caches.match("/notFound");
            });
    }),
  );
});
