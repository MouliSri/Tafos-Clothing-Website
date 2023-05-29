"use client"; // This is a client component 👈🏽
import React from 'react'
import Image from 'next/image'
import Mens from "../../images/Mens.png";
import Women from "../../images/Women.png";
import child from "../../images/child.jpeg";
import Link from 'next/link';
import { Fade } from "react-awesome-reveal";

const Horizontal = () => {
  return (
 
    <div className='grid grid-cols-1 gap-5 mt-8  md:grid-cols-3 mb-20'  >
    <Fade cascade direction="top-left">
      <div  className='my-5'>
        <Link href="/Mens">
 <Image src={Mens}  className='rounded-xl w-full h-96 object-fit   relative  overflow-hidden  npm install taos --save  shadow-md  hover:opacity-80 '/>
 <p className='absolute  text-center   left-0 right-0 font-semibold text-2xl text-gray-500 items-center justify-center  ' >Mens</p>
 </Link>
 
 

 </div>
 </Fade>
 <Fade cascade direction="down">
 <div className='my-5 '>

 <Link href="/Womens">
 <Image src={Women}    className='rounded-lg w-full h-96  object-fit   shadow-md hover:opacity-80 '/>

 <p className='absolute  text-center   left-0 right-0 font-semibold text-2xl text-gray-500 items-center justify-center  ' >Womens</p>
 </Link>
 </div>
 </Fade>
 <Fade cascade direction="top-right">
 <div className='my-5'>
 <Link href="/Kids">
 <Image src={child}  className='rounded-lg w-full   relative  h-96 object-fill   shadow-md hover:opacity-80  '/>
 <p className='absolute  text-center   left-0 right-0 font-semibold text-2xl text-gray-500 items-center justify-center  ' >Kids</p>
 </Link>

 </div>
 </Fade>
 

 
  </div>

  )
}

export default Horizontal