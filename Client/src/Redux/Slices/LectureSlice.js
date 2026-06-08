import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import AxiosInstance from "../../Helpers/AxiosInstance"
import toast from "react-hot-toast";

const initialState = {
    initialState : [],
}

export const getAllLecture = createAsyncThunk("/course/lecture/get" , async(cid)=>{
    try {
        
        const response =  AxiosInstance.get(`/courses/${cid}`);
        toast.promise(response , {
            loading : "Fetching Course Data",
            success : "Lecture Fetched Successfully",
            error : "Failed To Fetch Lecture !"
        })
        return (await response).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})

export const AddLecture = createAsyncThunk("/course/lecture/add" , async(data)=>{
    try {
        const formData = new FormData();
        formData.append("Lecture" , data.Lecture),
        formData.append("description" , data.description),
        formData.append("title" , data.title)
        
        const response =  AxiosInstance.post(`/courses/${data.id}` , formData);
        toast.promise(response , {
            loading : "Adding Lecture to Course ",
            success : "Lecture Added Successfully",
            error : "Failed To Add Lecture !"
        })
        return (await response).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})
// Remove lecture

export const RemoveLecture = createAsyncThunk("/course/lecture/delete" , async(data)=>{
    try {
        
        const response =  AxiosInstance.post(`/courses?courseId=${data.courseId}&lectureId=${data.lectureId}` );
        toast.promise(response , {
            loading : "deleting Lecture from Course ",
            success : "Lecture deleted Successfully",
            error : "Failed To delete Lecture !"
        })
        return (await response).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})


const LectureSlice = createSlice({
    name : "lecture",
    initialState : initialState,
    reducers : {},
    extraReducers : (builder)=>{
        builder
        .addCase(getAllLecture.fulfilled , (state , action)=>{
            state.lectures = action?.payload?.lectures;
        })
        .addCase(AddLecture.fulfilled , (state , action)=>{
            state.lectures = action?.payload?.course?.lectures;
        })
    }
})

export default LectureSlice.reducer;