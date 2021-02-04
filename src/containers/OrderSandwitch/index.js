import React, { Component } from "react";
import { connect } from "react-redux";

import Sandwich from "../../components/Sandwich/Sandwich";
import BuildControls from "../../components/Sandwich/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Sandwich/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actionTypes from "../../store/actions";
import axios from "../../axios-orders";

class SandwichBuilder extends Component {
  state = {
    purchasing: false,
    loading: false,
    error: false
  };

  updatePurchaseState() {
    const ingredientsSum = Object.values(this.props.ings).reduce(
      (sum, el) => sum + el,
      0
    );
    return ingredientsSum > 0;
  }

  purchase = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancel = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinue = () => {
    this.props.onNewOrder();
    this.setState({ purchasing: false }, () => {
      this.props.history.push("/");
    });
  };

  render() {
    const disabledInfo = {
      ...this.props.ings
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let sandwich = this.state.error ? (
      <p>Ingredients can't be loaded!</p>
    ) : (
      <Spinner />
    );

    if (this.props.ings) {
      sandwich = (
        <>
          <div className="sandwich-container">
            <Sandwich ingredients={this.props.ings} />
            <BuildControls
              ingredientAdded={this.props.onIngredientAdded}
              ingredientRemoved={this.props.onIngredientRemoved}
              disabled={disabledInfo}
              price={this.props.price}
              purchaseable={this.updatePurchaseState()}
              ordered={this.purchase}
            />
          </div>
        </>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          purchaseCancelled={this.purchaseCancel}
          purchaseContinued={this.purchaseContinue}
          price={this.props.price}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <>
        <Modal
          show={this.state.purchasing}
          onBackdropClick={this.purchaseCancel}
        >
          {orderSummary}
        </Modal>
        {sandwich}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
    price: state.totalPrice
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName) =>
      dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName }),
    onIngredientRemoved: (ingName) =>
      dispatch({
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: ingName
      }),
    onNewOrder: () => dispatch({ type: actionTypes.ADD_ORDER })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(SandwichBuilder, axios));
