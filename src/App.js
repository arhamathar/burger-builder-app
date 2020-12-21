import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Checkout from './containers/Checkout';
import BurgerBuilder from './containers/BurgerBuilder';
import ContactData from './containers/ContactData';
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
          <Route path="/contact-data">
            <ContactData />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
