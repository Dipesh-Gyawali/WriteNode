// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxzQ2u6C0-UIBTBwoMxcpylyqr_ZrMjaw",
  authDomain: "writenode-11386.firebaseapp.com",
  projectId: "writenode-11386",
  storageBucket: "writenode-11386.appspot.com",
  messagingSenderId: "280051020954",
  appId: "1:280051020954:web:7e3e06ba95ceca33451b23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Database ra google auth ko lagi
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();