// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

// const firebaseConfig = {
//     apiKey: "AIzaSyB-n4q7JJ1gkV7FjwK59Nyy5OyH-gjPFSQ",
//     authDomain: "princelab-f13cd.firebaseapp.com",
//     databaseURL: "https://princelab-f13cd-default-rtdb.firebaseio.com",
//     projectId: "princelab-f13cd",
//     storageBucket: "princelab-f13cd.appspot.com",
//     messagingSenderId: "539468354501",
//     appId: "1:539468354501:web:ed4643c0d2dc19ec3631ac",
//     measurementId: "G-FTKN9B48MW"
// };


const firebaseConfig = {
    apiKey: "AIzaSyA6h7nxIh1M4xEmRPaZwvpzkY9VKalhah4",
    authDomain: "paradoxauth-56b93.firebaseapp.com",
    projectId: "paradoxauth-56b93",
    databaseURL: "https://paradoxauth-56b93-default-rtdb.asia-southeast1.firebasedatabase.app/",
    storageBucket: "paradoxauth-56b93.appspot.com",
    messagingSenderId: "212652109548",
    appId: "1:212652109548:web:4fa3d67bccee498a00bfc9",
    measurementId: "G-P4P2RJNPS7"
};



// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// // Use these for db & auth
const db = app.database();
const auth = app.auth();

export { app, auth, db };