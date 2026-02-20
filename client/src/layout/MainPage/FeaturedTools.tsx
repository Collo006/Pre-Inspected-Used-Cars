import Image from "next/image";
import Link from "next/link";
import { Josefin_Sans, Exo_2 } from "next/font/google";



const josefinFont= Josefin_Sans({
  subsets:["latin"],
  weight:"300",

})


const exoFont= Exo_2({
  subsets:["latin"],
  weight:"500",

})

export default function FeaturedTools(){
    return(
        <div className={`w-screen h-auto mt-10 pb-5  bg-white`}>
           <div className={`text-center`}>
            <h1 className={`sm:text-2xl text-2xl text-darkSky font-bold text-centmd mb-1 ${exoFont.className}`}>FEATURED TOOLS</h1>
           </div>
           <div className={`grid grid-cols-[650px_650px] gap-1 pt-5  px-5`}>
            <div className={`bg-lightSky text-center content-center pt-1 pb-1 rounded-2xl`}>
                <Image src="/images/demio.jpg" alt="Demio" width={200} height={200} className={`mx-auto rounded-2xl`}/>
                <p className={`text-lg font-bold text-navyBlue ${josefinFont}`}>Find your Fit</p>
                <p className={`text-md mb-1 text-navyBlue text-bold ${josefinFont}`}>We will help you find the perfect car for you.</p>
                <button className={`bg-blue-700 text-white px-4 py-2 rounded-4xl sm:rounded-full text-xs sm:text-lg w-24 sm:w-40 sm:h-10 sm:mt-4 mt-2 h-10 cursor-pointer`}><Link href="/Buy">Get Car</Link></button>  
            </div>
            <div className={`bg-lightSky text-center content-center pt-1 pb-1 rounded-2xl`}>
                <Image src="/images/demio.jpg" alt="Demio" width={200} height={200} className={`mx-auto rounded-2xl`}/>
                <p className={`text-lg font-bold text-navyBlue ${josefinFont}`}>Shop by budget</p>
                <p className={`text-md mb-1 text-navyBlue text-bold ${josefinFont}`}>Save time and narrow down cars that fit your monthly payment and price point.</p>
                <button className={`bg-blue-700 text-white px-4 py-2 rounded-4xl sm:rounded-full text-xs sm:text-lg w-24 sm:w-40 sm:h-10 sm:mt-4 mt-2 h-10 cursor-pointer`}><Link href="/Buy">See Your Buying Power</Link></button>  
            </div>
            <div className={`bg-lightSky  text-center content-center pt-1 pb-1 rounded-2xl`}>
                <Image src="/images/demio.jpg" alt="Demio" width={200} height={200} className={`mx-auto rounded-2xl`}/>
                <p className={`text-lg font-bold text-navyBlue ${josefinFont}`}>Choose your Car</p>
                <p className={`text-md mb-1 text-navyBlue text-bold ${josefinFont}`}>Choose your make, model, trim and add accessories, then we will connect you with a certified dealer to get you behind the wheel.</p>
                <button className={`bg-blue-700 text-white px-4 py-2 rounded-4xl sm:rounded-full text-xs sm:text-lg w-24 sm:w-40 sm:h-10 sm:mt-4 mt-2 h-10 cursor-pointer`}><Link href="/Buy">Choose</Link></button>  
            </div>
            <div className={`bg-lightSky  text-center content-center pt-1 pb-1 rounded-2xl`}>
                <Image src="/images/demio.jpg" alt="Demio" width={200} height={200} className={`mx-auto rounded-2xl`}/>
                <p className={`text-lg font-bold text-navyBlue ${josefinFont}`}>Sell and Trade</p>
                <p className={`text-md mb-1 text-navyBlue text-bold ${josefinFont}`}>Find out quickly how much your current car is worth and get a real cash offer in minutes.</p>
                <button className={`bg-blue-700 text-white px-4 py-2 rounded-4xl sm:rounded-full text-xs sm:text-lg w-24 sm:w-40 sm:h-10 sm:mt-4 mt-2 h-10 cursor-pointer`}><Link href="/SellCarForm">Get Free Estimate</Link></button>  
            </div>

           </div>
        </div>
    )
}