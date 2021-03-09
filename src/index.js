import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CartItem from "./CartItem";
import  firebase from 'firebase/app'
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAkLEMXfxsGRxowmQO7Sj6_6PJXP-FNrS4",
  authDomain: "cart-bdccc.firebaseapp.com",
  projectId: "cart-bdccc",
  storageBucket: "cart-bdccc.appspot.com",
  messagingSenderId: "413973637344",
  appId: "1:413973637344:web:cfa3c4b0d2c7eadd588885"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);





ReactDOM.render(
    <App />
  ,
  document.getElementById('root')
);

