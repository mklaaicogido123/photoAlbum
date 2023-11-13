// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBh2ITS62mI7s8D53rqFdxIltRd-0R64Mc",
  authDomain: "photo-52f2d.firebaseapp.com",
  projectId: "photo-52f2d",
  storageBucket: "photo-52f2d.appspot.com",
  messagingSenderId: "1035374100720",
  appId: "1:1035374100720:web:23d88463a945f06b590235",
  measurementId: "G-PM06R19BLT",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app);
