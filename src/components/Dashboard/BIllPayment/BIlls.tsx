import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import DashboardHeader from "../DasboardHeader/DashboardHeader";
import PageHeader from "../../UI/PageHeader/PageHeader";
import { IoReceipt } from "react-icons/io5";
import { AiFillApple } from "react-icons/ai";
import { RiNetflixFill } from "react-icons/ri";
import {
  SiVodafone,
  SiSpotify,
  SiAmazonaws,
  SiUbereats,
  SiAdidas,
  SiTwitter,
  SiPlaystation,
} from "react-icons/si";
import { IoPizzaOutline } from "react-icons/io5";
import { BiDrink } from "react-icons/bi";
import { CgGym } from "react-icons/cg";
import BillCard from "./BillCard";
import "./Bills.css";
const Bills: React.FC = () => {
  const DueBill = [{}];
  return (
    <SideBar>
      <div className="BillsPage">
        <PageHeader title={"Bills"} icon={IoReceipt} />
        <div className="BillsPageContent">
          <div className="DueBillsCards">
            <BillCard
              billPrice={70}
              billLogo={AiFillApple}
              billColor={"black"}
              billDetails={"Music Monthly Subscription"}
            />
            <BillCard
              billPrice={40}
              billLogo={SiVodafone}
              billColor={"#e60000"}
              billDetails={"Internet Subscription"}
            />
            <BillCard
              billPrice={20}
              billLogo={RiNetflixFill}
              billColor={"#e50914"}
              billDetails={" Monthly Subscription"}
            />
            <BillCard
              billPrice={60}
              billLogo={SiSpotify}
              billColor={"#1db954"}
              billDetails={"Music Monthly Subscription"}
            />
            <BillCard
              billPrice={80}
              billLogo={SiUbereats}
              billColor={"#09091a"}
              billDetails={"Uber Eat Pro"}
            />
            <BillCard
              billPrice={90}
              billLogo={SiAmazonaws}
              billColor={"#ff9900"}
              billDetails={"Aws Cloud Storage"}
            />
            <BillCard
              billPrice={90}
              billLogo={BiDrink}
              billColor={"#ff0000"}
              billDetails={"Drink Night"}
            />
            <BillCard
              billPrice={60}
              billLogo={IoPizzaOutline}
              billColor={"#e4e932"}
              billDetails={"Godfather Pizza"}
            />
            <BillCard
              billPrice={110}
              billLogo={SiAdidas}
              billColor={"#000000"}
              billDetails={"Addidas Pro"}
            />
            <BillCard
              billPrice={40}
              billLogo={CgGym}
              billColor={"#ed1b2e"}
              billDetails={"Gym Subscription"}
            />
            <BillCard
              billPrice={20}
              billLogo={SiTwitter}
              billColor={"#1da1f2"}
              billDetails={"Twitter Blue"}
            />
            <BillCard
              billPrice={660}
              billLogo={SiPlaystation}
              billColor={"#003087"}
              billDetails={"Fifa 2023"}
            />
          </div>
        </div>
      </div>
    </SideBar>
  );
};

export default Bills;
