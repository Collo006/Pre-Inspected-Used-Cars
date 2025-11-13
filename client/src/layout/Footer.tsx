export default function Footer(){
    return (
        <div className="bg-black mt-10 w-full">
         <div className=" grid grid-cols-4 text-center leading-12 text-white">
            <div className="">
                <h2>PRODUCTS</h2>
                <p>USED CARS</p>
                <p>SELL YOUR CAR</p>
            </div>
           <div>
                <h2>RESOURCES</h2>
                <p>CONTACTS</p>
                <p>BLOG</p>
                <p>FAQ</p>
            </div>
         <div>
                <h2>WORK WITH US</h2>
                <p>PARTNERS</p>
                <p>SELLERS</p>
            </div>
             <div>
                <h2>ABOUT</h2>
                <p>INVESTORS</p>
                <p>TEAM</p>
            </div>
         </div>
         <div className=" grid grid-rows-2">
           <div className="" >
            <i className="fa-regular fa-heart border border-yellow-300 rounded-xl ml-10"></i>
           </div>
           <div className="text-center text-white">
            <p> &copy; <sup>TM</sup> PINUC.All rights reserved. Vehicle photos PINUC images 2025</p>
           </div>
         </div>
        </div>
    )
}