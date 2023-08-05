import "./Transaction.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../features/store";
import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import PageHeader from "../../UI/PageHeader/PageHeader";
import { BiTransfer } from "react-icons/bi";
import Noresult from "../../UI/Noresult/Noresult";
import {
  RiNetflixFill,
  RiSpotifyFill,
  RiWallet3Fill,
  RiAppleFill,
} from "react-icons/ri";
import TransactionSearchBar from "./TrasactionSearchBar";

import Table from "../../UI/Table/Table";
const Transaction: React.FC = () => {
  const [data, setData] = useState([]);
  //TODO ADD TYPE DECLEARATION TO THIS FILES
  const { transaction } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    if (!transaction) {
      return;
    }
    setData(transaction.transactions);
    console.log(data);

    console.log("howfar");
  }, [transaction]);

  const tableHeader: any = [
    "REFRENCE ID",
    "DESCRIPTION",
    "AMOUNT",
    "DATE",
    "BALANCE",
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
            {!data && <Noresult message={"No transaction result 🚀"} />}
            {data && <Table tableData={data} tableHeader={tableHeader} />}
          </div>
        </div>
      </div>
    </SideBar>
  );
};

export default Transaction;
