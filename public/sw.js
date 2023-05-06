console.log("registered service work");

self.addEventListener("periodicsync", (event) => {
  switch (event.tag) {
    case "test-tag-from-devtools": {
      console.log("test-tag-from-devtools");
      event.waitUntil();
    }
    case "news": {
      console.log("news");
      event.waitUntil();
    }
  }
});
