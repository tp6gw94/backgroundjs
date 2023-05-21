const webpush = require("web-push");

webpush.setVapidDetails(
  "http://localhost:3000",
  "BMJLyW67ob2JhmSD16zOBELDNR6PjW66wbdtTPUuzJYk_K5F3PLeRAkNLXr-teVkPcrTxzZRC355Hntu6zph9pQ",
  "KhDfkF_xtnW1UCSr2xxbiyu-fXH_iI58Xqs7OHXXRAs"
);
const pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/et71jy1B-qE:APA91bEGM67OVTz4-AOOU_9rD8R2ctBnWUF6sjCRBUGIFv4yY3kGSgG_o8-gY2ZoQ7e8CAPmM3q2mlH56nn-tjL2L0h5G5L5vmQ7ay6j0yMLr98pc-9Fn1jCm3IntMGbYBmsUTJrpAgZ",
  keys: {
    p256dh:
      "BHlMtTMVtirVzb6GQpPHws0GzzF6ZlPybBhHU4aTbVHMRLbIpdEUg8a2YC3vEEPaPyRHxuSBThsHW2sPp1sMtNA",
    auth: "EdxaxyDXRU9FdD2qm6L2OA",
  },
};

webpush
  .sendNotification(pushSubscription, "Push message", {})
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
