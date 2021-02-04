import * as actionTypes from "./actions";

const initialState = {
  ingredients: {
    lettuce: 0,
    bacon: 0,
    cheese: 0,
    turkey: 0,
    tomato: 0
  },
  totalPrice: 5,
  orders: [],
  orderNumber: 100
};

const INGREDIENT_PRICES = {
  lettuce: 0.5,
  cheese: 0.4,
  turkey: 1.3,
  bacon: 0.7,
  tomato: 0.4
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
      };
    case actionTypes.ADD_ORDER:
      const newOrders = state.orders.push({
        orderNumber: state.orderNumber,
        ingredients: state.ingredients,
        price: state.totalPrice,
        status: "Open"
      });
      const newState = {
        orders: newOrders,
        orderNumber: state.orderNumber + 1,
        ...initialState
      };
      return newState;
    case actionTypes.CHANGE_ORDER_STATUS:
      const changedOrders = state.orders.map((order) => {
        if (order.orderNumber === action.payload.id) {
          order.status = "Picked up";
          return order;
        }
        return order;
      });
      console.log(changedOrders);
      return {
        ...state,
        orders: changedOrders
      };

    default:
      return state;
  }
};

export default reducer;
