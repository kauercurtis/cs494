// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7nycGy4U_5lD6GWfGCwks4kCDQyoikQg",
  authDomain: "pet-adoption-bac06.firebaseapp.com",
  projectId: "pet-adoption-bac06",
  storageBucket: "pet-adoption-bac06.appspot.com",
  messagingSenderId: "737136183869",
  appId: "1:737136183869:web:438f14a6a0400c8a3ab854"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);