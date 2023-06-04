import React, { useState } from "react";
import "./CardTopUp.css";
import { setCardTopUp } from "../../../features/modal/modalsSlice";
import { useAppDispatch, RootState } from "../../../features/store";
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
  const Cards = [
    {
      name: "MasterCard",
      icon: RiMastercardFill,
    },
    {
      name: "VisaCard",
      icon: RiVisaFill,
    },
    {
      name: "GiftCard",
      icon: BiGift,
    },
  ];

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  const handleModal = () => {
    return dispatch(setCardTopUp());
  };
  return (
    <div className="CardTopUpModalWrapper">
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
          <div className="SavingsMoneyDropDownWrapper" onClick={handleDropDown}>
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
                    console.log(name);

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
        <input className="SavingsMoneyInput" type="number" />
      </div>

      <div className="CardTopUpModalButtonGroup">
        <div className="CardTopUpModalClose" onClick={handleModal}>
          <div>CANCEL</div>
        </div>
        <div className="CardTopUpModalButton">
          <div>Fund Card</div>
        </div>
      </div>
    </div>
  );
};

export default CardTopUp;
