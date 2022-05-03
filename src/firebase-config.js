import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkMNIm7zK4hFMzis4Pp8lrs2mAonraLXQ",
  authDomain: "loli-60b43.firebaseapp.com",
  projectId: "loli-60b43",
  storageBucket: "loli-60b43.appspot.com",
  messagingSenderId: "129347504978",
  appId: "1:129347504978:web:ae82c6b3bed3e79ff7c88b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
