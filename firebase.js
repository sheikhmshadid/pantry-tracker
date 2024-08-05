// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import  {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGroHXMLTgTZnDB8MuynvfJkB7TGHC52M",
  authDomain: "pantry-349b0.firebaseapp.com",
  projectId: "pantry-349b0",
  storageBucket: "pantry-349b0.appspot.com",
  messagingSenderId: "535037666387",
  appId: "1:535037666387:web:be0fde2364976d1e9f92a6",
  measurementId: "G-V7LF612XXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};