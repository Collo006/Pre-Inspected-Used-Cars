

import { Josefin_Sans } from "next/font/google";
import Link from "next/link";

const josefinFont= Josefin_Sans({
  subsets: ['latin'],
  weight:"400"
})

//make sure to create that wehn the page loads, the images slide in/fade in or appear to come from the top 

export default function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat "  style={{ backgroundImage: "url('images/ford f150.jpg')" }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-end pt-5 pr-10   ">
            <Link
              href="/SignUp"
              className={`bg-transparent text-xl text-white  ${josefinFont.className} `}
            >
              Sign Up
            </Link>
            <Link
              href="/dashboard"
              className={`bg-transparent text-xl text-white  ${josefinFont.className}`}
            >
            Dashboard
            </Link>
          </div> 
          <div className=" ml-14 mt-6">
              <p className={`${josefinFont.className} text-5xl text-white`}><span className="pl-10"> Good Cars Do </span><br></br>Not Hide Problems</p>
              <p className={`${josefinFont.className} text-xl text-white pt-6 pl-2`}>We uncover everything upfront helping <br></br>  Kenyans make safer choices.</p>
              <Link href="/SignUp"><button className={`${josefinFont.className} bg-newOrange text-white mt-2 ml-2 pt-3 pb-3  rounded-xl text-xl w-[150px] cursor-pointer`}>Explore More</button></Link>
            </div>    
</div>
  );
}