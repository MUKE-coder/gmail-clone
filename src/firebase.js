import "firebase/compat/auth";

import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEXbwf2PgxIL3BD3hPi92SmFLx0_arWfg",
  authDomain: "clone-cf5e5.firebaseapp.com",
  projectId: "clone-cf5e5",
  storageBucket: "clone-cf5e5.appspot.com",
  messagingSenderId: "94120795520",
  appId: "1:94120795520:web:4b82d659e6b149859eb565",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };
