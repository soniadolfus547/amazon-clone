import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCFms1bEyC6QCfPywy72Yie93it6KPk-BI",
  authDomain: "challenge-d4dc9.firebaseapp.com",
  projectId: "challenge-d4dc9",
  storageBucket: "challenge-d4dc9.appspot.com",
  messagingSenderId: "654807548068",
  appId: "1:654807548068:web:7e78eb810c796e07ab2631"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };