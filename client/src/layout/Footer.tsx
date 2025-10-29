export default function Footer(){
    return (
        <div className="border border-red-600 mt-10 w-full">
         <div className="border border-green-700 grid grid-cols-4 text-center">
            <div>
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
         <div className="border border-red-600 grid grid-rows-2">
           <div >
            
           </div>
           <div className="text-center">
            <p> &copy;<sup>TM</sup>PINUC.All rights reserved. Vehicle photos PINUC images 2025</p>
           </div>
         </div>
        </div>
    )
}