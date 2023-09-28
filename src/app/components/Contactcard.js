 import React from 'react'
 import Link from "next/link"
 import { MdEmail, MdVoiceChat, MdForum } from "react-icons/md";
 const Contactcard = () => {
   return (
     <>
        <div className='mt-10 flex justify-between'>
          <div className='w-96 h-72 border p-4 flex flex-col items-center ml-24'>
            <div><i className="text-red-500 text-5xl"><MdEmail/></i></div>
            <h2 className='text-2xl font-bold mt-2'>Email</h2>
            <p className='mt-3'>Moday to Friday Expected</p>
            <p>Response time : 72 hours</p>
            <Link href="/movie" > <button className='mt-3'>Send Email </button><span>-&gt;</span></Link>
          </div>
          <div className='w-96 h-72 border p-4 flex flex-col items-center'>
            <i className="text-red-500 text-5xl"><MdVoiceChat/></i>
            <h2 className='text-2xl font-bold mt-2'>Live Chat</h2>
            <p className='mt-3'>Weekdays: 9 AM - 6 PM IST</p>
            <p>Weekends: 9 AM - 5 PM IST</p>
            <Link href="/movie"><button className='mt-3'>Live Chat </button><span>-&gt;</span></Link>
          </div>
          <div className='w-96 h-72 border p-4 flex flex-col items-center mr-24'>
            <i className="text-red-500 text-5xl "><MdForum/></i>
            <h2 className='text-2xl font-bold mt-2'>Community Forum</h2>
            <p className='mt-3'>Moday to Friday Expected</p>
            <p>Response time : 72 hours</p>
            <Link href="/movie"> <button className='mt-3'>Community Forum </button><span>-&gt;</span></Link>
          </div>
        </div>
     </>
   )
 }
 
 export default Contactcard