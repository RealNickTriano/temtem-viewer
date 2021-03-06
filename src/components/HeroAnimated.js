import React from 'react'

const HeroAnimated = ({ image, error, setError }) => {
   

  return (
    <>
    { !error 
        ? <img className='w-64 row-span-1 col-start-3 lg:visible invisible col-end-4' src={image} alt="Hero Animated" onError={() => setError(true)}/>
        : <h1 className='font-bold text-2xl lg:visible invisible'>No Render Animation Found</h1>
    }
    </>
  )
}

export default HeroAnimated