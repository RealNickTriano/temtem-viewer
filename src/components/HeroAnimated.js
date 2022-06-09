import React from 'react'
import { useState } from 'react'

const HeroAnimated = ({ image, error, setError }) => {
    

  return (
    <>
    {error ? <h1 className='font-bold text-2xl'>No Render Animation Found</h1> :
        <img className='w-64 row-span-1 col-start-3 col-end-4' src={image} alt="Hero Animated" onError={() => setError(true)}/>}
    </>
  )
}

export default HeroAnimated