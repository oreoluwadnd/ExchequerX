import { createSlice } from "@reduxjs/toolkit";

import {
  SignUpApi,
  VerifyOtpApi,
  LoginApi,
  AutheticateApi,
  logoutApi,
  updateUserApi,
  deleteUserApi,
} from "./authApi";

const initialState  = {
  user : {},
  isAuth: false,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
  error: {},
  authenticated: false,
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
    builder.addCase(SignUpApi.pending, (state) => {
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
        state.authenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
      }),
      builder.addCase(LoginApi.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload || "Error Occured";
      });
    builder.addCase(AutheticateApi.fulfilled, (state, action) => {
      state.authenticated = true;
      state.user = action.payload.userDetails;
      state.isLoading = false;
    });
    builder.addCase(AutheticateApi.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(AutheticateApi.rejected, (state, action) => {
      state.isLoading = false;
      state.authenticated = false;
    });
    builder.addCase(updateUserApi.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateUserApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = false;
    });
    builder.addCase(updateUserApi.rejected, (state, action) => {
      state.isLoading = false;
      //  state.authenticated = false;
    });
    builder.addCase(logoutApi.pending, (state, action) => {
      state.isLoading = false;
      state.authenticated = false;
      //  state.authenticated = false;
    });
    builder.addCase(logoutApi.rejected, (state, action) => {
      state.isLoading = false;
      //  state.authenticated = false;
    });
    builder.addCase(logoutApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.authenticated = false;
      state.user = {};
    });
    //TODO edit the delete user slice
    builder.addCase(deleteUserApi.rejected, (state, action) => {
      // state.isLoading = false;
      // state.authenticated = false;
      // state.user = {};
    });
    builder.addCase(deleteUserApi.pending, (state, action) => {
      // state.isLoading = false;
      // state.authenticated = false;
      // state.user = {};
    });
    builder.addCase(deleteUserApi.fulfilled, (state, action) => {
      // state.isLoading = false;
      // state.authenticated = false;
      // state.user = {};
    });
  },
});

export const { setPage } = authSlice.actions;

export default authSlice.reducer;
