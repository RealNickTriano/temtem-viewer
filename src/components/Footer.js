import React from 'react'

const Footer = () => {
  return (
    <div className='bg-white mt-32 text-center shadow-[0_-3px_5px_rgba(0,0,0,0.5)] py-8 font-medium text-black relative bottom-0 w-full'>
        <h1>&copy;{new Date().getFullYear()} Nicholas Triano</h1>
        <h1>All images are owned by Crema.</h1>
    </div>
  )
}

export default Footer