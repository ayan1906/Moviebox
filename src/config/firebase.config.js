// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAWcee5cjUvMFbBHj9xxrUE8vGvutY26GQ",
  authDomain: "flowflix-929f3.firebaseapp.com",
  projectId: "flowflix-929f3",
  storageBucket: "flowflix-929f3.firebasestorage.app",
  messagingSenderId: "902618937156",
  appId: "1:902618937156:web:61d43eba578daecbf7c911",
  measurementId: "G-6LPSM0XVYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();