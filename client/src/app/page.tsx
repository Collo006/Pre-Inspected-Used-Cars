"use client"

import { useQuery } from "@apollo/client/react";
import { gql } from "@apollo/client";
import { Car,CarsData } from "../interfaces";
import Image from "next/image";

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
    <div className="mt-40 ml-10">
      <p className="text-red-600">Good boy</p>
      <h1>CARS</h1>
      <div>
        {data.cars.map((car:Car)=>(
          <div key={car.id}>
            <p>Model:{car.model}</p>
            <p>Location:{car.location}</p>
         <Image src={car.image} alt={car.model} width={200} height={200} />
          </div>
))}
      </div>
    </div>
  );
}
