import React from "react";
import { AiFillApple } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import "./BillCard.css";

interface BillCardProps {
  billPrice: number;
  billColor: string;
  billLogo: any;
  billDetails: string;
}

const BillCard: React.FC<BillCardProps> = ({
  billPrice,
  billColor,
  billLogo,
  billDetails,
}) => {
  return (
    <div className="BillCard">
      <div
        className="billCardLogo"
        style={{
          backgroundColor: `${billColor}`,
        }}
      >
        {React.createElement(billLogo, { size: "30", color: "white" })}
      </div>
      <div className="billCardPrice">
        <p>$ {billPrice}</p>
        <span>{billDetails}</span>
      </div>
      <div className="billsCardButton">
        <span className="billCardButtonText">COMING SOON</span>
      </div>
    </div>
  );
};

export default BillCard;
