import React from 'react'
import DateTimeDisplay from './DateTimeDisplay'

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className='flex justify-center items-center gap-4 font-bold'>
        <DateTimeDisplay 
            value={hours} 
            type={'Hours'} 
        />
        <p className='self-start'>:</p>
        <DateTimeDisplay 
            value={minutes} 
            type={'Mins'} 
        />
        <p className='self-start'>:</p>
        <DateTimeDisplay 
            value={seconds} 
            type={'Seconds'} 
        />
    </div>
  )
}

export default ShowCounter