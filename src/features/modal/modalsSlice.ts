import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sendModal: false,
  requestModal: false,
  savingsModal: false,
  CardTopUpModal: false,
};

const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setSendMoney: (state) => {
      state.sendModal = !state.sendModal;
    },
    setrequestModal: (state) => {
      state.requestModal = !state.requestModal;
    },
    setSavingsMoneyModal: (state) => {
      state.savingsModal = !state.savingsModal;
    },
    setCardTopUp: (state) => {
      state.CardTopUpModal = !state.CardTopUpModal;
    },
  },
});

export const {
  setCardTopUp,
  setrequestModal,
  setSendMoney,
  setSavingsMoneyModal,
} = modalSlice.actions;

export default modalSlice.reducer;
