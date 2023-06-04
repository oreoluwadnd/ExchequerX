import React, { useState } from "react";
import { setCardTopUp } from "../../../features/modal/modalsSlice";
import { useAppDispatch, RootState } from "../../../features/store";
import { GiDialPadlock } from "react-icons/gi";
import "./SavingCard.css";
import { IconType } from "react-icons";

interface SavingCardProps {
  SavingCardDetails: string;
  SavingCardIcon: IconType;
  SavingCardHeader: string;
}

const SavingCard: React.FC<SavingCardProps> = ({
  SavingCardIcon,
  SavingCardHeader,
  SavingCardDetails,
}) => {
  const dispatch = useAppDispatch();
  const handleModal = () => {
    return dispatch(setCardTopUp());
  };
  return (
    <div className="SavingCardWrapper">
      <div className="SavingCardWrapperIconWrapper">
        {React.createElement(SavingCardIcon, { size: "30" })}
      </div>
      <div className="SavingCardText">{SavingCardHeader}</div>
      <div className="SavingCardDetails">{SavingCardDetails}</div>
      <div className="SavingCardWrapperAmount" onClick={handleModal}>
        <h3>FUND CARD</h3>
      </div>
    </div>
  );
};

export default SavingCard;
