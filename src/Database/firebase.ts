// src/Database/firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDrYy2grKQ9TXQGDjXSYoWMzNdqeJEfR_Q",
  authDomain: "moneytree-prod.firebaseapp.com",
  projectId: "moneytree-prod",
  storageBucket: "moneytree-prod.firebasestorage.app",
  messagingSenderId: "1068811263346",
  appId: "1:1068811263346:web:d61dae5352281cdc7051eb",
  measurementId: "G-1SDGNX028Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
