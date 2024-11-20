// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBX2rfRx10nO9rvPnV80g2F3h1Kq4bUNTU",
  authDomain: "clothing-donation-d23d4.firebaseapp.com",
  projectId: "clothing-donation-d23d4",
  storageBucket: "clothing-donation-d23d4.firebasestorage.app",
  messagingSenderId: "176364002313",
  appId: "1:176364002313:web:a13b09a82e2c49f93b2cd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;