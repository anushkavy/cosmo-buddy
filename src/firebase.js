import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: { apiKey },
  authDomain: "cosmo-buddy.firebaseapp.com",
  projectId: "cosmo-buddy",
  storageBucket: "cosmo-buddy.appspot.com",
  messagingSenderId: "769151141576",
  appId: "1:769151141576:web:3775874d4c190720e987fd",
  measurementId: "G-MV7NWCLV59",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const eventsCollection = collection(db, "events");

export { eventsCollection };
