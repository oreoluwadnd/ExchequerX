import React, { useState } from "react";
import "./CardSingle.css";
import { SiVisa, SiMastercard } from "react-icons/si";
import { FaAsterisk, FaEye } from "react-icons/fa";
import { FcSimCardChip } from "react-icons/fc";
import { AiFillEyeInvisible } from "react-icons/ai";
import { HiGiftTop } from "react-icons/hi2";

// interface CardSingleProps {
//   cardType: string;
// }

const CardSingle: React.FC = ({ cards }) => {
  console.log(cards);
  const [showCvv, setShowCvv] = useState(false);

  const handleShowCvv = () => {
    setShowCvv(!showCvv);
  };

  const date = new Date(cards.expiryDate);

  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  const formattedDate = `${month}/${day}`;

  return (
    <div className="SingleCard">
      <div className="singleCardWrapper">
        <div
          className={`singleCardFront ${
            cards.cardType === "master"
              ? "masterCard"
              : cards.cardType === "visa"
              ? "visa"
              : "giftCard"
          }`}
        >
          <div className="cardRow">
            <FcSimCardChip size={50} />

            {cards.cardType === "master" ? (
              <SiMastercard size={50} />
            ) : cards.cardType === "visa" ? (
              <SiVisa size={50} />
            ) : (
              <HiGiftTop size={50} />
            )}
          </div>
          <div className=" cardHolder">
            <p>${cards.cardBalance}</p>
          </div>
          <div className="cardRow cardName">
            <p>
              {cards.CardHolder.firstName} {cards.CardHolder.lastName}
            </p>

            <p> {formattedDate}</p>
          </div>
        </div>
        <div
          className={`singleCardBack ${
            cards.cardType === "master"
              ? "masterCard"
              : cards.cardType === "visa"
              ? "visa"
              : "giftCard"
          }`}
        >
          <div className="singleCardBackWrapper">
            <div className="Cardbar"></div>
            <div className="CardCvv">
              <span className="CardCvvStrike"></span>
              <span className="CardCvvStrike"></span>
              <span className="CardCvvStrike"></span>
              <span className="CardCvvStrike"></span>
              <span className="CardCvvStrike"></span>
              <span className="CardCvvStrike"></span>
              <span className="CardCvvNumber">
                {showCvv ? (
                  <>{cards.cvc}</>
                ) : (
                  <>
                    <FaAsterisk size={10} />
                    <FaAsterisk size={10} />
                    <FaAsterisk size={10} />
                  </>
                )}
              </span>
            </div>
            <div className="backCardtext">
              <p>
                The cvv is hidden is click on the eye icon to make it visible
              </p>
            </div>
            <div className="backCardfooter">
              {showCvv ? (
                <FaEye size={20} onClick={handleShowCvv} />
              ) : (
                <AiFillEyeInvisible size={20} onClick={handleShowCvv} />
              )}

              {cards.cardType === "master" ? (
                <SiMastercard size={50} />
              ) : cards.cardType === "visa" ? (
                <SiVisa size={50} />
              ) : (
                <HiGiftTop size={50} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSingle;
