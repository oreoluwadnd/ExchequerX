import React from "react";

import "./PageHeader.css";
import { IconType } from "react-icons";
interface PageHeaderProps {
  title: string;
  icon: IconType;
}
const PageHeader: React.FC<PageHeaderProps> = ({ title, icon }) => {
  return (
    <div className="pageHeaderWrapper">
      <h1>{title}</h1>
      {React.createElement(icon, {
        size: "20",
        className: "pageHeaderIcon",
      })}
    </div>
  );
};

export default PageHeader;
