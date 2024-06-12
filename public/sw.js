self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("web-vitals").then((chache) => {
      return chache.addAll(["/main.js", "/"]);
    })
  );
});

// self.addEventListener("activate", (event) => {
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(cacheNames.map((item) => caches.delete(item)));
//     })
//   );
// });

self.addEventListener("fetch", (event) => {
  const response = caches.match(event.request).then((cachedResponse) => {
    // Cached content exists
    if (cachedResponse) {
      return cachedResponse;
    }

    // Cached content doesn't exist.
    // Fetch from internet first, store it, and return it
    // return fetch(event.request).then((networkResponse) => {
    //   const response = networkResponse.clone();

    //   return caches.open("my-cache-collection").then((cache) => {
    //     cache.put(event.request, response);

    //     return response;
    //   });
    // });
  });

  event.respondWith(response);
});
