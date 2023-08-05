import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../features/store";
import { ImPriceTags } from "react-icons/im";
import { TbCopy } from "react-icons/tb";
import "./AccountCard.css";
import ActionButton from "./ActionButton";
import SavingTiles from "./SavingTiles";

const AccountCard: React.FC = ({}) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const { safeLock, piggyBank, target } = user.Savings;
  const handleCopyClick = () => {
    const spanText = document.getElementById("textToCopy")!.innerText;
    console.log(spanText);
    navigator.clipboard
      .writeText(spanText)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((error) => {
        console.error("Error copying text:", error);
      });
  };

  return (
    <div className="https://res.cloudinary.com/aore/image/upload/v1685310955/maukjciktevcscxkhxwg.png">
      <div className="AccountCardBalanceWrapper">
        <div className="AccountCardBalance">
          <span className="AccountCardHeader AccountCardHeaderTag">Tag</span>
          <div className="AccountCardBalanceCard" onClick={handleCopyClick}>
            <ImPriceTags size={20} />
            <span id="textToCopy">{`@${user.email}`}</span>
            <TbCopy size={20} className="tagCopyIcon" />
          </div>
        </div>

        <div>
          <span className="AccountCardHeader AccountCardHeaderStatus">
            Status
          </span>
          <div className="AccountCardStatus">Active</div>
        </div>
      </div>

      <div className="AccountCardButtons">
        <ActionButton ActionButtonText={"DEPOSIT"} />
        <ActionButton ActionButtonText={"SEND"} />
      </div>
      <div>
        <div className="AccountCardBalanceSavingHeader">
          <h3>Savings</h3>
        </div>
        <div className="AccountCardContent">
          <SavingTiles
            SavingTilesTitle="SafeLock"
            SavingTilesAmount={safeLock}
          />
          <SavingTiles
            SavingTilesTitle="PiggyBank"
            SavingTilesAmount={target}
          />
          <SavingTiles SavingTilesTitle="Target" SavingTilesAmount={target} />
        </div>
      </div>
    </div>
  );
};

export default AccountCard;
