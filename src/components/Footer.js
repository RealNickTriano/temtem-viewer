import React from 'react'

const Footer = () => {
  return (
    <div className='bg-white mt-32 text-center shadow-[0_-3px_5px_rgba(0,0,0,0.5)] py-8 font-medium text-black bg-center bg-no-repeat bg-cover'>
        <h1 className='mr-32'>&copy;{new Date().getFullYear()} Nicholas Triano</h1>
        <h1 className='mr-32 mb-8'>All images are owned by Crema.</h1>
    </div>
  )
}

export default Footer