import React from "react";

import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Lettuce", type: "lettuce" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Turkey", type: "turkey" },
  { label: "Tomato", type: "tomato" }
];

const BuildControls = ({
  ingredientAdded,
  ingredientRemoved,
  disabled,
  price,
  purchaseable,
  ordered
}) => {
  const buildControls = controls.map((control) => (
    <BuildControl
      key={control.label}
      label={control.label}
      added={() => ingredientAdded(control.type)}
      removed={() => ingredientRemoved(control.type)}
      disabled={disabled[control.type]}
    />
  ));

  return (
    <div className={"BuildControls float-right"}>
      <p>
        Current Price: <strong>USD {price.toFixed(2)}</strong>
      </p>
      {buildControls}
      <button
        className={"OrderButton"}
        disabled={!purchaseable}
        onClick={ordered}
      >
        ORDER
      </button>
    </div>
  );
};

export default BuildControls;
