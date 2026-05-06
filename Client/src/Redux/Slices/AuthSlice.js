// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import {toast} from 'react-hot-toast'
// import AxiosInstance from "../../Helpers/AxiosInstance";

// const InitialState = {
//     isLoggedIn : localStorage.getItem('isLoggedIn') || false,
//     role : localStorage.getItem('role') || "",
//     data : localStorage.getItem('data') || {}
// };

// const authSlice = createSlice({
//     name : 'auth',
//     initialState:InitialState,
//     reducers : {},
// });

// // ✅ Async Thunk
// export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
//   try {
//     const res = await AxiosInstance.post("user/register", data);
//     toast.success(res?.data?.message || "Account created successfully");
//     return res.data;
//   } catch (error) {
//     toast.error(error?.response?.data?.message || "Failed to create account");
//     throw error;
//   }
// });

// // export const {} = authSlice.actions;

// export default authSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import AxiosInstance from "../../Helpers/AxiosInstance";

const InitialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  role: localStorage.getItem("role") || "",
  data: localStorage.getItem("data") || {},
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: InitialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle createAccount async thunk
    builder
      .addCase(createAccount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.data = action.payload.user || action.payload.data;
        state.role = action.payload.role || "user";
        // Store in localStorage if needed
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("role", state.role);
        localStorage.setItem("data", JSON.stringify(state.data));
      })
      .addCase(createAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.isLoggedIn = false;
      });
  },
});

// ✅ Async Thunk
export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
  try {
    const res = await AxiosInstance.post("user/register", data);
    toast.success(res?.data?.message || "Account created successfully");
    return res.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || "Failed to create account");
    throw error;
  }
});

export const {} = authSlice.actions;

export default authSlice.reducer;
