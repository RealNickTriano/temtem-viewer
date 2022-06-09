import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'


const LeftControl = ({ number, onClick, setError }) => {
  return (
    <>
    <button
        className=''
        onClick={() => {
        number === 1 ? onClick(164) : onClick(number - 1);
        setError(false);
        }}
    ><FaChevronLeft size={70} /></button>
    </>
  )
}

export default LeftControl