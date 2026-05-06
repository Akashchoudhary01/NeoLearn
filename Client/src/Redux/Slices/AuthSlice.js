import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import {toast} from 'react-hot-toast'
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

// ✅ Async Thunk
export const createAccount = createAsyncThunk(
  "/auth/signup",
  async (data, { rejectWithValue }) => {
    try {
      const res = await AxiosInstance.post("/user/register", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return res.data; // ✅ important
    } catch (err) {
      return rejectWithValue(
        err?.response?.data || { message: "Something went wrong" }
      );
    }
  }
);

// export const {} = authSlice.actions;

export default authSlice.reducer;