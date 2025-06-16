<!-- firebase.js -->
<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
  import { getStorage } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBT-zmh4glqmWhmel2T-o6ew-mkhCE7Io8",
    authDomain: "chatting-85dba.firebaseapp.com",
    projectId: "chatting-85dba",
    storageBucket: "chatting-85dba.appspot.com",
    messagingSenderId: "817026099810",
    appId: "1:817026099810:web:b6a19229c7365da71dff3b"
  };

  const app = initializeApp(firebaseConfig);
  window.auth = getAuth(app);
  window.db = getFirestore(app);
  window.storage = getStorage(app);
</script>
