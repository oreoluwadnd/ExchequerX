import React, { useState } from "react";
import { BsArrowDown } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa";
import "./OverviewCard.css";
import { IconType } from "react-icons";

interface OverviewPageProps {
  overviewTitle: string;
  amount: string;
  overviewIcon: IconType;
  overviewColor: string;
}

const OverviewPage: React.FC<OverviewPageProps> = ({
  overviewTitle,
  amount,
  overviewIcon,
  overviewColor,
}) => {
  return (
    <div className="OverviewCardWrapper">
      <div>
        <div className="OverviewCardDetails">
          <div className="OverviewCardTitle">{overviewTitle}</div>
          <div style={{ color: overviewColor }} className="OverviewCardAmount">
            {amount}
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: overviewColor }}
        className="OverviewCardIconWrapper"
      >
        {React.createElement(overviewIcon, { size: "20" })}
      </div>
    </div>
  );
};

export default OverviewPage;
