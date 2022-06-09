import React from 'react'

const LocationList = ({ places }) => {
    const listItems = places.map((place, index) => 
        <li key={index} className='font-bold text-center hover:font-semibold hover:cursor-pointer'>
            {place}
        </li>
    )

  return (
    <ul className='mt-3'>
      { listItems.length > 0 ? listItems : <li className='font-bold text-center hover:font-semibold hover:cursor-pointer'>Must Evolve</li>}
    </ul>
  )
}

export default LocationList