import { CURRENT_USER_ID, IS_USER_LOGGED_IN } from '../constants/config';

export type AuthUser = {
  id: string;
};

export async function getCurrentUser(): Promise<AuthUser | null> {
  if (!IS_USER_LOGGED_IN) {
    return null;
  }

  return {
    id: CURRENT_USER_ID
  };
}