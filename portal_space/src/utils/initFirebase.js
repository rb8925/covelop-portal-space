import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';

const app = firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export const app;
export const firestore;