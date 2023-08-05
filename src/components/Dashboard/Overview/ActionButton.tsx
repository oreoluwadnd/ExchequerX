import React, { useState } from "react";
import "./ActionButton.css";
import {
  setSendMoney,
  setrequestModal,
} from "../../../features/modal/modalsSlice";
import { useAppDispatch, RootState } from "../../../features/store";
interface ActionButtonProps {
  ActionButtonText: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ ActionButtonText }) => {
  const dispatch = useAppDispatch();

  const handleModal = () => {
    if (ActionButtonText === "DEPOSIT") {
      return dispatch(setrequestModal());
    }
    if (ActionButtonText === "SEND") {
      return dispatch(setSendMoney());
    }
  };
  return (
    <div
      onClick={handleModal}
      className={`ActionButtonWrapper ${
        ActionButtonText === "DEPOSIT" ? "requestButton" : "sendButtton"
      }`}
    >
      <div>{ActionButtonText}</div>
    </div>
  );
};

export default ActionButton;
