import React from "react";
import NavigationItem from "./NavigationItem";
import "./navigation.css";

const NavigationItems = () => {
  return (
    <ul className="nav-container">
      <NavigationItem link="/" exact>
        Place Order
      </NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
