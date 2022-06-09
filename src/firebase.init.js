// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpcyTZR3H7QTqrClR7F1VsRryR9p2MJlE",
    authDomain: "ahatasam-portfolio.firebaseapp.com",
    projectId: "ahatasam-portfolio",
    storageBucket: "ahatasam-portfolio.appspot.com",
    messagingSenderId: "172711632398",
    appId: "1:172711632398:web:ce34e73348fa95623e665f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;