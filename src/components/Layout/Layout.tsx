import React, { useState } from "react";
import "./Layout.css";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Layout;
