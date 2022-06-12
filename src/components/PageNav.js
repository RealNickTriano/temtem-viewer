import React from 'react'
import RightControl from './RightControl'
import LeftControl from './LeftControl'

const PageNav = () => {
     {/*Idea: split array of size k into sub arrays of size n
        numPages = roof of k/n number per page = n
        number on last page = k % n (num in last array)
        onClick change arrays (move one index forward or back
        and display the array as normal; pass as prop to all list)*/}
  return (
   
    <ul className='flex justify-center items-center gap-2 text-fuchsia-800 font-bold mt-5'>
        <li className='flex justify-center items-center'>
            <LeftControl
                size={15}
            />
        </li>
        <li className='hover:text-fuchsia-900 hover:cursor-pointer'>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li className='flex justify-center items-center'>
            <RightControl 
                size={15}
            />
        </li>
    </ul>
  )
}

export default PageNav