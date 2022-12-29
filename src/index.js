import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import firebase from "firebase";
// import "firebase/firestore";
import { BrowserRouter, Route } from 'react-router-dom';
import store from './Status';


// const firebaseConfig = {
//   apiKey: "AIzaSyA3XvmQuyf9s969iFmNnUSKNOXlcog0-HI",
//     authDomain: "midterm-b0124.firebaseapp.com",
//     databaseURL: "https://midterm-b0124-default-rtdb.firebaseio.com",
//     projectId: "midterm-b0124",
//     storageBucket: "midterm-b0124.appspot.com",
//     messagingSenderId: "420390939291",
//     appId: "1:420390939291:web:619b8ebb4f30101d74743e"
// };

// const auth = firebase.auth()
// const db = firebase.firestore()




// firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App grades={store}/>
    </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// export default {db: db, auth:auth}
