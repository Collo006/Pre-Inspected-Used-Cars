import { useQuery } from "@apollo/client/react";
import { gql } from "@apollo/client";
import { NewArrival,NewArrivalData } from "../interfaces";
import Image from "next/image";
import { useState, useEffect } from "react";

const GET_NEW_ARRIVALS = gql `query CarsQuery {
  newarrivals{
    id
    model
    location
    image
    price
    mileage
    year
    engine_size
  }
}
`


export default function LandingPage() {

const{data, error, loading}= useQuery<NewArrivalData>(GET_NEW_ARRIVALS)

const [currentIndex,setCurrentIndex]= useState(0)

useEffect(()=>{

    if(!data?.newarrivals || data.newarrivals.length === 0)return ;

   const total = data.newarrivals.length;

    const interval = setInterval(()=>{
        setCurrentIndex((prev)=>  
            prev === total - 1 ? 0:prev +1
    );
    }, 4000);

    return ()=> clearInterval(interval);
}, [data?.newarrivals]);

if(loading)return <p>Data Loading...</p>
if(error)return <p>Error...{error.message}</p>
if(!data?.newarrivals)return <p>No cars to Display</p>



return(
  <div>
    <div className="mt-2">
    <h1>NEW ARRIVALS</h1>
    <p>Find Newly Posted Cars from approved sellers</p>
    </div>
    <section className="mt-2 w-full flex justify-center ">
    <div className="relative grid grid-cols-2 items-center w-full h-[400px]">
        {/**Left image */}
        <div className="relative w-full h-full border border-red-600 ">
          <Image src={data.newarrivals[currentIndex].image} alt={data.newarrivals[currentIndex].model} fill className="object-cover rounded-l-lg transition-all duration-700"/>
        </div>
        {/*Right Details*/ }
        <div className="flex flex-col justify-center p-6 bg-white h-full transition-all duration-700 border border-amber-600">
         {/*<h2 className="text-2xl font-semibold mb-2">
            {data.newarrivals[currentIndex].model}
         </h2>*/}
         <div className="-mt-20 text-center ">
          <p className=" text-center text-sm w-auto pt-2">Price</p>
          <p className=" text-center"><span className="text-6xl">{data.newarrivals[currentIndex].price}</span></p>
         </div>
         <div className=" grid grid-cols-2 text-center">
          <div>
          <p className=" text-center text-sm w-auto ">Mileage</p>
          <p className=" text-center"><span className="text-6xl">{data.newarrivals[currentIndex].mileage}</span></p>
          </div>
       <div>
      <p className=" text-center text-sm w-auto ">Year</p>
          <p className=" text-center"><span className="text-6xl">{data.newarrivals[currentIndex].year}</span></p>
       </div>
       <div>
        <p className=" text-center text-sm w-auto ">Engine Size</p>
          <p className=" text-center"><span className="text-6xl">{data.newarrivals[currentIndex].engine_size}</span></p>
       </div>
       <div>
        <p className=" text-center text-sm w-auto ">Model</p>
          <p className=" text-center"><span className="text-6xl">{data.newarrivals[currentIndex].model}</span></p>
       </div>
         </div>
{/*<p> Location: {data.newarrivals[currentIndex].location}</p>
        <p> Price: {data.newarrivals[currentIndex].price}</p>
        <p> Mileage: {data.newarrivals[currentIndex].mileage}</p>
        <p> Engine Size: {data.newarrivals[currentIndex].engine_size}</p>
        <p> Year: {data.newarrivals[currentIndex].year}</p>*/}
        </div>
    {/**Dots Indicator */}
    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
     {data.newarrivals.map((_,index)=>(
        <span key={index} className={`h-2 w-2 rounded-full transition-all duration-500 ${index === currentIndex ? "bg-black w-4":"bg-gray-400"}`}></span>
     ))}
    </div>
    </div>

       
    </section>
    </div>
)
}