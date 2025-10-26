import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../api/axios";

const initialState = {
  loading: false,
  error: null,
};

export const registerUser = createAsyncThunk(
  "auth/loginUser",
  async (FormData, { rejectWithValue }) => {
    try {
      const res = await Axios.post("/auth/register", FormData);
      if (res.status === 201) {
        localStorage.setItem("token", res.data?.token);
      }
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(
        error.response.message || "Internal server error."
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
