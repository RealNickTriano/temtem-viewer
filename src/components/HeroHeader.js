import React from 'react'

const HeroHeader = ({ name }) => {
  return (
    <div className='border-4 shadow-md border-fuchsia-900 rounded-lg px-8 bg-fuchsia-800'>
        <h1 className='font-bold text-amber-400 text-2xl'>{name}</h1>
    </div>
  )
}

export default HeroHeader