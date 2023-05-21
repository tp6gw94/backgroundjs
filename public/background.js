navigator.serviceWorker.register("sw.js");

// public key = BMJLyW67ob2JhmSD16zOBELDNR6PjW66wbdtTPUuzJYk_K5F3PLeRAkNLXr-teVkPcrTxzZRC355Hntu6zph9pQ
// private key = KhDfkF_xtnW1UCSr2xxbiyu-fXH_iI58Xqs7OHXXRAs

document.getElementById("btn").addEventListener("click", async () => {
  if ("PushManager" in window) {
    const notificationPermission = await Notification.requestPermission();
    if (notificationPermission === "granted") {
      const registration = await navigator.serviceWorker.ready;
      const notificationSub = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey:
          "BMJLyW67ob2JhmSD16zOBELDNR6PjW66wbdtTPUuzJYk_K5F3PLeRAkNLXr-teVkPcrTxzZRC355Hntu6zph9pQ",
      });
      console.log(notificationSub);
    }
  }
});
