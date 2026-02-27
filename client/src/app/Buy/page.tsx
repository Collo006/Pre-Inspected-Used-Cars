"use client"

import { CarsData } from "@/interfaces";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { Josefin_Sans, Saira } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LuFuel } from "react-icons/lu";
import { GiGearStickPattern } from "react-icons/gi";
import { SlSpeedometer } from "react-icons/sl"
import { IoIosArrowForward } from "react-icons/io";
import { Exo_2 } from "next/font/google";
import { FaCarOn } from "react-icons/fa6";
import { FaCarCrash } from "react-icons/fa";





const sairaFont= Saira({
    subsets:["latin"],
    weight: "500",
    display:"swap"
})

const exoFont= Exo_2({
  subsets:["latin"],
  weight:"300",
   display:"swap"

})

const sairaSmallFont= Saira({
    subsets:["latin"],
    weight: "300",
    display:"swap"
})


const josefinFont= Josefin_Sans({
    subsets:["latin"],
    weight: "500",
    display:"swap"
})
 
const GET_CARS= gql `query CarsQuery{
       cars{
        id
        location
        model
        image
        price
       }
}`

export default function Buy(){



//category filter (useState to store the results/values of the current/typed search)
const [search,setSearch]=useState("");
const [selectedModel,setSelectedModel]=useState("");
const [selectedLocation,setSelectedLocation]=useState("");
const [selectedPrice,setSelectedPrice]=useState("");





const {data,loading,error}=useQuery<CarsData>(GET_CARS)


if(loading) return <p>LOADING...</p>
if(error) return <p>Error...{error.message}</p>
if(!data?.cars) return <p>No new car available...</p>

//create dropdowns for the search criterea
const models= Array.from(new Set(data.cars.map((car)=>car.model)))
const locations= Array.from(new Set(data.cars.map((car)=>car.location)));
const prices= Array.from(new Set(data.cars.map((car)=>car.price)));

//create the filter cars
const filteredCars = data.cars.filter((car)=>{
    return(
        (!search||car.model.toLowerCase().includes(search.toLowerCase())) &&
        (!selectedModel||car.model===selectedModel) &&
        (!selectedLocation||car.location===selectedLocation)&&
        (!selectedPrice||car.price===selectedPrice)
    );
});

    return (
        <div className="w-screen bg-white">
            {/**Top Immage */}
            <div className="bg-transparent w-screen sm:h-[400px] h-[300px]  relative z-10">

                  <Image src="/images/oldies.jpg" alt="Background" fill priority  className="object-cover " />
                    <div className="absolute inset-0 bg-black/30 z-0"></div>

                            <div className="w-screen z-10 absolute sm:mt-6 sm:ml-10 mt-5 ml-1"  >  
                  <div className="flex justify-between sm:justify-end sm:flex-row  sm:gap-4 sm:pr-28 pr-3">
                    <Header/>
          </div>                       
              <p className={`${josefinFont.className} sm:text-xl text-sm text-white pt-4 sm:pt-6 `}>We uncover everything upfront helping Kenyans make safer choices.</p>
              <p className={`${josefinFont.className} sm:text-5xl text-lg sm:text-white text-white sm:pt-6 `}><span > Good Cars Do </span>Not Hide Problems</p>

    <div className="bg-transparent border border-lightSky rounded-full sm:h-[70px] flex justify-start items-center sm:w-[80%] w-screen sm:mt-5 h-auto mt-10 pt-1 -ml-1 sm:ml-0">

     {/** Search */}
          <input type="text" placeholder="Search model..." value={search}  className={` ${sairaSmallFont.className} bg-transparent text-white rounded-full sm:ml-5 ml-2 pl-2 sm:w-[290px] sm:h-[50px] w-[25%] h-auto sm:text-lg text-xs `} onChange={(e)=>setSearch(e.target.value)}/>
  
    <div className={`flex sm:justify-between justify-start sm:w-[70%] w-[30%] mt-1 sm:ml-1 ml-0 sm:pl-5 sm:pr-5 pl-0 pr-0`}>
    {/*Model*/}
    <select className={`${sairaSmallFont.className} mt-2 mb-2 sm:w-[150px] w-[100px] rounded-full text-white sm:text-lg text-xs font-extrabold`} value={selectedModel} onChange={(e)=>setSelectedModel(e.target.value)}>
       <option value="" className={` text-navyBlue`}> All Models</option>
       {(models.map((model)=>
       <option className={` text-navyBlue `} key={model} value={model}>{model}</option>))}
    </select>
    <br></br>
    {/** Location*/}
    <select className={`${sairaSmallFont.className} mt-2 mb-2 sm:w-[150px] w-[100px] rounded-full text-white sm:text-lg text-xs font-extrabold `} value={selectedLocation} onChange={(e)=>setSelectedLocation(e.target.value)}>
    <option value="" className={` text-navyBlue  `}>All Locations </option>
    {(locations.map((location)=>
    <option className={` text-navyBlue `} key={location} value={location}>{location}</option>
    ))}
    </select>
    <br></br>
        {/*Price*/}
    <select className={`${sairaSmallFont.className} mt-2 mb-2 sm:w-[150px] w-[100px] rounded-full text-white sm:text-lg text-xs font-extrabold`} value={selectedPrice} onChange={(e)=>setSelectedPrice(e.target.value)}>
    <option value="" className={` text-navyBlue `}>All Prices </option>
    {(prices.map((price)=>
    <option className={` text-navyBlue `} key={price} value={price}>{price}</option> 
    ))}
    </select>
    </div>

        </div>


            </div>   

            </div>

    
            <div className={`mt-5 text-center  sm:text-2xl text-lg`}>
                <h1 className={`${sairaFont.className} text-[#000000] `}> Select Your Best Ride </h1>
            </div>
        <div className=" sm:px-1 " >
            {/*
            */}

            <div className="mt-5 sm:px-10 grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr_1fr_1fr] pl-10 sm:gap-1 gap-2  sm:w-screen w-[90%]  h-auto bg-white ">
              {filteredCars.length === 0 && (
                <p>No cars match your filters</p>
              )}
                {filteredCars.map((car)=>(
                 
                    <div  key={car.id} className={` ${exoFont.className} bg-white border border-lightSky shadow-md rounded-xl  w-auto h-80 mb-5 cursor-pointer overflow-hidden  hover:shadow-lg transition duration-300` }>
                        <Link key={car.id} href={`/cars/${car.id}`}>
                         <div className={`relative w-auto sm:w-auto h-44 sm:h-52 rounded-lg`}>
                          <Image src={car.image} alt={car.model} fill className={`w-full h-full rounded-t-xl object-cover`}            
/>
                        </div>
                        </Link>
                        <div className={`pt-1 px-3`}>
                         <h3 className={`text-sm text-navyBlue text-bold ${josefinFont.className}`}>{car.model} -2019</h3>
                         <hr className="my-1 pt-1 text-lightSky"/>
<div className={`grid grid-cols-3 gap-1`}>
<div className=" mx-auto"><SlSpeedometer  className="text-yellow-500 text-md"/><h6 className={`text-xs -ml-2`}>1500km</h6></div>
<div className=" mx-auto"><LuFuel className="text-blue-500 text-md"/><h6 className={`text-xs -ml-2`}>Petrol</h6></div>
<div className=" mx-auto"><GiGearStickPattern  className="text-green-500 text-md"/><h6 className={`text-xs -ml-2`}>Automatic</h6></div>
</div>
<hr className="my-1 pt-1 text-lightSky"/>

                         <div className={`flex justify-between pt-1 ${josefinFont.className}`}>
                           
                             <p className={`text-sm font-bold text-navyBlue ${josefinFont.className}`}>  Ksh.{car.price.toLocaleString()}</p>
                                 <div className={`flex  px-1`}><p className={`text-sm`}>View details</p><IoIosArrowForward className={`text-md pt-1 mr-1`} /></div> 
                             
                         </div>
                        </div>
                    </div>
                  
                ))}
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