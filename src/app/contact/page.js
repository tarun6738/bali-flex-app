import React from 'react'

import Contactcard from '../components/Contactcard'
import ContactForm from '../components/ContactForm'
const Contact = () => {
  return (
    <>
      <h1 className="text-5xl font-bold text-center mt-6">Contact Us</h1>
      <Contactcard/>
      <ContactForm/>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5302249163587!2d78.38422447452652!3d17.434318201452665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91582df01059%3A0x251ba563cf68a86f!2sInorbit%20Mall%2C%20Madhapur%2C%20Opp.%201%20-%20Lab%20Building%2C%20Inorbit%20Mall%20Rd%2C%20Mind%20Space%2C%20Vittal%20Rao%20Nagar%2C%20Madhapur%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1695881612243!5m2!1sen!2sin" width={100} height={450} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full mt-9'></iframe>
    </>
  )
}

export default Contact