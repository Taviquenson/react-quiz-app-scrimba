import { useState, useEffect, useRef } from 'react'
import Start from './components/Start.jsx'
import Quiz from './components/Quiz.jsx'
import { decode } from 'html-entities';

export default function App() {
  const [triviaData, setTriviaData] = useState([]);
  const [isGameStarted, setIsGameStarted ]= useState(false);
  const [isGameOver, setIsGameOver ]= useState(false);

  // Create a ref to track the first render
  const isMounted = useRef(false);

  useEffect(function() {
    // Check if the component is mounted for the first time
    if (!isMounted.current) {
      isMounted.current = true;
      return; // Skip the effect's logic on initial load
    }

    fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
      .then(res => res.json())
      .then(data => {
        const cleanedData = data.results.map(result => ({
          ...result,
          question: decode(result.question),
          correct_answer: decode(result.correct_answer),
          incorrect_answers: result.incorrect_answers.map(answer => decode(answer))
        }))
        
        setTriviaData(cleanedData)
      })
  }, [isGameStarted]);

  function handleStart() {
    setIsGameStarted(prevIsGameStarted => !prevIsGameStarted)
  }

  return (
    <>
      {/* Render if  we haven't  gotten data yet*/}
      {triviaData.length === 0 && <Start startFn={handleStart} />}

      {/* Render if  we got data*/}
      {triviaData.length > 0 && <Quiz triviaData={triviaData}
                                      setTriviaData={setTriviaData}
                                      isGameOver={isGameOver}
                                      setIsGameOver={setIsGameOver}
                                      setIsGameStarted={setIsGameStarted}/>}
    </>
  )
}
