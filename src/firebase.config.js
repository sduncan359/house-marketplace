// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuSR1WmMiIzdKgkBI27cVX2-OYABf6Rto",
  authDomain: "house-marketplace-app-bf801.firebaseapp.com",
  projectId: "house-marketplace-app-bf801",
  storageBucket: "house-marketplace-app-bf801.appspot.com",
  messagingSenderId: "1063186633177",
  appId: "1:1063186633177:web:29f89e7bb0bda6f98749c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()