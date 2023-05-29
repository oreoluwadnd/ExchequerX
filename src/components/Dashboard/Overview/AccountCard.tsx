import React, { useState } from "react";

import { ImPriceTags } from "react-icons/im";
import { TbCopy } from "react-icons/tb";
import "./AccountCard.css";
import SavingCard from "./SavingCard";
import ActionButton from "./ActionButton";
import SavingTiles from "./SavingTiles";

const AccountCard: React.FC = ({}) => {
  return (
    <div className="AccountCardWrapper">
      <div className="AccountCardBalanceWrapper">
        <div className="AccountCardBalance">
          <span className="AccountCardHeader AccountCardHeaderTag">Tag</span>
          <div className="AccountCardBalanceCard">
            <ImPriceTags size={20} />
            <span>OREOLUWA</span>
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
        <ActionButton ActionButtonText={"REQUEST"} />
        <ActionButton ActionButtonText={"SEND"} />
      </div>
      <div>
        <div className="AccountCardBalanceSavingHeader">
          <h3>Savings</h3>
        </div>
        <div className="AccountCardContent">
          <SavingTiles SavingTilesTitle="SafeLock" SavingTilesAmount="$900" />
          <SavingTiles
            SavingTilesTitle="PiggyBank"
            SavingTilesAmount="$10000"
          />
          <SavingTiles
            SavingTilesTitle="Target"
            SavingTilesAmount="$90 / $500"
          />
        </div>
      </div>
    </div>
  );
};

export default AccountCard;
