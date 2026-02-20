import Question from './Question.jsx'
export default function Quiz(props) {
    const questions = props.triviaData.map((questionData, index) => 
        <Question 
            key={index} 
            triviaData={props.triviaData} setTriviaData={props.setTriviaData}
            qIndex={index}
            isGameOver={props.isGameOver}
        />)

    function checkAnswers() {
        props.setIsGameOver(true);
    }

    return (
        <section className='quiz'>
                <img className='blob-top' src='../../public/blob-top-quiz.png'/>
                {questions}
                <button className='quiz-btn' onClick={checkAnswers}>Check answers</button>
                <img className='blob-bottom' src='../../public/blob-bottom-quiz.png'/>
        </section>
    )
}