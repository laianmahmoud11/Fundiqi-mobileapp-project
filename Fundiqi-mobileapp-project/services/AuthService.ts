import StorageService from "@/services/StorageService";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3AUCx-EFiu1mZIyHGwgg2knqJL-Sxqb8",
  authDomain: "fundiki-app.firebaseapp.com",
  projectId: "fundiki-app",
  storageBucket: "fundiki-app.firebasestorage.app",
  messagingSenderId: "955412175085",
  appId: "1:955412175085:web:c073a6ef8f407b6368d4e4",
};

let authInstance: any = null;
const initAuth = () => {
  if (!authInstance) {
    const app = initializeApp(firebaseConfig);
    authInstance = getAuth(app);
  }
  return authInstance;
};

type AuthPayload = {
  email: string;
  password: string;
};

export const loginOrSignup = async ({ email, password }: AuthPayload) => {
  const auth = initAuth();

  const normalizedEmail = email.trim().toLowerCase();

  try {
    const result = await signInWithEmailAndPassword(
      auth,
      normalizedEmail,
      password,
    );

    await StorageService.saveUser(result.user);
    await StorageService.saveToken(await result.user.getIdToken());

    return result.user;
  } catch (signInError: any) {
    if (
      signInError?.code === "auth/user-not-found" ||
      signInError?.code === "auth/invalid-credential"
    ) {
      const result = await createUserWithEmailAndPassword(
        auth,
        normalizedEmail,
        password,
      );

      await StorageService.saveUser(result.user);
      await StorageService.saveToken(await result.user.getIdToken());

      return result.user;
    }
    throw signInError;
  }
};
