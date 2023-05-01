console.log("registered service work");

self.addEventListener("sync", async (event) => {
  switch (event.tag) {
    case "submit-form": {
      const formCache = await caches.open("form");
      const formDataRes = await formCache.match("/data");
      const data = await formDataRes.json();

      async function submitForm() {
        await fetch("/log", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }

      event.waitUntil(submitForm());
      break;
    }
    case "test-tag-from-devtools": {
      console.log("test");
      break;
    }
    default: {
      console.log("unknow tag", event.tag);
    }
  }
});
