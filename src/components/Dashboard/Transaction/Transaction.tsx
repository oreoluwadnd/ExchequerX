import "./Transaction.css";
import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import PageHeader from "../../UI/PageHeader/PageHeader";
import { BiTransfer } from "react-icons/bi";
import {
  RiNetflixFill,
  RiSpotifyFill,
  RiWallet3Fill,
  RiAppleFill,
} from "react-icons/ri";
import TransactionSearchBar from "./TrasactionSearchBar";

import Table from "../../UI/Table/Table";
const Transaction: React.FC = () => {
  const tableData: any = [
    {
      refrenceId: "#124567767",
      description: "NETFLIX",
      icon: RiNetflixFill,
      amount: "- $3000",
      date: "12/12/2023",
      time: "12:00 PM",
      medium: "CARD",
      info: "1 month subscription",
      status: "SUCCESS",
    },
    {
      refrenceId: "#124567767",
      description: "SPOTIFY",
      icon: RiSpotifyFill,
      color: "#1db954",
      amount: "- $3000",
      date: "12/12/2023",
      time: "12:00 PM",
      medium: "CARD",
      info: "1 month subscription",
      status: "FAILED",
    },
    {
      refrenceId: "#124567767",
      description: "WALLET",
      icon: RiWallet3Fill,
      color: "#9099d3",
      amount: "- $3000",
      date: "12/12/2023",
      time: "12:00 PM",
      medium: "CARD",
      info: "Wallet Top up",
      status: "SUCCESS",
    },
    {
      refrenceId: "#124567767",
      description: "TRANSFER",
      icon: BiTransfer,
      color: "#0093d0",
      amount: "- $3000",
      date: "12/12/2023",
      time: "12:00 PM",
      medium: "CARD",
      info: "Transfer to John",
      status: "PENDING",
    },
    {
      refrenceId: "#124567767",
      description: "ITUNES",
      icon: RiAppleFill,
      color: "#000000",
      amount: "- $3000",
      date: "12/12/2023",
      time: "12:00 PM",
      medium: "CARD",
      info: "1 month subscription",
      status: "FAILED",
    },
  ];

  const tableHeader: any = [
    "REFRENCE ID",
    "DESCRIPTION",
    "AMOUNT",
    "DATE",
    "MEDIUM",
    "STATUS",
  ];
  return (
    <SideBar>
      <div className="TransactionWrapper">
        <PageHeader title={"Transaction"} icon={BiTransfer} />
        <div className="TransactionTableWrapper">
          <div className="TransactionHeader">
            <TransactionSearchBar />
          </div>
          <div>
            <Table tableData={tableData} tableHeader={tableHeader} />
          </div>
        </div>
      </div>
    </SideBar>
  );
};

export default Transaction;
