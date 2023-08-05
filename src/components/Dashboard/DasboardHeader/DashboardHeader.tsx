import "./DashboardHeader.css";
import { BsCloudSunFill, BsCloudMoonFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "../../../features/store";
import { BiChevronDown } from "react-icons/bi";
import { FaUserAstronaut } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const DashboardHeader: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 0 && currentHour < 12) {
      return (
        <div className="DashboardGreeting">
          <h1 className="greetingHeader">Good Morning</h1>
          <BsCloudSunFill color="#FD5900" size={28} />
        </div>
      );
    } else if (currentHour >= 12 && currentHour < 18) {
      return (
        <div className="DashboardGreeting">
          <h1 className="greetingHeader">Good Afternoon</h1>
          <BsCloudSunFill color="#FD5900" size={28} />
        </div>
      );
    } else {
      return (
        <div className="DashboardGreeting">
          <h1 className="greetingHeader">Good Evening</h1>
          <BsCloudMoonFill color="#FD5900" size={28} />
        </div>
      );
    }
  };

  return (
    <>
      <div className="DashboardHeader">
        {getGreeting()}
        <div className="notificationAndProfile">
          {/* <div className="notificationDiv">
            <IoNotificationsOutline size={27} />
            <div className="notificationTooltip">New notifications</div>
            <span className="notificationBadge" />
            <span className="notificationBadge1" />
          </div> */}
          <Link to={"/settings"} className="profile">
            <img
              src="https://res.cloudinary.com/aore/image/upload/v1685310955/maukjciktevcscxkhxwg.png"
              className="profileImage"
            />
            <span className="dropdownHover">
              <p className="profileName">{user.lastName}</p>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
