import React, { ReactNode, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AutheticateApi } from "../features/auth/authApi";
import { useAppDispatch, RootState } from "../features/store";
import Loader from "../components/UI/Loader/Loader";

interface useAuthProps {
  children: ReactNode;
}

const UseAuth: React.FC<useAuthProps> = ({ children }) => {
  const navigate = useNavigate();
  const { isLoading, authenticated } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(AutheticateApi());
    if (!authenticated) {
      navigate("/login");
    }
  }, [authenticated]);
  return <>{authenticated && children}</>;
};

export default UseAuth;
