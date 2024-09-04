// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmQ8boDi_0kMiU4yYrQ00r7Rc1YIuoO3M",
  authDomain: "pokids-app.firebaseapp.com",
  projectId: "pokids-app",
  storageBucket: "pokids-app.appspot.com",
  messagingSenderId: "727446444935",
  appId: "1:727446444935:web:392b6009169c7b5b689122"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;