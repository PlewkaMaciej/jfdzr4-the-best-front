import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './normalize.css';
import { firebaseConfig } from './firebaseConfiguration';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import App from './App';

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//firebase auth
export const auth = getAuth();
//firebase firestore
export const db = getFirestore();
//firebase storage
export const storage = getStorage();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

