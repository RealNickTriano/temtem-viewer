import React from 'react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'

const HeroNumber = ({ number, onClick }) => {
  return (
    <div className='flex justify-center items-center mt-1'>
        <button
          onClick={() => number === 1 ? onClick(164) : onClick(number - 1)}
        ><FaChevronLeft /></button>
        <h1 className='font-bold text-2xl mx-2'>
          #{number < 10 ? `00${number}`
                  : number < 100 ? `0${number}`
                  : number}</h1>
        <button
          onClick={() => number === 164 ? onClick(1) : onClick(number + 1)}
        ><FaChevronRight /></button>
    </div>
  )
}

export default HeroNumber