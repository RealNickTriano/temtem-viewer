import React from 'react'
import Hero from '../images/hero.png'

const HeroImage = ({ size, hero }) => {
  return (
    <>
        <div style={{ width: `${size}rem`, height: `${size}rem`, borderWidth: `${size}px` }} className='border-8 z-10 border-stone-800 rounded-full overflow-hidden bg-gray-600 shadow-inner shadow-black'>
            <img className='w-full z-0' src={hero} alt="hero" />
        </div>
    </>
  )
}

export default HeroImage