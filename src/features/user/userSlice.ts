import { createSlice } from "@reduxjs/toolkit";
import {
  transferMoneyApi,
  getCardApi,
  getAllCardApi,
  getAllTransactionApi,
  depositMoneyApi,
  fundCardApi,
  updateSavingsApi,
} from "../user/UserApi";

const initialState = {
  // email: {},
  Loading: false,
  Allcard: {},
  user: "oreoluwa",
  transaction: {},
  // errors: {},
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fundCardApi.pending, (state, action) => {
      // state.Loading = true;
    });
    builder.addCase(fundCardApi.fulfilled, (state, action) => {
      // state.Loading = true;
    });
    builder.addCase(fundCardApi.rejected, (state, action) => {
      // state.Loading = true;
    });
    builder.addCase(depositMoneyApi.pending, (state, action) => {
      // state.Loading = true;
    });
    builder.addCase(depositMoneyApi.fulfilled, (state, action) => {
      // state.Loading = true;
    });
    builder.addCase(depositMoneyApi.rejected, (state, action) => {
      // state.Loading = true;
    });
    builder.addCase(transferMoneyApi.pending, (state, action) => {
      state.Loading = true;
    });
    builder.addCase(transferMoneyApi.fulfilled, (state, action) => {
      state.Loading = false;
      // state.email = action.payload.data;
    });
    builder.addCase(transferMoneyApi.rejected, (state, action) => {
      state.Loading = false;
    });
    builder.addCase(getCardApi.pending, (state, action) => {
      state.Loading = true;
    });
    builder.addCase(getCardApi.fulfilled, (state, action) => {
      state.Loading = false;
      state.Allcard = action.payload.data;
    });
    builder.addCase(getCardApi.rejected, (state, action) => {
      state.Loading = false;
    });
    builder.addCase(getAllCardApi.pending, (state, action) => {
      state.Loading = true;
    });
    builder.addCase(getAllCardApi.fulfilled, (state, action) => {
      state.Loading = false;
      state.Allcard = action.payload.data;
    });
    builder.addCase(getAllCardApi.rejected, (state, action) => {
      state.Loading = false;
      // state.errors = "";
    });
    builder.addCase(getAllTransactionApi.pending, (state, action) => {
      state.Loading = true;
    });
    builder.addCase(getAllTransactionApi.fulfilled, (state, action) => {
      state.Loading = false;
      state.transaction = action.payload.data;
    });
    builder.addCase(getAllTransactionApi.rejected, (state, action) => {
      // state.errors = action.payload;
    });
    builder.addCase(updateSavingsApi.pending, (state, action) => {
      // state.errors = action.payload;
    });
    builder.addCase(updateSavingsApi.fulfilled, (state, action) => {
      // state.errors = action.payload;
    });
    builder.addCase(updateSavingsApi.rejected, (state, action) => {
      // state.errors = action.payload;
    });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
