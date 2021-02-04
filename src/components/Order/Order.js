import React from "react";
import "./order.css";

const OrderComponent = ({
  changeStatus,
  orderNumber,
  ingredients,
  price,
  status
}) => {
  const ingrediantsData = Object.entries(ingredients).map((item, index) => (
    <span key={index}>
      {item[0]}
      {item[1]}
    </span>
  ));
  return (
    <div>
      <div
        className={`order-box order-box--skin-${
          status === "Open" ? "primary" : "secondary"
        }`}
      >
        <p> {`Order - ${orderNumber}`}</p>
        <p>{status}</p>
        <hr />
        <p>Ingredients</p>
        <p>{ingrediantsData}</p>
        <p>
          Price - <strong>USD {Number.parseFloat(price).toFixed(2)}</strong>
        </p>
        {status === "Open" && (
          <button onClick={() => changeStatus(orderNumber)}>
            {"Picked Up"}
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderComponent;
