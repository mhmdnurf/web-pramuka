// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJN6TY0wf3l3McuMBELaxxQi0suoLwUwE",
  authDomain: "web-portofolio-pramuka.firebaseapp.com",
  projectId: "web-portofolio-pramuka",
  storageBucket: "web-portofolio-pramuka.appspot.com",
  messagingSenderId: "652444641761",
  appId: "1:652444641761:web:769a6b2c6be20cd20e8aa0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
