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
  const tableHeader: string[] = ["DESCRIPTION", "AMOUNT", "STATUS"];
  return (
    <div className="cardTransaction">
      {/* <Table tableData={CardTransactions} tableHeader={tableHeader} /> */}
    </div>
  );
};

export default CardTransactions;
