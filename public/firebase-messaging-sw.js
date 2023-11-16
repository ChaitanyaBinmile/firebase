import { firebase } from "firebase";
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");


const firebaseConfig = {
  apiKey: "AIzaSyBl-4o7K9EpdQBi7QgxNJE_Ciec4YVEEhY",
  authDomain: "practice-156c1.firebaseapp.com",
  projectId: "practice-156c1",
  storageBucket: "practice-156c1.appspot.com",
  messagingSenderId: "261126632975",
  appId: "1:261126632975:web:97c06e1f5be312b004d57a",
  measurementId: "G-2TF5PGC2Y3",
  databaseURL:"https://practice-156c1-default-rtdb.firebaseio.com/"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
