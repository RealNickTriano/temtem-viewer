import React from 'react'
import logo from '../images/logo.png'

const Navbar = () => {
  return (
    <div className='shadow-md shadow-gray-500 bg-white w-full flex justify-center items-center p-0'>
        <div className='flex justify-between items-center'>
            <button className='text-fuchsia-900 font-bold hover:border-b-2 hover:border-fuchsia-900'>Home</button>
            <img className='mx-5' src={logo} alt="logo" />
            <button className='text-fuchsia-900 font-bold hover:border-b-2 hover:border-fuchsia-900'>Daily Temtem</button>
        </div>
    </div>
  )
}

export default Navbar