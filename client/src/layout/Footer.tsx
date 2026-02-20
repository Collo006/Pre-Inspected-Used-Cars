import { Josefin_Sans } from "next/font/google"
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa6";
import Image from "next/image";




const josefinFont= Josefin_Sans({
  subsets: ['latin'],
  weight:"400",
  display:"swap"
})

export default function Footer(){
    return (
          <div className="bg-transparent w-screen sm:h-[300px] h-[500px] relative z-10 mt-10 text-white">
            <Image src="/images/PINUC .png" alt="Background" fill priority  className="object-cover " />
            <div className="absolute inset-0 bg-black/30 z-0"></div>
            <div className="w-screen z-10 absolute sm:mt-10 sm:ml-1 mt-5 ml-1"  >                            
        <div className=" grid grid-cols-4  text-center sm:text-lg text-xs sm:leading-12 leading-11  ">
            <div className={`hover:text-skyBlue hover:cursor-pointer  ${josefinFont.className}`}>
                <h2>PRODUCTS</h2>
                <p>USED CARS</p> 
                <p>SELL YOUR CAR</p>
            </div>
           <div className={`hover:text-skyBlue hover:cursor-pointer  ${josefinFont.className}`}>
                <h2>RESOURCES</h2>
                <p>CONTACTS</p>
                <p>BLOG</p>
                <p>FAQ</p>
            </div>
         <div className={`hover:text-skyBlue hover:cursor-pointer  ${josefinFont.className}`}>
                <h2>WORK WITH US</h2>
                <p>PARTNERS</p>
                <p>SELLERS</p>
            </div>
             <div className={`hover:text-skyBlue hover:cursor-pointer  ${josefinFont.className}`}>
                <h2>ABOUT</h2>
                <p>INVESTORS</p>
                <p>TEAM</p>
            </div>
         </div>
        <div className="flex justify-center gap-4 pb-3 sm:text-lg text-sm text-white text-center cursor-pointer">
               <FaInstagram className="hover:text-[#d62976]"/>
              <FaFacebook className="hover:text-[#1877F2]"/>
               <FaTwitter className="hover:text-[#1DA1F2]" />
<FaLinkedin className="hover:text-[#0077B5]"/>
           </div>              
               <div className={`text-center text-white sm:text-md text-sm ${josefinFont.className}`}>
            <p> &copy; <sup>TM</sup> PINUC.All rights reserved. Vehicle photos PINUC images 2025</p>
           </div>

            </div>   

            </div>          
       
    )
}