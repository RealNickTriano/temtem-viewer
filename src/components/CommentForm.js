import React from 'react'
import { useState } from 'react'

const CommentForm = ({}) => {
    const [message, setMessage] = useState('');
    const [userName, setUserName] = useState('');
    const [comment, setComment] = useState({});

  return (
    <div className='my-6 border-4 border-fuchsia-800 rounded-xl p-4 w-1/2'>
        <div className='flex justify-start items-center'>
            <h1 className='font-bold text-xl border-b-2 border-amber-500'>New Comment</h1>
        </div>
        <form 
            className='flex-col flex justify-center items-start'
            onSubmit={(e) => {
                e.preventDefault();
                {/**Just post here dont need to set */}
                setComment(
                    {
                        userName: userName,
                        message: message
                    }
                )}}
        >
            <input 
                className='focus:outline-none bg-white my-4'
                type="text" 
                autoFocus
                id='username'
                placeholder='Name'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <div 
                className='focus:outline-none bg-white w-full overflow-hidden resize-none'
                contentEditable
                value={message}
                onKeyUp={(e) => setMessage(e.target.innerText)}
            >Write your comment here...</div>
        </form>
    </div>
  )
}

export default CommentForm