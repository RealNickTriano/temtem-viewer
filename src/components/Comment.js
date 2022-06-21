import React from 'react'
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa"

const Comment = ({ name, comment, time, likes, dislikes, id, fetchComments }) => {
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const API_URL = 'https://temtem-helper-api.herokuapp.com/api/'

    const date = new Date(time);
    const seconds = date.getSeconds();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const currentDate = new Date();
    const hourDifference = currentDate.getHours() - hours;
    const minuteDifference = currentDate.getMinutes() - minutes;
    const secondDifference = currentDate.getSeconds() - seconds;
    
    const displayTime = () => {
        if(hourDifference > 0)
        {
            return `${hourDifference}hr ago`
        } else if(minuteDifference > 0) {
            return `${minuteDifference}min ago`
        } else if(secondDifference > 0) {
            return `${secondDifference}sec ago`
        }
    }

    const updateLikes = async (myId, newLikes, newDislikes) => {
        try {
          const response = await fetch(`${API_URL}comments/`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: myId,
                likes: newLikes,
                dislikes: newDislikes
            })
          });

          if (!response.ok) throw Error('Did not recieve expected data');
        } catch (error) {
          console.error(error);
        } finally {
            fetchComments();
        }
      }

  return (
    <div className='my-6 border-4 border-fuchsia-800 rounded-xl p-4 w-1/2'>
        <div className="flex justify-start items-center gap-5">
            <h1 className='font-bold text-xl border-b-2 border-amber-500'>{name}</h1>
            <div className='flex justify-center items-center gap-2 font-bold'>
                <span>{likes}</span>
                <button
                    onClick={() => updateLikes(id, likes + 1, dislikes)}
                >
                    <FaThumbsUp 
                        color='#86198f'
                    />
                </button>
                <span className='ml-2'>{dislikes}</span>
                <button
                    onClick={() => updateLikes(id, likes, dislikes + 1)}
                >
                    <FaThumbsDown 
                        color='#f59e0b'
                    />
                </button>
            </div>
        </div>
        <h2 className='text-sm text-gray-400 font-medium'>
            {displayTime()}
        </h2>
        <div className='text-lg mt-4'>
            {comment}
        </div>
    </div>
  )
}

export default Comment