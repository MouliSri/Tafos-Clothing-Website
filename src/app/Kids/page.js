import React from 'react'
import kidsData from './KidsData'
import { Navbar } from '../components/Navbar'
import Card from '../components/Card'
import {BsFilter} from "react-icons/bs"
import { Footer } from '../components/Footer'

const page = () => {
  return (
    <div>
    <Navbar />
    <h1 className='text-3xl text-center m-10 text-black font-serif'>Kids Section</h1>
    <button className='bg-teal-100 rounded h-10 w-30 ml-10 flex p-2  font-bold hover:bg-gradient-to-r from-blue-300'>Filter <BsFilter className='text-2xl ml-2' /></button>
   <Card Data={kidsData}/>
   <Footer />
  </div>
  )
}

export default page