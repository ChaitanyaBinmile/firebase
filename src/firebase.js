// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from 'firebase/messaging';


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

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
