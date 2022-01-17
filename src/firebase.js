import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAFKrAeUeZOYyGLO5KEAVrc9Zh-k4VJPY8",
    authDomain: "ecommerce-lovrich.firebaseapp.com",
    projectId: "ecommerce-lovrich",
    storageBucket: "ecommerce-lovrich.appspot.com",
    messagingSenderId: "238644020422",
    appId: "1:238644020422:web:db732483f795bf970b43c7"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)