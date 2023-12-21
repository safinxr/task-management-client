import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBKOx_R3DmM0SUA-zzgaqthu_cJ542E1bE",
    authDomain: "task-management-863d1.firebaseapp.com",
    projectId: "task-management-863d1",
    storageBucket: "task-management-863d1.appspot.com",
    messagingSenderId: "914198598048",
    appId: "1:914198598048:web:29ca5fb6f29489e22b14c5"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);