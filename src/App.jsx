import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Start from "./Components/Start.jsx"
import Game from "./Components/Game.jsx"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='game-start' element={<Game/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App
