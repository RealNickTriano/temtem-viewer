import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const PageNav = ({ pages, currentPage, setCurrentPage }) => {
     {/*Idea: split array of size k into sub arrays of size n
        numPages = roof of k/n number per page = n
        number on last page = k % n (num in last array)
        onClick change arrays (move one index forward or back
        and display the array as normal; pass as prop to all list)*/}

    const items = pages.map((item, index) =>
        <li 
            onClick={() => setCurrentPage(index)}
            key={index} 
            className='hover:underline hover:text-fuchsia-900 hover:cursor-pointer'>{index + 1}</li>
    )

  return (
    <ul className='hover:text-fuchsia-900 hover:cursor-pointer flex justify-center items-center gap-2 text-fuchsia-800 font-bold mt-5'>
        <li 
            onClick={() => {if(currentPage > 0) setCurrentPage(currentPage - 1)}}
            className='flex justify-center items-center'>
            <FaChevronLeft size={15}/>
        </li>
        {items}
        <li 
            onClick={() => {if(currentPage < pages.length - 1) setCurrentPage(currentPage + 1)}}
            className='flex justify-center items-center'>
            <FaChevronRight size={15}/>
        </li>
    </ul>
  )
}

export default PageNav