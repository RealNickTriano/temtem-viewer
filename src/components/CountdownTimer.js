import React from 'react'
import { useCountdown } from '../hooks/useCountdown'
import ShowCounter from './ShowCounter'
import ExpiredNotice from './ExpiredNotice'

const CountdownTimer = ({ targetDate, changeTem, handleNewTime }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0)
    {
        //Countdown has ended
        handleNewTime();
        changeTem();
    } 

    return (
        <ShowCounter 
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
        />
    )
}

export default CountdownTimer