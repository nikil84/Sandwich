import React from "react";
import Layout from "./Layout/layout";
import { Switch, Route } from "react-router-dom";
import CheckoutComponent from "./containers/Checkout";
import OrderSandwitch from "./containers/OrderSandwitch";
import Orders from "./containers/orders";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/checkout" component={CheckoutComponent} />
          <Route path="/orders" component={Orders} />
          <Route path="/" exact component={OrderSandwitch} />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
