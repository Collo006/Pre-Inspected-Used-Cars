import type { Metadata } from "next";
import "./globals.css";
import ApolloWrapper from "@/components/ApolloWrapper";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Pre-Inspected Used Cars Kenya | #1 Pre-Owned Vehicle Dealer in Nairobi",
  description:  "Find quality inspected used cars in Kenya. Browse 50+ pre-owned vehicles in Nairobi including Toyota, Nissan, BMW & Subaru. All cars verified & ready for test drive.",
  keywords: ["used cars Kenya", 
    "inspected used cars Nairobi", 
    "pre-owned vehicles Kenya", 
    "buy used cars Nairobi", 
    "Toyota used cars Kenya", 
    "Nissan used cars Kenya", 
    "BMW used cars Kenya", 
    "Subaru used cars Kenya",
    "Mercedes used cars Kenya", 
    "Suzuki used cars Kenya"],
  openGraph:{
    title: "Pre-Inspected Used Cars Kenya | #1 Pre-Owned Vehicle Dealer in Nairobi Kenya",
    description: "Find quality inspected used cars in Kenya. Browse 50+ pre-owned vehicles in Nairobi including Toyota, Nissan, BMW & Subaru. All cars verified & ready for test drive.",
    siteName: "Pre-Inspected Used Cars Kenya",
   url: "https://pre-inspected-used-cars-git-master-collins-projects-3eca33c8.vercel.app/",
   images:[
    {
      url:'https://pre-inspected-used-cars-git-master-collins-projects-3eca33c8.vercel.app/images/PINUC .png',
      width: 1200,
      height: 630,
      alt: "Pre-Inspected Used Cars Kenya Logo"
    }
   ],
   locale: "en_KE",
    type: "website"
  },
  twitter:{
    card:"summary_large_image",
    title: "Pre-Inspected Used Cars Kenya | #1 Pre-Owned Vehicle Dealer in Nairobi Kenya",
    description: "Find quality Pre-Inspected used cars in Kenya. Browse 50+ pre-owned vehicles in Nairobi including Toyota, Nissan, BMW & Subaru. All cars verified & ready for test drive.",
    creator:"@PreInspectedCarsKE",
    images:[
      {
        url:"https://pre-inspected-used-cars-git-master-collins-projects-3eca33c8.vercel.app/images/PINUC .png",
        width: 1200,
        height: 630,
        alt: "Pre-Inspected Used Cars Kenya Logo"
      }
     ]
  },
  robots:{
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  }
};


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

 console.log('Layout rendering on:', typeof window === 'undefined' ? 'server' : 'client');


  return (
    <html lang="en" className="overflow-x-hidden bg-white">
     
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" />
      
      <body className="bg-lightGray">
        <ApolloWrapper>
            {children}
        </ApolloWrapper>
        
      </body>
    </html>
  );
}
