import React from "react";
import Header from "../components/UI/header";

const contentStyle = {
  marginTop: "72px"
};
const Layout = ({ children }) => {
  return (
    <div style={contentStyle}>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
