import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../Helpers/AxiosInstance";
import { toast } from "react-hot-toast";

const initialState = {
  courseData: [],
  error: null,
};

export const getAllCourse = createAsyncThunk(
  "/course/get",
  async (_, { rejectWithValue }) => {
    try {
      const responsePromise = AxiosInstance.get("/courses");

      toast.promise(responsePromise, {
        loading: "Loading Course Data...",
        success: "Courses Loaded Successfully",
        error: "Failed to load Course Data",
      });

      const response = await responsePromise;

      return response.data.courses;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return rejectWithValue(err?.response?.data);
    }
  },
);

const CourseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCourse.fulfilled, (state, action) => {
        if (action.payload) {
          console.log(action.payload);
          console.log("Hello ");

          state.courseData = [...action.payload];
        }
      })
      .addCase(getAllCourse.rejected, (state, action) => {
        state.error = action?.payload?.error;
      });
  },
});
export default CourseSlice.reducer;
