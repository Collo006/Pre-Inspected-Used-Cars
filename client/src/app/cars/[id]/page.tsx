"use client"

import { GET_CAR_BY_ID, SpecificCarData } from "@/interfaces";
import Image from "next/image";
import { useQuery } from "@apollo/client/react";
import { use, useState} from "react";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import OtherVehicles from "@/components/OtherVehicles";
import Accordion from "@/components/Accordion";
import { Saira, Josefin_Sans } from "next/font/google";
import { TbWashDryFlat } from "react-icons/tb";
import { IoPersonSharp } from "react-icons/io5";
import { SlSpeedometer } from "react-icons/sl";
import { PiEngineBold } from "react-icons/pi";
import { HiDocumentReport } from "react-icons/hi";
import { SiGoogleearthengine } from "react-icons/si";
import { LuFuel } from "react-icons/lu";
import { MdAppRegistration } from "react-icons/md";
import { MdOutlineColorize } from "react-icons/md";
import { IoDocumentsSharp } from "react-icons/io5";
import { GiTripleScratches } from "react-icons/gi";
import { GoReport } from "react-icons/go";
import { FaBook,FaLocationDot } from "react-icons/fa6";
import SectionThree from "@/components/OtherVehicles";

const sairaFont= Saira({
    subsets:["latin"],
    weight: "500",
    display:"swap"
})



const josefinFont= Josefin_Sans({
    subsets:["latin"],
    weight: "500",
    display:"swap"
})

type PageProps = {
  params:Promise<{id:string}>
};


