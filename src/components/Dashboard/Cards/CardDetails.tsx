import React, { useState } from "react";
import "./CardDetails.css";
// import { BsEye } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useAppDispatch, RootState } from "../../../features/store";
import { BiCopy } from "react-icons/bi";
import { BsCheck2All } from "react-icons/bs";
import {
  setcardNameCopy,
  setcardNumberCopy,
  setexpiryDateCopy,
  setcvcCopy,
  setbillingAdrressCopy,
  setcityCopy,
  setstateCopy,
  setzipCodeCopy,
} from "../../../features/modal/modalsSlice";
const CardDetails: React.FC = ({ data, visibleCard }) => {
  const dispatch = useAppDispatch();
  const [backgroundColor, setBackgroundColor] = useState("white");
  const { cardCopy } = useSelector((state: RootState) => state.modals);
  const handleCopyClick = (texttoId: string, dispatchAction: any) => {
    console.log(dispatchAction);
    const spanText = document.getElementById(texttoId)!.innerText;
    console.log(spanText);
    setBackgroundColor("blue");
    navigator.clipboard
      .writeText(spanText)
      .then(() => {
        dispatch(dispatchAction());
      })
      .catch((error) => {
        console.error("Error copying text:", error);
      });
  };

  return data.map((card, index) => {
    const date = new Date(card.expiryDate);

    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    const formattedDate = `${month}/${day}`;

    return (
      <div
        className={`CardDetailsContainer displayNone ${
          visibleCard === card.cardType ? "displayVisible" : ""
        }`}
        key={index}
      >
        <div className="CardDetailsHeader">
          <div className="CardDetailsHeaderLeft">
            <p className="CardDetailsHeaderText">Card Details</p>
          </div>
          {/* <div className="CardDetailsShow">
            <BsEye size={0} />
            <p>SHOW</p>
          </div> */}
        </div>
        <div>
          <div className="CardInputGroup">
            <div
              className="CardDetailsSingleInput"
              onClick={() => handleCopyClick("cardName", setcardNameCopy)}
            >
              <p className="CardDetailTitle">Card Name</p>
              <p className="CardDetailInfo" id="cardName">
                {card.CardHolder.firstName} {card.CardHolder.lastName}
              </p>
              {!cardCopy.cardNameCopy ? (
                <BiCopy className="CardCopyIcon" size={25} />
              ) : (
                <BsCheck2All className="CardCopyIcon" size={25} />
              )}
            </div>
            <div
              className="CardDetailsSingleInput"
              onClick={() => handleCopyClick("cardNumber", setcardNumberCopy)}
            >
              <p className="CardDetailTitle">Card Number</p>
              <p className="CardDetailInfo" id="cardNumber">
                {card.cardNumber}
              </p>
              {!cardCopy.cardNumberCopy ? (
                <BiCopy className="CardCopyIcon" size={25} />
              ) : (
                <BsCheck2All className="CardCopyIcon" size={25} />
              )}
            </div>
          </div>
          <div className="CardInputGroup">
            <div
              className="CardDetailsSingleInput"
              onClick={() => handleCopyClick("expiryDate", setexpiryDateCopy)}
            >
              <p className="CardDetailTitle">Expiry Date</p>
              <p className="CardDetailInfo" id="expiryDate">
                {formattedDate}
              </p>
              {!cardCopy.expiryDateCopy ? (
                <BiCopy className="CardCopyIcon" size={25} />
              ) : (
                <BsCheck2All className="CardCopyIcon" size={25} />
              )}
            </div>
            <div
              className="CardDetailsSingleInput"
              onClick={() => handleCopyClick("cvc", setcvcCopy)}
            >
              <p className="CardDetailTitle">CVC</p>
              <p className="CardDetailInfo" id="cvc">
                {card.cvc}
              </p>
              {!cardCopy.cvcCopy ? (
                <BiCopy className="CardCopyIcon" size={25} />
              ) : (
                <BsCheck2All className="CardCopyIcon" size={25} />
              )}
            </div>
          </div>
          <div className="CardInputGroup">
            <div
              className="CardDetailsSingleInput"
              onClick={() =>
                handleCopyClick("billingAddress", setbillingAdrressCopy)
              }
            >
              <p className="CardDetailTitle">Billing Address</p>
              <p
                className="CardDetailInfo"
                id="billingAddress"
                style={{ backgroundColor: backgroundColor }}
              >
                {card.billingAddress}
              </p>
              {!cardCopy.billingAdrressCopy ? (
                <BiCopy className="CardCopyIcon" size={25} />
              ) : (
                <BsCheck2All className="CardCopyIcon" size={25} />
              )}
            </div>
            <div
              className="CardDetailsSingleInput"
              onClick={() => handleCopyClick("city", setcityCopy)}
            >
              <p className="CardDetailTitle">City</p>
              <p className="CardDetailInfo" id="city">
                {card.city}
              </p>
              {!cardCopy.cityCopy ? (
                <BiCopy className="CardCopyIcon" size={25} />
              ) : (
                <BsCheck2All className="CardCopyIcon" size={25} />
              )}
            </div>
          </div>
          <div className="CardInputGroup">
            <div
              className="CardDetailsSingleInput"
              onClick={() => handleCopyClick("state", setstateCopy)}
            >
              <p className="CardDetailTitle">State</p>
              <p className="CardDetailInfo" id="state">
                {card.state}
              </p>
              {!cardCopy.stateCopy ? (
                <BiCopy className="CardCopyIcon" size={25} />
              ) : (
                <BsCheck2All className="CardCopyIcon" size={25} />
              )}
            </div>
            <div
              className="CardDetailsSingleInput"
              onClick={() => handleCopyClick("Zip Code", setzipCodeCopy)}
            >
              <p className="CardDetailTitle">Zip Code</p>
              <p className="CardDetailInfo" id="Zip Code">
                {card.zipCode}
              </p>
              {!cardCopy.zipCodeCopy ? (
                <BiCopy className="CardCopyIcon" size={25} />
              ) : (
                <BsCheck2All className="CardCopyIcon" size={25} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default CardDetails;
