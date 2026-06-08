import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../Helpers/AxiosInstance";
import { toast } from "react-hot-toast";

const initialState = {
  key: "",
  subscription_id: "",
  isPaymentVerified: false,
  allPayment: {},
  finalMonth: {},
  monthlySalesRecord: [],
};

export const getRazorPayId = createAsyncThunk(
  "/razorpay/getId",
  async (_, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.get(
        "/payments/razorpay-key"
      );

      console.log("RAZORPAY KEY RESPONSE:", response.data);

      return response.data;
    } catch (error) {
      console.log("KEY ERROR:", error?.response?.data);

      toast.error(
        error?.response?.data?.message ||
          "Failed to load Razorpay key"
      );

      return rejectWithValue(error?.response?.data);
    }
  }
);

export const purchaseCourseBundle = createAsyncThunk(
  "/purchaseCourse",
  async (_, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.post(
        "/payments/subscribe"
      );

      console.log(
        "SUBSCRIBE RESPONSE:",
        response.data
      );

      return response.data;
    } catch (error) {
      console.log("SUBSCRIBE ERROR:", error);
      console.log(
        "SUBSCRIBE ERROR DATA:",
        error?.response?.data
      );

      toast.error(
        error?.response?.data?.message ||
          "Failed to purchase bundle"
      );

      return rejectWithValue(error?.response?.data);
    }
  }
);

export const verifyUserPayment = createAsyncThunk(
  "/payments/verify",
  async (data, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.post(
        "/payments/verify",
        data
      );

      return response.data;
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Payment verification failed"
      );

      return rejectWithValue(error?.response?.data);
    }
  }
);

export const cancelSubscription = createAsyncThunk(
  "/payments/cancel",
  async (_, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.post(
        "/payments/unSubscribe"
      );

      return response.data;
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Failed to cancel subscription"
      );

      return rejectWithValue(error?.response?.data);
    }
  }
);

const razorpaySlice = createSlice({
  name: "razorpay",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(getRazorPayId.fulfilled, (state, action) => {
        console.log(
          "KEY FULFILLED PAYLOAD:",
          action.payload
        );

        state.key = action?.payload?.key || "";

        console.log("STATE KEY:", state.key);
      })

      .addCase(purchaseCourseBundle.fulfilled, (state, action) => {
        console.log(
          "SUB FULFILLED PAYLOAD:",
          action.payload
        );

        state.subscription_id =
          action?.payload?.subscription_id || "";

        console.log(
          "STATE SUB ID:",
          state.subscription_id
        );
      })

      .addCase(purchaseCourseBundle.rejected, (state, action) => {
        console.log(
          "SUB REJECTED:",
          action.payload
        );
      })

      .addCase(verifyUserPayment.fulfilled, (state, action) => {
        state.isPaymentVerified =
          action?.payload?.success || false;

        toast.success(
          action?.payload?.message ||
            "Payment verified"
        );
      })

      .addCase(verifyUserPayment.rejected, (state) => {
        state.isPaymentVerified = false;
      });
  },
});

export default razorpaySlice.reducer;