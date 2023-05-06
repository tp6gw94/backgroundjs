navigator.serviceWorker.register("sw.js");

document.getElementById("btn").addEventListener("click", async () => {
  const registration = await navigator.serviceWorker.ready;
  const permissionStatus = await navigator.permissions.query({
    name: "periodic-background-sync",
  });

  if (permissionStatus.state === "granted") {
    registration.periodicSync.register("news", {
      minInterval: 12 * 60 * 60 * 1000,
    });
  } else {
    console.log("Permission Denied");
  }
});
