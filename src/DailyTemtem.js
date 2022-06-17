import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { FaPlus } from 'react-icons/fa'
import CommentForm from './components/CommentForm'
import Comment from './components/Comment'
import { useState, useEffect } from 'react'
import ShowMore from './components/ShowMore'
import Alert from './components/Alert'
import CountdownTimer from './components/CountdownTimer'

const DailyTemtem = () => {
  const API_URL = 'https://temtem-api.mael.tech/api/temtems';
  const MY_API_URL = 'http://localhost:3001/api/';

  const [displayNewComment, setDisplayNewComment] = useState(false);
  const [tem, setTem] = useState({});
  const [comments, setComments] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState('');
  const [targetDate, setTargetDate] = useState(new Date(2022,5,17,12,33,0))
  const [guess, setGuess] = useState('');
  const [guessCorrect, setGuessCorrect] = useState('')

  const fetchComments = async () => {
    try {
      const response = await fetch(`${MY_API_URL}comments/`);
      if (!response.ok) throw Error('Did not recieve expected data');
      const listItems = await response.json();
      listItems.sort((a, b) => (a.time < b.time) ? 1 : -1);
      setComments(listItems);
    } catch (error) {
      console.error(error);
    } finally {
    }
  }

  useEffect(() => {
    fetchComments();
  }, [])

  const changeTem = async () => {
      const newTargetDate = targetDate.getTime() + 24 * 60 * 60 * 1000;
      setTargetDate(newTargetDate);
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not recieve expected data');
        const listItems = await response.json();
        const newTem = listItems[Math.floor(Math.random() * listItems.length)]
        setTem(newTem);
      } catch (error) {
        console.error(error);
      } finally {
        
      }

  }

  const handleGuess = (e) => {
    e.preventDefault();
    if (guess.toLowerCase() === tem.name.toLowerCase())
    {
      //guess is correct
      setGuessCorrect('correct');
    } else {
      //guess is wrong
      setGuessCorrect('wrong');
    }
  }

  return (
    <div>
        <Navbar />

        <div className='flex flex-col justify-start items-center min-h-screen'> 
          <h1 className='font-bold text-3xl text-center mt-16 border-b-2 border-fuchsia-800'>Daily Temtem</h1>
          {guessCorrect !== 'correct' ? <div className='flex justify-center items-center mt-12 blur-md'>
            <img className='w-[8rem] z-0' src={tem.wikiPortraitUrlLarge} alt="hero" />
          </div> 
          : <div className='flex justify-center items-center mt-12'>
              <img className='w-[8rem] z-0' src={tem.wikiPortraitUrlLarge} alt="hero" />
            </div> }
          <p className='font-medium w-96 mt-16 text-center'>
            Description
          </p>
          
          {guessCorrect === 'correct' && 
            <Alert 
              text={'Correct!'}
              color='lightgreen'
              textColor={'green'}
            />
          }

          {guessCorrect === 'wrong' && 
            <Alert 
              text={'Try Again!'}
              color='lightred'
              textColor={'red'}
            />
          }

          {guessCorrect !== 'correct' && <form 
            className='mt-8 focus-within:border-none'
            onSubmit={(e) => handleGuess(e)}>
            <input 
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              className='border-b-2 border-fuchsia-800 placeholder:text-fuchsia-900 text-fuchsia-900 focus:outline-none'
              type="text" 
              placeholder='Submit your guess...' />
          </form>}

          <h1 className='text-xl font-bold mt-5'>New Temtem in </h1>
          <CountdownTimer 
            targetDate={targetDate}
            actionOnEnd={changeTem}
          />

          <h1 className='font-bold text-2xl text-center border-b-2 mt-16 mb-4 border-fuchsia-800'>Discussion</h1>
          <div 
            onClick={() => setDisplayNewComment(!displayNewComment)}
            className='flex justify-center items-center hover:cursor-pointer'
          >
            <FaPlus className='text-gray-500'/>
            <h1 className= 'text-gray-500 ml-2'>Add to Discussion</h1>
          </div>

          {showAlert && 
            <Alert 
              text={alert}
            />
          }
          


          {/** Make comment component, fetch all comments map through display component for each */}


          { displayNewComment && 
            <CommentForm 
              setShowAlert={setShowAlert}
              setAlert={setAlert}
              setDisplayNewComment={setDisplayNewComment}
              fetchComments={fetchComments}
            /> 
          }

          {comments.map(item => (
            <Comment 
              key={item._id}
              name={item.name}
              comment={item.comment}
              time={item.time}
              likes={item.likes}
              dislikes={item.dislikes}
              id={item.id}
              fetchComments={fetchComments}
            />
          ))}
          { comments.length > 5 && <ShowMore /> }
          

        </div>

        <Footer />
    </div>
  )
}

export default DailyTemtem