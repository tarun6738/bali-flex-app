import React from 'react'
import Nav from "@/app/components/Nav";
import Link from 'next/link'
import Image from 'next/image'
const Header = () => {
  return (
    <header >
    <div className="flex justify-between">
      <div className="">
      <div className="flex">
        <Link href="/" className="flex">
          <Image src="/chessimg.png" alt="my logo" width={60} height={30} className="mt-4 ml-2"/>
          <h2 className='mt-6 text-4xl font-bold'>Bali Flix</h2>
        </Link>
        
        </div>

      </div>
      <div>
        <Nav/>
      </div>
      </div> 
    </header>
  )
}

export default Header
