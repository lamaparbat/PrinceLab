// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey:`${process.env.REACT_APP_DB_API_KEY}`,
    authDomain: "princelab-f13cd.firebaseapp.com",
    databaseURL: process.env.REACT_APP_DB_URL,
    projectId: "princelab-f13cd",
    storageBucket: "princelab-f13cd.appspot.com",
    messagingSenderId: "539468354501",
    appId: "1:539468354501:web:ed4643c0d2dc19ec3631ac",
    measurementId: "G-FTKN9B48MW"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// // Use these for db & auth
const db = app.database();
const auth = app.auth();

export { app, auth, db };