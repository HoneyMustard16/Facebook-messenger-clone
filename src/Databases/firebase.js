import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCFC_Sfd1HYUOh17-MJUh0F2a_hHW3uTdw",
  authDomain: "facebookmessengerclone-46648.firebaseapp.com",
  projectId: "facebookmessengerclone-46648",
  storageBucket: "facebookmessengerclone-46648.appspot.com",
  messagingSenderId: "294436508593",
  appId: "1:294436508593:web:d2fa0b4871e340083f6390",
  measurementId: "G-S50M3421V0"
});

const db = firebaseApp.firestore();

export default db;
