import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../Helpers/AxiosInstance";
import {toast} from "react-hot-toast";

const initialState = {
    courseData : [],
    error : null
}

export const getAllCourse = createAsyncThunk("/course/get" , async()=>{
    try{
        const response = await AxiosInstance.get("/courses")
        toast.promise(response , {
            loading : "Loading Course Data...",
            success : "Courses Loaded Successfully ",
            error : "Failed to load Course Data"
        })
        return (await response).data.courses;

    }catch(err){
        toast.error(err?.response?.data?.message)

    }

})

const CourseSlice = createSlice({
    name : "course",
    initialState,
    reducers : {},
    extraReducers : (builder)=>{
        builder
        .addCase(getAllCourse.fulfilled , (state , action)=>{
            if(action.payload){
                state.courseData  = [...action.payload]
            }
        })
        .addCase(getAllCourse.rejected , (state , action )=>{
            state.error = action?.payload?.error
           
        })

    }

})
export default CourseSlice.reducer;