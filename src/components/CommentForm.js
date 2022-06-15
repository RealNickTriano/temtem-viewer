import React from 'react'
import { useState } from 'react'

const CommentForm = ({ setAlert, setShowAlert, setDisplayNewComment, fetchComments }) => {
    const MY_API_URL = 'http://localhost:3001/api/';

    const [message, setMessage] = useState('');
    const [userName, setUserName] = useState('');
    const [postRes, setPostRes] = useState({});

    const makePost = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                id: new Date().getTime(),
                name: userName,
                comment: message,
                time: new Date(),
                dislikes: 0,
                likes: 0 
            })
        };
        try {
            const response = await fetch(`${MY_API_URL}comments/`, requestOptions);
            
        } catch (error) {
            console.error(error);
        } finally {
            setDisplayNewComment(false);
            fetchComments();
        }
    }

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
                if (message === '')
                {
                    setAlert('Must enter comment');
                    setShowAlert(true);
                    setTimeout(() => {
                        setShowAlert(false);
                    }, 3000);
                }
                else {
                    makePost();
                }
                
            }}
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
                suppressContentEditableWarning={true}
                value={message}
                onKeyUp={(e) => setMessage(e.target.innerText)}
            >Write your comment here...</div>
            <button 
                className='text-lg text-fuchsia-800 font-bold'
            >Post
            </button>
        </form>
    </div>
  )
}

export default CommentForm