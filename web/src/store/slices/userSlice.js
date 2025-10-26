import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  user: null,
  isLoading: false,
  isError: null,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = userSlice.actions;
export default userSlice.reducer;
