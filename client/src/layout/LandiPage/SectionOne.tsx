import { useQuery } from "@apollo/client/react";
import { gql } from "@apollo/client";
import { NewArrivalData } from "../../interfaces";
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
export default function SectionOne() {
  const { data, error, loading } = useQuery<NewArrivalData>(GET_NEW_ARRIVALS)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!data?.newarrivals || data.newarrivals.length === 0) return;

    const total = data.newarrivals.length;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        prev === total - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [data?.newarrivals]);

  if (loading) return <p>Data Loading...</p>
  if (error) return <p>Error...{error.message}</p>
  if (!data?.newarrivals) return <p>No cars to Display</p>

  return (
    <div>
      <div className="mt-2">
        <h1>NEW ARRIVALS</h1>
        <p>Find Newly Posted Cars from approved sellers</p>
      </div>
      
      <section className="mt-2 w-full flex justify-center">
        <div className="relative w-full h-[400px] overflow-hidden">
          {/* Sliding container */}
          <div 
            className="flex transition-transform duration-1000 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {data.newarrivals.map((car) => (
              <div key={car.id} className="shrink-0 w-full grid grid-cols-2">
                {/* Left image */}
                <div className="relative w-full h-full">
                  <Image 
                    src={car.image} 
                    alt={car.model} 
                    fill 
                    className="object-cover rounded-l-lg"
                  />
                </div>
                
                {/* Right Details */}
                <div className="flex flex-col justify-center p-6 bg-white h-full">
                  <div className="-mt-20 text-center">
                    <p className="text-center text-sm w-auto pt-14">Price</p>
                    <p className="text-center">
                      <span className="text-6xl">{car.price}</span>
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 pt-10 pl-10">
                    <div>
                      <p className="text-sm w-auto pl-14">Mileage</p>
                      <p><span className="text-6xl">{car.mileage}</span></p>
                    </div>
                    
                    <div>
                      <p className="text-sm w-auto pl-28">Year</p>
                      <p className="pl-16">
                        <span className="text-6xl">{car.year}</span>
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-sm w-auto pt-10 pl-14">Engine Size</p>
                      <p><span className="text-6xl">{car.engine_size}</span></p>
                    </div>
                    
                    <div>
                      <p className="pl-28 text-sm w-auto pt-10">Model</p>
                      <p className="pl-16">
                        <span className="text-6xl">{car.model}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots Indicator */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
            {data.newarrivals.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all duration-500 ${
                  index === currentIndex ? "bg-black w-4" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>



    </div>
  )
}