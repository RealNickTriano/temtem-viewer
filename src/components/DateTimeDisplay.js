import React from 'react'

const DateTimeDisplay = ({ value, type }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <p className='text-xl'>{value}</p>
        <span>{type}</span>
    </div>
  )
}

export default DateTimeDisplay