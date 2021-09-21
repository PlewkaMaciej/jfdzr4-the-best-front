import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './normalize.css';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebaseConfiguration';
import App from './App';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

