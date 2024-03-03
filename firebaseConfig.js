// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvp9Jtmz-0zWgY43IP44V32Oaljsg2Xgs",
  authDomain: "flood-watch-dff2f.firebaseapp.com",
  projectId: "flood-watch-dff2f",
  storageBucket: "flood-watch-dff2f.appspot.com",
  messagingSenderId: "814887864223",
  appId: "1:814887864223:web:aa2273fcbed810c07edfaa",
  measurementId: "G-WBQMS5Y0LV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);