import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/database"
import "firebase/compat/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyD5iY1kPLFCebLZetzkEZ690JTx5ZAN24Q",
    authDomain: "netflix-clone2-9d805.firebaseapp.com",
    projectId: "netflix-clone2-9d805",
    storageBucket: "netflix-clone2-9d805.appspot.com",
    messagingSenderId: "439317396411",
    appId: "1:439317396411:web:941f5e512c04070634629e",
    measurementId: "G-GFRW63C6V5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db = firebaseApp.firestore();
  const auth = firebase.auth();

  

  export {auth};
  export default firebase;