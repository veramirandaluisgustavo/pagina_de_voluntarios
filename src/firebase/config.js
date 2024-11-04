// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ2eGCRpTXCI7X7DBt-vdRQGf0VItD5RQ",
  authDomain: "voluntarios-7d877.firebaseapp.com",
  projectId: "voluntarios-7d877",
  storageBucket: "voluntarios-7d877.firebasestorage.app",
  messagingSenderId: "18383966737",
  appId: "1:18383966737:web:cea4ac55c466b5d2d157b0",
  measurementId: "G-Z5QKXLYEY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app)