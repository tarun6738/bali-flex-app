import React from 'react'
import Image from "next/image"
import Link from "next/link"
const Herosection = ({title,imageUrl}) => {
  return (
    <>
      <main>
        <div className="bg-gradient-to-r from-pink-100 to-blue-300 h-1/2 mt-6 overflow-hidden flex">
          <div className="w-2/5 h-80 mt-40 ml-48">
              <div>
                <h1 className='font-bold text-4xl'>
                  {title}
                </h1>
              </div>
              <div className="mt-4">
                <p>
                  From award-winning dramas to blockbuster action movies, we&apos;ve got you covered. Browse our selection of latest and greatest movies, and find your new favorite today.
                </p>
                <Link href="/movie">
                <button className="mt-4 bg-black text-white w-40 rounded-xl p-2">Explore Movies</button>
                </Link>
              </div>
          </div>
          <div>
              <Image src={imageUrl} alt="homepage" width={500} height={500} className="mt-14 ml-28"/>
          </div>
        </div>
      </main>
    </>
  )
}

export default Herosection