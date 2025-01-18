import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrapGALaxcVwqUzHEJ5_dLQrt21lb3PyM",
  authDomain: "citi-bank-833a1.firebaseapp.com",
  projectId: "citi-bank-833a1",
  storageBucket: "citi-bank-833a1.appspot.com",
  messagingSenderId: "671023046772",
  appId: "1:671023046772:web:9c34e90a622b963aef7121",
  measurementId: "G-2EWCRYCW9Z",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

// Set persistence to local storage
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Persistence set to local storage.");
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });

// Initialize Firestore
const db = getFirestore(app);

export { auth, db, app };
