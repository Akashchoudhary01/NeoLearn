import React from 'react'
import { useLocation } from 'react-router-dom'
import HomeLayout from '../../Layout/HomeLayout';
import { useSelector } from 'react-redux';

const CourseDescription = () => {
    const { state } = useLocation();
    console.log(state);

    const {data , role} = useSelector((state)=> state.auth);
    
  return (
    <HomeLayout>

    <div className='min-h-[90vh] pt-12 px-20 flex flex-col justify-center item-center text-white'>
        <div className='grid grid-cols-2 gap-10 px-10 relative'>
            <div className='space-y-5'>
                <img src={state?.data?.thumbnail?.secure_url} className='w-full h-64' alt="thumbnail" />

                <div className='space-y-3'>
                    <div className='flex items-center justify-between text-xl flex-col '>
                        <p className='font-semibold '>
                            <span className='text-yellow-500 font-bold'>Created By : {" "}</span>
                            {state?.data?.createdBy}
                        </p>
                    </div>
                    <div className='flex items-center justify-between text-xl flex-col '>
                        <p className='font-semibold '>
                            <span className='text-yellow-500 font-bold'>Total Lecture : {" "}</span>
                            {state?.data?.noOfLecture
}
                        </p>
                    </div>

                    {role === "ADMIN" || data?.subscription?.status ==="ACTIVE" ? (
                          <button className='px-3 py-2 rounded-md bg-yellow-400'>Watch Lecture</button>
                        ) :(
                        <button className='px-3 py-2 rounded-md bg-yellow-400'>Subscribe</button>

                    )}
                </div>
            </div>
            <div className='space-y-3 '>
                <h1 className='text-white text-3xl italic'>{state?.data?.title}</h1>
                <h2>{state?.data?.description}</h2>

            </div>
        </div>
      
    </div>
    </HomeLayout>
  )
}

export default CourseDescription
