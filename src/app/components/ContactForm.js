"use client"
import React from 'react'
import { useState } from 'react'
const ContactForm = () => {
  const [user,setUser]=useState({
    username:"",
    email:"",
    phone:"",
    message:""
  })
  function handleChange(e){
      const username=e.target.name;
      const value=e.target.value;
      setUser((prevuser)=>({...prevuser,[username]:value}));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('/api/contact', {
            method:'POST',
            headers:{"Content_Type":"application/json"},
            body: JSON.stringify({
                username:user.username,
                email:user.email,
                phone:user.phone,
                message:user.message
            })
        })
        // Set the status based on the response from the API route
        if (response.status === 200) {
            setUser({
                username: "",
                email: "",
                phone: "",
                message: ""
            })
            setStatus('success');
        } else {
            setStatus('error');
        }

    }catch (e) {
        console.log(e)
    }

}
  
  return (
    <>
      <div className="flex flex-col items-center ">
        <h1 className="text-4xl">We&apos;d love to hear <span className="text-red-600">from you</span></h1>
        <div>
        <form className="w-80 justify-center mt-8" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Enter your name:</label>
          <input type="text" id="username" name="username" className="w-full border rounded-md p-2 " placeholder="John Doe" value={user.username} onChange={handleChange}/>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input type="email" id="email" name="email" className="w-full border rounded-md p-2" placeholder="johndoe@example.com" value={user.email} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700">Phone number:</label>
          <input type="tel" id="phone" name="phone" className="w-full border rounded-md p-2" placeholder="123-456-7890" value={user.phone} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">Message:</label>
          <textarea id="message" name="message" rows="4" className="w-full border rounded-md p-2" placeholder="Your message here" value={user.message} onChange={handleChange}></textarea>
        </div>
        <button type="submit" className="mt-4 bg-black text-white w-40 rounded-xl p-2">Send Message</button>
      </form>
        </div>
      </div>
    </>
  )
}

export default ContactForm;