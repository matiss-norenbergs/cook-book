import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDq8H7BpznkmQxYUnG7caAbvECjnq4zr48",
  authDomain: "cook-book-7f502.firebaseapp.com",
  projectId: "cook-book-7f502",
  storageBucket: "cook-book-7f502.appspot.com",
  messagingSenderId: "219438455806",
  appId: "1:219438455806:web:0099d30dd2e53f1f8ffeaf"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);