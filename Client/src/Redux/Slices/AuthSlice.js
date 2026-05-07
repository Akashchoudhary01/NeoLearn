import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import AxiosInstance from "../../Helpers/AxiosInstance";

const InitialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  role: localStorage.getItem("role") || "",
data: localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : {},
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
    //for registration
      .addCase(createAccount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        const userData  = action.payload.user || action.payload.data;
        state.data = userData;
        state.role = userData?.role || "USER";
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

      //for Login
      builder
      .addCase(LoginAc.pending , (state)=>{
        state.loading = true;
        state.error = null;
      })
      .addCase(LoginAc.fulfilled , (state , action )=>{
        state.loading = false;
        state.isLoggedIn = true;
        const userData = action.payload.user || action.payload.data;
        state.data = userData
        state.role = userData?.role || "USER"

          // Store in localStorage if needed
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("role", state.role);
        localStorage.setItem("data", JSON.stringify(state.data));

      })
        .addCase(LoginAc.rejected, (state, action) => {
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
// ✅ Async Thunk
export const LoginAc = createAsyncThunk("/auth/login", async (data) => {
  try {
    const res =  await AxiosInstance.post("user/login", data);
    toast.success(res?.data?.message || "User LoggedIn  successfully");
    return res.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || "Failed to Loggenin ");
    throw error;
  }
});

export const {} = authSlice.actions;

export default authSlice.reducer;
