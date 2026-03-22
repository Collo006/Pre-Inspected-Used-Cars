"use client"
import { auth } from "../../../lib/auth";
import Image from "next/image"; 
import { Josefin_Sans } from "next/font/google";

import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa6";
import SectionThree from "@/layout/MainPage/SectionThree";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import MiniSectionThree from "@/layout/MainPage/MiniSectionThree";
import SectionFour from "@/layout/MainPage/SectionFour";
import SectionOne from "@/layout/MainPage/SectionOne";
import SectionTwo from "@/layout/MainPage/SectionTwo";

const josefinFont= Josefin_Sans({
  subsets: ['latin'],
  weight:"400",
  display:"swap"
})

//type Session =typeof auth.$Infer.Session;
export default function UserDashBoard() {
 
 // const user = session.user
//{session}:{session: Session}

  return (
<main className=" w-auto bg-white">
  <header className="bg-transparent w-screen sm:h-[400px] h-[300px]  relative z-10">
<Image src="/images/header-bg.jpg" alt="Background" fill priority  className="object-cover " />
<div className="absolute inset-0 bg-black/30 z-0"></div>
<div className="w-screen z-10 absolute sm:mt-10 sm:ml-10 mt-5 ml-1" >
    <div className="flex justify-between sm:justify-end sm:flex-row  sm:gap-4 sm:pr-28 pr-3">
      <Header/>
</div>                       
<p className={`${josefinFont.className} sm:text-5xl text-lg text-white pt-4 sm:pt-6 `}>Welcome {/*user.name*/}!</p>
<p className={`${josefinFont.className} sm:text-5xl text-lg sm:text-white text-white sm:pt-5 `}><span >Let&apos;s find your Perfect Ride.</span></p>
  <div className="flex justify-start gap-4 pb-3 sm:text-2xl text-sm text-white text-center cursor-pointer mt-5">
               <FaInstagram className="hover:text-[#d62976]"/>
              <FaFacebook className="hover:text-[#1877F2]"/>
               <FaTwitter className="hover:text-[#1DA1F2]" />
<FaLinkedin className="hover:text-[#0077B5]"/>
           </div>      
</div>
</header>
         
  <section>
    <SectionOne/>
    <SectionTwo/>
    <MiniSectionThree/>
    <SectionThree/>
    <SectionFour/>
  </section>

  <footer>
  <Footer/>
  </footer>
</main>
  );
}

/** 
 *  <Image src={car.image} alt={car.model} width={200} height={200} />
 *   <img src="/images/car1.jpg" alt="Car" width="300" height="100" />

 */