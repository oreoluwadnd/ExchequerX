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
              <div>
                <svg
                  role="img"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title> Logo</title>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M27.3911 0.546667C25.6618 0 24.056 0 20.8436 0H11.1569C7.944 0 6.33778 0 4.60889 0.546667C2.72089 1.23378 1.23378 2.72089 0.546667 4.60889C0 6.33778 0 7.94444 0 11.1569V20.8431C0 24.056 0 25.6618 0.546667 27.3911C1.23378 29.2791 2.72089 30.7662 4.60889 31.4533C6.33778 32 7.944 32 11.1569 32H20.8436C24.056 32 25.6618 32 27.3911 31.4533C29.2791 30.7662 30.7662 29.2791 31.4533 27.3911C32 25.6618 32 24.056 32 20.8431V11.1569C32 7.94444 32 6.33778 31.4533 4.60889C30.7662 2.72089 29.2791 1.23378 27.3911 0.546667ZM20.6565 12.2971C19.6876 11.4372 18.2047 10.8107 16.6576 10.8107C15.4468 10.8107 14.2351 11.244 14.2351 12.3396C14.2351 13.3776 15.3413 13.7764 16.6911 14.2631C16.8035 14.3036 16.9176 14.3448 17.0329 14.3869C19.6574 15.281 21.8199 16.377 21.8199 18.9723C21.8199 21.7932 19.6499 23.7204 16.1043 23.9392L15.7822 25.4726C15.7237 25.7539 15.4743 25.9546 15.1872 25.9524L12.9561 25.9356C12.5733 25.9324 12.2902 25.5798 12.3695 25.2059L12.7093 23.6109C11.3137 23.2308 10.0909 22.5521 9.12512 21.6146C8.88101 21.378 8.8788 20.9855 9.12114 20.7467L10.3599 19.5248C10.5947 19.2931 10.9704 19.2949 11.2052 19.5266C12.4023 20.7068 13.9449 21.1928 15.4176 21.1928C17.0329 21.1928 18.1285 20.5296 18.1285 19.4047C18.1285 18.4136 17.2318 18.0827 15.5233 17.4522C15.3433 17.3858 15.1543 17.316 14.9564 17.2418C12.7647 16.4634 10.6882 15.3386 10.6882 12.714C10.6882 9.68231 13.198 8.20479 16.1592 8.05681L16.4848 6.52568C16.5442 6.24701 16.7905 6.04764 17.0754 6.04764H19.303C19.6867 6.04764 19.9724 6.4003 19.894 6.77555L19.5325 8.49719C20.8107 8.91586 21.8491 9.56978 22.6227 10.2348C22.8854 10.4603 22.8943 10.8643 22.651 11.1111L21.4982 12.2803C21.2683 12.5133 20.9015 12.5146 20.6565 12.2971Z"
                    fill="#47D99B"
                  ></path>
                </svg>
              </div>
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
