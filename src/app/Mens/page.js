import React from 'react'
import { Navbar } from '../components/Navbar'
import {BsFilter} from "react-icons/bs"
import MensData from './MensData'
import Image from 'next/image'
import Card from '../components/Card'
import { Footer } from '../components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <h1 className='text-3xl text-center m-10 text-black font-serif'>Mens Section</h1>
      <button className='bg-teal-100 rounded h-10 w-30 ml-10 flex p-2  font-bold hover:bg-gradient-to-r from-blue-600 to-red-100'>Filter <BsFilter className='text-2xl ml-2' /></button>
     <Card Data={MensData}/>
     <Footer />
    </div>
  )
}

export default page
