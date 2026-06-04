import React, { useEffect } from 'react'
import HomeLayout from '../../Layout/HomeLayout'
import toast from 'react-hot-toast'


const Course = () => {
  useEffect(()=>{
    toast.success("Courses Loaded Successfully")
  
  })
  return (
    <HomeLayout>
        <div className='h-screen flex flex-col  text-white'>
          <div className='m-20'>

            <h1 className='text-2xl'>Explore the course made by <span className='text-yellow-300'> Industry Expert</span></h1>
          </div>

        </div>
    </HomeLayout>
  )
}

export default Course;
