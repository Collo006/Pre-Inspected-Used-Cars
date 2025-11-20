import { ReviewsData } from "@/interfaces"
import { gql } from "@apollo/client"
import { useQuery } from "@apollo/client/react"
import { useEffect, useRef, useState } from "react";

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
const scrollContainerRef=useRef<HTMLDivElement>(null);
const reviewPerSlide=3;

const totalSlides= data?.review?.length? Math.ceil(data.review.length/ reviewPerSlide):1;


useEffect(()=>{
    if(!data?.review || !scrollContainerRef.current)return;

    const container= scrollContainerRef.current;
    const slideWidth= container.clientWidth;
    container.scrollTo({
        left:slideWidth *currentSlide,
        behavior:"smooth",
    });
},[currentSlide,totalSlides,data])

useEffect(()=>{
    if(!data?.review)return;
    const interval= setInterval(()=>{
        setCurrentSlide((prev)=> (prev + 1) % totalSlides);
    },10000);
    return ()=> clearInterval(interval)
},[data,totalSlides]);

if(loading)return <p>LOADING....</p>
if(error)return <p>Error{error.message}</p>
if(!data?.review)return <p>No car data is available</p>


    return(
         <div className=" mt-1 w-full ">
          <div className="pt-10 w-full h-[300px] bg-black text-white">
             <h1 className="text-5xl text-center">WHY PINUC?</h1>
             <div className=" grid grid-cols-3 mt-4 text-center">
                <div className="">
                    <h2 className="text-3xl">Transparent Pricing</h2>
                    <p>No surprise here, see how much you pay on cars you like</p>
                </div>
                                <div className="">
                    <h2 className="text-3xl">Transparent Pricing</h2>
                    <p>No surprise here, see how much you pay on cars you like</p>
                </div>

                              <div className="">
                    <h2 className="text-3xl">Transparent Pricing</h2>
                    <p>No surprise here, see how much you pay on cars you like</p>
                </div>

             </div>
          </div>
          <div className="pt-10 w-full ">
            <div className="pl-5">

                <h2 className="text-center">PINUC BUYERS AND SELLERS REVIEWS</h2>
                {/** scrollable area */}
                <div className="relative w-screen left-1/2 right-1/2 -mx-[47vw] h-[200px] mt-5">

                {/** full-width container */}
                <div ref={scrollContainerRef} className="overflow-hidden w-full">
                 <div className="flex w-full">
                    {Array.from({length: totalSlides}).map((_,slideIndex)=>{
                        const commentsForThisSlide=data.review.slice(slideIndex * reviewPerSlide,(slideIndex+1)* reviewPerSlide);
                        return(
                            <div key={slideIndex} className="shrink-0 w-full flex gap-5 px-6" style={{flex: "0 0 100%"}}>
                            {commentsForThisSlide.map((comments)=>(
                                <div key={comments.id} className="bg-gray-500 rounded-lg overflow-hidden hover:shadow-lg transition duration-300 w-[500px] h-[100px]">
                                 <div className="pl-3 pt-3">
                                    <p>{comments.name}</p>
                                    <p>{comments.comment}</p>
                                 </div>
                                </div>
                            ))}
                            </div>
                        )
                    })}
                 </div>
                </div>
                </div>
            </div>

          </div>
         </div>
    )
}