import React from "react";

import "./Input.css";

const Input = ({
  valid,
  touched,
  elementType,
  elementConfig,
  value,
  changed,
  label
}) => {
  let inputElement = null;
  const inputClasses = ["InputElement"];

  if (valid === false && touched) {
    inputClasses.push("Invalid");
  }

  switch (elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputClasses.join(" ")}
          value={value}
          onChange={changed}
        >
          {elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
  }

  return (
    <div className={"Input"}>
      <label className={"Label"}>{label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
