import blobTop from "../public/blob-top-home.png"
import blobBottom from "../public/blob-top-home.png"

export default function Start(props) {
    return (
        <section className='start'>
            <img className='blob-top' src={blobTop}/>
            <h1>Quizzical</h1>
            <h2>A React trivia app</h2>
            <button onClick={props.startFn}>Start quiz</button>
            <img className='blob-bottom' src={blobBottom}/>
        </section>
    )
}