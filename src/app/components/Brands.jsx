"use client"; // This is a client component 👈🏽
import Image from   'next/image'
import React from 'react';

import puma from "../../images/puma.png"
import Hm from "../../images/Hm.png";
import Raymond from "../../images/Raymond.png"
import Gap from "../../images/Gap.png";
import Levis from "../../images/Levis.png"
import AllenSolly from "../../images/AllenSolly.png"

import adidas  from "../../images/adidas.jpg"
import { Fade, Slide } from 'react-awesome-reveal';


export const Brands = () => {
  return (
    <Slide  direction='right'>
    <div className='mb-20'>
      <h1 className='text-center text-3xl text-gray-700 font-serif'>Available Brands</h1>
      
    <div class="justify-around mt-10 py-5     flex flex-row my-10 ">
      <Image src={puma} height={30} width={30} className='mx-auto gap-2 scale-150 hover:skew-x-12'/>
      <Image src={Hm}  height={20} width={30} className='mx-auto gap-2 scale-150  object-center hover:skew-x-12'/>
      <Image src={Gap}  height={20} width={30} className='mx-auto  gap-2 scale-150 hover:skew-x-12'/>
      <Image src={Raymond}  height={60} width={50} className='mx-auto gap-2 scale-150 hover:skew-x-12'/>
      <Image src={Levis}  height={60} width={50} className='mx-auto  gap-2 scale-150 hover:skew-x-12'/>
      <Image src={AllenSolly}  height={60} width={50} className='mx-auto  gap-2 scale-150 hover:skew-x-12'/>
      <Image src={adidas}  height={30} width={30} className='mx-auto  gap-2 scale-150 hover:skew-x-12'/>
      

  
</div>

</div>
</Slide>
  )
}
