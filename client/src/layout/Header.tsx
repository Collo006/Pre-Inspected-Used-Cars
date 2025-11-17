"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "../../lib/actions/auth-actions";
import { useSession } from "../../lib/actions/createAuthClient";

export default function Header() {
  const { data: session, isPending } = useSession();  // ← BetterAuth hook
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.refresh(); // refresh UI
    router.push("/SignUp");
  };

  return (
    <header className="bg-gray-600 text-amber-50 h-14 ">
      <ul className="flex justify-evenly pt-4 ">
        <li>Logo</li>
        <li>Buy</li>
        <li>Sell</li>
        <li>About</li>

        {/* While loading, avoid flickering */}
        {isPending ? null : (
          <>
            {!session && (
              <li>
                <Link href="/SignUp">Sign Up</Link>
              </li>
            )}

            {session && (
              <li onClick={handleSignOut} className="cursor-pointer">
                Sign Out
              </li>
            )}
          </>
        )}
      </ul>
    </header>
  );
}
