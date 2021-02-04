import React from "react";

import "./Button.css";

const Button = ({ onClick, disabled, buttonType, children }) => (
  <button
    className={`Button ${buttonType}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
