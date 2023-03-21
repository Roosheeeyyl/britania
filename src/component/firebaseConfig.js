// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdrP39je51N7KHAho02cTOGJrp-ZOxbjo",
  authDomain: "softwareengineers-b4dc0.firebaseapp.com",
  projectId: "softwareengineers-b4dc0",
  storageBucket: "softwareengineers-b4dc0.appspot.com",
  messagingSenderId: "1082444739406",
  appId: "1:1082444739406:web:2cd92677b312cec2b5e41f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore();