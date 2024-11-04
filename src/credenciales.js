// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLdc3OvtCxPORLgFauS-TcHf1BUWYnyyQ",
  authDomain: "pagina-voluntarios.firebaseapp.com",
  projectId: "pagina-voluntarios",
  storageBucket: "pagina-voluntarios.firebasestorage.app",
  messagingSenderId: "937856943607",
  appId: "1:937856943607:web:1134897d3bcc79f58ddaf2",
  measurementId: "G-PWBPK9L9EL"
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);
export const analytics = getAnalytics(appFirebase);