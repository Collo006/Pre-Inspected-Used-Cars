import { SpecialCarDealData } from "@/interfaces";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const SPECIAL_CARS = gql`
  query SpecialCarsQuery {
    special_car_deals {
      id
      model
      year
      price
      mileage
      image
    }
  }
`;

export default function SectionTwo() {
  const { data, error, loading } = useQuery<SpecialCarDealData>(SPECIAL_CARS);
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const carsPerSlide = 5;

  const totalSlides = data?.special_car_deals?.length
    ? Math.ceil(data.special_car_deals.length / carsPerSlide)
    : 1;

  useEffect(() => {
    if (!data?.special_car_deals || !scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const slideWidth = container.clientWidth;
    container.scrollTo({
      left: slideWidth * currentSlide,
      behavior: "smooth",
    });
  }, [currentSlide, totalSlides, data]);

  /*useEffect(() => {
    if (!data?.special_car_deals) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 100000);
    return () => clearInterval(interval);
  }, [data, totalSlides]);*/

  if (loading) return <p className="text-center py-10">Loading cars...</p>;
  if (error)
    return (
      <p className="text-center py-10 text-red-600">
        Error: {error.message}
      </p>
    );
  if (!data?.special_car_deals?.length)
    return <p className="text-center py-10">No car data available</p>;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <div className="mt-20 py-10 bg-gray-50">
      <section className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-10">
          Special Car Deals
        </h1>
      </section>

      {/* Full-screen scrollable area */}
      <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw]">
        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 z-10 transition"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 z-10 transition"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/*  Edge-to-edge full-width container */}
        <div ref={scrollContainerRef} className="overflow-hidden w-full">
          <div className="flex w-full">
            {Array.from({ length: totalSlides }).map((_, slideIndex) => {
              const carsForThisSlide = data.special_car_deals.slice(
                slideIndex * carsPerSlide,
                (slideIndex + 1) * carsPerSlide
              );

              return (
                <div
                  key={slideIndex}
                  className="shrink-0 w-full flex gap-4 px-6"
                  style={{ flex: "0 0 100%" }}
                >
                  {carsForThisSlide.map((car) => (
                    <div
                      key={car.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 w-[20%] min-w-[200px]"
                    >
                      <div className="relative h-52">
                        <Image
                          src={car.image}
                          alt={car.model}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {car.model}
                        </h3>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p>Year: {car.year}</p>
                          <p>Mileage: {car.mileage.toLocaleString()} miles</p>
                          <p className="text-lg font-bold text-green-600">  ${car.price.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dots */}
      <section className="max-w-7xl mx-auto mt-8 flex justify-center space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide
                ? "bg-blue-600"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </section>
      
      <section className=" mt-10 h-auto">
          <div className="grid grid-cols-2 ">
           <div className=" rounded-xl mt-2 ml-2 h-[700px] w-[500px]">
                          <div className="relative h-[700px] w-[500px]">
            <Image src="/images/keys-1.jpg" alt="Keys" fill   className="rounded-xl object-cover" />
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center ">
             <p className="text-5xl pt-20 text-black"></p>
             </div>
            </div>
           </div>
           <div className=" grid grid-rows-2 -ml-80">
            <div className=" grid grid-cols-2 mt-2 ">
            <div className="h-[300px] w-[600px] rounded-xl " >
                          <div className="relative h-[300px] w-[600px]">
            <Image src="/images/handing-docs.jpg" alt="Keys" fill   className="rounded-xl object-cover" />
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center ">
             <p className="text-5xl pt-20 text-black"></p>
             </div>
            </div>

            </div>
            <div className="h-[300px] w-[550px] rounded-xl ml-7 ">
                           <div className="relative h-[300px] w-[550px]">
            <Image src="/images/motocycles.jpg" alt="Keys" fill  className="rounded-xl object-cover" />
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center ">
             <p className="text-5xl pt-20 text-black"></p>
             </div>
            </div>
            </div>
           </div>
           <div className=" h-[394px] w-full  -mt-10 -ml-1 rounded-xl">
                   <div className="relative h-[394px] w-full">
            <Image src="/images/customer.jpeg" alt="Keys" fill  className="rounded-xl object-cover " />
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center ">
             <p className="text-5xl pt-20 text-black"></p>
             </div>
            </div>

           </div>
           </div>
          </div>
        </section>
    </div>
  );
}
