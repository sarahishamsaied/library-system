// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrtFLGGcWxPGSZ-BpSyUbZBcZdAwRpQSY",
  authDomain: "auth-e0852.firebaseapp.com",
  projectId: "auth-e0852",
  storageBucket: "auth-e0852.appspot.com",
  messagingSenderId: "997114713018",
  appId: "1:997114713018:web:16da298f70081691e4c383",
  measurementId: "G-W952S05D06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app
// const analytics = getAnalytics(app);