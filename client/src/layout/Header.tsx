"use client";
import Link from "next/link";
import { Exo_2 } from "next/font/google";
import { useRouter } from "next/navigation";
import { signOut } from "../../lib/actions/auth-actions";
import { useSession } from "../../lib/actions/createAuthClient";

const exoFont= Exo_2({
  subsets:["latin"],
  weight:"500",

})


export default function Header() {


  const { data: session, isPending } = useSession();  // provides the current session and stat flags(isPending)
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.refresh(); // refresh UI
    router.push("/SignUp");
  };

  return (
    <header className=" text-skyBlue h-14 ">
      <ul className="flex justify-evenly pt-4 ">
        <li className={`${exoFont.className} text-xl cursor-pointer`}>Logo</li>
        <li className={`${exoFont.className} text-xl cursor-pointer`}>Buy</li>
        <li className={`${exoFont.className} text-xl cursor-pointer`}>Sell</li>
        <li className={`${exoFont.className} text-xl cursor-pointer`}>About</li>

        {/* While loading, avoid flickering */}
        {isPending ? null : (
          <>
            {!session && (
              <li  className={`cursor-pointer rounded-lg w-[100px] h-[30px] text-center ${exoFont.className} text-xl hover:text-lightGray hover:border-darkSky hover:bg-darkSky transition-colors duration-300`}>
               <Link href="/SignUp" >Sign Up</Link>
              </li>
            )}

            {session && (
              <li onClick={handleSignOut}  className={`cursor-pointer rounded-lg w-[100px] h-[30px] text-center ${exoFont.className} text-xl hover:text-lightGray hover:border-darkSky hover:bg-darkSky transition-colors duration-300`}>
                Sign Out
              </li>
            )}
          </>
        )}
      </ul>
    </header>
  );
}
