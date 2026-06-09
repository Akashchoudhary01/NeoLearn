import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import AxiosInstance from "../../Helpers/AxiosInstance"

const initialState = {
    allUsersCount: 0,
    SubscribedCount : 0
}

export const getStateData = createAsyncThunk("stats/get" , async()=>{
    try {
        const response = await AxiosInstance.get("/admin/stats/users");
        toast.promise(response , {
            loading : "Loading the data...",
            success : (data)=>{
                return data?.data?.message
            },
            error : "Failed to load the data"
        })
        return (await response).data;
        
    } catch (error) {
        toast.error(error?.response?.data?.message)
        
    }
})

const statSlice = createSlice({
    name: "state",
    initialState : initialState,
    reducers : {},
    extraReducers : (builder)=>{
        builder.addCase(getStateData.fulfilled , (state , action)=>{
            state.allUsersCount = action?.payload?.allUsersCount,
            state.SubscribedCount = action?.payload?.SubscribedCount
        })
    }
})

export default statSlice.reducer;