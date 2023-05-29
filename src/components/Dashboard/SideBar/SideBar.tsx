import React, { Children, useState } from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import { MdAccountBalance } from "react-icons/md";
import { IoReceipt } from "react-icons/io5";
import { BsFillCreditCardFill } from "react-icons/bs";
import { AiTwotoneSetting } from "react-icons/ai";
import { RiMenu4Line } from "react-icons/ri";
import { BiTransferAlt, BiTransfer } from "react-icons/bi";
import DashboardHeader from "../DasboardHeader/DashboardHeader";
type LayoutProps = {
  children: React.ReactNode;
};

const SideBar: React.FC<LayoutProps> = ({ children }) => {
  const path = location.pathname;
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const toggleOpen = () => {
    setSideBarOpen(!sideBarOpen);
  };
  const menus = [
    {
      name: "Dashboard",
      icon: MdAccountBalance,
      link: "/dashboard",
    },
    {
      name: "Transaction",
      icon: BiTransfer,
      link: "/Transaction",
    },
    { name: "Bills", icon: IoReceipt, link: "/Bills" },
    { name: "Cards", link: "/cards", icon: BsFillCreditCardFill },
    {
      name: "Settings",
      link: "/settings",
      icon: AiTwotoneSetting,

      margin: true,
    },
  ];
  return (
    <div className="AppContainer">
      <div className={sideBarOpen ? "sideBar" : "sideBarClose"}>
        <div className="siderBarHeader ">
          <div>
            <RiMenu4Line size={26} onClick={toggleOpen} cursor={"pointer"} />
          </div>
        </div>
        <div className="sideBarLogo ">
          <img
            alt="logo"
            src="https://res.cloudinary.com/aore/image/upload/v1681901313/byozwrerazxkbhmd4bta.png"
            className="sideBarLogoImg"
          />
        </div>
        <div>
          <div className={sideBarOpen ? "sideBarLink" : "sideBarLinkClose"}>
            {menus?.map((menu, i) => (
              <Link
                to={menu?.link}
                key={i}
                className={`${menu.link === path ? "activeSideBar" : ""} ${
                  sideBarOpen ? "SidebarlinkWrapper" : "SidebarlinkWrapperClose"
                }`}
              >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <p
                  className={
                    sideBarOpen ? "sideBarLinkText" : "sideBarLinkTextClose"
                  }
                >
                  {menu?.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="bottom-tab">
        {menus?.map((menu, i) => (
          <Link
            to={menu?.link}
            key={i}
            className={`${
              menu.link === path ? "pageActive" : ""
            } bottom-tab-item `}
          >
            <div className="bottom-tab-item-icon">
              {React.createElement(menu?.icon, { size: "20" })}
            </div>
            <p className="bottom-tab-item-text">{menu?.name}</p>
          </Link>
        ))}
      </div>
      <div className="sideBarContentWrapper">
        <DashboardHeader />
        <div className="sideBarContent">{children}</div>
      </div>
    </div>
  );
};

export default SideBar;
