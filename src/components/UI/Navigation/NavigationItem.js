import React from "react";
import { NavLink } from "react-router-dom";

const NavigationItem = ({ children, link, exact }) => {
  return (
    <li className="navigation-item">
      <NavLink to={link} exact={exact} activeClassName={"active"}>
        {children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
