"use client"

import { Josefin_Sans } from "next/font/google";
import Link from "next/link";
import Image from "next/image"; 
import Header from "@/layout/Header";
import { GrShieldSecurity, GrSettingsOption} from "react-icons/gr";
import { FcApproval } from "react-icons/fc";
import { Exo_2 } from "next/font/google";
import { FaCar } from "react-icons/fa6";
import { MdMiscellaneousServices } from "react-icons/md";
import BuySectionComponent from "@/components/BuySectionComponent";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa6";
import Footer from "@/layout/Footer";


const exoFont= Exo_2({
  subsets:["latin"],
  weight:"300",
   display:"swap"

})


const josefinFont= Josefin_Sans({
  subsets: ['latin'],
  weight:"400",
  display:"swap"
})



export default function Home() {



  return (
    <div className="bg-white h-auto overflow-visible min-h-screen">
      {/*<Header/>*/}
<main className={`flex-1 w-full overflow-visible`}>
            <div className="bg-transparent w-screen sm:h-[500px] h-[300px]  relative z-10">
                  <Image src="/images/golf.jpg" alt="Background" fill priority  className="object-cover " />
                    <div className="absolute inset-0 bg-black/30 z-0"></div>

                            <div className="w-screen z-10 absolute sm:mt-10 sm:ml-10 mt-5 ml-1"  >  
                  <div className="flex justify-between sm:justify-end sm:flex-row  sm:gap-4 sm:pr-28 pr-3">
                    <Header/>
          </div>                       
              <p className={`${josefinFont.className} sm:text-xl text-sm text-white pt-4 sm:pt-6 `}>Come and get the best deals from</p>
              <p className={`${josefinFont.className} sm:text-5xl text-lg sm:text-white text-white sm:pt-6 `}><span >PRE-INSEPCTED USED CARS </span></p>
    <div className="flex justify-start gap-4 pb-3 sm:text-2xl text-sm text-white text-center cursor-pointer mt-5">
               <FaInstagram className="hover:text-[#d62976]"/>
              <FaFacebook className="hover:text-[#1877F2]"/>
               <FaTwitter className="hover:text-[#1DA1F2]" />
<FaLinkedin className="hover:text-[#0077B5]"/>
           </div> 
            </div>   
             
            </div>


{/*<Image 
  src="/images/golf.jpg" 
  alt="car image" 
  width={0} 
  height={0} 
  className={`mt-5 mx-auto rounded-full object-cover sm:w-[80%] w-[90%] sm:h-[200px] h-[100px]`}
/>*/}
 
<div className={` grid grid-cols-[1fr] gap-0 sm:grid-cols-[2fr_1fr] mt-2 sm:mt-10 w-screen sm:h-auto h-[400px] px-5  `}>
<div className={`bg-white px-5  `}>
<h2 className={`text-lg pt-2 sm:text-6xl ${josefinFont.className} text-navyBlue`}>
FIND YOUR DREAM CAR TODAY
</h2>
<p className={`text-xs sm:text-lg pt-2 ${exoFont.className} text-navyBlue`}>This is a bunch of random text being used as a prototype to what is to be</p>
<div className={`pt-2 flex mt-2`}>

<div>
  <div className={`flex`}>
<div className={`bg-skyBlue rounded-full w-5 h-5 sm:w-10 sm:h-10 flex items-center justify-center`}><FaCar className="text-white w-3 h-3 sm:w-6 sm:h-6" /></div>
<p className={`text-xs sm:text-xl pl-1 ${exoFont.className} text-navyBlue`}>Quality Cars</p>
  </div>
</div>

<div>
  <div className={`flex ml-1`}>
<div className="bg-skyBlue rounded-full w-5 h-5 sm:w-10 sm:h-10 flex items-center justify-center">
  <MdMiscellaneousServices className="text-white w-3 h-3 sm:w-6 sm:h-6" />
</div>
<p className={`text-xs sm:text-xl pl-1 ${exoFont.className} text-navyBlue`}>Exception Services</p>
  </div>
</div>

</div>
<div className="flex">
<button className={`bg-blue-700 text-white px-4 py-2 rounded-4xl sm:rounded-full text-xs sm:text-lg w-24 sm:w-28 sm:h-14 sm:mt-4 mt-2 h-10 cursor-pointer ${exoFont.className}`}><Link href="/SignUp">Sign Up</Link></button>
<p className={`text-xs sm:text-lg px-4 py-2 sm:mt-4 mt-2 ml-1 pt-4 cursor-pointer ${exoFont.className}`}>Learn More</p>
</div>
<div className={`bg-white sm:hidden block`}>
<div className={`bg-white w-[300px] h-[250px] sm:w-[250px] sm:h-[250px] rounded-2xl mt-5 ml-1 mb-2 sm:ml-10 relative`}>
   <Image 
    src="/images/mazda 3.jpg" 
    alt="car image" 
    fill
    className="object-cover rounded-2xl"
  />
</div>


</div>

</div>
<div className={`bg-white  sm:-ml-12 `}>
<div className="relative  w-[300px] h-[250px] sm:w-[500px] sm:h-[400px] rounded-2xl mt-2 mb-2 sm:ml-1 overflow-hidden">
  <Image 
    src="/images/mazda 3.jpg" 
    alt="car image" 
    fill
    className="object-cover rounded-xl sm:-ml-5  hidden sm:block "
  />
</div>


</div>

</div>


<div className={`mt-10 mx-auto text-center sm:w-[80%] w-[90%]  `}>
  <p className={`text-xs sm:text-md ${exoFont.className} text-navyBlue`}>Discover</p>
  <h1 className={`sm:text-5xl text-2xl ${josefinFont.className} text-navyBlue`}>FEATURED PROMINENTLY</h1>
  <p className={`text-xs sm:text-lg ${exoFont.className} text-navyBlue`}>Explore our wide selection of high quality cars</p>
</div>

<div>
  <BuySectionComponent/>
</div>

<div className={`w-[90%] sm:w-screen sm:mx-0 mx-auto  mt-5 mb-5   `}>
<h2 className={`sm:text-5xl text-2xl text-center sm:pb-10 pb-1  ${josefinFont.className} text-navyBlue`}>PICK YOUR CAR</h2>
<div className={`mt-5  mx-auto grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr_1fr] sm:gap-2 gap-2  sm:w-[80%] w-[90%]  h-auto`}>
<div className={`w-68 h-44 sm:w-68 sm:h-44 bg-white rounded-xl px-1 mt-5 ${exoFont.className} text-navyBlue`}>
<div className={`text-center pt-1`}>
<div className="bg-skyBlue rounded-full w-12 h-12 sm:w-20 sm:h-20 mx-auto sm:-mt-10 -mt-5 flex items-center justify-center">
  <GrShieldSecurity size="1.5em" className="text-white sm:text-3xl" />
</div><h4 className={`text-sm font-bold`}>Secure Delivery</h4>
<p className={`text-sm`}>This is a bunch of random text being used as a prototype to what is to be</p>
<p className={`text-xs sm:text-lg text-center py-2 sm:mt-4 mt-2  pt-2 cursor-pointer bg-skyBlue rounded-full text-white`}>Learn More</p>

</div>
</div>
<div className={`w-68 h-44 sm:w-68 sm:h-44 bg-white rounded-xl px-1 mt-5 ${exoFont.className} text-navyBlue`}>
<div className={`text-center pt-1`}>
<div className="bg-skyBlue rounded-full w-12 h-12 sm:w-20 sm:h-20 mx-auto sm:-mt-10 -mt-5 flex items-center justify-center">
  <FcApproval size="1.5em" className="text-white sm:text-3xl" />
</div><h4 className={`text-sm font-bold`}>Secure Delivery</h4>
<p className={`text-sm`}>This is a bunch of random text being used as a prototype to what is to be</p>
<p className={`text-xs sm:text-lg text-center py-2 sm:mt-4 mt-2  pt-2 cursor-pointer bg-skyBlue rounded-full text-white`}>Learn More</p>

</div>
</div>
<div className={`w-68 h-44 sm:w-68 sm:h-44 bg-white rounded-xl px-1 mt-5 ${exoFont.className} text-navyBlue `}>
<div className={`text-center pt-1`}>
<div className="bg-skyBlue rounded-full w-12 h-12 sm:w-20 sm:h-20 mx-auto sm:-mt-10 -mt-5 flex items-center justify-center">
  <GrSettingsOption size="1.5em" className="text-white sm:text-3xl" />
</div><h4 className={`text-sm font-bold`}>Secure Delivery</h4>
<p className={`text-sm`}>This is a bunch of random text being used as a prototype to what is to be</p>
<p className={`text-xs sm:text-lg text-center py-2 sm:mt-4 mt-2  pt-2 cursor-pointer bg-skyBlue rounded-full text-white`}>Learn More</p>

</div>
</div>
</div>
</div>

<div className="relative mt-5 mb-10 mx-auto  rounded-full sm:w-[95%] w-[90%] sm:h-[200px] h-[100px] overflow-hidden">
  {/* Background Image */}
  <Image 
    src="/images/audi A3.jpg" 
    alt="car image" 
    fill
    className="object-cover"
  />
  
  {/* Dark overlay for better text visibility */}
  <div className="absolute inset-0 bg-black/30 z-0"></div>
  
  {/* Text content centered */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
    <p className={`text-center sm:text-4xl text-xl font-bold text-white drop-shadow-xl ${josefinFont.className}`}>
      FREE TEST DRIVE
    </p>
    
    <p className={`text-center sm:text-lg text-xs text-white mt-2 sm:mt-3 font-medium drop-shadow-lg max-w-[80%] bg-black/20 px-4 py-1 rounded-full ${exoFont.className}`}>
      This is a bunch of random text being used as a prototype to what is to be
    </p>
  </div>
  
  {/* Icon positioned top-right */}
</div>




<Footer/>
</main>

</div>
  );
}