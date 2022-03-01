// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/database';
//
// const firebaseConfig = {
//     apiKey: "AIzaSyBaFJovrxpB34C2Rpj4Kt9fpDsZKpyO1eM",
//     authDomain: "princelab-b263f.firebaseapp.com",
//     databaseURL: "https://princelab-b263f-default-rtdb.firebaseio.com",
//     projectId: "princelab-b263f",
//     storageBucket: "princelab-b263f.appspot.com",
//     messagingSenderId: "395718624144",
//     appId: "1:395718624144:web:06fc2dc31ad9cb203fa915"
// };
//
// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
//
// // Use these for db & auth
// const db = app.database();
// const auth = app.auth();
//
// export { app, auth, db };

// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyB-n4q7JJ1gkV7FjwK59Nyy5OyH-gjPFSQ",
    authDomain: "princelab-f13cd.firebaseapp.com",
    databaseURL: process.env.DB_URL,
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