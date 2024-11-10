
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA82xCdwspPLy5cXGaHBoABNVJK9kwE9SE",
  authDomain: "reactchat-app-b771c.firebaseapp.com",
  projectId: "reactchat-app-b771c",
  storageBucket: "reactchat-app-b771c.firebasestorage.app",
  messagingSenderId: "445603070842",
  appId: "1:445603070842:web:ba7e43c75b62213dd80cc3"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
