self.addEventListener("push", (event) => {
  if (event.data) {
    console.log(event.data.text());
    event.waitUntil(
      (function () {
        self.registration.showNotification("title", {
          body: event.data.text(),
        });
      })()
    );
  }
});
