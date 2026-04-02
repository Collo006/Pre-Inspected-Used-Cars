import FileUploaderOne from "@/components/FileUploaderOne";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Image from "next/image"; 
import { Exo_2 } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa6";
import { FaCar, FaFile, FaKey, FaMoneyBills, FaPhone, FaUser, FaFileArrowUp  } from "react-icons/fa6";


export const metadata = {
  title: "Pre-Inspected Used Cars Kenya | #1 Pre-Owned Vehicle Dealer in Nairobi",
  description:  "Find quality inspected used cars in Kenya. Browse 50+ pre-owned vehicles in Nairobi including Toyota, Nissan, BMW & Subaru. All cars verified & ready for test drive.",
  keywords: ["used cars Kenya, inspected used cars Nairobi, pre-owned vehicles Kenya, buy used cars Nairobi, Toyota used cars Kenya, Nissan used cars Kenya, BMW used cars Kenya, Subaru used cars Kenya,Mercedes used cars Kenya, Suzuki used cars Kenya"],
  openGraph:{
    title: "Pre-Inspected Used Cars Kenya | #1 Pre-Owned Vehicle Dealer in Nairobi Kenya",
    description: "Find quality inspected used cars in Kenya. Browse 50+ pre-owned vehicles in Nairobi including Toyota, Nissan, BMW & Subaru. All cars verified & ready for test drive.",
    siteName: "Pre-Inspected Used Cars Kenya",
   url: "https://pre-inspected-used-cars-git-master-collins-projects-3eca33c8.vercel.app/",
   images:[
    {
      url:"https://pre-inspected-used-cars-git-master-collins-projects-3eca33c8.vercel.app/images/PINUC .png",
      width: 1200,
      height: 630,
      alt: "Pre-Inspected Used Cars Kenya Logo"
    }
   ],
   locale: "en_KE",
    type: "website"
  },
  twitter:{
    card:"summary_large_image",
    title: "Pre-Inspected Used Cars Kenya | #1 Pre-Owned Vehicle Dealer in Nairobi Kenya",
    description: "Find quality Pre-Inspected used cars in Kenya. Browse 50+ pre-owned vehicles in Nairobi including Toyota, Nissan, BMW & Subaru. All cars verified & ready for test drive.",
    creator:"@PreInspectedCarsKE",
    images:[
      {
        url:"https://pre-inspected-used-cars-git-master-collins-projects-3eca33c8.vercel.app/images/PINUC .png",
        width: 1200,
        height: 630,
        alt: "Pre-Inspected Used Cars Kenya Logo"
      }
     ]
  },
  robots:{
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  }
};

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



