import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDjsIDmYu1mdsLKOB4S5ExkRBWrHHC1Zqg",
    authDomain: "myfirstapi-d1b7e.firebaseapp.com",
    projectId: "myfirstapi-d1sb7e",
    storageBucket: "myfirstapi-d1b7e.appspot.com",
    messagingSenderId: "1068522488078",
    appId: "1:1068522488078:web:b64fd0f796aecbfbff575f",
    measurementId: "G-0NJREQTSTE"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const loginEmail = new firebase.auth.EmailAuthProvider();

export { db, googleAuthProvider, firebase, loginEmail };