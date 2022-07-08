import React, { useEffect } from 'react'
import { useState } from 'react'

const Timer = ({}) => {

  const [hoursToGo, setHoursToGo] = useState(0);
  const [minutesToGo, setMinutesToGo] = useState(0);
  const [secondsToGo, setSecondsToGo] = useState(0);

  const Countdown = () => {
    const currentDate = new Date()
    const currentHours = currentDate.getUTCHours()
    const currentMinutes = currentDate.getUTCMinutes()
    const currentSeconds = currentDate.getUTCSeconds()

    if(currentHours === 0 && currentMinutes === 0 && currentSeconds === 0)
    {
      setHoursToGo(0)
      setMinutesToGo(0)
      setSecondsToGo(0)

    } else {
      setHoursToGo(Math.abs(24 - currentHours))
      setMinutesToGo(59 - currentMinutes)
      setSecondsToGo(59 - currentSeconds)
    }
    
  }

  useEffect(() => {
    const myInterval = setInterval(() => {
      Countdown();
    }, 1000);

      return () => {
        clearInterval(myInterval);
      }
    
  }, [])

  
  
  
  
  
  return (
    <div className='flex justify-center items-center font-md text-3xl gap-2'>
      {(hoursToGo === 0 && minutesToGo === 0 && secondsToGo === 0) ?
        <h1 className='font-md text-3xl gap-2'>00 : 00 : 00</h1>
        :
        [<h1 key={1}>{hoursToGo < 10 ? `0${hoursToGo}` : `${hoursToGo}`} :</h1>,
        <h1 key={2}>{minutesToGo < 10 ? `0${minutesToGo}` : `${minutesToGo}`} :</h1>,
        <h1 key={3}>{secondsToGo < 10 ? `0${secondsToGo}` : `${secondsToGo}`}</h1>]
      }
      
    </div>
  )
}

export default Timer