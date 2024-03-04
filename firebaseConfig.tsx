import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
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

export const createNewUser = async (email:string, password:string): Promise <any> =>{
  const auth = getAuth(app); // Pass the Firebase app instance to getAuth
  try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Signed up 
      const user = userCredential.user;
      return user; // Return the user object if needed
  } catch (error:any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // Handle errors here
      console.error(errorCode, errorMessage);
      throw error; // Re-throw error if needed
  }
}

export const signInUser = async (email:string, password:string): Promise <any> =>{
  const auth = getAuth(app); // Pass the Firebase app instance to getAuth
  try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Sign in
      const user = userCredential.user;
      return user; // Return the user object if needed
  } catch (error:any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // Handle errors here
      console.error(errorCode, errorMessage);
      throw error; // Re-throw error if needed
  }
}