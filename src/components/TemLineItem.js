import React from 'react'
import HeroImage from './HeroImage'

const TemLineItem = ({ item }) => {
  return (
    <div class="table-row">
        <div class="table-cell">
            <HeroImage 
                size='4'
                hero={item.portraitWikiUrl}
            />
        </div>
        <div class="table-cell">{item.name}</div>
        <div class="table-cell">{item.number}</div>
        <div class="table-cell"d>{item.types[0]} {item.types[1]}</div>
        <div class="table-cell">{item.name}</div>
    </div>
  )
}

export default TemLineItem