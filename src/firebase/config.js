import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
    // apiKey: "AIzaSyAV6HXnYc_k2X_zHERtSJbh3zPLeCU-JAw",
    apiKey: "AIzaSyAV6HXnYc_k2X_zHERtSJbh3zPLeCU-JAw",
    authDomain: "fresh-31a30.firebaseapp.com",
    projectId: "fresh-31a30",
    storageBucket: "fresh-31a30.appspot.com",
    messagingSenderId: "444316152180",
    appId: "1:444316152180:web:cc55d415565ab7c49bfc21",
    measurementId: "G-TL7F5KPXG2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;