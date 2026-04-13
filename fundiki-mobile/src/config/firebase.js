import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD3AUCx-EFiu1m2IyHGwgg2knqJL-Sxqb8',
  authDomain: 'fundiki-app.firebaseapp.com',
  projectId: 'fundiki-app',
  storageBucket: 'fundiki-app.firebasestorage.app',
  messagingSenderId: '955412175085',
  appId: '1:955412175085:web:c073a6ef8f407b6368d4e4',
};

function hasValidFirebaseConfig() {
  return (
    firebaseConfig.apiKey !== 'YOUR_API_KEY' &&
    firebaseConfig.projectId !== 'YOUR_PROJECT_ID' &&
    firebaseConfig.appId !== 'YOUR_APP_ID'
  );
}

const firebaseApp = hasValidFirebaseConfig()
  ? getApps().length > 0
    ? getApps()[0]
    : initializeApp(firebaseConfig)
  : null;

const db = firebaseApp ? getFirestore(firebaseApp) : null;

export { db, hasValidFirebaseConfig };
export const hotelsCollectionName = 'hotels';