export default function SellCarFormPage(){
    return (
        <div className="bg-white">
    <header className="bg-transparent w-screen sm:h-[500px] h-[300px]  relative z-10">
                                   <Image src="/images/prado-tx.jpg" alt="Background" fill priority  className="object-cover " />
                                    
                                    <div className="absolute inset-0 bg-black/30 z-0"></div> 
                   
                                               <div className="w-screen z-10 absolute sm:mt-10 sm:ml-10 mt-5 ml-1"  >  
                                     <div className="flex justify-between sm:justify-end sm:flex-row  sm:gap-4 sm:pr-28 pr-3">
                                       <Header/>
                             </div>                       
                                 <p className={`${josefinFont.className} sm:text-xl text-sm text-white pt-4 sm:pt-6 `}>Tired of your old car and want an upgrade</p>
                                 <p className={`${josefinFont.className} sm:text-5xl text-lg sm:text-white text-white sm:pt-6 `}><span >SELL YOUR CAR ACROSS KENYA</span></p>
                       <div className="flex justify-start gap-4 pb-3 sm:text-2xl text-sm text-white text-center cursor-pointer mt-5">
                                  <FaInstagram className="hover:text-[#d62976]"/>
                                 <FaFacebook className="hover:text-[#1877F2]"/>
                                  <FaTwitter className="hover:text-[#1DA1F2]" />
                   <FaLinkedin className="hover:text-[#0077B5]"/>
                              </div>
                                  
             
                               </div>  
                                                              
                               </header>
                

        <div className={`bg-white ml-0 w-screen rounded-xl mt-5 `}>
                          <div className={` flex justify-center pb-10  gap-6 mt-5`}> {/** remember this shortcut */}
                <div className={`bg-[#dfe1eb] text-darkSky w-[170px] h-[170px] rounded-xl pt-15 ${josefinFont.className} transition duration-[2s] ease-in-out hover:transform-[rotateX(360deg)]  shadow-[inset_0_-23px_25px_0px_rgba(0,0,0,0.17),inset_0_-36px_30px_0px_rgba(0,0,0,0.15),inset_0_-79px_40px_0px_rgba(0,0,0,0.1),0_2px_1px_rgba(0,0,0,0.06),0_4px_2px_rgba(0,0,0,0.09),0_8px_4px_rgba(0,0,0,0.09),0_16px_8px_rgba(0,0,0,0.09),0_32px_16px_rgba(0,0,0,0.09)]`}>
                    <p className="text-center">Share Your Contact</p>
                    <FaPhone className="text-2xl mx-auto mb-2 mt-2"/>
                </div>
                <div className={`bg-[#dfe1eb] text-darkSky w-[180px] h-[130px] rounded-xl pt-10 mt-5 ${josefinFont.className} transition duration-[2s] ease-in-out hover:transform-[rotateX(360deg)] shadow-[inset_0_-23px_25px_0px_rgba(0,0,0,0.17),inset_0_-36px_30px_0px_rgba(0,0,0,0.15),inset_0_-79px_40px_0px_rgba(0,0,0,0.1),0_2px_1px_rgba(0,0,0,0.06),0_4px_2px_rgba(0,0,0,0.09),0_8px_4px_rgba(0,0,0,0.09),0_16px_8px_rgba(0,0,0,0.09),0_32px_16px_rgba(0,0,0,0.09)]`}>
                      <p className="text-center">Add your Car Details</p>
                      <FaUser className="text-4xl mx-auto mb-2 mt-2"/>
                </div>
                <div className={`bg-[#dfe1eb] text-darkSky w-[170px] h-[170px] rounded-xl pt-15 ${josefinFont.className} transition duration-[2s] ease-in-out hover:transform-[rotateX(360deg)] shadow-[inset_0_-23px_25px_0px_rgba(0,0,0,0.17),inset_0_-36px_30px_0px_rgba(0,0,0,0.15),inset_0_-79px_40px_0px_rgba(0,0,0,0.1),0_2px_1px_rgba(0,0,0,0.06),0_4px_2px_rgba(0,0,0,0.09),0_8px_4px_rgba(0,0,0,0.09),0_16px_8px_rgba(0,0,0,0.09),0_32px_16px_rgba(0,0,0,0.09)]`}>
                      <p className="text-center">Upload Documents and Images </p>
                      <FaFile className="text-4xl mx-auto mb-2 mt-2"/>
                </div>
                <div className={`bg-[#dfe1eb] text-darkSky w-[180px] h-[130px] rounded-xl pt-10 mt-5 ${josefinFont.className} transition duration-[2s] ease-in-out hover:transform-[rotateX(360deg)] shadow-[inset_0_-23px_25px_0px_rgba(0,0,0,0.17),inset_0_-36px_30px_0px_rgba(0,0,0,0.15),inset_0_-79px_40px_0px_rgba(0,0,0,0.1),0_2px_1px_rgba(0,0,0,0.06),0_4px_2px_rgba(0,0,0,0.09),0_8px_4px_rgba(0,0,0,0.09),0_16px_8px_rgba(0,0,0,0.09),0_32px_16px_rgba(0,0,0,0.09)]`}>
                      <p className="text-center">Wait For Validation</p>
                      <FaKey className="text-4xl mx-auto mb-2 mt-2"/>
                </div>
                <div className={`bg-[#dfe1eb] text-darkSky w-[170px] h-[170px] rounded-xl pt-15 ${josefinFont.className} transition duration-[2s] ease-in-out hover:transform-[rotateX(360deg)] shadow-[inset_0_-23px_25px_0px_rgba(0,0,0,0.17),inset_0_-36px_30px_0px_rgba(0,0,0,0.15),inset_0_-79px_40px_0px_rgba(0,0,0,0.1),0_2px_1px_rgba(0,0,0,0.06),0_4px_2px_rgba(0,0,0,0.09),0_8px_4px_rgba(0,0,0,0.09),0_16px_8px_rgba(0,0,0,0.09),0_32px_16px_rgba(0,0,0,0.09)]`}>
                      <p className="text-center">Secure Payment</p>
                      <FaMoneyBills className="text-4xl mx-auto mb-2 mt-2"/>
                </div>
                <div className={`bg-[#dfe1eb] text-darkSky w-[180px] h-[130px] rounded-xl pt-10 mt-5 ${josefinFont.className} transition duration-[2s] ease-in-out hover:transform-[rotateX(360deg)] shadow-[inset_0_-23px_25px_0px_rgba(0,0,0,0.17),inset_0_-36px_30px_0px_rgba(0,0,0,0.15),inset_0_-79px_40px_0px_rgba(0,0,0,0.1),0_2px_1px_rgba(0,0,0,0.06),0_4px_2px_rgba(0,0,0,0.09),0_8px_4px_rgba(0,0,0,0.09),0_16px_8px_rgba(0,0,0,0.09),0_32px_16px_rgba(0,0,0,0.09)]`}>
                      <p className="text-center">Set Up Pickup Date</p>
                      <FaCar className="text-4xl mx-auto mb-2 mt-2"/>
                </div>
                </div>

            <div className={`mt-5`}>
               <h1 className={`${josefinFont.className} sm:text-2xl text-sm text-black pt-4 sm:pt-6 ml-8 text-center`}>We make sure your idea & creation delivered properly</h1>
               <div className={`grid grid-cols-[repeat(2,1fr)] gap-2 px-5`}>
                <div className={` `}>
                   <Image src="/images/for-sale.jpg" alt="handing documents" className=" sm:w-[650px] sm:h-[400px] w-screen h-[200px]  object-cover sm:pt-5  sm:pl-1" width={0} height={0}/>
                </div>
                <div className={` `}>
                    <p className={`sm:text-md text-sm  ${josefinFont.className} sm:pt-32 pt-2 sm:pl-1  text-[#000000]`}>There was something special about this little creature. Donna couldn&apos;t quite pinpoint what it was,but she knew with all her heart that it was true. It wasn&apos;t a matter of if she was going to try and save it, but a matter of how she was going to save it. He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.</p>
                </div>
               </div>
            </div>
                <div className={`mt-5 px-5 `}>
                    <h2 className={`${josefinFont.className} sm:text-2xl text-sm text-black pt-4 sm:pt-6 ml-8 text-center`}>
                      Upload Your Car Details and Let Us Handle The Rest
                    </h2>
                    <div className={`mt-5 px-5`}>
                           <div className={`bg-white border-2 border-lightSky text-black h-[300px] text-center rounded-xl pt-10  `}>
                      <div>
                        <FaFileArrowUp className={`flex mx-auto text-4xl mb-2 text-darkSky`}/>
                        <p>Drag and Drop Your Files</p>
                        <p>Files Supported PDF</p>
                        <FileUploaderOne/>
                        </div>     
                </div>
                    </div>
                    <div className={`grid grid-cols-[repeat(2,1fr)] gap-2 mt-5`}>
                      <div className={``}>
                        <div className={`bg-lightSky text-darkSky h-[300px] pl-5 rounded-xl pt-16  `}>
                      <div><FileUploaderOne/></div>     
                </div>
                      </div>
                      <div className={``}>
                        <div className={`bg-lightSky text-darkSky h-[300px] pl-5 rounded-xl pt-16  `}>
                      <div><FileUploaderOne/></div>     
                </div>
                      </div>
                      <div className={`border border-green-600`}>
                        <div className={`bg-lightSky text-darkSky h-[300px] pl-5 rounded-xl pt-16  `}>
                      <div><FileUploaderOne/></div>     
                </div>
                      </div>
                      <div className={`border border-blue-600`}>
                        <div className={`bg-lightSky text-darkSky h-[300px] pl-5 rounded-xl pt-16  `}>
                      <div><FileUploaderOne/></div>     
                </div>
                      </div>
                    </div>
                </div>

        {/** <div className={` mt-5 pb-10 sm:grid sm:grid-cols-[repeat(3,300px)]  grid grid-cols-[repeat(1,300px)] gap-2 justify-center`}>
            <div className={`bg-lightSky text-darkSky h-[300px] pl-5 rounded-xl pt-16  `}>
                      <div><FileUploaderOne/></div>     
                </div>
             <div className={`bg-lightSky text-darkSky h-[300px] pl-5 rounded-xl pt-16  `}>
                      <div><FileUploaderOne/></div>     
                </div>
              <div className={`bg-lightSky text-darkSky h-[300px] pl-5 rounded-xl pt-16  `}>
                      <div><FileUploaderOne/></div>     
                </div>
                <div className={`bg-lightSky text-darkSky h-[300px] pl-5 rounded-xl pt-16  `}>
                      <div><FileUploaderOne/></div>     
                </div>
                  <div className={`bg-lightSky text-darkSky h-[300px] pl-5 rounded-xl pt-16  `}>
                      <div><FileUploaderOne/></div>     
                </div>
                   <div className={`bg-lightSky text-darkSky h-[300px] pl-5 rounded-xl pt-16  `}>
                      <div><FileUploaderOne/></div>     
                </div>
                     <div className={`bg-lightSky text-darkSky h-[300px] pl-5 rounded-xl pt-16  `}>
                      <div><FileUploaderOne/></div>     
                </div>
                         <div className={`bg-lightSky text-darkSky h-[300px] pl-5 rounded-xl pt-16  `}>
                      <div><FileUploaderOne/></div>     
                </div>
        </div> */}
             
            </div>
            <Footer></Footer>
        </div>
    )
}