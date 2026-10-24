/* Compass Dash offline support (v2.6.9).
   Upload this file next to index.html. It keeps a copy of the site so it still opens without internet.
   Pages are fetched fresh whenever there is a connection (so updates arrive straight away), and the saved
   copy is only used when the network is unavailable. Student account requests are never cached. */
const CACHE="compass-dash-v2";
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(["./"])).catch(()=>{}));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET")return;
 const u=new URL(r.url);
 if(/(^|\.)supabase\.co$/.test(u.hostname))return;                          /* live data: never cached */
 const mine=u.origin===self.location.origin,font=/^fonts\.(googleapis|gstatic)\.com$/.test(u.hostname),lib=u.hostname==="cdnjs.cloudflare.com";
 if(!mine&&!font&&!lib)return;
 e.respondWith(fetch(r).then(res=>{if(res&&(res.ok||res.type==="opaque")){const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp)).catch(()=>{})}return res})
  .catch(()=>caches.match(r,{ignoreSearch:true}).then(m=>m||(r.mode==="navigate"?caches.match("./"):null)).then(m=>m||Response.error())))});
