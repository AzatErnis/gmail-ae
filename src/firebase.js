import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCWWxs_eeuv3yZg5Pw18-RcmLLFfnbadoQ",
  authDomain: "ae-97cde.firebaseapp.com",
  projectId: "ae-97cde",
  storageBucket: "ae-97cde.appspot.com",
  messagingSenderId: "1002785980410",
  appId: "1:1002785980410:web:931b3a9c8020b1462cae43",
};

const firebaseApp = firebase.initializeApp(firebaseConfig); // ? connecting to the backend
const db = firebaseApp.firestore(); //? connecting to the database
const auth = firebase.auth(); //? connecting to the authentification
const provider = new firebase.auth.GoogleAuthProvider(); //? connecting to the gmail authentifaction

export { db, auth, provider };
