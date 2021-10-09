import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
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
    <Router> 
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

