import React from 'react';
import Image from 'next/image';
import {AiOutlineShopping , AiOutlineHeart} from "react-icons/ai"
import {FcShop} from "react-icons/fc"
import {IoPricetagsOutline} from "react-icons/io5"

const Card = ({Data}) => {
  return (
   
    <div className='grid grid-cols-2 sm:grid-cols-5 gap-4 overflow-hidden'>
        {
        Data.map((x)=>{
          return  <div >
          <div className=' bg-teal-100  h-60 w-48 m-10  hover:scale-110  rounded-lg text-center  hover:transition-shadow'>
            <Image className='object-contain h-40 w-full  py-2 hover:scale-100 hover:rotate-45' src={x.img} alt='images'/>

            <div className='flex flex-row justify-around mt-2'>
           
            <FcShop className=' text-xl text-blue-400 hover:scale-150 rounded-3xl'/>
            <AiOutlineShopping className='text-xl text-blue-400 hover:scale-150 rounded-3xl hover:text-red-400'/>
            <AiOutlineHeart className='text-xl text-blue-400 hover:scale-150 rounded-3xl hover:text-red-400'/>
           
          
          </div>
          <h2 className='text-xl font-sans flex flex-row justify-center mt-3'> <IoPricetagsOutline  className='text-xl text-blue-400  hover:skew-x-12 rounded-3xl hover:text-red-400'/>{x.price}</h2>
         
          </div>
          </div>
        })
      }
    </div>
   
  )
}

export default Card