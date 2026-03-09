 "use client";

import { Saira, Josefin_Sans } from "next/font/google";
import { useState } from "react";


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

type AccordionItem = {
  title: string;
  content: string | string[]; // string or array of strings
};

type AccordionProps = {
  title: string; // Section title like "Exterior", "Suspension", etc.
  items: AccordionItem[];
};

export default function Accordion({ title, items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);



  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };




  return (
    
    <section className=" text-navyBlue rounded-lg mb-10 sm:p-5">



      <h1 className={`text-xl font-bold sm:mb-4  text-center  ${sairaFont.className}`}>{title}</h1>

      {items.map((item, index) => (
        <article
          key={index}
          className=" cursor-pointer mb-2 pl-5 py-1  sm:ml-0 -ml-3"
          onClick={() => toggleOpen(index)}
        >
          <p className={`text-md  ${sairaFont.className}`}>{item.title}</p>
          <div
            className={`mt-2 mb-2 overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-20 pt-2" : "max-h-0 pt-0"
            }`}
          >
            <p className={`text-sm ${josefinFont.className}`}>
              {Array.isArray(item.content)
                ? item.content.join(", ")
                : item.content}
            </p>
          </div>
          <hr className={`text-navyBlue sm:mx-0 -ml-1 mx-1`}/>
        </article>
        
      ))}
    </section>
    
  );

}
