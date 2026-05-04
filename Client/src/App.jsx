import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUs'
import Notfound from './Pages/Notfound'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
  
  )
}

export default App
