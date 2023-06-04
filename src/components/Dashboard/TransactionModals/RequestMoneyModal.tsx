import React from "react";
import "./RequestMoneyModal.css";
import { setrequestModal } from "../../../features/modal/modalsSlice";
import { useAppDispatch, RootState } from "../../../features/store";

interface SendMoneyModalProps {}

const RequestMoneyModal = () => {
  const dispatch = useAppDispatch();

  const handleModal = () => {
    return dispatch(setrequestModal());
  };
  return (
    <div className="RequestMoneyModalWrapper">
      <div className="RequestMoneyHeader">
        <div>
          <h2>Request Money To your friends</h2>
        </div>
        <div>
          <p>Enter the amount you want to send</p>
        </div>
      </div>

      <div className="RequestMoneyInputWrapper">
        <label>Tag</label>
        <input className="RequestMoneyInput" />
      </div>
      <div className="RequestMoneyInputWrapper">
        <label>Amount</label>
        <input className="RequestMoneyInput" type="number" />
      </div>

      <div className="RequestMoneyModalButtonGroup">
        <div className="RequestMoneyModalClose" onClick={handleModal}>
          <div>CANCEL</div>
        </div>
        <div className="RequestMoneyModalButton">
          <div>Request</div>
        </div>
      </div>
    </div>
  );
};

export default RequestMoneyModal;
