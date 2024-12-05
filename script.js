console.log("Script is loading");

// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOSnHM-VuBKqC79WEQ4boiDBwSklKrIjc",
  authDomain: "login-6dcf5.firebaseapp.com",
  projectId: "login-6dcf5",
  storageBucket: "login-6dcf5.firebasestorage.app",
  messagingSenderId: "613187736323",
  appId: "1:613187736323:web:42545942c7bc9efcf90f36",
  measurementId: "G-L5Q1TBKBYL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';


const provider = new GoogleAuthProvider();

const analytics = getAnalytics(app);

const googleLogin = document.getElementById("google-sign-in");
googleLogin.addEventListener("click", function(){
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user; 
      console.log(user);
      window.location.href = "../admincontrols.html";

    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  
})
