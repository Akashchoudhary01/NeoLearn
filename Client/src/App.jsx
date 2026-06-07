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
import RequiredAuth from './Components/Auth/RequiredAuth'
import CreateCourse from './Pages/Course/CreateCourse'
import Profile from './Pages/Profile'
import EditProfile from './Pages/EditProfile'
import Checkout from './Pages/Payment/Checkout'
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

      <Route element={<RequiredAuth allowedRoles={["ADMIN"]} /> }>
      <Route path='/course/create' element={<CreateCourse/>}/>
      </Route>

      <Route element={<RequiredAuth allowedRoles={["ADMIN" , "USER"]} /> }>
      <Route path='/user/profile' element={<Profile/>}/>
      <Route path='/user/editProfile' element={<EditProfile/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
  )
}

export default App
