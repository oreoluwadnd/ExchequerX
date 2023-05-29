import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import "./Notifications.css";

interface NotificationsProps {
  children: React.ReactNode;
}

const Notifications: React.FC<NotificationsProps> = ({ children }) => {
  return (
    <div className="NotificationsToastWrapper">
      <span className="NotificationsToastIcon">
        <FaRegThumbsUp />
      </span>
      <span className="NotificationsToastText">{children}</span>
    </div>
  );
};

export default Notifications;