export default function CarDetailsPage({ params }: PageProps) {  

  const [searchQuery, setSearchQuery] = useState("");  
const {id} = use(params) // ✅ unwrap params (REQUIRED in Next 15+)
 
  const { data,loading,error } =useQuery<SpecificCarData>( GET_CAR_BY_ID, {variables: { id }});

  if(loading)return <p>Loading....</p>
  if(error) return <p>Error: {error.message}</p>;
  if (!data?.specific_car) return <p>Car not found</p>;

  const car = data.specific_car;

  // Exterior data
const exteriorItems = [
  { title: "Doors", content: car.specific_car_exterior.doors },
  { title: "Paint", content: car.specific_car_exterior.paint },
  { title: "Wipers", content: car.specific_car_exterior.wipers },
  { title: "WindScreen", content: car.specific_car_exterior.windscreen },
  { title: "Headlights", content: car.specific_car_exterior.headlights },
  { title: "Windows", content: car.specific_car_exterior.windows },
  { title: "Bumper", content: car.specific_car_exterior.bumper },
  { title: "Side Mirrors", content: car.specific_car_exterior.side_mirrors },
  {
    title: "Transmission Engine",
    content: car.specific_car_exterior.transmission_engine,
  },
];

// Suspension data
const suspensionItems = [
  { title: "Arms Suspension", content: car.specific_car_suspension.arms_suspension },
  { title: "Axels", content: car.specific_car_suspension.axels },
  { title: "Ball Joints", content: car.specific_car_suspension.ball_joints },
  { title: "Brake Pads", content: car.specific_car_suspension.brake_pads },
  { title: "Braking System", content: car.specific_car_suspension.braking_system },
  { title: "Bushes", content: car.specific_car_suspension.bushes },
  { title: "Mounting", content: car.specific_car_suspension.mounting },
  { title: "Shock Absorbers", content: car.specific_car_suspension.shock_absorbers },
];

//Interior data
const interiorItems = [
  { title: "Air Conditioner", content: car.specific_car_interior.air_conditioner },
  { title: "Dashboard", content: car.specific_car_interior.dashboard },
  { title: "Electrical System", content: car.specific_car_interior.electrical_system },
  { title: "Infotainment", content: car.specific_car_interior.infotainment },
  { title: "Mats", content: car.specific_car_interior.mats },
  { title: "Roof", content: car.specific_car_interior.roof },
  { title: "Seats", content: car.specific_car_interior.seats },
  { title: "Switches", content: car.specific_car_interior.switches },
];

// Accessories data
const accessoriesItems = [
  { title: "Jack & Spanner", content: car.specific_car_accessory.jack_spanner },
  { title: "Spare Wheel", content: car.specific_car_accessory.spare_wheel },
];

//Tires data
const tiresItems = [
  { title: "Left Front", content: car.specific_car_tire.left_front },
  { title: "Right Front", content: car.specific_car_tire.right_front },
  { title: "Left Rear", content: car.specific_car_tire.left_rear },
  { title: "Right Rear", content: car.specific_car_tire.right_rear },
]

const filterItems = (items: typeof exteriorItems) =>
  items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

const filteredExteriorItems = filterItems(exteriorItems);
const filteredSuspensionItems = filterItems(suspensionItems);
const filteredInteriorItems = filterItems(interiorItems);
const filteredAccessoriesItems = filterItems(accessoriesItems);
const filteredTiresItems = filterItems(tiresItems);


  return (
    <main className={`bg-white`}>
            <header className="bg-transparent w-screen sm:h-[400px] h-[300px]  relative z-10">
                        <Image src={car.image} alt="front"  fill priority  className="object-cover " />
                          <div className="absolute inset-0 bg-black/30 z-0"></div>
      
                                  <div className="w-screen z-10 absolute sm:mt-10 sm:ml-10 mt-5 ml-1"  >  
                        <div className="flex justify-between sm:justify-end sm:flex-row  sm:gap-4 sm:pr-28 pr-3">
                          <Header/>
                </div>                       
                    <h1 className={`${josefinFont.className} sm:text-4xl text-lg sm:text-white text-white sm:pt-6 `}><span >{car.unit_car.year} {car.model} </span></h1>
                    <h1 className={` sm:text-6xl pt-5 text-4xl font-bold ${josefinFont.className} sm:text-white text-white`}>KSH.{car.unit_car.price}</h1>
                  </div>   
      
                  </header>

      {/**Showcase Images */}
      <section className="w-screen sm:px-10  px-1 bg-[#fff]  ml-0 "> 
          <div className={`sm:grid sm:grid-cols-[1fr_1fr] grid-cols-[1fr] sm:gap-1 mt-5   `}>
            <div className={` sm:mb-10 mb-2 relative h-[450px] `}>
          <Image src={car.specific_car_exterior.left} alt="left"  fill priority  className="object-cover w-[300px] h-[500px] "/>
            </div>
            <div className={`sm:grid sm:grid-cols-[1fr] sm:gap-1 mb-10 grid grid-cols-1 gap-1`}>
              <div className={` relative h-[250px]`}>
                <Image src={car.specific_car_exterior.front} alt="front" fill priority  className="object-cover  h-[200px] "/>
              </div> 
              <div className={`grid grid-cols-[1fr] gap-1  `}>
                <div className={` relative h-[200px]`}>
                <Image src={car.specific_car_exterior.rear} alt="rear" fill priority  className={`object-cover  h-[200px]`} />
                </div>
              </div>
            </div>
          </div>
      </section>
      <hr className={`mx-7  text-lightSky`}/>
      
      {/**Specifications */}
      <section className={`w-screen sm:px-10  bg-[#fff] mt-1  ml-0`}>
       <div className={`bg-white text-navyBlue rounded-lg sm:p-5 sm:mb-1 mb-5 sm:flex sm:justify-evenly grid grid-cols-[1fr_1fr]  ${josefinFont.className}`}>
        <div className={`grid grid-cols-[50px_150px]`}>
        <div className={` flex items-center justify-center `}><SlSpeedometer className="text-darkSky sm:text-3xl text-xl"/></div>
        <div className={` pt-3`}><p ><span className={`sm:text-lg text-sm`}>Mileage:</span><br></br> <span className={`sm:text-lg text-sm font-bold `}>{car.unit_car.mileage} Kms</span></p>
        </div>
        </div>

          <div className={`grid grid-cols-[50px_150px]`}>
        <div className={`flex items-center justify-center `}><PiEngineBold className="text-darkSky sm:text-3xl text-xl"/></div>
        <div className={`pt-3`}><p ><span className={`sm:text-lg text-sm`}>Engine Size:</span><br></br> <span className={`sm:text-lg text-sm font-bold `}>{car.unit_car.engine_size}</span></p>
        </div>
        </div>

        <div className={`grid grid-cols-[50px_150px]`}>
        <div className={`flex items-center justify-center `}><SiGoogleearthengine className="text-darkSky sm:text-3xl text-xl"/></div>
        <div className={`pt-3`}><p ><span className={`sm:text-lg text-sm`}>Engine Power:</span><br></br> <span className={`sm:text-lg text-sm font-bold `}>{car.unit_car.engine_power}</span></p>
        </div>
        </div>

        <div className={`grid grid-cols-[50px_150px]`}>
        <div className={`flex items-center justify-center `}><LuFuel  className="text-darkSky sm:text-3xl text-xl"/></div>
        <div className={`pt-3`}><p ><span className={`sm:text-lg text-sm`}>Fuel:</span><br></br> <span className={`sm:text-lg text-sm font-bold `}>{car.unit_car.fuel}</span></p>
        </div>
        </div>
   
        <div className={`grid grid-cols-[50px_150px]`}>
        <div className={`flex items-center justify-center `}><MdAppRegistration  className="text-darkSky sm:text-3xl text-xl"/></div>
        <div className={`pt-3`}><p ><span className={`sm:text-lg text-sm`}>Reg No:</span><br></br> <span className={`sm:text-lg text-sm font-bold `}>{car.unit_car.reg_no}</span></p>
        </div>
        </div>

        <div className={`grid grid-cols-[50px_150px]`}>
        <div className={`flex items-center justify-center `}><MdOutlineColorize className="text-darkSky sm:text-3xl text-xl"/></div>
        <div className={`pt-3`}><p ><span className={`sm:text-lg text-sm`}>Color:</span><br></br> <span className={`sm:text-lg text-sm font-bold `}>{car.unit_car.color}</span></p>
        </div>
        </div>
      
       </div>
       </section>
<hr className={`mx-7 text-lightSky`}/>
      <section className="mt-5 grid grid-cols-1 sm:grid-cols-[1.5fr_1fr] h-auto  "> 
        <div className={` h-auto`}>
             {/*About*/}
        <h2 className={`sm:text-xl text-lg font-bold  mb-1 sm:p-4 p-1  ${sairaFont.className} text-[#000000]`}>Introducing the {car.unit_car.year} {car.model}</h2>
         <article className={ ` text-[#000000] rounded-lg sm:px-5 px-1  ${sairaFont.className}`}>
              <p className={` sm:text-sm text-xs  `}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,<br/> but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>   
       </article>
         {/**Car History */}
      <article className={`  bg-[#fff] rounded-xl ml-0 pb-5`}>
        <h2 className={`sm:text-xl text-lg font-bold  mb-1 sm:p-4 p-1  ${sairaFont.className} text-darkSky`}>History</h2>
      <div className={`sm:ml-1 ml-0`}>
       <div className={` text-navyBlue sm:px-5 rounded-lg sm:grid sm:grid-cols-[1fr_1fr_1fr] grid grid-cols-[1fr_1fr] gap-1 ${josefinFont.className}`}>
        <div className={`grid grid-cols-[50px_150px]`}>
        <div className={`flex items-center justify-center `}><IoDocumentsSharp  className="text-darkSky sm:text-3xl text-xl"/></div>
        <div className={`pt-3`}><p ><span className={`sm:text-lg text-sm`}>Insurance:</span><br></br> <span className={`sm:text-lg text-sm font-bold `}>{car.specific_car_history.insurance_write_off}</span></p>
        </div>
        </div>
  <div className={`grid grid-cols-[50px_150px]`}>
        <div className={`flex items-center justify-center `}><GiTripleScratches className="text-darkSky sm:text-3xl text-xl"/></div>
        <div className={`pt-3`}><p ><span className={`sm:text-lg text-sm`}>Not Scrapped:</span><br></br> <span className={`sm:text-lg text-sm font-bold `}>{car.specific_car_history.not_scrapped}</span></p>
        </div>
        </div>
<div className={`grid grid-cols-[50px_150px]`}>
        <div className={`flex items-center justify-center `}><GoReport className="text-darkSky sm:text-3xl text-xl"/></div>
        <div className={`pt-3`}><p ><span className={`sm:text-lg text-sm`}>Stolen Report:</span><br></br> <span className={`sm:text-lg text-sm font-bold `}>{car.specific_car_history.not_stolen}</span></p>
        </div>
        </div>
        <div className={`grid grid-cols-[50px_150px]`}>
        <div className={`flex items-center justify-center `}><TbWashDryFlat className="text-darkSky sm:text-3xl text-xl"/></div>
        <div className={`pt-3`}><p ><span className={`sm:text-lg text-sm`}>Original Plate:</span><br></br> <span className={`sm:text-lg text-sm font-bold `}>{car.specific_car_history.original_plate}</span></p>
        </div>
        </div>
 <div className={`grid grid-cols-[50px_150px]`}>
        <div className={`flex items-center justify-center `}><MdOutlineColorize className="text-darkSky sm:text-3xl text-xl"/></div>
        <div className={`pt-3`}><p ><span className={`sm:text-lg text-sm`}>Original Color:</span><br></br> <span className={`sm:text-lg text-sm font-bold `}>{car.specific_car_history.original_color}</span></p>
        </div>
        </div>
     
  <div className={`grid grid-cols-[50px_150px]`}>
        <div className={`flex items-center justify-center `}><IoPersonSharp className="text-darkSky sm:text-3xl text-xl"/></div>
        <div className={`pt-3`}><p ><span className={`sm:text-lg text-sm`}>Latest Owner:</span><br></br> <span className={`sm:text-lg text-sm font-bold `}>{car.specific_car_history.latest_owner}</span></p>
        </div>
        </div>
        <div className={`grid grid-cols-[50px_150px]`}>
        <div className={`flex items-center justify-center `}><HiDocumentReport className="text-darkSky sm:text-3xl text-xl"/></div>
        <div className={`pt-3`}><p ><span className={`sm:text-lg text-sm`}>Inspection Report:</span><br></br> <span className={`sm:text-lg text-sm font-bold `}>{car.specific_car_history.inspection_report}</span></p>
        </div>
        </div>
         <div className={`grid grid-cols-[50px_150px]`}>
        <div className={`flex items-center justify-center `}><FaBook className="text-darkSky sm:text-3xl text-xl"/></div>
        <div className={`pt-3`}><p ><span className={`sm:text-lg text-sm`}>Log Book:</span><br></br> <span className={`sm:text-lg text-sm font-bold `}>{car.specific_car_history.log_book}</span></p>
        </div>
        </div>

       </div>

      </div>
       </article>
        </div>

        <section className={` h-auto  sm:mx-6  ${josefinFont.className} `}>
          <p className={`pt-3 text-darkSky pl-4 sm:text-lg text-md`}>Seller Location</p>
          <p className={`sm:text-md text-sm pl-4 pb-1 flex tracking-wider`}><span ><FaLocationDot className="text-darkSky text-lg"/></span>
          <span className={``}>{car.location}</span>
          </p>
          <div className={`w-full h-[300px] relative sm:ml-0 ml-1`}>
           <Image src="/images/map.png" alt="map" fill className="object-cover rounded-lg"/>
          </div>
          <div className={``}>
          <p className={`pt-3 text-darkSky pl-4 text-lg `}>Seller Information</p>
           <div className={`  grid grid-rows-2 pl-4 text-navyBlue  mb-3   `}>
              <p>Name</p>
              <p>{car.specific_seller_contact.name}</p>
           </div>
                  <hr className={`sm:mx-1 sm:-mt-1 mx-3  text-lightSky`}/>
           <div className={`  grid grid-rows-2 pl-4 text-navyBlue  mb-3 mt-3  `}>
              <p>Email</p>
              <p>{car.specific_seller_contact.email}</p>
           </div>
                  <hr className={`sm:mx-1 sm:-mt-1 mx-3  text-lightSky`}/>
           <div className={`grid grid-rows-2 pl-4 text-navyBlue rounded-lg mt-3  `}>
              <p>Phone</p>
              <p>{car.specific_seller_contact.phone}</p>
           </div>
          </div>
        </section>
      </section>
     
        {/** Accordion for Full Report */}
              <section className={`w-screen bg-[#fff] mt-10 rounded-xl ml-0 sm:-ml-2 px-5`}>
               <h1 className={`sm:text-2xl text-lg font-bold text-center ${sairaFont.className} text-[#000000]`}>View Full Profile</h1>
        {/** Search Bar */}
  <div className=" sm:ml-12  ml-1 mb-4 flex justify-center">
    <input
      type="text"
      placeholder="Search for a part..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="border text-sm border-gray-300 rounded-lg p-2 w-[400px]"
    />
  </div>


       <article className={`bg-lightSky  text-navyBlue  rounded-lg sm:p-5 p-1 mb-5 grid sm:grid-cols-[1fr_1fr] grid-cols-[1fr] gap-1`}>
      <Accordion title="Exterior" items={filteredExteriorItems} />
<Accordion title="Suspension" items={filteredSuspensionItems} />
       </article>
              <article className={`bg-lightSky  text-navyBlue  rounded-lg sm:p-5 p-1 mb-5 grid sm:grid-cols-[1fr_1fr] grid-cols-[1fr] gap-1`}>
       <Accordion title="Interior" items={filteredInteriorItems} />
<Accordion title="Accessories" items={filteredAccessoriesItems} />
<Accordion title="Tires" items={filteredTiresItems}/>
</article>
  </section>
         {/*Other Vehicles*/ }
         
       <section className="mt-5 sm:-ml-2">
<SectionThree />
       </section>

       <footer>
  <Footer></Footer>
       </footer>
    </main>
  );
}
