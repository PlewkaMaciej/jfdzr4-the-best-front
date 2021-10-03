import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './normalize.css';
import { firebaseConfig } from './firebaseConfiguration';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


// Initialize Firebase

  

export const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()
//firebase auth
export const auth = getAuth();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

