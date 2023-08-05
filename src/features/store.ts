import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import modalsSlice from "./modal/modalsSlice";
import userSlice from "./user/userSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    users: userSlice,
    auth: authReducer,
    modals: modalsSlice,
  },
});

export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
