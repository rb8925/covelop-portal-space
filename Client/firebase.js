import firebase  from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCXkthWvgndEkWzT1fRVWkbkAY-7PmxkNE",
    authDomain: "portal-space-4c5ce.firebaseapp.com",
    projectId: "portal-space-4c5ce",
    storageBucket: "portal-space-4c5ce.appspot.com",
    messagingSenderId: "371633733220",
    appId: "1:371633733220:web:f1bb38b388186e3962a971",
    measurementId: "G-9ZSCVQNEX5"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export {firestore};