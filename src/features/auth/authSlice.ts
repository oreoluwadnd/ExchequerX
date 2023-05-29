import { createSlice } from "@reduxjs/toolkit";
import { SignUpApi, VerifyOtpApi, LoginApi } from "./authApi";

const initialState = {
  user: {},
  isAuth: false,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
  error: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setPage: (state) => {
      state.isAuth = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
    notification: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(SignUpApi.pending, (state, action) => {
      state.isLoading = true;
    }),
      builder.addCase(SignUpApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      }),
      builder.addCase(SignUpApi.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload || "Error Occured";
      });
    builder.addCase(VerifyOtpApi.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(VerifyOtpApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      }),
      builder.addCase(VerifyOtpApi.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload || "Error Occured";
      });
    builder.addCase(LoginApi.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(LoginApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
      }),
      builder.addCase(LoginApi.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload || "Error Occured";
      });
  },
});

export const { setPage } = authSlice.actions;

export default authSlice.reducer;
