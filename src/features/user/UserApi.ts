import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendUrl = "http://" + window.location.hostname + ":5000/api/v1/";
// const backendUrl = "https://exchequer.onrender.com/api/v1/";

export const transferMoneyApi = createAsyncThunk(
  "account/transfer",
  async (data: any, thunkAPI) => {
    try {
      console.log(data);

      const response = await axios.post(backendUrl + "account/transfer", data, {
        withCredentials: true,
      });
      console.log(response);
      return response.data.data;
    } catch (error: any) {
      console.log(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const fundCardApi = createAsyncThunk(
  "account/fundCard",
  async (data: any, thunkAPI) => {
    try {
      console.log(data);

      const response = await axios.post(backendUrl + "account/fundCard", data, {
        withCredentials: true,
      });
      console.log(response);
      return response.data.data;
    } catch (error: any) {
      console.log(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateSavingsApi = createAsyncThunk(
  "account/updateSavings",
  async (data: any, thunkAPI) => {
    try {
      console.log(data);

      const response = await axios.patch(
        backendUrl + "account/updateSavings",
        data,
        {
          withCredentials: true,
        }
      );
      console.log(response);
      return response.data.data;
    } catch (error: any) {
      console.log(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const depositMoneyApi = createAsyncThunk(
  "account/deposit",
  async (data: any, thunkAPI) => {
    try {
      console.log(data);

      const response = await axios.post(backendUrl + "account/deposit", data, {
        withCredentials: true,
      });
      console.log(response);
      return response.data.data;
    } catch (error: any) {
      console.log(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getCardApi = createAsyncThunk(
  "account/createCard",
  async (data: any, thunkAPI) => {
    try {
      console.log(data);

      const response = await axios.post(
        backendUrl + "account/createCard",
        data,
        {
          withCredentials: true,
        }
      );
      console.log(response);
      return response.data.data;
    } catch (error: any) {
      console.log(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getAllCardApi = createAsyncThunk(
  "account/getAllCard",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(backendUrl + "account/getAllCard", {
        withCredentials: true,
      });
      console.log(response);
      return response.data;
    } catch (error: any) {
      console.log(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const getAllTransactionApi = createAsyncThunk(
  "account/getMyTransactions",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        backendUrl + "account/getMyTransactions",
        {
          withCredentials: true,
        }
      );

      console.log(response);
      return response.data;
    } catch (error: any) {
      console.log(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
