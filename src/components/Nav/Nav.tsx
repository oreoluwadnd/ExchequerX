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
          <svg>
            <title>Revolut</title>
            <path d="M68.664 8.915c-1.784-1.612-3.938-2.4-6.428-2.4-2.456 0-4.61.789-6.395 2.4-1.784 1.577-2.691 3.772-2.691 6.584s.907 5.005 2.691 6.617c1.784 1.577 3.939 2.366 6.395 2.366 2.49 0 4.644-.789 6.428-2.366 1.818-1.612 2.725-3.806 2.725-6.617s-.908-5.007-2.725-6.584zm-9.792 10.183c-.941-.925-1.415-2.126-1.415-3.6s.47-2.674 1.415-3.566a4.6 4.6 0 0 1 3.363-1.371 4.68 4.68 0 0 1 3.398 1.371c.974.892 1.448 2.091 1.448 3.566s-.47 2.674-1.448 3.6c-.941.891-2.086 1.337-3.398 1.337a4.71 4.71 0 0 1-3.363-1.337zm18.881 4.903V.473h-4.24v23.528zM91.438 6.995v9.388c0 2.262-1.2 3.762-3.484 3.762-2.323 0-3.491-1.498-3.491-3.762V6.995h-4.248v10.108c0 3.916 2.423 7.378 7.739 7.378h.033c5.283 0 7.702-3.539 7.702-7.378V6.995zm-42.8 0l-4.24 11.52-4.24-11.52h-4.509l6.766 17.007h3.972l6.765-17.007zm-12.969 8.023c0-2.468-.773-4.491-2.288-6.103s-3.464-2.4-5.854-2.4c-2.456 0-4.544.858-6.26 2.537-1.684 1.681-2.523 3.806-2.523 6.446s.841 4.801 2.49 6.48c1.684 1.681 3.703 2.503 6.092 2.503 3.67 0 6.26-1.646 7.839-4.972l-3.162-1.852c-1.041 2.091-2.558 3.12-4.61 3.12-2.523 0-4.307-1.646-4.577-4.251h12.852v-1.509zM27.39 9.806c2.389 0 3.972 1.371 4.375 3.566h-8.951c.641-2.023 2.389-3.566 4.577-3.566zm-8.647 14.195l-5.689-10.148c3.599-1.337 5.383-3.668 5.383-7.063C18.441 2.641 15.208 0 10.06 0H0v24.001h4.442v-9.737h3.77l5.45 9.738zM10.06 3.977c2.625 0 3.938 1.063 3.938 3.154s-1.314 3.154-3.938 3.154H4.442V3.977zm92.817 20.504c-2.729 0-4.942-2.256-4.942-5.04V2.4h4.24v4.601h3.636v3.497h-3.636v8.665c0 .816.649 1.477 1.451 1.477h2.185v3.841z"></path>
          </svg>
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
