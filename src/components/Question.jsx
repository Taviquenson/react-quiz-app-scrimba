export default function Question({questionData}) {
    console.log(questionData)

    const allOptions = [...questionData.incorrect_answers, questionData.correct_answer]
    console.log(allOptions)

    // Randomize the options
    const shuffledOptions = allOptions.sort(() => Math.random() - 0.5);
    const options = shuffledOptions.map((option, index) => <button key={index} >{option}</button>)
    
    return (
        <>
        <h2>{questionData.question}</h2>
        <div>
            {options}
        </div>
        </>
    )
}