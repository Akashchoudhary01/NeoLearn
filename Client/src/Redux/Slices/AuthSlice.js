import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-hot-toast'
import AxiosInstance from "../../Helpers/AxiosInstance";

const InitialState = {
    isLoggedIn : localStorage.getItem('isLoggedIn') || false,
    role : localStorage.getItem('role') || "",
    data : localStorage.getItem('data') || {}
};

const authSlice = createSlice({
    name : 'auth',
    initialState:'',
    reducers : {},
});

export const createAccount = createAsyncThunk('/auth/signup' , async(data)=>{
    try{
        const res = AxiosInstance.post("user/register" , data);
        toast.promise(res , {
            loading : "Wait ! Creating Your Account",
            success: (data)=>{
                return data?.data?.message
            },
            error : "Failed To Create"
        })
        return (await res).data;
    }catch(err){
        toast.error(err?.response?.data?.message)
    }
})

// export const {} = authSlice.actions;

export default authSlice.reducer;