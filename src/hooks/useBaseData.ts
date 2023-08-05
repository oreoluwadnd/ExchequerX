import React, { ReactNode, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllCardApi, getAllTransactionApi } from "../features/user/UserApi";
import { useAppDispatch, RootState } from "../features/store";

const BaseData = ({ children }) => {
  //  const { isLoading, authenticated } = useSelector(
  //    (state: RootState) => state.auth
  //  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllCardApi());
    dispatch(getAllTransactionApi());
  }, []);
  return children;
};

export default BaseData;
