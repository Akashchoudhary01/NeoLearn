import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import AxiosInstance from "../../Helpers/AxiosInstance";
import {toast} from 'react-hot-toast'
const initialState = {
    key: "",
    subscription_id:"",
    isPaymentVerified: false,
    allPayment :{},
    finalMonth : {},
    monthlySalesRecord : []
}

export const getRazorPayId = createAsyncThunk ("/razorpay/getId" , async()=>{
    try {
        const response = await AxiosInstance.get("/payments/razorpay-key");
        return response.data;
    } catch (error) {
        toast.error("Failed to  load data")
        throw error;
        
        
    }
})

export const purchaseCourseBundle = createAsyncThunk ("/purchaseCourse" , async()=>{
    try {
        const response  = await AxiosInstance.post("/payments/subscribe");
        return response.data;
        
    } catch (error) {
        toast.error(error?.response?.data?.message);
        
    }
})

export const verifyUserPayment = createAsyncThunk ("/payments/verify" , async(data)=>{
    try {
        const response  = await AxiosInstance.post("/payments/verify" , {
            razorpay_payment_id : data.razorpay_payment_id,
            razorpay_subscription_id : data.razorpay_subscription_id,
            razorpay_signature : data.razorpay_signature

        });

        return response.data;
        
    } catch (error) {
        toast.error(error?.response?.data?.message);
        
    }
})

export const getPaymentRecorde = createAsyncThunk ("/payments/record" , async()=>{
    try {
        const response  = await AxiosInstance.get("/payments?count=100" ,) 
        toast.promise(response , {
            loading : "Getting The Payment Record..",
            success :(data)=>{
                 data?.data?.message
            },
            error : 'Failed To get The data '
        })
        

        return (await response).data;
        
    } catch (error) {
        toast.error(error?.response?.data?.message);
        
    }
})

export const cancelSubscription = createAsyncThunk ("/payments/cancel" , async()=>{
    try {
        const response  = await AxiosInstance.post("/payments/unSubscribe") 
        toast.promise(response , {
            loading : "Unsubscribing the bundle",
            success :(data)=>{
                 data?.data?.message
            },
            error : 'Failed To Unsubscribe '
        })
        

        return (await response).data;
        
    } catch (error) {
        toast.error(error?.response?.data?.message);
        
    }
})

const razorpaySlice = createSlice({
    name : "razorpay",
    initialState,
    reducers :{},
    extraReducers :(builder)=>{
        builder
        .addCase(getRazorPayId.fulfilled , (state , action )=>{
            state.key = action?.payload?.key;
        })
        .addCase(purchaseCourseBundle.fulfilled , (state , action )=>{
            state.subscription_id = action?.payload?.subscription_id;
        })
        .addCase(verifyUserPayment.fulfilled , (state , action )=>{
            toast.success(action?.payload?.message)
            state.isPaymentVerified = action?.payload?.success;
        })
        .addCase(verifyUserPayment.rejected , (state , action )=>{
            toast.error(action?.payload?.message)
            state.isPaymentVerified = action?.payload?.success;
        })
        .addCase(getPaymentRecorde.fulfilled , (state , action )=>{
            state.monthlySalesRecord = action?.payload?.monthlySalesRecord;
            state.finalMonth = action?.payload?.finalMonth;
            state.allPayment = action?.payload?.allPayment
        })

    }
})

export default razorpaySlice.reducer;