import "./Transaction.css";
import React, { useState } from "react";
import "./TrasactionSearchBar.css";
import { FaSearchDollar } from "react-icons/fa";
const TransactionSearchBar: React.FC = () => {
  return (
    <div className="TransactionSearchBarWrapper">
      <input
        type="text"
        placeholder="Search Transaction"
        className="TransactionSearchBarInput"
      />
      <FaSearchDollar className="TransactionSearchBarIcon" size={20} />
    </div>
  );
};

export default TransactionSearchBar;
