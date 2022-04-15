// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCoEP51ciTJ_K0T7cPw5z57E2MGAjPovWo',
  authDomain: 'red-onion-001.firebaseapp.com',
  projectId: 'red-onion-001',
  storageBucket: 'red-onion-001.appspot.com',
  messagingSenderId: '1053400946852',
  appId: '1:1053400946852:web:968209c62d91051a4f2e31',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Auth
const auth = getAuth(app);

export default auth;
