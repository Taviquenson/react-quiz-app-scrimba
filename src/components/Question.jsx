import clsx from 'clsx';
import { useMemo } from 'react'

export default function Question({triviaData, setTriviaData, qIndex, isGameOver}) {
    console.log(triviaData[qIndex])

    const allOptions = [...triviaData[qIndex].incorrect_answers, triviaData[qIndex].correct_answer]

    // Randomize the options once (qIndex won't be changing)
    const shuffledOptions = useMemo(() => {
        return allOptions.sort(() => Math.random() - 0.5);
    }, [qIndex]);
    

    function selectAnswer(event) {
        setTriviaData(triviaData.map((question, index) => {
            if (index === qIndex) {
                return {
                    ...question,
                    selection: event.target.textContent
                }
            } else {
                return question
            }
        }))
    }


    const options = shuffledOptions.map((option, index) => {
        const selection = triviaData[qIndex].selection

        let styles = null;

        if (isGameOver) {
            styles = clsx('option',
                'option-game-over',
                selection === option && selection !== triviaData[qIndex].correct_answer ? 'option-wrong' : '',
                option === triviaData[qIndex].correct_answer ? 'option-correct' : ''
            )
        } else {
            styles = clsx('option', selection === option ? 'option-selected' : '')
        }


        return (
            <button
                key={index} 
                className={styles}
                onClick={selectAnswer}
                disabled={isGameOver ? true : false}
                >
                {option}
            </button>
        )
    })
    
    return (
        <div className="question">
            <p className="question-text">{triviaData[qIndex].question}</p>
            <div className="options-container">
                {options}
            </div>
            <hr></hr>
        </div>
    )
}