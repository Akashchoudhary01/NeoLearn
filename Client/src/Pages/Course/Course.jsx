import React, { useEffect } from 'react'
import HomeLayout from '../../Layout/HomeLayout'
// import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCourse } from '../../Redux/Slices/CourseSlice'
import CourseCard from './CourseCard'


const Course = () => {
  const dispatch = useDispatch();

  const {courseData} = useSelector((state)=> state.course)

  async function LoadCourse (){
    await dispatch(getAllCourse())
  }
  useEffect(()=>{
    // LoadCourse();
    dispatch(getAllCourse());
    // toast.success("Courses Loaded Successfully")
  
  } , [dispatch])
  return (
    <HomeLayout>
        <div className='h-full pt-8 pl-20  flex flex-col gap-10  text-white'>
          <div className='m-10'>

            <h1 className='text-2xl mx-0'>Explore the course made by <span className='text-yellow-300'> Industry Expert</span></h1>
          </div>
          <div className='mb-8 flex flex-wrap gap-14'>
            {
              courseData?.map((element)=>{
                return <CourseCard key={element._id} data={element}/>
              })
            }
          </div>

        </div>
    </HomeLayout>
  )
}

export default Course;
