import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Moviecard = (curElem) => {
  const {id,type,title,synopsis}=curElem.jawSummary;
  const synopsisStyle = {
    display: '-webkit-box',
    WebkitLineClamp: 3, 
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };
  const titleStyle = {
    display: '-webkit-box',
    WebkitLineClamp: 1, 
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };
  return (
    <>
    
      <div className="mt-2 border border-gray-300 shadow-lg p-4 w-72">
          <div>
            <Image src={curElem.jawSummary.backgroundImage.url} alt={title} width={250} height={200}/>
          </div>
          <div>
            <h2 style={titleStyle} className='font-bold text-2xl mt-1'>{title}</h2>
            <p style={synopsisStyle} className='mt-1'>{synopsis}</p>
            <Link href="/movie/${id}">
              <button className='mt-4 bg-black text-white w-36 rounded-xl p-1'>
                Read More
              </button>
            </Link>
          </div>
      </div>
      
    </>
  )
}

export default Moviecard