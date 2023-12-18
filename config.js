import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCPoJTmBfQWsSmpianI3SBaEW-S-Xwixxc",
  authDomain: "projeto78-55102.firebaseapp.com",
  projectId: "projeto78-55102",
  storageBucket: "projeto78-55102.appspot.com",
  messagingSenderId: "75358300282",
  appId: "1:75358300282:web:d0996638a488fe4d29f3c3"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
