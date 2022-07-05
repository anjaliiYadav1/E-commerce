
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCZ-tN68cZlj7Nh33dDDEYcKDKgt079Nsk",
    authDomain: "clone-9e22d.firebaseapp.com",
    projectId: "clone-9e22d",
    storageBucket: "clone-9e22d.appspot.com",
    messagingSenderId: "1058990075223",
    appId: "1:1058990075223:web:519cce345f4ca6df9de212",
    measurementId: "G-REPPE85K1Z"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  //initialized the app

  const database = firebaseApp.firestore();  //database

  const auth = firebase.auth();

  export { database, auth };
