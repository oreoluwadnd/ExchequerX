import React from "react";
import "./SendMoneyModal.css";
import { setSendMoney } from "../../../features/modal/modalsSlice";
import { useAppDispatch, RootState } from "../../../features/store";

interface SendMoneyModalProps {
  children?: React.ReactNode;
}

const SendMoneyModal: React.FC<SendMoneyModalProps> = ({ children }) => {
  const dispatch = useAppDispatch();

  const handleModal = () => {
    return dispatch(setSendMoney());
  };
  return (
    <div className="SendMoneyModalWrapper">
      <div className="SavingsMoneyHeader">
        <div>
          <h2>Send Money To your friends</h2>
        </div>
        <div>
          <p>Enter the amount you want to send</p>
        </div>
      </div>

      <div className="SendMoneyInputWrapper">
        <label>Tag</label>
        <input className="SendMoneyInput" />
      </div>
      <div className="SendMoneyInputWrapper">
        <label>Amount</label>
        <input className="SendMoneyInput" type="number" />
      </div>

      <div className="SendMoneyModalButtonGroup">
        <div className="SendMoneyModalClose" onClick={handleModal}>
          <div>CANCEL</div>
        </div>
        <div className="SendMoneyModalButton">
          <div>SEND</div>
        </div>
      </div>
    </div>
  );
};
9;

export default SendMoneyModal;
