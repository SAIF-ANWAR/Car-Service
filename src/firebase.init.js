import { getAuth } from 'firebase/auth'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2JYmvjMkwowQqDgJ0JAkcaGPs2u3NKIM",
    authDomain: "genius-car-services-c5c2b.firebaseapp.com",
    projectId: "genius-car-services-c5c2b",
    storageBucket: "genius-car-services-c5c2b.appspot.com",
    messagingSenderId: "442207639447",
    appId: "1:442207639447:web:bf25e52b1483a156c856d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth