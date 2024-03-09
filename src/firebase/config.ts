import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqSsJNtFe01uYFywgfGxkdxEhsgCpRJoA",
  authDomain: "curd-4858e.firebaseapp.com",
  projectId: "curd-4858e",
  storageBucket: "curd-4858e.appspot.com",
  messagingSenderId: "687624454445",
  appId: "1:687624454445:web:ac71832ab9c8ea981553a4",
  measurementId: "G-SDKY2XMYP0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
