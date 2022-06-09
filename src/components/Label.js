import React from 'react'

const Label = ({ text, gridRow, gridCol }) => {
  return (
    <div className='bg-fuchsia-100 p-2 rounded-lg w-full' style={{ gridRow: gridRow, gridCol: gridCol}}>
        <p className='font-bold'>{text}</p>
    </div>
  )
}

export default Label