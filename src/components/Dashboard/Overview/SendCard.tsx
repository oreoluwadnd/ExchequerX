import React, { useState } from "react";
import "./SendCard.css";

interface SendCardProps {
  SendCardImage: string;
  SendCardName: string;
}
const SendCard: React.FC<SendCardProps> = ({ SendCardImage, SendCardName }) => {
  console.log(SendCardImage);
  return (
    <div className="SendCardWrapper">
      <img src={`${SendCardImage}`} alt="Send Card" className="SendCardImage" />
      <div className="SendCardTextName">
        <span>{SendCardName}</span>
      </div>
      <div className="SendCardText">
        <h3>Send Money</h3>
      </div>
    </div>
  );
};

export default SendCard;
