export default function Start(props) {
    return (
        <section className='start'>
            <img className='blob-top' src='../public/blob-top-home.png'/>
            <h1>Quizzical</h1>
            <h2>A React trivia app</h2>
            <button onClick={props.startFn}>Start quiz</button>
            <img className='blob-bottom' src='../public/blob-bottom-home.png'/>
        </section>
    )
}