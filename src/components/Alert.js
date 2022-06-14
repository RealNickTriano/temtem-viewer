import React from 'react'

const Alert = ({ text }) => {
  return (
    <>
      <h1 className='px-6 mt-2 font-bold text-red-600 bg-red-200 rounded-lg'>{text}</h1>  
    </>
  )
}

export default Alert