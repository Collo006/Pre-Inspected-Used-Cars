import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL, // or whatever your auth server URL is
});
export const { useSession, getSession, signIn, signOut } = authClient;
