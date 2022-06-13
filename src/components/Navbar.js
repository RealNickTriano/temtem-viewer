import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='shadow-md shadow-gray-500 bg-white w-full flex justify-center items-center p-0 bg-footer-texture bg-no-repeat bg-center bg-cover'>
        <div className='flex justify-between items-center'>
            <Link to='/'> 
              <button className='text-black text-lg font-bold hover:border-b-8 hover:border-fuchsia-900 border-black border-4 rounded-lg px-2 bg-amber-500'>Home</button> 
            </Link>
            <img className='' src={logo} alt="logo" />
            <Link to='/dailytemtem'> 
              <button className='text-black text-lg font-bold hover:border-b-8 hover:border-fuchsia-900 border-black border-4 rounded-lg px-2 bg-amber-500'>Daily Temtem</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar