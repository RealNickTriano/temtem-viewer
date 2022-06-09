import React from 'react'

const HeroNumber = ({ number }) => {
  return (
    <div className='flex justify-center items-center mt-1'>
        
        <h1 className='font-bold text-2xl mx-2'>
          #{number < 10 ? `00${number}`
                  : number < 100 ? `0${number}`
                  : number}</h1>
    </div>
  )
}

export default HeroNumber