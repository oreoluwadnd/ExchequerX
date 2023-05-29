import "./DashboardHeader.css";
import { BsCloudSunFill, BsFillCloudMoonFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { FaUserAstronaut } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";

const DashboardHeader: React.FC = () => {
  return (
    <>
      <div className="DashboardHeader">
        <div className="DashboardGreeting">
          <h1 className="greetingHeader">Good Morning</h1>
          <BsCloudSunFill color="#FD5900" size={28} />
        </div>
        <div className="notificationAndProfile">
          <div className="notificationDiv">
            <IoNotificationsOutline size={27} />
            <div className="notificationTooltip">New notifications</div>
            <span className="notificationBadge" />
            <span className="notificationBadge1" />
          </div>
          <div className="profile">
            <img
              src="https://assets.codepen.io/285131/almeria-avatar.jpeg"
              className="profileImage"
            />
            <span className="dropdownHover">
              <p className="profileName">Oreoluwa</p>
            </span>
            <BiChevronDown size={20} className="MobileHideLogo" />

            <div className="profileDropdown">
              <div className="profileDropdownContent">
                <FaUserAstronaut size={20} />
                Profile
              </div>
              <div className="profileDropdownContent1">
                <HiOutlineLogout size={20} />
                Logout
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
