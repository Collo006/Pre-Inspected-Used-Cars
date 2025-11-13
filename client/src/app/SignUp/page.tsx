"use client"

import Image from "next/image";
import Link from "next/link"; 
import { useState } from "react";
import { signIn, signInSocial, signUp } from "../../../lib/actions/auth-actions";


export default function SignUp(){
const [isSignIn, setIsSignIn] =  useState(true);
const [email,setEmail] =  useState("");
const [password,setPassword] = useState("");
const [name,setName] = useState("");
const [isLoading,setIsLoading] = useState(false);
const [error,setError] = useState(""); 

const handleSocialAuth= async (provider: "github" | "google")=>{
    setIsLoading(true);
    setError("");

 try{
    await signInSocial(provider)
 } catch (err){
    setError( `Error authenticating with ${provider}: ${err instanceof Error ? err.message: "Uknown error"}`)
 }

}

const handleEmailAuth= async(e: React.FormEvent)=>{
e.preventDefault();
setIsLoading(true);
setError("");

try{
   if(isSignIn){
    const result = await signIn(email,password);
    if(!result.user){
        setError("Invalid email or password")
    }
   }else{
    const result = await signUp(email,password,name);
    if(!result.user){
        setError("Failed to create account")
    }
   }
} catch (err) {
    setError(
        `Authentication error: ${
        err instanceof Error ? err.message : "Uknown error"}`
    );
} finally {
    setIsLoading(false)
};
};

    return(
        <div className=" grid grid-cols-2 pl-30">
         <div className=" w-[700px] h-[600px] ml-24 pt-10 ">
           <h1 className="font-semi-bold text-6xl pb-10">
            Signup to get the latest <br></br>update of available Cars
           </h1>
           <p className="text-2xl">
            Create a Free PINUC Account to get the best car deals in Town.<br></br> Already have a PINUC account <span className=" text-blue-500">
                <Link href="/Login">Login here</Link>
            </span>
           </p>
           <form>
            <div className=" pt-5 ">
                <label className="pl-2">YOUR NAME</label>
                <input id="name" name="name" type="text" className="w-[650px] h-[50px] border border-gray-600 pl-2 text-lg rounded-xl" />
            </div>

            <div className=" pt-5 ">
                <label className="pl-2">YOUR EMAIL</label>
                <input id="email" name="email" type="email" className="w-[650px] h-[50px] border border-gray-600 pl-2 text-lg rounded-xl" />
            </div>

            <div className=" pt-5 ">
                <label className="pl-2">YOUR PASSWORD</label>
                <input id="password" name="password" type="password" className="w-[650px] h-[50px] border border-gray-600 pl-2 text-lg rounded-xl" />
            </div>
           </form>
           <p className="pt-5 text-center">Or Continue With </p>

           <div>
            <button className="mt-2 ml-24 w-[450px] h-[50px] border border-gray-400 text-center rounded-xl"> Google</button>
            <button className="mt-2 ml-24 w-[450px] h-[50px] border border-gray-400 text-center rounded-xl"> Github</button>
            </div>
            
         </div>
         <div className="w-[410px] h-[810px] ml-96 relative ">
            <Image src="/images/audi A8.jpg" alt="audi"  fill   className="object-cover" />
         </div>
        </div>
    )
}