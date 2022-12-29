import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA3XvmQuyf9s969iFmNnUSKNOXlcog0-HI",
      authDomain: "midterm-b0124.firebaseapp.com",
      databaseURL: "https://midterm-b0124-default-rtdb.firebaseio.com",
      projectId: "midterm-b0124",
      storageBucket: "midterm-b0124.appspot.com",
      messagingSenderId: "420390939291",
      appId: "1:420390939291:web:619b8ebb4f30101d74743e"
  };
  firebase.initializeApp(firebaseConfig);
  
  export const auth = firebase.auth()
  export const db = firebase.firestore()
  
  
 