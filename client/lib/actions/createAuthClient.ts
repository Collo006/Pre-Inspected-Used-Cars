//used to create the useSession State since better auth doesn't have it in it's library

import { createAuthClient } from "better-auth/react";
import { env } from "process";

export const authClient = createAuthClient({
  baseURL: env.NEXT_PUBLIC_BETTER_AUTH_URL, 
});
export const { useSession, getSession, signIn, signOut } = authClient;
