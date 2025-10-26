import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../api/axios";

const initialState = {
  loading: false,
  error: null,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (FormData, { rejectWithValue }) => {
    try {
      const res = await Axios.post("/auth/register", FormData);
      if (res.status === 201) {
        localStorage.setItem("token", res.data?.token);
        return res.data;
      } else {
        return rejectWithValue("Registration failed");
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message || error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (FormData, { rejectWithValue }) => {
    try {
      const res = await Axios.post("/auth/login", FormData);
      if (res.status === 200) {
        localStorage.setItem("token", res.data?.token);
        return res.data;
      } else {
        return rejectWithValue("Login failed");
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message || error.message);
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
