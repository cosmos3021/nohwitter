import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDJBuM32whIQkt07iZEs_AGeGKLyNsVOgA",
    authDomain: "nohwitter.firebaseapp.com",
    projectId: "nohwitter",
    storageBucket: "nohwitter.appspot.com",
    messagingSenderId: "462493745787",
    appId: "1:462493745787:web:919a549af19dd5096558de"
  };

  export default firebase.initializeApp(firebaseConfig);