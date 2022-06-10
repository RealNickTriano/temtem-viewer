import React from 'react'
import HeroImage from './HeroImage'

const TemLineItem = ({ item }) => {
  return (
    <tr className="border-b-2 border-fuchsia-800 text-center">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex justify-center items-center">
        <HeroImage 
          size='4'
          hero={item.portraitWikiUrl}
        />
      </td>
      <td className="text-md text-gray-900 font-medium px-6 whitespace-nowrap">
        {item.name}
      </td>
      <td className="text-md text-gray-900 font-medium px-6 whitespace-nowrap">
      #{item.number < 10 ? `00${item.number}`
                  : item.number < 100 ? `0${item.number}`
                  : item.number}
      </td>
      <td className="text-md text-gray-900 font-medium px-6 whitespace-nowrap">
        {item.types[0]} {item.types[1]}
      </td>
    </tr>
  )
}

export default TemLineItem