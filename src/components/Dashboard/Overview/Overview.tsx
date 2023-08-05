import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../features/store";
import SideBar from "../SideBar/SideBar";
import OverviewPage from "./OverviewCard";
import Modal from "../../UI/Modal/Modal";
import PageHeader from "../../UI/PageHeader/PageHeader";
import SavingCard from "./SavingCard";
import CardTopUp from "../TransactionModals/CardTopUp";
import { MdAccountBalance } from "react-icons/md";

import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { TbTargetArrow } from "react-icons/tb";
import { BsApple } from "react-icons/bs";

import { SiVisa, SiMastercard } from "react-icons/si";
import "./Overview.css";
import SendCard from "./SendCard";
import AccountCard from "./AccountCard";
import SendMoneyModal from "../TransactionModals/SendMoneyModal";
import DepositMoneyModal from "../TransactionModals/DepositMoneyModal";
import SavingsMoneyModal from "../TransactionModals/SavingsMoneyModal";
const Overview: React.FC = () => {
  const [floatingButton, setfloatingButton] = useState(false);
  const { user } = useSelector((state: RootState) => state.auth);
  const { income, expense, balance } = user;
  const dollarSign: string = "$";
  const { sendModal, requestModal, savingsModal, CardTopUpModal } = useSelector(
    (state: RootState) => state.modals
  );
  return (
    <SideBar>
      {sendModal && (
        <Modal>
          <SendMoneyModal />
        </Modal>
      )}
      {requestModal && (
        <Modal>
          <DepositMoneyModal />
        </Modal>
      )}
      {savingsModal && (
        <Modal>
          <SavingsMoneyModal />
        </Modal>
      )}

      {CardTopUpModal && (
        <Modal>
          <CardTopUp />
        </Modal>
      )}

      <div className="OverviewPage">
        <PageHeader title={"Overview"} icon={MdAccountBalance} />
        <div className="OverviewPageCard">
          <OverviewPage
            overviewTitle="Balance"
            amount={`${dollarSign} ${balance}`}
            overviewIcon={GiWallet}
            overviewColor="#6236FF"
          />
          <OverviewPage
            overviewTitle="Income"
            amount={`${dollarSign} ${income}`}
            overviewIcon={FaArrowDown}
            overviewColor="#45DA94"
          />
          <OverviewPage
            overviewTitle="Expense"
            amount={`${dollarSign} ${expense}`}
            overviewIcon={FaArrowUp}
            overviewColor="red"
          />
          <OverviewPage
            overviewTitle="Savings"
            amount={`${dollarSign} ${expense}`}
            overviewIcon={TbTargetArrow}
            overviewColor="#ff7800"
          />
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
              <h3 className="OverviewPageSendCardTitle">Fund Cards</h3>
            </div>

            <div className="quickSavingWrapper">
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
                  SavingCardHeader="GiftCard"
                  SavingCardDetails="Fund your Card"
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
