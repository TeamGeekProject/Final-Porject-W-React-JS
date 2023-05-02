import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQuDTe_AGwjs6o9IvMrw-ZIDiadpmJa6Q",
  authDomain: "team-geek-project.firebaseapp.com",
  projectId: "team-geek-project",
  storageBucket: "team-geek-project.appspot.com",
  messagingSenderId: "929170766571",
  appId: "1:929170766571:web:8b7d8b8e9c270c32a65cae",
  measurementId: "G-KQ8XC2DRTX",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const db = getFirestore(app);
