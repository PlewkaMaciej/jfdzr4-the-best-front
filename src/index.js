import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './normalize.css';
import { firebaseConfig } from './firebaseConfiguration';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import App from './App';

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//firebase auth
export const auth = getAuth();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

