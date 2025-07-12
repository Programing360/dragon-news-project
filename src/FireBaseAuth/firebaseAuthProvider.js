// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzjuTO15a5ON-cS-iWBG3F1qcP9u7pltM",
    authDomain: "dragon-news-auth-fed3d.firebaseapp.com",
    projectId: "dragon-news-auth-fed3d",
    storageBucket: "dragon-news-auth-fed3d.firebasestorage.app",
    messagingSenderId: "216991421855",
    appId: "1:216991421855:web:6d4a508ca30bdf82f119aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {auth}