import React from "react";
import "./SavingsMoneyModal.css";
import { BiGift } from "react-icons/bi";
import { RiMastercardFill, RiVisaFill } from "react-icons/ri";

const CardTopUp = () => {
  return (
    <div className="SavingsMoneyModalWrapper">
      <div className="SavingsMoneyHeader">
        <div>
          <h2>Fund your card easily</h2>
        </div>
        <div>
          <p>Enter any amount you want to fund your card</p>
        </div>
      </div>

      <div className="SavingsMoneyInputWrapper">
        <label>Card</label>
        <div className="SavingsMoneyDropDownContainer">
          <input
            className="SavingsMoneyDropDownWrapper"
            disabled
            value="MasterCard"
          />
          <div className="SavingsMoneyDropdown">
            <div className="SavingsMoneyDropdownItem">
              <RiMastercardFill size={30} />
              <div className="SavingsMoneyDropdownItemText">MasterCard</div>
            </div>
            <div className="SavingsMoneyDropdownItem">
              <RiVisaFill size={30} />
              <div className="SavingsMoneyDropdownItemText">VisaCard</div>
            </div>
            <div className="SavingsMoneyDropdownItem">
              <BiGift size={30} />
              <div className="SavingsMoneyDropdownItemText">GiftCard</div>
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

export default CardTopUp;
