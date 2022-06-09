import React from 'react'

const Footer = () => {
  return (
    <div className='bg-green-500 mt-32 text-center'>
        <h1>&copy;{new Date().getFullYear()} Nicholas Triano</h1>
        <h1>All images are owned by Crema.</h1>
    </div>
  )
}

export default Footer