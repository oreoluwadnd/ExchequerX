import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sendModal: false,
  requestModal: false,
  savingsModal: false,
  CardTopUpModal: false,
  cardCopy: {
    cardNameCopy: false,
    cardNumberCopy: false,
    expiryDateCopy: false,
    cvcCopy: false,
    billingAdrressCopy: false,
    cityCopy: false,
    stateCopy: false,
    zipCodeCopy: false,
  },
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
    setcardNameCopy: (state) => {
      state.cardCopy.cardNameCopy = true;
    },
    setcardNumberCopy: (state) => {
      state.cardCopy.cardNumberCopy = true;
    },
    setexpiryDateCopy: (state) => {
      state.cardCopy.expiryDateCopy = true;
    },
    setcvcCopy: (state) => {
      state.cardCopy.cvcCopy = true;
    },
    setbillingAdrressCopy: (state) => {
      state.cardCopy.billingAdrressCopy = true;
    },
    setcityCopy: (state) => {
      state.cardCopy.cityCopy = true;
    },
    setstateCopy: (state) => {
      state.cardCopy.stateCopy = true;
    },
    setzipCodeCopy: (state) => {
      state.cardCopy.zipCodeCopy = true;
    },
  },
});

export const {
  setCardTopUp,
  setrequestModal,
  setSendMoney,
  setSavingsMoneyModal,
  setcardNameCopy,
  setcardNumberCopy,
  setexpiryDateCopy,
  setcvcCopy,
  setbillingAdrressCopy,
  setcityCopy,
  setstateCopy,
  setzipCodeCopy,
} = modalSlice.actions;

export default modalSlice.reducer;
