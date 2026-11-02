/* Compass Dash has moved to compass-ed.github.io/dash/. This replaces the old offline worker: it clears the saved copy of
   the old site, removes itself and reloads open tabs, so they load the forwarding page (which carries progress across). */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil((async () => {
  for (const k of await caches.keys()) if (k.startsWith("cd-")) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({ type: "window" })) c.navigate(c.url);
})()));
