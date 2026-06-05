import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUs'
import Notfound from './Pages/Notfound'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Course from './Pages/Course/Course'
import ContactUs from './Pages/ContactUs'
import Denied from './Pages/Denied'
import CourseDescription from './Pages/Course/CourseDescription'
function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/courses' element={<Course/>}/>
      <Route path='/course/description' element={<CourseDescription/>}/>
      <Route path='/denied' element={<Denied/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
  
  )
}

export default App
