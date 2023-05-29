import React from "react";
import "./SavingsMoneyModal.css";
import { GiPiggyBank } from "react-icons/gi";
import { TbLockSquareRoundedFilled, TbTargetArrow } from "react-icons/tb";

const SavingsMoneyModal = () => {
  return (
    <div className="SavingsMoneyModalWrapper">
      <div className="SavingsMoneyHeader">
        <div>
          <h2>Quick save to any destination</h2>
        </div>
        <div>
          <p>Enter any amount and destination to save to</p>
        </div>
      </div>

      <div className="SavingsMoneyInputWrapper">
        <label>Destination</label>
        <div className="SavingsMoneyDropDownContainer">
          <input
            className="SavingsMoneyDropDownWrapper"
            disabled
            value="PiggyBank"
          />
          <div className="SavingsMoneyDropdown">
            <div className="SavingsMoneyDropdownItem">
              <GiPiggyBank size={30} />
              <div className="SavingsMoneyDropdownItemText">PiggyBank</div>
            </div>
            <div className="SavingsMoneyDropdownItem">
              <TbLockSquareRoundedFilled size={30} />
              <div className="SavingsMoneyDropdownItemText">Safelock</div>
            </div>
            <div className="SavingsMoneyDropdownItem">
              <TbTargetArrow size={30} />
              <div className="SavingsMoneyDropdownItemText">Target</div>
            </div>
          </div>
        </div>
      </div>
      <div className="SavingsMoneyInputWrapper">
        <label>Amount</label>
        <input className="SavingsMoneyInput" type="number" />
      </div>

      <div className="SavingsMoneyModalButton">
        <div>Save</div>
      </div>
    </div>
  );
};

export default SavingsMoneyModal;
