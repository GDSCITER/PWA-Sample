/*
 *  Minimal service worker that supports offline functionality.
 *  Loads from cache if exists, or else freshly fetches.
 *  Created On 17 October 2021
 */

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => (response || fetch(event.request)))
    )
})
