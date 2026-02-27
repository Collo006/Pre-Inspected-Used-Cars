import { ReviewsData } from "@/interfaces"
import { gql } from "@apollo/client"
import { useQuery } from "@apollo/client/react"
import {  Josefin_Sans, Saira} from "next/font/google";
import { useEffect, useState } from "react";
import { Exo_2 } from "next/font/google";
import { TbHistoryToggle } from "react-icons/tb";
import { IoPricetagsOutline } from "react-icons/io5";
import { MdStarOutline } from "react-icons/md";



const exoFont= Exo_2({
  subsets:["latin"],
  weight:"300",
   display:"swap"

})


const josefinFont= Josefin_Sans({
  subsets:["latin"],
  weight:"400",
   display:"swap"

})


const sairaFont= Saira({
  subsets:["latin"],
  weight:"500",
   display:"swap"

})

const ALL_REVIEWS= gql `query ReviewsQuery{
    review{
        id
        name
        comment
    }
}
`


export default function SectionFour(){

const{data,error,loading}= useQuery<ReviewsData>(ALL_REVIEWS);
const[currentSlide,setCurrentSlide]=useState(0);
const reviewPerSlide=3;

const totalSlides= data?.review?.length? Math.ceil(data.review.length/ reviewPerSlide):1;


useEffect(()=>{
    if(!data?.review)return;
    const interval= setInterval(()=>{
        setCurrentSlide((prev)=> (prev + 1) % totalSlides);
    },5000); // Changed to 5 seconds for better UX
    return ()=> clearInterval(interval)
},[data,totalSlides]);

if(loading)return <p>LOADING....</p>
if(error)return <p>Error{error.message}</p>
if(!data?.review)return <p>No car data is available</p>


    return(
         <div className=" sm:ml-0 sm:w-screen w-screen sm:rounded-xl mt-5  ">



      <div className={`w-[90%] sm:w-screen sm:mx-0 mx-auto  mt-5 mb-5   `}>
      <h2 className={`sm:text-5xl text-2xl text-center sm:pb-10 pb-1 pt-5 ${josefinFont.className} text-[#000000]`}>WHY CHOOSE PINUC</h2>
      <div className={`mt-5  mx-auto grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr_1fr] sm:gap-2 gap-2  sm:w-[80%] w-[90%]  h-auto`}>
      <div className={`w-68 h-44 sm:w-68 sm:h-44 bg-white rounded-xl px-1 mt-5 ${exoFont.className} text-navyBlue`}>
      <div className={`text-center pt-1`}>
      <div className="bg-lightSky rounded-full w-12 h-12 sm:w-20 sm:h-20 mx-auto sm:-mt-10 -mt-5 flex items-center justify-center">
        <TbHistoryToggle  size="1.5em" className="text-darkSky sm:text-3xl" />
      </div><h4 className={`text-sm font-bold`}>Comprehensive History</h4>
      <p className={`text-sm`}>Accident reports, service records, and ownership history—fully uncovered so there are no surprises</p>
      
      </div>
      </div>
      <div className={`w-68 h-44 sm:w-68 sm:h-44 bg-white rounded-xl px-1 mt-5 ${exoFont.className} text-navyBlue`}>
      <div className={`text-center pt-1`}>
      <div className="bg-lightSky rounded-full w-12 h-12 sm:w-20 sm:h-20 mx-auto sm:-mt-10 -mt-5 flex items-center justify-center">
        <IoPricetagsOutline size="1.5em" className="text-darkSky sm:text-3xl" />
      </div><h4 className={`text-sm font-bold`}>No-Haggle Pricing</h4>
      <p className={`text-sm`}>The price you see is the price you pay. Fair, transparent, and stress-free</p>
      
      </div>
      </div>
      <div className={`w-68 h-44 sm:w-68 sm:h-44 bg-white rounded-xl px-1 mt-5 ${exoFont.className} text-navyBlue `}>
      <div className={`text-center pt-1`}>
      <div className="bg-lightSky rounded-full w-12 h-12 sm:w-20 sm:h-20 mx-auto sm:-mt-10 -mt-5 flex items-center justify-center">
        <MdStarOutline  size="1.5em" className="text-darkSky sm:text-3xl" />
      </div><h4 className={`text-sm font-bold`}>Detail Obsessed</h4>
      <p className={`text-sm`}>We don't just sell every used car on the market. We hand-pick vehicles that meet our high standards for performance, condition, and value</p>
      
      </div>
      </div>
      </div>
      </div>
      
          
          <div className="pt-10  w-full hidden sm:block ">
            <div className=" ">

                <h2 className={`text-center sm:text-2xl text-xl text-[#000000] ${sairaFont.className}`}>PINUC BUYERS AND SELLERS REVIEWS</h2>
                
                {/** Carousel Container */}
       {/** Carousel Container */}
                <div className="relative w-full h-[400px] mt-2 pt-5 overflow-hidden ">
                    <div className="relative flex items-center justify-center h-full">
                        {Array.from({length: totalSlides}).map((_,slideIndex)=>{
                            const commentsForThisSlide=data.review.slice(slideIndex * reviewPerSlide,(slideIndex+1)* reviewPerSlide);
                            
                            // Calculate circular position
                            let position = slideIndex - currentSlide;
                            
                            // Handle circular positions for infinite loop
                            if (position < -1) position = totalSlides + position;
                            if (position > 1) position = position - totalSlides;
                            
                            return(
                                <div 
                                    key={slideIndex} 
                                    className={`
                                        absolute transition-all duration-700 ease-in-out flex gap-5
                                        ${position === 0 ? 'z-30 opacity-100 scale-100 translate-x-0' : ''}
                                        ${position === -1 ? 'z-20 opacity-60 scale-90 -translate-x-[120%] blur-[1px]' : ''}
                                        ${position === 1 ? 'z-20 opacity-60 scale-90 translate-x-[120%] blur-[1px]' : ''}
                                        ${Math.abs(position) > 1 ? 'z-10 opacity-0 scale-75 translate-x-[200%]' : ''}
                                    `}
                                >
                                    {commentsForThisSlide.map((comments)=>(
                                        <div key={comments.id} className={`relative bg-navyBlue p-8 rounded-xl shadow-lg shadow-darkSky w-[350px] max-w-xl mx-auto text-darkSky ${josefinFont.className} `}>
                                            <div className="pl-1 pt-3">
                                                <p>{comments.name}</p>
                                                <p>{comments.comment}</p>                                    
                                            </div>
                                            <div className="flex gap-1 mt-4">
                                                <span className="text-yellow-400">★★★★★</span>
                                            </div>                                    
                                            <div className="absolute -bottom-4 left-20 w-0 h-0 border-l-20 border-t-20 border-l-transparent border-t-navyBlue"></div>
                                        </div>
                                    ))}
                                </div>
                            )
                        })}
                        
                        {/** Navigation Dots - Moved up to be more visible */}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-3 z-40 mb-4">
                            {Array.from({length: totalSlides}).map((_,index)=>(
                                <button
                                    key={index}
                                    onClick={()=>setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        index === currentSlide ? 'bg-darkSky scale-125' : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                        
                        {/** Navigation Arrows */}
                        <button 
                            onClick={()=>setCurrentSlide((prev)=> prev === 0 ? totalSlides - 1 : prev - 1)}
                            className="absolute left-10 top-1/2 transform -translate-y-1/2 z-40 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                            aria-label="Previous slide"
                        >
                            <svg className="w-6 h-6 text-darkSky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                            </svg>
                        </button>
                        
                        <button 
                            onClick={()=>setCurrentSlide((prev)=> (prev + 1) % totalSlides)}
                            className="absolute right-10 top-1/2 transform -translate-y-1/2 z-40 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                            aria-label="Next slide"
                        >
                            <svg className="w-6 h-6 text-darkSky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                            </svg>
                        </button>
                    </div>
                </div>            </div>

          </div>
         </div>
    )
}