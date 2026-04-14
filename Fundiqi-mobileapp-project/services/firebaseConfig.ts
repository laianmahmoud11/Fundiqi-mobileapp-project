import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3AUCx-EFiu1mZIyHGwgg2knqJL-Sxqb8",
  authDomain: "fundiki-app.firebaseapp.com",
  projectId: "fundiki-app",
  storageBucket: "fundiki-app.firebasestorage.app",
  messagingSenderId: "955412175085",
  appId: "1:955412175085:web:c073a6ef8f407b6368d4e4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
