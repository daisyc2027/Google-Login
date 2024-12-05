// update.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyAOSnHM-VuBKqC79WEQ4boiDBwSklKrIjc",
    authDomain: "login-6dcf5.firebaseapp.com",
    projectId: "login-6dcf5",
    storageBucket: "login-6dcf5.firebasestorage.app",
    messagingSenderId: "613187736323",
    appId: "1:613187736323:web:42545942c7bc9efcf90f36",
    measurementId: "G-L5Q1TBKBYL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function updateUserProfile(user) {
    const userName = user.displayName;
    const userEmail = user.email;
    const userProfilePicture = user.photoURL;
    
    document.getElementById("userName").textContent = userName;
    document.getElementById("userEmail").textContent = userEmail;
    document.getElementById("profilePicture").src = userProfilePicture;
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        updateUserProfile(user);
    } else {
        console.log("No user signed in");
        window.location.href = "/login.html";
    }
});