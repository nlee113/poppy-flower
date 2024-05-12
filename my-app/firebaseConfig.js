import { initializeApp } from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";


// firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAX4gGwIwpoAUZeSnKkrqk73SOGX0d0jWc",
  authDomain: "poppy-flower-15b14.firebaseapp.com",
  projectId: "poppy-flower-15b14",
  storageBucket: "poppy-flower-15b14.appspot.com",
  messagingSenderId: "127362457777",
  appId: "1:127362457777:web:c99d436602ad9421768290",
  measurementId: "G-9EG00864GQ"
};

// initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
