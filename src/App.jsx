import { useState, useEffect } from 'react'

export default function App() {
  

  return (
    <>
      <img className='blob-top' src='../public/blob-top-home.png'/>
      <section className='start'>
        <h1>Quizzical</h1>
        <h2>A React trivia app</h2>
        <button>Start quiz</button>
      </section>
      <img className='blob-bottom' src='../public/blob-bottom-home.png'/>
    </>
  )
}
