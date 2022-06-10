import React from 'react'

const ButtonRow = ({handleLuma, luma }) => {
  return (
    <div>
      <button 
        onClick={() => handleLuma(false)}
        className='border-4 shadow-md border-black rounded-lg px-5 bg-white mt-4 font-bold text-black text-sm hover:bg-fuchsia-100 focus:bg-fuchsia-400'
        style={{ backgroundColor: !luma && '#e879f9' }}
      >
        Normal
      </button>
      <button 
        onClick={() => handleLuma(true)}
        className='border-4 shadow-md border-black rounded-lg px-5 bg-white mt-4 font-bold text-black text-sm hover:bg-fuchsia-100 ml-5 focus:bg-fuchsia-400'
        style={{ backgroundColor: luma && '#e879f9' }}
      >
        Luma
      </button>
    </div>
  )
}

export default ButtonRow