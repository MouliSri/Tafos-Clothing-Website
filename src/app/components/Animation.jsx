"use client"; // This is a client component 👈🏽
import React from 'react'
import { Slide } from "react-awesome-reveal";

const Animation = () => {
  return (
    <Slide direction='bottom-left'>
    <div className=' mt-10  mb-20 text-center  overflow-hidden sm:w-full '>
        <p className='font-serif py-2 text-3xl text-gray-700'>LifeCycle of Products</p>
        <iframe src="https://embed.lottiefiles.com/animation/10129" className="h-96 w-full py-5 hover:animate-pulse"> Clothing Manufacture</iframe>
    </div>
    </Slide>
  )
}

export default Animation