// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKW3GYHdN_EwZKusW_QJyiNhUvEdLErr4",
  authDomain: "instagram-clone-28a24.firebaseapp.com",
  projectId: "instagram-clone-28a24",
  storageBucket: "instagram-clone-28a24.appspot.com",
  messagingSenderId: "688362136753",
  appId: "1:688362136753:web:541c7e8173dad36ddc2e90",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
