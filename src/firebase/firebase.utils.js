import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDHZLKaC3RfoMg33psRkXtG7bkm6YY6Xxg",
    authDomain: "crwn-db-8f312.firebaseapp.com",
    projectId: "crwn-db-8f312",
    storageBucket: "crwn-db-8f312.appspot.com",
    messagingSenderId: "558993475618",
    appId: "1:558993475618:web:d39ac662d965b16690e27b",
    measurementId: "G-G9QKTHWMXG"
  };

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;