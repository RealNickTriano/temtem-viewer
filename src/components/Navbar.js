import React from 'react'
import logo from '../images/logo.png'

const Navbar = () => {
  return (
    <div className='shadow-md shadow-gray-500 bg-white w-full flex justify-center items-center p-0 bg-footer-texture bg-no-repeat bg-center bg-cover'>
        <div className='flex justify-between items-center'>
            <button className='text-black text-lg font-bold hover:border-b-8 hover:border-fuchsia-900 border-black border-4 rounded-lg px-2 bg-amber-500'>Home</button>
            <img className='' src={logo} alt="logo" />
            <button className='text-black text-lg font-bold hover:border-b-8 hover:border-fuchsia-900 border-black border-4 rounded-lg px-2 bg-amber-500'>Daily Temtem</button>
        </div>
    </div>
  )
}

export default Navbar