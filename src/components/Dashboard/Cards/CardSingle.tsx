import React, { useState } from "react";
import "./CardSingle.css";
import { SiVisa, SiMastercard } from "react-icons/si";
import { FaAsterisk, FaEye } from "react-icons/fa";
import { FcSimCardChip } from "react-icons/fc";
import { AiFillEyeInvisible } from "react-icons/ai";

interface CardSingleProps {
  cardType: string;
}

const CardSingle: React.FC<CardSingleProps> = ({ cardType }) => {
  const [showCvv, setShowCvv] = useState(false);

  const handleShowCvv = () => {
    setShowCvv(!showCvv);
  };

  return (
    <div className="SingleCard">
      <div className="singleCardWrapper">
        <div
          className={`singleCardFront ${
            cardType === "MasterCard" ? "masterCard" : "visa"
          }`}
        >
          <img src="https://i.ibb.co/PYss3yv/map.png" className="map-img"></img>
          <div className="cardRow">
            <FcSimCardChip size={50} />
            {cardType === "MasterCard" ? (
              <SiMastercard size={50} />
            ) : (
              <SiVisa size={50} />
            )}
          </div>
          <div className=" cardHolder">
            <p>$5000</p>
          </div>
          <div className="cardRow cardName">
            <p>EMMANUEL OREOLUWA</p>
            <p>10 / 25</p>
          </div>
        </div>
        <div
          className={`singleCardBack ${
            cardType === "MasterCard" ? "masterCard" : "visa"
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
                  <>123</>
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

              {cardType === "MasterCard" ? (
                <SiMastercard size={50} />
              ) : (
                <SiVisa size={50} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSingle;
