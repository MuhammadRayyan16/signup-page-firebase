import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCmtaipUvjUTWJCvc4snTIRlRucjqa_3Ps",
    authDomain: "sign-up-login-97016.firebaseapp.com",
    projectId: "sign-up-login-97016",
    storageBucket: "sign-up-login-97016.appspot.com",
    messagingSenderId: "586567489516",
    appId: "1:586567489516:web:eef251a65292c2d78552c9"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;

export const db = getFirestore();

