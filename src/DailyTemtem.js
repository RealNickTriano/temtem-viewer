import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { FaPlus } from 'react-icons/fa'
import CommentForm from './components/CommentForm'
import Comment from './components/Comment'
import { useState, useEffect } from 'react'
import ShowMore from './components/ShowMore'

const DailyTemtem = () => {
  const API_URL = 'https://temtem-api.mael.tech/api/temtems';
  const MY_API_URL = 'http://localhost:3001/api/';

  const [comment, setNewComment] = useState({});
  const [displayNewComment, setDisplayNewComment] = useState(false);
  const [time, setTime] = useState({});
  const [tem, setTem] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // timer
  const setTimeDifference = () => {
    const hoursDifference = 21 - new Date().getHours();
    const minutesDifference = 60 - new Date().getMinutes();
    const secondsDifference = 60 - new Date().getSeconds();

    setTime({
      hours: hoursDifference,
      minutes: minutesDifference,
      seconds: secondsDifference
    })
  }

  setInterval(setTimeDifference, 1000);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`${MY_API_URL}comments/`);
        if (!response.ok) throw Error('Did not recieve expected data');
        const listItems = await response.json();
        setComments(listItems);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchComments();

  }, [])

  const changeTem = () => {
    if(time.hours === 0 && time.minutes === 0 && time.seconds === 0)
    {
      const fetchItems = async () => {
        try {
          const response = await fetch(API_URL);
          if (!response.ok) throw Error('Did not recieve expected data');
          const listItems = await response.json();
          setTem(listItems[Math.floor(Math.random * listItems.length)]);
        } catch (error) {
          console.error(error);
        } finally {

        }

        fetchItems();
      }
    }
  }

  setInterval(changeTem, 1000);

  return (
    <div>
        <Navbar />

        <div className='flex flex-col justify-center items-center'> 
          <h1 className='font-bold text-3xl text-center mt-16 border-b-2 border-fuchsia-800'>Daily Temtem</h1>
          <div className='flex justify-center items-center mt-12 blur-lg'>
            <img className='w-[8rem] z-0' src='https://static.wikia.nocookie.net/temtem_gamepedia_en/images/e/e2/Mimit_full_render.png/' alt="hero" />
          </div>
          <p className='font-medium w-96 mt-16 text-center'>
            _____ has the honor of being the very first Digital ever 
            created. The genomic reservoir contained in its tail allows it 
            an unequalled ability to replicate any other Temtem species, 
            making it the ultimate breeder.
          </p>

          <form 
            className='mt-16 focus-within:border-none'
            onSubmit={(e) => e.preventDefault()}>
            <input 
              className='border-b-2 border-fuchsia-800 placeholder:text-fuchsia-900 text-fuchsia-900 focus:outline-none'
              type="text" 
              placeholder='Submit your guess...' />
          </form>

          <h1 className='text-xl font-bold mt-5'>New Temtem in {time.hours}:{time.minutes}:{time.seconds > 9 ? time.seconds : `0${time.seconds}`}</h1>


          <h1 className='font-bold text-2xl text-center border-b-2 mt-16 mb-4 border-fuchsia-800'>Discussion</h1>
          <div 
            onClick={() => setDisplayNewComment(!displayNewComment)}
            className='flex justify-center items-center hover:cursor-pointer'
          >
            <FaPlus className='text-gray-500'/>
            <h1 className= 'text-gray-500 ml-2'>Add to Discussion</h1>
          </div>


          {/** Make comment component, fetch all comments map through display component for each */}


          { displayNewComment && <CommentForm /> }

          {comments.map(item => (
            <Comment 
              key={item._id}
              name={item.name}
              comment={item.comment}
              time={item.time}
              likes={item.likes}
              dislikes={item.dislikes}
            />
          ))}
          { comments.length > 5 && <ShowMore /> }
          

        </div>


        <Footer />
    </div>
  )
}

export default DailyTemtem