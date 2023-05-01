navigator.serviceWorker.register("sw.js");

const form = document.querySelector("#form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = {
    name: formData.get("name"),
    msg: formData.get("msg"),
  };

  const formCache = await caches.open("form");
  formCache.put("/data", new Response(JSON.stringify(data)));

  if ("SyncManager" in window) {
    const reg = await navigator.serviceWorker.ready;
    reg.sync.register("submit-form");
  }
});
