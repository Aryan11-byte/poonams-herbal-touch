// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1emLLZWy-u66kbAjXuN9evYn4tLd9veU",
  authDomain: "poonam-herbal-touch.firebaseapp.com",
  projectId: "poonam-herbal-touch",
  storageBucket: "poonam-herbal-touch.firebasestorage.app",
  messagingSenderId: "732786739986",
  appId: "1:732786739986:web:cbe94a1e05704b7f6601cb",
  measurementId: "G-N5PXRM0FBE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore database
const db = firebase.firestore();
