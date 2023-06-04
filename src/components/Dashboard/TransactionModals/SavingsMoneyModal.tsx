import React, { useState } from "react";
import "./SavingsMoneyModal.css";
import { GiPiggyBank } from "react-icons/gi";
import { FaHandHoldingUsd } from "react-icons/fa";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import { TbLockSquareRoundedFilled, TbTargetArrow } from "react-icons/tb";
import { setSavingsMoneyModal } from "../../../features/modal/modalsSlice";
import { useAppDispatch, RootState } from "../../../features/store";

const SavingsMoneyModal = () => {
  const [dropDown, setDropDown] = useState(false);
  const [selectSavings, setSelectSavings] = useState({
    icon: FaHandHoldingUsd,
    message: "Select ",
  });
  const [selectSavingsType, setSelectSavingsType] = useState({
    icon: FaHandHoldingUsd,
    message: "Select ",
  });
  const SavingsType = [
    {
      icon: GiPiggyBank,
      name: "PiggyBank",
    },
    {
      icon: TbLockSquareRoundedFilled,
      name: "Safelock",
    },
    {
      icon: TbTargetArrow,
      name: "Target",
    },
  ];
  const Transactype = [
    {
      icon: BiUpArrowAlt,
      name: "Withdrawal",
    },
    {
      icon: BiDownArrowAlt,
      name: "Deposit",
    },
  ];

  const dispatch = useAppDispatch();

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  const handleModal = () => {
    return dispatch(setSavingsMoneyModal());
  };
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
          <div className="SavingsMoneyDropDownWrapper" onClick={handleDropDown}>
            <div>
              {React.createElement(selectSavings?.icon, { size: "20" })}
            </div>
            {selectSavings.message}
          </div>
          {dropDown && (
            <div className="SavingsMoneyDropdown">
              {SavingsType?.map((saving, i) => (
                <div
                  key={i}
                  className="SavingsMoneyDropdownItem"
                  onClick={() => {
                    setSelectSavings({
                      icon: saving.icon,
                      message: saving.name,
                    });
                    console.log(name);

                    setDropDown(false);
                  }}
                >
                  {React.createElement(saving?.icon, { size: "30" })}
                  <div className="SavingsMoneyDropdownItemText">
                    {saving.name}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* test */}
      <div className="SavingsMoneyInputWrapper">
        <label>Transaction Type</label>
        <div className="SavingsMoneyDropDownContainer">
          <div className="SavingsMoneyDropDownWrapper" onClick={handleDropDown}>
            <div>
              {React.createElement(selectSavings?.icon, { size: "20" })}
            </div>
            {selectSavings.message}
          </div>
          {dropDown && (
            <div className="SavingsMoneyDropdown">
              {Transactype?.map((type, i) => (
                <div
                  key={i}
                  className="SavingsMoneyDropdownItem"
                  onClick={() => {
                    setSelectSavings({
                      icon: type.icon,
                      message: type.name,
                    });
                    console.log(name);

                    setDropDown(false);
                  }}
                >
                  {React.createElement(type?.icon, { size: "30" })}
                  <div className="SavingsMoneyDropdownItemText">
                    {type.name}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="SavingsMoneyInputWrapper">
        <label>Amount</label>
        <input className="SavingsMoneyInput" type="number" />
      </div>

      <div className="SavingsMoneyModalButtonGroup">
        <div className="SendMoneyModalClose" onClick={handleModal}>
          <div>CANCEL</div>
        </div>
        <div className="SavingsMoneyModalButton">
          <div>Save</div>
        </div>
      </div>
    </div>
  );
};

export default SavingsMoneyModal;
