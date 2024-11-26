// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYWjdS1GGVLyhsgZ-Dvhw2jNAbEpj74xU",
  authDomain: "front-vue-app.firebaseapp.com",
  projectId: "front-vue-app",
  storageBucket: "front-vue-app.firebasestorage.app",
  messagingSenderId: "888248855284",
  appId: "1:888248855284:web:a0b501ccd0ca9fe68c4ca1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app