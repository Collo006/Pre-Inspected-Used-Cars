"use client"

import Image from "next/image";
import Link from "next/link";
import { Ubuntu } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import { Exo_2 } from "next/font/google"; 
import { Saira } from "next/font/google";
import { useState } from "react";
import { signIn, signInSocial, signUp } from "../../../lib/actions/auth-actions";
import { useRouter } from "next/navigation";

const josefinFont= Josefin_Sans({
  subsets:["latin"],
  weight:"500",

})

const sairaFont= Saira({
  subsets:["latin"],
  weight:"500",

})

const sairaFontTwo= Saira({
  subsets:["latin"],
  weight:"400",

})

const exoFont= Exo_2({
  subsets:["latin"],
  weight:"400",

})

const ubuntuFont= Ubuntu({
  subsets:["latin"],
  weight:"400",

})

export default function SignUp(){
  
  const router = useRouter();
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(""); 

  const handleSocialAuth = async (provider: "github" ) => {
    setIsLoading(true);
    setError("");

    try {
      await signInSocial(provider);
      // The redirect happens in the server action
    } catch (err) {

      setError(`Error authenticating with ${provider}: ${err instanceof Error ? err.message : "Unknown error"}`);
      setIsLoading(false);
    }

  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      if (isSignIn) {
        await signIn(email, password);
        // The redirect happens in the server action
      } else {
        await signUp(email, password, name);
        // The redirect happens in the server action
      }
      router.push("/dashboard")
    } catch (err) {
      setError(`Authentication error: ${err instanceof Error ? err.message : "Unknown error"}`);
      setIsLoading(false);
    }
  };

    return(
        <div className=" grid grid-cols-2 pl-30">
         <div className=" w-[700px] h-[600px] ml-24 pt-10 ">
           <h1 className={`font-semi-bold text-6xl pb-10 ${ubuntuFont.className}`}>
            Signup to get the latest <br></br>update of available Cars
           </h1>
           <p className={`text-2xl ${exoFont.className}`}>
            Create a Free PINUC Account to get the best car deals in Town.<br></br></p>
   {/**Error Display */}
   {error && (
    <div className="bg-red-50 border-red-200 rounded-lg p-4">
        <div className="flex">
          <div className="shrink-0">
            <p className="text-sm text-red-800">{error}</p>
          </div>
        </div>
    </div>
   )}

  {/** Email/Password Form */}

           <form onSubmit={handleEmailAuth}>
              {!isSignIn && (
            <div className=" pt-5 ">
                <label htmlFor="name" className={`pl-2 text-lg ${sairaFont.className}`}> NAME</label>
                <input id="name" name="name" type="text" className={`w-[650px] h-[50px] border border-gray-600 pl-2 text-lg rounded-xl ${sairaFontTwo.className}`} autoComplete="name" required={!isSignIn} value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter your Full name" />
            </div>
             )}
            <div className=" pt-5 ">
                <label htmlFor="email" className={`pl-2 text-lg ${sairaFont.className}`}> EMAIL</label>
                <input id="email" name="email" type="email" autoComplete="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" className={`w-[650px] h-[50px] border border-gray-600 pl-2 text-lg rounded-xl ${sairaFontTwo.className}`} />
            </div>

            <div className=" pt-5 ">
                <label htmlFor="password" className={`pl-2 text-lg ${sairaFont.className}`}> PASSWORD</label>
                <input id="password" name="password" type="password" autoComplete={isSignIn ? "current-password" : "new-password" } value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Enter your Password"className={`w-[650px] h-[50px] border border-gray-600 pl-2 text-lg rounded-xl ${sairaFontTwo.className}`} />
            </div>

            <button type="submit" disabled={isLoading} className={`cursor-pointer mt-4 w-[650px] flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors ${sairaFont.className}`}>
               {isLoading ? (
                <div className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {isSignIn ? "Signing in..." : "Creating account..."}
                </div>
              ) : isSignIn ? (
                "Sign In"
              ) : (
                "Create Account"
              )}
            </button>
           </form>
           <p className={`pt-3 text-center text-lg ${exoFont.className}`}>Or Continue With </p>

 {/** Social Authentication */}
           <div>
      
            <button className={`mt-2 ml-24 w-[450px] h-[50px] border border-gray-400 text-center text-lg rounded-xl cursor-pointer ${sairaFont.className}`} onClick={()=>handleSocialAuth("github")} disabled={isLoading}> Github</button>
            </div>

            {/*Toggle between Sign In and Sign Up*/}
            <div className="text-center">
              <button type="button" onClick={()=>{
                setIsSignIn(!isSignIn);
                setError(""); //clear any previous errors
                setName(""); //clear name when switching
              }} className={`text-indigo-600 hover:text-indigo-500 text-lg font-medium transition-colors ${josefinFont.className}`}>
                 {isSignIn ? "Don't have an account? Sign Up" : "Already have an account? Sign in"}
              </button>
            </div>


         </div>
         <div className="w-[410px] h-[810px] ml-96 relative ">
            <Image src="/images/audi A8.jpg" alt="audi"  fill   className="object-cover" />
         </div>
        </div>
    )
}