import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, RootState } from "../../../features/store";
import SideBar from "../SideBar/SideBar";
import { BsSend, BsApple } from "react-icons/bs";
import { HiGiftTop } from "react-icons/hi2";
import { TbPigMoney } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { SiVisa, SiMastercard } from "react-icons/si";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillCreditCardFill } from "react-icons/bs";
import { getCardApi } from "../../../features/user/UserApi";

import CardSingle from "./CardSingle";
import "./Card.css";
import CardDetails from "./CardDetails";
import Noresult from "../../UI/Noresult/Noresult";
import PageHeader from "../../UI/PageHeader/PageHeader";

const Card: React.FC = () => {
  const [floatingButton, setfloatingButton] = useState(false);
  const handleFloatingButton = () => {
    setfloatingButton(!floatingButton);
  };
  const [cardData, setCardData] = useState([]);
  const [visibleCard, setVisibleCard] = useState("giftCard");
  const dispatch = useAppDispatch();
  const { Allcard } = useSelector((state: RootState) => state.users);

  console.log(Allcard);
  useEffect(() => {
    if (!Allcard) {
      return;
    }
    setCardData(Allcard.cards);
    console.log(Allcard);
  }, [Allcard]);
  //TODO add proper type declaration here
  const createCard = (cardType: any) => {
    dispatch(
      getCardApi({
        cardType: cardType,
      })
    );
  };

  return (
    <SideBar>
      <div className="cardPage">
        <PageHeader title={"Card"} icon={BsFillCreditCardFill} />
        {!cardData && <Noresult message={"No card found 🚀"} />}
        {cardData && (
          <>
            {" "}
            <div className="cardsWrapper">
              {cardData.map((card, index) => {
                return <CardSingle cards={card} key={index} />;
              })}
            </div>
            <div className="CardSelect">
              {cardData.map((card, index) => {
                return (
                  <div
                    className={`CardSelectMaster ${
                      visibleCard === card.cardType
                        ? "CardSelectMasterActive"
                        : ""
                    }`}
                    onClick={() => {
                      setVisibleCard(card.cardType);
                    }}
                  >
                    <p>{card.cardType}</p>
                  </div>
                );
              })}
            </div>
            <div className="CardPageDetails">
              {/* {cardData.map((card, index) => { */}
              <CardDetails data={cardData} visibleCard={visibleCard} />
              {/* })} */}
              {/* <CardTransactions />s */}
            </div>
          </>
        )}
        <div
          className={`floatingButtonHover overviewPageFloatingButtonTopUp ${
            floatingButton ? "floatingButtonDisplayShow" : ""
          } floatingButtonDisplayNone `}
          onClick={() => createCard("giftCard")}
        >
          <HiGiftTop size={20} />
        </div>
        <div
          className={`floatingButtonHover overviewPageFloatingButtonSave ${
            floatingButton ? "floatingButtonDisplayShow" : ""
          } floatingButtonDisplayNone `}
          onClick={() => createCard("master")}
        >
          <SiMastercard size={20} />
        </div>
        <div
          className={`floatingButtonHover overviewPageFloatingButtonSend ${
            floatingButton ? "floatingButtonDisplayShow" : ""
          } floatingButtonDisplayNone `}
          onClick={() => createCard("visa")}
        >
          <SiVisa size={20} />
        </div>
        <div
          className="overviewPageFloatingButtonPlus"
          onClick={handleFloatingButton}
        >
          <AiOutlinePlus size={30} />
        </div>
      </div>
    </SideBar>
  );
};

export default Card;
