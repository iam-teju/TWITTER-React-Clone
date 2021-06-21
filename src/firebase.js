import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAQg6Z9CJT3EpeHS6wz80B7JwZU73ZnJDQ",
  authDomain: "twitter-clone-5403a.firebaseapp.com",
  projectId: "twitter-clone-5403a",
  storageBucket: "twitter-clone-5403a.appspot.com",
  messagingSenderId: "623192809084",
  appId: "1:623192809084:web:a6c339c0ae21772e9bf3f9",
  measurementId: "G-STWETFX08N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
