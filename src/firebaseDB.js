import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyBaFJovrxpB34C2Rpj4Kt9fpDsZKpyO1eM",
    authDomain: "princelab-b263f.firebaseapp.com",
    databaseURL: "https://princelab-b263f-default-rtdb.firebaseio.com",
    projectId: "princelab-b263f",
    storageBucket: "princelab-b263f.appspot.com",
    messagingSenderId: "395718624144",
    appId: "1:395718624144:web:06fc2dc31ad9cb203fa915"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = app.database();
const auth = app.auth();

export { app, auth, db };