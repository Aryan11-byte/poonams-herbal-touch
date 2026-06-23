// ==============================
// Nandé Firebase Configuration
// ==============================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
getAuth
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
getStorage
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

import {
getAnalytics
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

// ==============================
// Firebase Config
// ==============================

const firebaseConfig = {

apiKey: "AIzaSyC1emLLZWy-u66kbAjXuN9evYn4tLd9veU",

authDomain: "poonam-herbal-touch.firebaseapp.com",

projectId: "poonam-herbal-touch",

storageBucket: "poonam-herbal-touch.firebasestorage.app",

messagingSenderId: "732786739986",

appId: "1:732786739986:web:cbe94a1e05704b7f6601cb",

measurementId: "G-N5PXRM0FBE"

};

// ==============================
// Initialize Firebase
// ==============================

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const db = getFirestore(app);

const auth = getAuth(app);

const storage = getStorage(app);

// ==============================
// Export
// ==============================

export {

app,

analytics,

db,

auth,

storage

};
