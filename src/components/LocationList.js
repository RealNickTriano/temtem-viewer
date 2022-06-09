import React from 'react'

const LocationList = ({ places }) => {
    const listItems = places.map((place) => 
        <li className='font-bold text-center hover:font-semibold hover:cursor-pointer'>
            {place}
        </li>
    )

  return (
    <ul className='mt-3'>
      {listItems}
    </ul>
  )
}

export default LocationList