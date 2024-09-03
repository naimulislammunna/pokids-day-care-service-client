// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyzGWw5RcUFjA9lzXU-ZCwv6o8VxTz52c",
  authDomain: "marque-state-app.firebaseapp.com",
  projectId: "marque-state-app",
  storageBucket: "marque-state-app.appspot.com",
  messagingSenderId: "344093415336",
  appId: "1:344093415336:web:abed7aa8ae5527ec78af9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;