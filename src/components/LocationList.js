import React from 'react'

const LocationList = ({ places }) => {
    const listItems = places?.map((place, index) => 
        (<li key={index} className='font-bold text-center hover:font-semibold hover:cursor-pointer'>
            {place}
        </li>)
    )

  return (
    <>
      {places?.length < 6 ? 
      <ul className='mt-3'>
        { listItems?.length > 0 ? listItems : <li className='font-bold text-center hover:font-semibold hover:cursor-pointer'>None</li>}
      </ul>
      :
      <ul className='mt-3 grid w-1/4 grid-cols-2 mx-auto justify-items-center'>
        { listItems?.length > 0 ? listItems : <li className='font-bold hover:font-semibold hover:cursor-pointer'>None</li>}
      </ul>}
    </>
  )
}

export default LocationList