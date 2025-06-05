import { useState } from 'react'
import './App.css'
import Questions from './Components/Questions'
import Awards from './Components/Awards'

function App() {

  return (
    <>
      <div className="main">
        <Questions />
        <Awards />
      </div>
    </>
  )
}

export default App
