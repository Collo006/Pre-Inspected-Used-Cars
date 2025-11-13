'use client';

import Link from 'next/link'

export default function Header(){
 


return(
    <header className="bg-gray-600 text-amber-50 h-14 ">
            <ul className="flex justify-evenly pt-4 ">
                <li className="cursor-pointer">Logo</li>
                <li className="cursor-pointer">Buy</li>
                <li className="cursor-pointer">Sell</li>
                <li className="cursor-pointer">About</li>
              <li className="cursor-pointer" ><Link href="/SignUp">Sign Up</Link></li>
            </ul>
    </header>
)
}