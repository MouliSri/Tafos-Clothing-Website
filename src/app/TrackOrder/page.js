import React from 'react'
import {Gi3DGlasses} from "react-icons/gi"

const page = () => {
  return (
    <div className=' h-screen  text-teal-500 text-center'>
      <div className='flex justify-center  '>
      <h1 className='text-2xl font-semibold'>Track the Order</h1>
      <Gi3DGlasses  className='text-2xl mx-2'/>
      </div>
     
        <form className='mt-48'>
         
          <label className='text-2xl mx-10 font-semibold'>Tracking Id </label>
         
          <input type='text' className='mx-10 w-48 h-12 text-center shadow-sm shadow-black' placeholder='Enter Your Id Here' />
          <button className='rounded-md mx-10 bg-gray-200 shadow-md h-12 w-24 hover:bg-teal-500'>Submit</button>
        </form>
      
      
    </div>
  )
}

export default page