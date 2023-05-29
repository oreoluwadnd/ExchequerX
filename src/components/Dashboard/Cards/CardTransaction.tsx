import React, { useState } from "react";
import "./CardTransaction.css";
import Table from "../../UI/Table/Table";
import {
  RiNetflixFill,
  RiSpotifyFill,
  RiWallet3Fill,
  RiAppleFill,
  RiAmazonFill,
} from "react-icons/ri";
import { MdOutlinePlayArrow } from "react-icons/md";

const CardTransactions: React.FC = () => {
  const CardTransactions = [
    {
      description: "Wallet",
      info: "Card Topup",
      amount: "+$400",
      status: "SUCCESS",
      icon: RiWallet3Fill,
      color: "#0093d0",
      transactionDate: "12 Oct. 21.",
      transactionType: "Credit",
      logo: "https://assets.codepen.io/285131/netflix.svg",
    },
    {
      description: "Netflix",
      info: "2 year",
      amount: "-$450",
      status: "PENDING",
      icon: RiNetflixFill,
      color: "#e50914",
      transactionDate: "28 Oct. 21.",
      transactionType: "Debit",
      logo: "https://assets.codepen.io/285131/netflix.svg",
    },
    {
      description: "Spotify",
      info: "2 year",
      amount: "-$40",
      icon: RiSpotifyFill,
      color: "#1db954",
      status: "SUCCESS",
      transactionDate: "12 Oct. 21.",
      transactionType: "Debit",
      logo: "https://assets.codepen.io/285131/netflix.svg",
    },
    {
      description: "Wallet",
      info: "Card Topup",
      amount: "+$400",
      icon: RiWallet3Fill,
      color: "#0093d0",
      status: "SUCCESS",
      transactionDate: "12 Oct. 21.",
      transactionType: "Credit",
      logo: "https://assets.codepen.io/285131/netflix.svg",
    },
    {
      description: "Icloud",
      info: "2 year",
      amount: "+$940",
      icon: RiAppleFill,
      color: "#000000",
      status: "FAILED",
      transactionDate: "12 Oct. 21.",
      transactionType: "Debit",
      logo: "https://assets.codepen.io/285131/netflix.svg",
    },
  ];

  const tableHeader: string[] = ["DESCRIPTION", "AMOUNT", "STATUS"];
  return (
    <div className="cardTransaction">
      <Table tableData={CardTransactions} tableHeader={tableHeader} />
    </div>
  );
};

export default CardTransactions;
