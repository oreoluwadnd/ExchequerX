import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import OverviewPage from "./OverviewCard";
import Modal from "../../UI/Modal/Modal";
import PageHeader from "../../UI/PageHeader/PageHeader";
import SavingCard from "./SavingCard";
import CardTopUp from "../TransactionModals/CardTopUp";
import { MdAccountBalance } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { TbTargetArrow } from "react-icons/tb";
import { BsSend, BsApple } from "react-icons/bs";
import { TbPigMoney } from "react-icons/tb";
import Notifications from "../../UI/Notifications/Notifications";
import { BiLock, BiTargetLock } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import { ImTarget } from "react-icons/im";
import { SiVisa, SiMastercard } from "react-icons/si";
import "./Overview.css";
import SendCard from "./SendCard";
import AccountCard from "./AccountCard";
import MobileBottomSheet from "../../UI/MobileBottomSheet/MobileBottomSheet";
import SendMoneyModal from "../TransactionModals/SendMoneyModal";
import RequestMoneyModal from "../TransactionModals/RequestMoneyModal";
import SavingsMoneyModal from "../TransactionModals/SavingsMoneyModal";
const Overview: React.FC = () => {
  const [mobileBottomSheet, setMobileBottomSheet] = useState(false);
  const [floatingButton, setfloatingButton] = useState(false);
  const handleFloatingButton = () => {
    setfloatingButton(!floatingButton);
  };
  const handlesetMobileBottomSheet = () => {
    setMobileBottomSheet(!mobileBottomSheet);
  };
  return (
    <SideBar>
      {/* {mobileBottomSheet && (
        <Modal>
          <SendMoneyModal />
        </Modal>
      )} */}
      {/* {mobileBottomSheet && (
        <Modal>
          <RequestMoneyModal />
        </Modal>
      )} */}
      {/* {mobileBottomSheet && (
        <Modal>
          <SavingsMoneyModal />
        </Modal>
      )} */}

      {mobileBottomSheet && <CardTopUp />}

      <div className="OverviewPage" onClick={handlesetMobileBottomSheet}>
        <PageHeader title={"Overview"} icon={MdAccountBalance} />
        <div className="OverviewPageCard">
          <OverviewPage
            overviewTitle="Balance"
            amount="$ 80.47"
            overviewIcon={GiWallet}
            overviewColor="#6236FF"
          />
          <OverviewPage
            overviewTitle="Income"
            amount="$ 10.43"
            overviewIcon={FaArrowDown}
            overviewColor="#45DA94"
          />
          <OverviewPage
            overviewTitle="Expense"
            amount="$ 90.42"
            overviewIcon={FaArrowUp}
            overviewColor="red"
          />

          <OverviewPage
            overviewTitle="Savings"
            amount="$ 50.41"
            overviewIcon={TbTargetArrow}
            overviewColor="#ff7800"
          />
        </div>
        <div
          className={`floatingButtonHover overviewPageFloatingButtonTopUp ${
            floatingButton ? "floatingButtonDisplayShow" : ""
          } floatingButtonDisplayNone `}
        >
          <GiReceiveMoney size={20} />
        </div>
        <div
          className={`floatingButtonHover overviewPageFloatingButtonSave ${
            floatingButton ? "floatingButtonDisplayShow" : ""
          } floatingButtonDisplayNone `}
        >
          <TbPigMoney size={20} />
        </div>
        <div
          className={`floatingButtonHover overviewPageFloatingButtonSend ${
            floatingButton ? "floatingButtonDisplayShow" : ""
          } floatingButtonDisplayNone `}
        >
          <BsSend size={20} />
        </div>
        <div
          className="overviewPageFloatingButtonPlus"
          onClick={handleFloatingButton}
        >
          <AiOutlinePlus size={30} />
        </div>

        <div className="OverviewPageSendMiddle">
          <div className="OverviewPageAccountCard">
            <div className="OverviewPageSendCardTitleWrapper">
              <h3 className="OverviewPageSendCardTitle">Acccount Details</h3>
            </div>
            <AccountCard />
          </div>
          <div>
            <div className="OverviewPageSendCardTitleWrapper">
              <h3 className="OverviewPageSendCardTitle">Quick Send 4/4</h3>
            </div>
            <div className="OverviewPageSendCard">
              <SendCard
                SendCardImage={
                  "https://finapp.bragherstudio.com/view22/assets/img/sample/avatar/avatar8.jpg"
                }
                SendCardName={"KC"}
              />
              <SendCard
                SendCardImage={
                  "https://finapp.bragherstudio.com/view22/assets/img/sample/avatar/avatar4.jpg"
                }
                SendCardName={"Wasiu"}
              />
              <SendCard
                SendCardImage={
                  "https://finapp.bragherstudio.com/view22/assets/img/sample/avatar/avatar7.jpg"
                }
                SendCardName={"Emmanuel"}
              />
              <SendCard
                SendCardImage={
                  "https://finapp.bragherstudio.com/view22/assets/img/sample/avatar/avatar10.jpg"
                }
                SendCardName={"Oreoluwa"}
              />
            </div>
            <div className="quickSavingWrapper">
              <div className="OverviewPageSendCardTitleWrapper">
                <h3 className="OverviewPageSendCardTitle">Quick Actions 3/3</h3>
              </div>
              <div className="AccountCardBalanceSavingCard">
                <SavingCard
                  SavingCardIcon={SiVisa}
                  SavingCardHeader="Visa"
                  SavingCardDetails="Fund your Card"
                />
                <SavingCard
                  SavingCardIcon={SiMastercard}
                  SavingCardHeader="Mastercard"
                  SavingCardDetails="Fund your Card"
                />
                <SavingCard
                  SavingCardIcon={BsApple}
                  SavingCardHeader="Icloud Storage"
                  SavingCardDetails="Renew your Card"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SideBar>
  );
};

export default Overview;
