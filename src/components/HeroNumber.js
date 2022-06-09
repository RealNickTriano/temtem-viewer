import React from 'react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'

const HeroNumber = ({ number }) => {
  return (
    <div className='flex justify-center items-center mt-1'>
        <button><FaChevronLeft /></button>
        <h1 className='font-bold text-2xl mx-2'>#{number}</h1>
        <button><FaChevronRight /></button>
    </div>
  )
}

export default HeroNumber