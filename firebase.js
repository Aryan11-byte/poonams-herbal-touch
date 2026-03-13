<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>