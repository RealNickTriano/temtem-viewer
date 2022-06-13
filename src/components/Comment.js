import React from 'react'
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa"

const Comment = () => {
  return (
    <div className='my-6 border-4 border-fuchsia-800 rounded-xl p-4 w-1/2'>
        <div className="flex justify-start items-center gap-5">
            <h1 className='font-bold text-xl border-b-2 border-amber-500'>Nick Triano</h1>
            <div className='flex justify-center items-center gap-2 font-bold'>
                <span>4</span>
                <button>
                    <FaThumbsUp 
                        color='#86198f'
                    />
                </button>
                <span className='ml-2'>0</span>
                <button>
                    <FaThumbsDown 
                        color='#f59e0b'
                    />
                </button>
            </div>
        </div>

        <div className='text-lg mt-4'>
            This is my very cool comment.
        </div>
    </div>
  )
}

export default Comment