// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnegzE6T_t836xGAs75hlRSYj0nsOOryI",
  authDomain: "air-bnb-fb89e.firebaseapp.com",
  databaseURL: "https://air-bnb-fb89e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "air-bnb-fb89e",
  storageBucket: "air-bnb-fb89e.appspot.com",
  messagingSenderId: "1093086203367",
  appId: "1:1093086203367:web:400fd1eda1d508115fc142",
  measurementId: "G-MZDE1MNSHW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

// initialise firestore db
const db = getFirestore(app)
export {db} 