import Question from './Question.jsx'
export default function Quiz(props) {
    const score = props.triviaData.filter(questionData => {
        return questionData.selection ? 
                questionData.correct_answer === questionData.selection
                : false;
    }).length

    const questions = props.triviaData.map((questionData, index) => 
        <Question 
            key={index} 
            triviaData={props.triviaData}
            setTriviaData={props.setTriviaData}
            qIndex={index}
            isGameOver={props.isGameOver}
        />)

    function checkAnswers() {
        props.setIsGameOver(true);
    }

    function playAgain() {
        props.setIsGameStarted(prevIsGameStarted => !prevIsGameStarted)
        props.setIsGameOver(false);
    }

    function renderGameOver() {
        if (props.isGameOver) {
            return (
                <div className='game-over-footer'>
                    <span>{`You scored ${score}/5 correct answers`}</span>
                    <button className='quiz-btn play-again-btn' onClick={playAgain}>Play again</button>
                </div>
            )
        } else {
            return( 
                <button className='quiz-btn' onClick={checkAnswers}>Check answers</button>
            )
        }
    }

    return (
        <section className='quiz'>
                <img className='blob-top' src='../../public/blob-top-quiz.png'/>
                {questions}
                {renderGameOver()}
                <img className='blob-bottom' src='../../public/blob-bottom-quiz.png'/>
        </section>
    )
}