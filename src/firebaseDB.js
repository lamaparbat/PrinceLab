import firebase from 'firebase';

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

export default app;