import React from "react";
import PropTypes from "prop-types";

import "./Ingredient.css";

export const ingredientTypes = {
  breadBottom: "bread-bottom",
  breadTop: "bread-top",
  turkey: "turkey",
  cheese: "cheese",
  bacon: "bacon",
  lettuce: "lettuce",
  tomato: "tomato"
};

const Ingredient = ({ type }) => {
  let ingredient = null;

  switch (type) {
    case ingredientTypes.breadBottom:
      ingredient = <div className={"BreadBottom"}></div>;
      break;
    case ingredientTypes.breadTop:
      ingredient = (
        <div className={"BreadTop"}>
          <div className={"Seeds1"}></div>
          <div className={"Seeds2"}></div>
        </div>
      );
      break;
    case ingredientTypes.turkey:
      ingredient = <div className={"Turkey"}></div>;
      break;
    case ingredientTypes.cheese:
      ingredient = <div className={"Cheese"}></div>;
      break;
    case ingredientTypes.bacon:
      ingredient = <div className={"Bacon"}></div>;
      break;
    case ingredientTypes.salad:
      ingredient = <div className={"Lettuce"}></div>;
      break;
    case ingredientTypes.tomato:
      ingredient = <div className={"Tomato"}></div>;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

Ingredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default Ingredient;
