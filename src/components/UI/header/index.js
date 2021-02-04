import React from "react";
import "./index.css";
import NavigationItems from "../Navigation/NavigationItems";
const Header = () => {
  return (
    <div className="header-main">
      <div className="header-logo">
        <img
          src="images/sandwitch.png"
          alt="Sandwitch company"
          className="header-img"
        />
      </div>
      <nav className="nav-container">
        <NavigationItems />
      </nav>
    </div>
  );
};

export default Header;
