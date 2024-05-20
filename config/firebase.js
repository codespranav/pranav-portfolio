import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcM7dQg7UMWRt8d_15hOXCRUQqPrTfVOE",
  authDomain: "pranav-singh--portfolio.firebaseapp.com",
  projectId: "pranav-singh--portfolio",
  storageBucket: "pranav-singh--portfolio.appspot.com",
  messagingSenderId: "481260641102",
  appId: "1:481260641102:web:4e0266800bed108bf59c1f",
  measurementId: "G-M425MW0LNH"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the Firebase Realtime Database service
const database = getDatabase(firebaseApp);

export default database;    


