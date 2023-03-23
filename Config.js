import firebase from 'firebase';
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyCfsYj6QbsXmUsJ4o75P3na5LMt_EOnDQ0",
    authDomain: "e-book-app-bec18.firebaseapp.com",
    projectId: "e-book-app-bec18",
    storageBucket: "e-book-app-bec18.appspot.com",
    messagingSenderId: "344153758319",
    appId: "1:344153758319:web:f4a294fb2796016ca90b9a"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();