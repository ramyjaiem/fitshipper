import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyB3CLTqukw-MborgWaFmbttn8nNUogqCIE",
    authDomain: "fitshipper-c3b20.firebaseapp.com",
    projectId: "fitshipper-c3b20",
    storageBucket: "fitshipper-c3b20.appspot.com",
    messagingSenderId: "956324781500",
    appId: "1:956324781500:web:2ba94e0721c37cf05e1fb9",
    measurementId: "G-HN20JP111H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore();