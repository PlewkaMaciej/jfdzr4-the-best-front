import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/normalize.css";
import App from "./App";
import { firebaseConfig } from "./firebase.config";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// initialize firebase
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
  document.getElementById("root")
);
