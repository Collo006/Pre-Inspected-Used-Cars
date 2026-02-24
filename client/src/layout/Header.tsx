"use client";
import Link from "next/link";
import { Exo_2 } from "next/font/google";
import { useRouter } from "next/navigation";
import { signOut } from "../../lib/actions/auth-actions";
import { useSession } from "../../lib/actions/createAuthClient";
import { Josefin_Sans } from "next/font/google";

const exoFont= Exo_2({
  subsets:["latin"],
  weight:"500",
   display:"swap"

})

const josefinFont= Josefin_Sans({
  subsets: ['latin'],
  weight:"400",
  display:"swap"
})

export default function Header() {


  const { data: session, isPending } = useSession();  // provides the current session and stat flags(isPending)
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.refresh(); // refresh UI
    router.push("/");
  };

  return (
    <header className="bg-transparent text-skyBlue sm:h-14 h-10 mt-1 rounded-4xl sm:w-auto w-auto ">
      <ul className="flex justify-end sm:pt-4 pt-2 ">
        <li className={`${josefinFont.className}  sm:text-xl text-sm cursor-pointer hover:text-lightGray hover:border-darkSky hover:bg-darkSky transition-colors duration-300 w-[60px] h-[30px] rounded-4xl pl-1`}><Link   href="/dashboard">Logo</Link></li>
        <li className={`${josefinFont.className}  sm:text-xl text-sm cursor-pointer hover:text-lightGray hover:border-darkSky hover:bg-darkSky transition-colors duration-300 w-[50px] h-[30px] rounded-4xl pl-2`}><Link href="/Buy">Buy</Link></li>
        <li className={`${josefinFont.className}  sm:text-xl text-sm cursor-pointer hover:text-lightGray hover:border-darkSky hover:bg-darkSky transition-colors duration-300 w-[50px] h-[30px] rounded-4xl pl-2`}><Link href="/SellCarForm">Sell</Link></li>
        <li className={`${josefinFont.className} sm:text-xl text-sm cursor-pointer hover:text-lightGray hover:border-darkSky hover:bg-darkSky transition-colors duration-300 w-[70px] h-[30px] rounded-4xl pl-2`}><Link   href="/About">About</Link></li>

        {/* While loading, avoid flickering */}
        {isPending ? null : (
          <>
            {!session && (
              <li  className={`cursor-pointer rounded-4xl w-[100px] h-[30px] text-center ${exoFont.className} sm:text-xl text-sm hover:text-lightGray hover:border-darkSky hover:bg-darkSky transition-colors duration-300`}>
               <Link href="/SignUp" >Sign Up</Link>
              </li>
              

            )}

            {!session &&(
                    <li  className={`sm:pt-1 sm:-mt-1 mr-2 cursor-pointer rounded-4xl sm:w-[150px] w-[120px] sm:h-10 h-5 text-center ${exoFont.className} sm:text-xl text-sm text-lightGray bg-transparent `}>
               <Link href="/dashboard">Dashboard</Link>
              </li>
            )}

            {session && (
              <li onClick={handleSignOut} className={`sm:pt-1 sm:-mt-1 mr-2 cursor-pointer rounded-4xl sm:w-[150px] w-[120px] sm:h-10 h-5 text-center ${exoFont.className} sm:text-xl text-sm text-lightGray bg-transparent `}>
                Sign Out
              </li>
            )}
          </>
        )}
      </ul>
    </header>
  );
}
