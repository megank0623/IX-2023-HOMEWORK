// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//ADDED BY MEGAN: 
import { getFirestore } from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBryHSPSa5Y7FdvKtScCLZRbW9-IinV69s",
  authDomain: "task-list-298ff.firebaseapp.com",
  projectId: "task-list-298ff",
  storageBucket: "task-list-298ff.appspot.com",
  messagingSenderId: "905789805218",
  appId: "1:905789805218:web:be72deb90cfebc390f7dfb"
};

//Initialize firebase stuff
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
