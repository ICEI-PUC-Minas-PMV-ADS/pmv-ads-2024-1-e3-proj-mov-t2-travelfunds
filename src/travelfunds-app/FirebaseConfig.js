import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd0GkYWVUha7AD-LPO5LkpFsMSE7Ye5Po",
  authDomain: "travelfunds.firebaseapp.com",
  projectId: "travelfunds",
  storageBucket: "travelfunds.appspot.com",
  messagingSenderId: "757287524715",
  appId: "1:757287524715:web:32c3ae34ccb85c93ba542e"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);