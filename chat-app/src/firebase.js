import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCuLVW219GjE_AGZFeKrQh6BAVNXbsB9LA",
  authDomain: "chat-e5782.firebaseapp.com",
  projectId: "chat-e5782",
  storageBucket: "chat-e5782.appspot.com",
  messagingSenderId: "759784723773",
  appId: "1:759784723773:web:91d2a7a1de13a26406a154",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
