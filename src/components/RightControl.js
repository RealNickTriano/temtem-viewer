import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

const RightControl = ({ number, onClick, setError }) => {
  return (
    <>
    <button
        onClick={() => {
        number === 164 ? onClick(1) : onClick(number + 1);
        setError(false);
        }}
    ><FaChevronRight size={70} /></button>
    </>
  )
}

export default RightControl