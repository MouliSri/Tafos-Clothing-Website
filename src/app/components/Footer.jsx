"use client"; // This is a client component 👈🏽
import React from 'react'
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai"

export const Footer = () => {
  return (
    <div className='  py-10  md:text-center text-center bg-black text-white w-full '>
      <p className=' text-gray-500  '>@TAFOSCLOTHINGS 2023</p>
     
      <div className=' text-gray-500 mt-5 uppercase'>
      <a href='https://goo.gl/maps/BfW7xzW6TJiZ4ewF7?coh=178571&entry=tt'>Address  : 
        <span  className='text-md text-gray-500'>Iduvai , Tirupur</span>
      <p>Pincode :<span className='text-md text-gray-500'> 641687</span></p>
      </a>
      </div>
      <div className=' flex-row text-3xl flex justify-center gap-5 py-3 text-gray-300 mt-5'>
      <AiOutlineInstagram className='text-pink-800 hover:scale-150 rounded-3xl'/>
      <AiOutlineFacebook  className='text-blue-400 hover:scale-150 rounded-3xl'/>
      <AiOutlineWhatsApp  className='text-green-400 hover:scale-150 rounded-3xl'/>
      </div>
    </div>
  )
}
