import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF-wdFJM1H7u3tzlHzSOFuEyPTjg1520g",
  authDomain: "project5-7c8e2.firebaseapp.com",
  projectId: "project5-7c8e2",
  storageBucket: "project5-7c8e2.appspot.com",
  messagingSenderId: "129827558177",
  appId: "1:129827558177:web:8943f1c82475884583a460"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();