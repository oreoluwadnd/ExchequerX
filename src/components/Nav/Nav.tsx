import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { BiChevronRight } from "react-icons/bi";
import { BsFillMenuAppFill } from "react-icons/bs";
import { FaTimesCircle } from "react-icons/fa";

const Nav: React.FC = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  let mobileNavStyle = "displaynone";
  if (mobileNav) {
    mobileNavStyle = "wrapperOpen";
  } else {
    mobileNavStyle = "displaynone";
  }
  const handleClose = () => {
    setMobileNav(false);
  };

  const handleOpen = () => {
    setMobileNav(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (screenSize > 768) {
      setMobileNav(false);
    }
  }, [screenSize]);

  return (
    <>
      <div className="NavContainer flexRow">
        <div className="logo cursor">
          <img src="./csy32f5qi5iu74qvxxcq(2).svg" loading="lazy" alt="" />
        </div>
        <div className="hambuger">
          <BsFillMenuAppFill
            size={25}
            className="cursor "
            onClick={handleOpen}
          />
        </div>
        <div className="mobileDisplay">
          <ul className="flexRow Navlinks">
            <li className="cursor navlinktext ">Benefit</li>
            <li className="cursor navlinktext">Accounts</li>
            <li className="cursor navlinktext">Pricing</li>
            <li className="cursor navlinktext">Help</li>
          </ul>
        </div>
        <div className="flexRow authButton mobileDisplay">
          <Link to={"/login"} className="cursor authButtonLogin">
            <span>Log in</span>
          </Link>

          <Link to={"/signUp"} className="getStartedButton cursor">
            <span>Get Started</span>
            <span className="movingArrow">
              <span>
                <BiChevronRight className="movingArrow1" size={20} />
              </span>
              <span>
                <BiChevronRight className="movingArrow2" size={20} />
              </span>
            </span>
          </Link>
        </div>
      </div>
      <div className={mobileNavStyle}>
        <div className="mobileNav">
          <div className="mobileNavContainer">
            <div className="mobileNavIcons">
              <div></div>
              <FaTimesCircle
                size={30}
                onClick={handleClose}
                className="icon-mmovement cursor"
              />
            </div>
            <div className="Navtext">
              <h1>Do more with your money</h1>
            </div>
            <div className="navCard">
              <div className="navCardDetails">
                <img src="https://cash-f.squarecdn.com/web/marketing/bc2ebbbaa30724f06bcd49c8685ec8c2099d7232/assets/images/redesign/taxes-nav-item-primary.webp" />
                <span className="navBarDetailsText">Benefit</span>
                <span className="mobileNavText">Better online banking </span>
              </div>
              <div className="navCardDetails">
                <img src="https://cash-f.squarecdn.com/web/marketing/bc2ebbbaa30724f06bcd49c8685ec8c2099d7232/assets/images/redesign/assets_nav_bank.webp" />
                <span className="navBarDetailsText"> Account</span>
                <span className="mobileNavText">Better online banking </span>
              </div>
              <div className="navCardDetails">
                <img src="https://cash-f.squarecdn.com/web/marketing/bc2ebbbaa30724f06bcd49c8685ec8c2099d7232/assets/images/redesign/assets_nav_send.webp" />
                <span className="navBarDetailsText">Pricing</span>
                <span className="mobileNavText">Better online banking </span>
              </div>
              <div className="navCardDetails">
                <img src="https://cash-f.squarecdn.com/web/marketing/bc2ebbbaa30724f06bcd49c8685ec8c2099d7232/assets/images/redesign/assets_nav_stocks.webp" />
                <span className="navBarDetailsText">Help</span>
                <span className="mobileNavText">Better online banking </span>
              </div>
            </div>
            <div className="navButtonContainer">
              <Link
                to={"/login"}
                className="mobileNavButton"
                onClick={handleClose}
              >
                Log In
              </Link>
              <Link
                to={"/signUp"}
                className="mobileNavButton"
                onClick={handleClose}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
