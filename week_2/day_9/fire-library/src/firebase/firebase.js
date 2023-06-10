// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh7Ddd1Fomxtm7o31O3oOEl6lDyRDXWOA",
  authDomain: "fire-library-457af.firebaseapp.com",
  projectId: "fire-library-457af",
  storageBucket: "fire-library-457af.appspot.com",
  messagingSenderId: "584722026041",
  appId: "1:584722026041:web:d931c3c36caf97006a07e8",
  measurementId: "G-F60VMGH4YH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };