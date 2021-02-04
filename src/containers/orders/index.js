import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

class Orders extends Component {
  onOrderStatusChange = (id) => {
    this.props.changeOrderStatus(id);
  };
  render() {
    return (
      <div className={"Orders"}>
        {this.props.orders.map((order) => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
            status={order.status}
            orderNumber={order.orderNumber}
            changeStatus={this.onOrderStatusChange}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  orders: state.orders
});
const mapDispatchToProps = (dispatch) => {
  return {
    changeOrderStatus: (id) =>
      dispatch({
        type: actionTypes.CHANGE_ORDER_STATUS,
        payload: { id }
      })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
