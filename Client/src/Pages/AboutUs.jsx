import React from 'react'
import HomeLayout from '../Layout/HomeLayout'
import AboutImg from '../assets/Assets/Images/aboutMainImage.png'

const AboutUs = () => {
  return (
    <HomeLayout>

    <div className=' p-20 text-white flex flex-col '>
        <div className='flex items-center gap-5 mx-10'>
            <div className=' w-1/2 space-y-10'>
            <h1 className='font-bold italic text-3xl text-white  '>Affordable and Quality Education</h1>
            <p className='text-xl italic  text-gray-200'>NeoLearn is a thoughtfully designed learning platform that brings high-quality courses together in one place. With structured content, easy navigation, and a focus on real understanding, it helps you build skills at your own pace. Whether you're exploring something new or strengthening your knowledge, NeoLearn offers a reliable and refined learning experience designed for consistent growth.</p>
            <p className='text-xl text-gray-200 italic'>NeoLearn brings together carefully curated courses and a seamless learning environment to help you grow with confidence. With a balance of clarity and practical exposure, it’s built for learners who value quality, consistency, and real progress.</p>

            </div>
            <div className='w-1/2 ml-10 space-y-10'>
             <img src={AboutImg} alt="" />
            </div>
        </div>
       
      
    </div>
    </HomeLayout>
  )
}

export default AboutUs
