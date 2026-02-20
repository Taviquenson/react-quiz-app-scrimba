import clsx from 'clsx';
import { useMemo } from 'react'

export default function Question({questionData, triviaData, setTriviaData, qIndex}) {
    console.log(questionData)

    const allOptions = [...questionData.incorrect_answers, questionData.correct_answer]

    // Randomize the options
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
        const styles = clsx('option', triviaData[qIndex].selection === option ? 'option-selected' : '')

        return (
            <button
                key={index} 
                className={styles}
                onClick={selectAnswer}
                >
                {option}
            </button>
        )
    })
    
    return (
        <div className="question">
            <p className="question-text">{questionData.question}</p>
            <div className="options-container">
                {options}
            </div>
            <hr></hr>
        </div>
    )
}