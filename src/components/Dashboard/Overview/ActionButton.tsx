import React, { useState } from "react";
import "./ActionButton.css";

interface ActionButtonProps {
  ActionButtonText: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ ActionButtonText }) => {
  return (
    <div
      className={`ActionButtonWrapper ${
        ActionButtonText === "REQUEST" ? "requestButton" : "sendButtton"
      }`}
    >
      <div>{ActionButtonText}</div>
    </div>
  );
};

export default ActionButton;
