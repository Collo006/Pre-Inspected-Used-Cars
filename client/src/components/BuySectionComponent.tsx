import { CarsData } from "@/interfaces";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { LuFuel } from "react-icons/lu";
import { GiGearStickPattern } from "react-icons/gi";
import { SlSpeedometer } from "react-icons/sl"
import { IoIosArrowForward } from "react-icons/io";
import { Exo_2 } from "next/font/google";


const exoFont= Exo_2({
  subsets:["latin"],
  weight:"300",
   display:"swap"

})




const josefinFont= Josefin_Sans({
    subsets:["latin"],
    weight: "500",
    display:"swap"
})

const GET_CARS=gql`query CarsQuery{
    cars{
        id
        location
        model
        image
        price
    }
}`

export default function BuySectionComponent(){
    const {data,loading,error}=useQuery<CarsData>(GET_CARS);

    if(loading)return <p>Loading...</p>
    if(error)return<p>Error...{error.message}</p>
    if(!data?.cars)return <p>No cars available...</p>

    return(
           <div className="mt-5 sm:px-10 grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr_1fr_1fr] pl-10 sm:gap-1 gap-2  sm:w-screen w-[90%]  h-auto bg-white " >
             {data.cars.map((car)=>(
                <div key={car.id}  className={` ${exoFont.className} bg-white border border-lightSky shadow-md rounded-xl  w-auto h-80 mb-5 cursor-pointer overflow-hidden  hover:shadow-lg transition duration-300` }>
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
    )
}