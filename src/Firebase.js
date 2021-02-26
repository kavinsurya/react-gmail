import  firebase  from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyClC4N42e5h7YKVt3G47bQnKml3ULFOW2M",
    authDomain: "react-2816f.firebaseapp.com",
    projectId: "react-2816f",
    storageBucket: "react-2816f.appspot.com",
    messagingSenderId: "334667361007",
    appId: "1:334667361007:web:39da58ba6674bc2739491a",
    measurementId: "G-JXVXWNZ4DQ"
  };

  const fireBaseApp = firebase.initializeApp(firebaseConfig);
  const db = fireBaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {db , auth, provider}