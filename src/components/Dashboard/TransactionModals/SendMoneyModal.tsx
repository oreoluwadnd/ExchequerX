import React from "react";
import "./SendMoneyModal.css";

interface SendMoneyModalProps {
  children?: React.ReactNode;
}

const SendMoneyModal: React.FC<SendMoneyModalProps> = ({ children }) => {
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

      <div className="SendMoneyModalButton">
        <div>SEND</div>
      </div>
    </div>
  );
};
9;

export default SendMoneyModal;
