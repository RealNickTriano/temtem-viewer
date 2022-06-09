import React from 'react'

const SubHeader = ({ text }) => {
  return (
    <div className='border-4 shadow-md border-fuchsia-900 rounded-lg px-5 bg-fuchsia-800 mt-4'>
        <h1 className='font-bold text-amber-400 text-md'>{text}</h1>
    </div>
  )
}

export default SubHeader