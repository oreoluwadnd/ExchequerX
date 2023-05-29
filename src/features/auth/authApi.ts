import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const backendUrl = "http://" + window.location.hostname + ":5000/api/v1/";
const backendUrl = "https://exchequer.onrender.com/api/v1/";

export const SignUpApi = createAsyncThunk(
  "users/signUp",
  async (data: ISignUp, thunkAPI) => {
    try {
      const response = await axios.post(backendUrl + "users/signUp", data);
      localStorage.setItem("email", response.data.data.user);
      return response.data.data;
    } catch (error: any) {
      console.log(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const VerifyOtpApi = createAsyncThunk(
  "users/verifyOtp",
  async (data: IOpt, thunkAPI) => {
    const email = localStorage.getItem("email");
    const { otp } = data;
    try {
      const response = await axios.post(backendUrl + "users/verifyOtp", {
        otp,
        email,
      });
      return response.data.data;
    } catch (error: any) {
      console.log(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const LoginApi = createAsyncThunk(
  "users/login",
  async (data: ILogin, thunkAPI) => {
    try {
      const response = await axios.post(backendUrl + "users/login", data, {
        withCredentials: true,
      });
      return response.data;
    } catch (error: any) {
      console.log(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
