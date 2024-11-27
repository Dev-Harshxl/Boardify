import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

const firebaseConfig = {
    apiKey: "AIzaSyDpPTG5ZeXxa2zvRKdLcUkU67Zv_1M-JnA",
    authDomain: "boardify-3596e.firebaseapp.com",
    projectId: "boardify-3596e",
    storageBucket: "boardify-3596e.firebasestorage.app",
    messagingSenderId: "196670118745",
    appId: "1:196670118745:web:aa4606a7e088d1a5ee8a48"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const fbFunctions = getFunctions(app);

if (process.env.NODE_ENV === "development") {
  connectAuthEmulator(auth, "http://localhost:9098");
  connectFirestoreEmulator(db, "localhost", 8082);
  connectFunctionsEmulator(fbFunctions, "localhost", 5002);
}





