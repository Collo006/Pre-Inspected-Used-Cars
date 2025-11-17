"use client"

import ImageSlider from "@/components/ImageSlider";
import SectionOne from "@/layout/LandiPage/SectionOne";
import SectionTwo from "@/layout/LandiPage/SectionTwo";
import SectionThree from "@/layout/LandiPage/SectionThree";
import SectionFour from "@/layout/LandiPage/SectionFour";
import Footer from "@/layout/Footer";
import { auth } from "../../../lib/auth";



type Session =typeof auth.$Infer.Session;
export default function UserDashBoard({session}:{session: Session}) {
 const user = session.user

  return (
<div className=" w-auto">
 
  <div className="">
<ImageSlider/>
  </div>
         <div className="text-sm border border-red-600 mt-10 ml-10">
                    <p className="text-gray-900 font-medium">{user.name}</p>
                    <p className="text-gray-500">{user.email}</p>
                  </div>
  <div>
    <SectionOne/>
    <SectionTwo/>
    <SectionThree/>
    <SectionFour/>
  </div>
  <Footer/>
</div>
  );
}

/** 
 *  <Image src={car.image} alt={car.model} width={200} height={200} />
 *   <img src="/images/car1.jpg" alt="Car" width="300" height="100" />

 */