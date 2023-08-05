import React, { useState } from "react";
import "./SavingsMoneyModal.css";
import { GiPiggyBank } from "react-icons/gi";
import { FaHandHoldingUsd } from "react-icons/fa";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import {
  TbLockSquareRoundedFilled,
  TbTargetArrow,
  TbArrowsTransferUp,
} from "react-icons/tb";
import { setSavingsMoneyModal } from "../../../features/modal/modalsSlice";
import { useAppDispatch, RootState } from "../../../features/store";
import { useForm } from "../../../hooks/useForm";
import { updateSavingsApi } from "../../../features/user/UserApi";
import InputErrorLabel from "../../UI/InputErrorLabel/InputErrorLabel";

const SavingsMoneyModal = () => {
  const [dropDown, setDropDown] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);
  const [selectSavings, setSelectSavings] = useState({
    icon: FaHandHoldingUsd,
    message: "Select",
  });
  const [selectSavingsType, setSelectSavingsType] = useState({
    icon: TbArrowsTransferUp,
    message: "Select",
  });
  console.log(selectSavingsType.message);
  const SavingsType = [
    {
      icon: GiPiggyBank,
      name: "PiggyBank",
    },
    {
      icon: TbLockSquareRoundedFilled,
      name: "safeLock",
    },
    {
      icon: TbTargetArrow,
      name: "target",
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
  const cardTopUpData = {
    amount: "",
  };
  const cardTopUpMessage = {
    amount: "",
  };

  const {
    data: SavingsData,
    handleChange,
    handleSubmit,
    errors,
    handleBlur,
  } = useForm({
    initailErrorMessage: cardTopUpMessage,
    initialValues: cardTopUpData,
    sanitizeFn: (value) => {
      return value.trim();
    },
    validations: {
      amount: {
        required: {
          value: true,
          message: "Amount is required",
        },
        custom: {
          length: {
            isValid: (value: any) => value > 100,
            message: "amount must be more than 100",
          },
        },
      },
    },
    onSubmit: () => {
      dispatch(
        updateSavingsApi({
          savingType: selectSavings.message,
          amount: SavingsData.amount,
        })
      );
    },
  });

  const dispatch = useAppDispatch();

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };
  const handleDropDown2 = () => {
    setDropDown2(!dropDown);
  };

  const handleModal = () => {
    return dispatch(setSavingsMoneyModal());
  };
  return (
    <div className="SavingsMoneyModalWrapper">
      <form onSubmit={handleSubmit}>
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
            <div
              className="SavingsMoneyDropDownWrapper"
              onClick={handleDropDown}
            >
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
            <div
              className="SavingsMoneyDropDownWrapper"
              onClick={handleDropDown2}
            >
              <div>
                {React.createElement(selectSavingsType?.icon, { size: "20" })}
              </div>
              {selectSavingsType.message}
            </div>
            {dropDown2 && (
              <div className="SavingsMoneyDropdown">
                {Transactype?.map((type, i) => (
                  <div
                    key={i}
                    className="SavingsMoneyDropdownItem"
                    onClick={() => {
                      setSelectSavingsType({
                        icon: type.icon,
                        message: type.name,
                      });

                      setDropDown2(false);
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
          <input
            className="RequestMoneyInput"
            type="text"
            name="amount"
            onBlur={handleBlur()}
            onChange={handleChange()}
            value={SavingsData.amount || ""}
          />
          {errors.amount && <InputErrorLabel errorMessage={errors.amount} />}
        </div>

        <div className="SavingsMoneyModalButtonGroup">
          <div className="SendMoneyModalClose" onClick={handleModal}>
            <div>CANCEL</div>
          </div>
          <button className="SavingsMoneyModalButton">
            <div>Save</div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SavingsMoneyModal;
