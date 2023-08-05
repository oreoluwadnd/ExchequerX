import React, { useState, useEffect } from "react";
import "./CardTopUp.css";
import { useAppDispatch, RootState } from "../../../features/store";
import { useForm } from "../../../hooks/useForm";
import { fundCardApi } from "../../../features/user/UserApi";
import InputErrorLabel from "../../UI/InputErrorLabel/InputErrorLabel";
import { setCardTopUp } from "../../../features/modal/modalsSlice";
import { BiGift } from "react-icons/bi";
import { RiMastercardFill, RiVisaFill } from "react-icons/ri";
import { BsFillCreditCardFill } from "react-icons/bs";

const CardTopUp = () => {
  const dispatch = useAppDispatch();
  const [dropDown, setDropDown] = useState(false);
  const [selectCard, setSelectCard] = useState({
    icon: BsFillCreditCardFill,
    message: "Select a card",
  });
  useEffect(() => {
    console.log(selectCard);
  }, [selectCard]);
  const Cards = [
    {
      name: "master",
      icon: RiMastercardFill,
    },
    {
      name: "visa",
      icon: RiVisaFill,
    },
    {
      name: "giftCard",
      icon: BiGift,
    },
  ];

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  const handleModal = () => {
    return dispatch(setCardTopUp());
  };

  const cardTopUpData = {
    amount: "",
  };
  const cardTopUpMessage = {
    amount: "",
  };

  const {
    data: cardData,
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
        fundCardApi({ cardType: selectCard.message, amount: cardData.amount })
      );
    },
  });
  return (
    <div className="CardTopUpModalWrapper">
      <form onSubmit={handleSubmit}>
        <div className="CardTopUpHeader">
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
            <div
              className="SavingsMoneyDropDownWrapper"
              onClick={handleDropDown}
            >
              <div>{React.createElement(selectCard?.icon, { size: "20" })}</div>
              {selectCard.message}
            </div>
            {dropDown && (
              <div className="SavingsMoneyDropdown">
                {Cards?.map((card, i) => (
                  <div
                    key={i}
                    className="SavingsMoneyDropdownItem"
                    onClick={() => {
                      setSelectCard({
                        icon: card.icon,
                        message: card.name,
                      });
                      console.log(card.name);

                      setDropDown(false);
                    }}
                  >
                    {React.createElement(card?.icon, { size: "30" })}
                    <div className="SavingsMoneyDropdownItemText">
                      {card.name}
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
            value={cardData.amount || ""}
          />
          {errors.amount && <InputErrorLabel errorMessage={errors.amount} />}
        </div>
        <div className="CardTopUpModalButtonGroup">
          <div className="CardTopUpModalClose" onClick={handleModal}>
            <div>CANCEL</div>
          </div>
          <button className="CardTopUpModalButton" type="submit">
            <div>Fund Card</div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CardTopUp;
