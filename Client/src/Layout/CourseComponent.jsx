import React from 'react'
import { useNavigate } from "react-router-dom";


const CourseComponent = ({data}) => {
    const navigate = useNavigate();
  return (
    <div
    onClick={()=> navigate('/course/description')}
    
    className='text-white w-88 h-107 shadow-lg cursor-pointer overflow-hidden'>
        <div className="overflow-hidden">
            <img 
            className = 'h-48 w-full rounded-tl-lg rounded-tr-lg group-hover:scale=[1,2] transition-all ease-in-out duration-300'
            src={data.thumbnail}
            alt="course thumbnail" />
            <div className='p-3 space-y-1 text-white'>
                <h2 className='text-xl font-bold text-yello-500 line-clamp-2'>
                    {data?.title}
                </h2>
                <p className='line-clamp-2'>
                    
                     {data?.description}
                </p>
                <p className='line-clamp-2'>
                      <span className='text-yellow-500 font-bold'> Category : </span>
                     {data?.category}
                </p>
                <p className='line-clamp-2'>
                    <span className='text-yellow-500 font-bold'> Total Lecture : </span>
                     {data?.numberofLecture}
                </p>
                <p className='line-clamp-2'>
                     {}
                </p>

            </div>
        </div>
      
    </div>
  )
}

export default CourseComponent
