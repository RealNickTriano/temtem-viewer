import React from 'react'

const ButtonRow = ({ currentTem, changeTem }) => {
  return (
    <div>
      <button 
        
        className='border-4 shadow-md border-black rounded-lg px-5 bg-white mt-4 font-bold text-black text-sm hover:bg-fuchsia-100 focus:bg-fuchsia-400'
      >Normal</button>
      <button className='border-4 shadow-md border-black rounded-lg px-5 bg-white mt-4 font-bold text-black text-sm hover:bg-fuchsia-100 ml-5 focus:bg-fuchsia-400'>Luma</button>
    </div>
  )
}

export default ButtonRow