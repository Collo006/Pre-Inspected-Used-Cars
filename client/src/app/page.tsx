"use client"

import { useQuery } from "@apollo/client/react";
import { gql } from "@apollo/client";
import { Car,CarsData } from "../interfaces";
import Image from "next/image";
import Header from "@/layout/Header";
import ImageSlider from "@/components/ImageSlider";
import SectionOne from "@/layout/LandiPage/SectionOne";
import SectionTwo from "@/layout/LandiPage/SectionTwo";

const GET_CARS = gql `query CarsQuery {
  cars{
    id
    model
    location
    image
  }
}
`

export default function Home() {

  const{data,error,loading}= useQuery<CarsData>(GET_CARS)

  if(loading) return <p>DATA LOADING....</p>
  if(error) return <p>Error...{error.message}</p>
  if(!data?.cars) return <p>No cars to display</p>

  return (
<div className=" w-auto">
  <Header></Header>
  <div className="">
<ImageSlider/>
  </div>
  <div>
    <SectionOne/>
    <SectionTwo/>
  </div>
</div>
  );
}

/** 
 *  <Image src={car.image} alt={car.model} width={200} height={200} />
 *   <img src="/images/car1.jpg" alt="Car" width="300" height="100" />

 */