import { AppUser } from '../types/user';
import { getCurrentUserFromFirebase } from './firebase/firebaseAuthSource';

export async function getCurrentUser(): Promise<AppUser | null> {
  return getCurrentUserFromFirebase();
}