import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBWLCX5xGzndy7jRsrrGkcwap7yjT4ALcQ",
  authDomain: "react-firebase-db5da.firebaseapp.com",
  projectId: "react-firebase-db5da",
  storageBucket: "react-firebase-db5da.appspot.com",
  messagingSenderId: "785489354",
  appId: "1:785489354:web:bf248d358c19d39dc5c333",
  measurementId: "G-T6CJ3MMYGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
