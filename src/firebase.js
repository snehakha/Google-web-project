import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBrGxRvia-Z86kM5X14deUPFgb7D-SAaxY",
  authDomain: "blogs-147fb.firebaseapp.com",
  databaseURL: "https://blogs-147fb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "blogs-147fb",
  storageBucket: "blogs-147fb.appspot.com",
  messagingSenderId: "585425123398",
  appId: "1:585425123398:web:046748c31c5d915bc7b247",
  measurementId: "G-LNJBLYQYLV"
};


const app = initializeApp(firebaseConfig);
export const image= getStorage(app);