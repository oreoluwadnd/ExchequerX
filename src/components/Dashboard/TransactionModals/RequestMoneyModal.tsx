import React from "react";
import "./RequestMoneyModal.css";

interface SendMoneyModalProps {}

const RequestMoneyModal = () => {
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

      <div className="RequestMoneyModalButton">
        <div>Request</div>
      </div>
    </div>
  );
};

export default RequestMoneyModal;
