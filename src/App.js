import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Checkout from './containers/Checkout';
import BurgerBuilder from './containers/BurgerBuilder';
import MyOrders from './containers/MyOrders';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" >
            <BurgerBuilder />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/orders">
            <MyOrders />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
