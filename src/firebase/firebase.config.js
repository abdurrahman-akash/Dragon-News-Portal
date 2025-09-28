// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8QuRc67IxDnMt8Vne2k569wYijmo3reg",
  authDomain: "auth-project-763e1.firebaseapp.com",
  projectId: "auth-project-763e1",
  storageBucket: "auth-project-763e1.firebasestorage.app",
  messagingSenderId: "1045008172364",
  appId: "1:1045008172364:web:b734f1c8187b500c5c3be9",
  measurementId: "G-HQYLSC7NDX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);