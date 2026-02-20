import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import { Exo_2, Saira } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Josefin_Sans  } from "next/font/google";
import { IoPricetagOutline } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
import { LuChartNoAxesColumn } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";

//bs

const exoFont= Exo_2({
  subsets:["latin"],
  weight:"500",

})
const josefinFont= Josefin_Sans({
    subsets:["latin"],
    weight: "500",
    display:"swap"
})
const sairaFont= Saira({
  subsets:["latin"],
  weight:"400",
   display:"swap"

})

export default function About(){

    
    return(
        <div className={`bg-white`}>
            <div className={`bg-transparent w-screen sm:h-[500px] h-[300px] relative z-10`}>

                <Image src="/images/peopel.jpg" alt="Background" fill priority  className="object-cover " /> 
                <div className={`absolute inset-0 bg-black/30 z-0`}></div>

                <div className={`w-screen z-10 absolute sm:mt-6 sm:ml-10 mt-5 ml-1`}>
    <div className="flex justify-between sm:justify-end sm:flex-row  sm:gap-4 sm:pr-28 pr-3">
    <Header/>
    </div>    
    <h1 className={`${josefinFont.className} sm:text-5xl text-lg sm:text-white text-white sm:pt-16 `}>ABOUT US AT PINUC DEALERSHIP</h1>
    <p className={`${josefinFont.className} sm:text-xl text-sm text-white pt-4 sm:pt-6 `}>We uncover everything upfront helping Kenyans make safer choices.</p>
                </div>
            </div>
        
            <div className={` grid sm:grid-cols-[1fr_600px] grid-cols-[1fr] gap-1 w-screen h-auto px-1 sm:px-5 sm:mb-0 `}>
             <div className={`mt-5`}>
                <h2 className={`${josefinFont.className} sm:text-3xl sm:pt-16 pt-2 sm:pl-10 text-lg sm:text-darkSky text-darkSky `}>Our Mission In The Company</h2>
                <p className={`sm:text-md text-sm  ${josefinFont.className} sm:pt-5 pt-2 sm:pl-10  text-navyBlue`}>There was something special about this little creature. Donna couldn&apos;t quite pinpoint what it was,but she knew with all her heart that it was true. It wasn&apos;t a matter of if she was going to try and save it, but a matter of how she was going to save it. He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.</p>
             </div>
             <div className={` mt-5 h-auto `}>
                <Image src="/images/handing-docs.jpg" alt="handing documents" className=" sm:w-[500px] sm:h-[400px] w-screen h-[200px] rounded-xl object-cover sm:pt-10  sm:pl-10" width={0} height={0}/>
             </div>
            </div> 

            <div className={`w-screen  sm:mt-10 mt-16  `}>
              <h3 className={`${josefinFont.className} sm:text-3xl text-lg sm:text-darkSky text-darkSky text-center sm:mt-0 mt-5 `}>The Team Behind The Business </h3>
              <div className={`flex sm:justify-center sm:gap-7 gap-1 px-1 `}>
                <div className={`w-[300px]  h-auto `}>
                    <Image src="/images/handing-docs.jpg" alt="handing documents" className="rounded-xl object-cover  hover:shadow-xl shadow-lg" width={300} height={600} />
                    <p className={`${josefinFont.className} sm:text-xl text-sm text-darkSky text-center pt-2 sm:pt-2 `}>Collins Tunge</p>
                    <p className={`${exoFont.className} sm:text-lg text-sm text-newOrange text-center  `}>Sales Representative</p>
                </div>
                <div className={`w-[300px]  h-auto `}>
                    <Image src="/images/handing-docs.jpg" alt="handing documents" className="rounded-xl object-cover  hover:shadow-xl shadow-lg" width={300} height={600} />
                    <p className={`${josefinFont.className} sm:text-xl text-sm text-darkSky text-center pt-2 sm:pt-2 `}>Joshua Omukhoko</p>
                    <p className={`${exoFont.className} sm:text-lg text-sm text-newOrange text-center  `}>Chief Executive Officer</p>
                </div>
              </div>
                </div> 

     <div className={` grid sm:grid-cols-[1fr_600px] grid-cols-[1fr] gap-1 w-screen h-[400px] mt-5 sm:mt-0 sm:px-5 px-1`}>
             <div className={``}>
                <h2 className={`${josefinFont.className} sm:text-3xl sm:pt-16 sm:pl-10 text-lg sm:text-darkSky text-darkSky `}>We Provide The Best Automotive Deals</h2>
                <div className={`flex justify-start gap-1 sm:pl-10 pt-5`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center`}><IoPricetagOutline size="1.5em" className="text-darkSky sm:text-lg"/></div>
                  <p className={`${exoFont.className} sm:text-lg text-sm text-newOrange`}>Premium services beyond your expectation</p>
                </div>
                 <div className={`flex justify-start gap-1 sm:pl-10 pt-5`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center`}><MdSupportAgent size="1.5em" className="text-darkSky sm:text-lg"/></div>
                  <p className={`${exoFont.className} sm:text-lg text-sm text-newOrange`}>Get the best support among our team of experts</p>
                </div>
                 <div className={`flex justify-start gap-1 sm:pl-10 pt-5`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center`}><LuChartNoAxesColumn size="1.5em" className="text-darkSky sm:text-lg"/></div>
                  <p className={`${exoFont.className} sm:text-lg text-sm text-newOrange`}>Great Price Competitive</p>
                </div>
             </div>
             <div className={``}>
                <Image src="/images/handing-docs.jpg" alt="handing documents" className="rounded-xl object-cover sm:pt-10 sm:pl-2" width={550} height={550}/>
             </div>
            </div> 
             
            <h2 className={`${exoFont.className} sm:text-2xl text-xl text-darkSky font-bold text-center pt-1  mt-14 sm:mt-5`}>RECENT AUTOMOTIVE NEWS</h2>

            <div className={`bg-white w-screen sm:h-[500px] h-auto rounded-xl mt-5 sm:mt-10 sm:grid sm:grid-cols-[1fr_1fr_1fr] sm:gap-1 gap-5 grid grid-cols-[1fr] sm:px-10 px-1  `}>
                <div className={`cursor-pointer  border border-lightSky rounded-xl hover:shadow-lg shadow-md`}>
                    <div className={`relative  sm:h-[250px] h-[200px]`}>
                        <Image src="/images/mechanic.jpg" alt="mechanic" className={`object-cover rounded-t-xl`} fill/>
                    </div>
                    <h4 className={`${sairaFont.className} text-lg text-darkSky sm:pl-5 pt-2`}>John Smith head of CMC motors</h4>
                    <hr className="mx-5  mt-2 text-lightSky"/>
                     <div className={`p-2`}>
                         <div className={`space-y-1 text-navyBlue `}>
                            <p className={`space-y-1 sm:text-md text-sm text-navyBlue mt-5 ${sairaFont.className}`}>There was something special about this little creature. Donna couldn&apos;t quite pinpoint what it was, but she knew with all her heart that it was true.It wasn&apos;t a matter of if she was going to try and save it, but a matter of how she was going to save it.</p>
                         </div>
                          <hr className="mx-3 mt-5 text-lightSky"/>
                            <div className={`flex justify-between pt-5 ${josefinFont.className}`}>
                            <p className={`text-sm font-bold text-navyBlue ${sairaFont.className}`}>Read More</p>
                            <div className={`flex  px-1`}><IoIosArrowForward className={`text-md pt-1 mr-1`} /></div>                             
                         </div>
                        </div>
                </div>
                   <div className={`cursor-pointer  border border-lightSky rounded-xl hover:shadow-lg shadow-md`}>
                    <div className={`relative  sm:h-[250px] h-[200px]`}>
                        <Image src="/images/oldies.jpg" alt="mechanic" className={`object-cover rounded-t-xl`} fill/>
                    </div>
                    <h4 className={`${sairaFont.className} text-lg text-darkSky sm:pl-5 pt-2`}>Cars that rocked the 90&apos;s </h4>
                    <hr className="mx-5  mt-2 text-lightSky"/>
                     <div className={`p-2`}>
                         <div className={`space-y-1 text-navyBlue `}>
                            <p className={`space-y-1 sm:text-md text-sm text-navyBlue mt-5 ${sairaFont.className}`}>There was something special about this little creature. Donna couldn&apos;t quite pinpoint what it was, but she knew with all her heart that it was true.It wasn&apos;t a matter of if she was going to try and save it, but a matter of how she was going to save it.</p>
                         </div>
                          <hr className="mx-3 mt-5 text-lightSky"/>
                            <div className={`flex justify-between pt-5 ${josefinFont.className}`}>
                            <p className={`text-sm font-bold text-navyBlue ${sairaFont.className}`}>Read More</p>
                            <div className={`flex  px-1`}><IoIosArrowForward className={`text-md pt-1 mr-1`} /></div>                             
                         </div>
                        </div>
                </div>
                     <div className={`cursor-pointer border border-lightSky rounded-xl hover:shadow-lg shadow-md`}>
                    <div className={`relative  sm:h-[250px] h-[200px]`}>
                        <Image src="/images/amg.jpg" alt="mechanic" className={`object-cover rounded-t-xl`} fill/>
                    </div>
                    <h4 className={`${sairaFont.className} text-lg text-darkSky sm:pl-5 pt-2`}>OMG! AMG have a new Engine!</h4>
                    <hr className="mx-5  mt-2 text-lightSky"/>
                     <div className={`p-2`}>
                         <div className={`space-y-1 text-navyBlue `}>
                            <p className={`space-y-1 sm:text-md text-sm text-navyBlue mt-5 ${sairaFont.className}`}>There was something special about this little creature. Donna couldn&apos;t quite pinpoint what it was, but she knew with all her heart that it was true.It wasn&apos;t a matter of if she was going to try and save it, but a matter of how she was going to save it.</p>
                         </div>
                          <hr className="mx-3 mt-5 text-lightSky"/>
                            <div className={`flex justify-between pt-5 ${josefinFont.className}`}>
                            <p className={`text-sm font-bold text-navyBlue ${sairaFont.className}`}>Read More</p>
                            <div className={`flex  px-1`}><IoIosArrowForward className={`text-md pt-1 mr-1`} /></div>                             
                         </div>
                        </div>
                </div>

            </div>
         <div className={`bg-white mt-5 grid sm:grid-cols-[1fr_1fr] grid-cols-[1fr] sm:gap-5 gap-3 sm:px-10 px-1  w-screen h-auto`}>
        <div className={` rounded-xl bg-lightSky shadow-xl grid sm:grid-cols-[370px_200px] grid-cols-[1fr] sm:w-auto w-[350px] gap-1 pt-5 px-5`}>
            <div className={``}>
            <h5 className={`${josefinFont.className} sm:text-3xl sm:pt-12 sm:pl-10 text-lg sm:text-darkSky text-darkSky `}>Do You Want To<br/> Sell your Car?</h5>
            <p className={`sm:text-md text-sm  ${josefinFont.className} pt-2 sm:pl-10  text-navyBlue`}>We are commited to providing our customers with <br/> excepetional services</p>
            <Link href="/SellCarForm"> <button className={`${exoFont.className} animate-pulse bg-skyBlue text-white sm:ml-10 ml-0 mt-3 pt-3 pb-3  rounded-xl sm:text-md text-sm sm:w-[150px] w-[100px] cursor-pointer`}>Get Started</button></Link>
            </div>
            <div className="">
                 <FaCarCrash size="2em" className="text-darkSky sm:text-6xl text-3xl mt-5 sm:mt-32"/>
            </div>
         </div>
         <div className={` rounded-xl bg-lightSky shadow-xl grid sm:grid-cols-[370px_200px] grid-cols-[1fr] sm:w-auto w-[350px] gap-1 pt-5 px-5`}>
            <div>
            <h5 className={`${josefinFont.className} sm:text-3xl sm:pt-12 sm:pl-10 text-lg sm:text-darkSky text-darkSky `}>Are You Looking<br/> For a Car?</h5>
            <p className={`sm:text-md text-sm  ${josefinFont.className} pt-2 sm:pl-10  text-navyBlue`}>We are commited to providing our customers with <br/> excepetional services</p>
            <Link href="/Buy"> <button className={`${exoFont.className} animate-pulse bg-skyBlue text-white sm:ml-10 ml-0 mt-3 pt-3 pb-3  rounded-xl sm:text-md text-sm sm:w-[150px] w-[100px] cursor-pointer`}>Get Started</button></Link>
            </div>
            <div className="">
                 <FaCarOn size="2em" className="text-darkSky sm:text-6xl text-3xl mt-3 sm:mb-0 mb-1 sm:mt-28"/>
            </div>
         </div>
        </div>
           


        <Footer></Footer>       
        </div>
    )

}

