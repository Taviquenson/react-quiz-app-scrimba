import { useState, useEffect, useRef } from 'react'
import Start from './components/Start.jsx'
import Quiz from './components/Quiz.jsx'
import { decode } from 'html-entities';

export default function App() {
  const [triviaData, setTriviaData] = useState([]);
  const [isGameStarted, setIsGameStarted ]= useState(false);
  // let isGameStarted = triviaData.length > 0

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
          question: decode(result.question)
        }))
        
        setTriviaData(cleanedData)
      })
  }, [isGameStarted]);

  function handleStart() {
    setIsGameStarted(true)
    // isGameStarted = !isGameStarted
  }

  return (
    <>
      {/* Render if  we haven't  gotten data yet*/}
      {triviaData.length === 0 && <Start startFn={handleStart} />}

      {/* Render if  we got data*/}
      {triviaData.length > 0 && <Quiz triviaData={triviaData} setTriviaData={setTriviaData}/>}
    </>
  )
}
