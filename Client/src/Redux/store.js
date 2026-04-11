import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from './Slices/AuthSlice'

const store = configureStore({
    reducer :{
        slice : authSliceReducer
    },
    devTools: true
})

export default store;