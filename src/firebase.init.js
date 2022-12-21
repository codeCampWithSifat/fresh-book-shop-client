import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCLZiJSImXg2zRodnRlZF2CFIgqpfdiLK4",
  authDomain: "fresh-book-shop.firebaseapp.com",
  projectId: "fresh-book-shop",
  storageBucket: "fresh-book-shop.appspot.com",
  messagingSenderId: "611141129248",
  appId: "1:611141129248:web:d30f364d7d5dc10336d845"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;