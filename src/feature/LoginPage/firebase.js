// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0QkFXnLW-4Io9AtFlX5ieiSCOZh-I6p4",
  authDomain: "pomodoro-e9b41.firebaseapp.com",
  projectId: "pomodoro-e9b41",
  storageBucket: "pomodoro-e9b41.firebasestorage.app",
  messagingSenderId: "7865859781",
  appId: "1:7865859781:web:199e86f5ec4794fd5c3aac",
  measurementId: "G-95LBTC7D5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);