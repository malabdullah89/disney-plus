import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBKVD_r7Zbjd6SwUzYrgiQdr8523jE5PQo",
  authDomain: "disneyplus-clone-eca93.firebaseapp.com",
  projectId: "disneyplus-clone-eca93",
  storageBucket: "disneyplus-clone-eca93.appspot.com",
  messagingSenderId: "13693023652",
  appId: "1:13693023652:web:5cc9cf9072d5ef6f593d31",
  measurementId: "G-DZBMLTMNJN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
