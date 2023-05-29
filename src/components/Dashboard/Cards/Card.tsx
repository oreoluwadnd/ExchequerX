import React from "react";
import SideBar from "../SideBar/SideBar";
import { BsFillCreditCardFill } from "react-icons/bs";
import { RiMastercardFill, RiVisaFill } from "react-icons/ri";
import { BiGift } from "react-icons/bi";
import CardSingle from "./CardSingle";
import "./Card.css";
import CardDetails from "./CardDetails";
import CardTransactions from "./CardTransaction";
import PageHeader from "../../UI/PageHeader/PageHeader";
const Card: React.FC = () => {
  return (
    <SideBar>
      <div className="cardPage">
        <PageHeader title={"Card"} icon={BsFillCreditCardFill} />
        <div className="cardsWrapper">
          <CardSingle cardType="Visa" />
          <CardSingle cardType="MasterCard" />
          <CardSingle cardType="GIftCard" />
          {/* <div>
            <div className="addNewCard">
              <p>ADD NEW CARD</p>
              <TbSquareRoundedPlusFilled size={60} />
            </div>
          </div> */}
        </div>
        <div className="CardSelect">
          <div className="CardSelectVisa">
            <p>Visa</p>
            <RiVisaFill size={20} color="#f7b600" />
          </div>
          <div className="CardSelectMaster">
            <p>MasterCard</p>
            <RiMastercardFill size={20} color="#cc0000" />
          </div>
          <div className="CardSelectMaster">
            <p>GiftCard</p>
            <BiGift size={20} color="#ccdf00" />
          </div>
        </div>
        <div className="CardPageDetails">
          <CardDetails />

          <CardTransactions />
        </div>
      </div>
    </SideBar>
  );
};

export default Card;
