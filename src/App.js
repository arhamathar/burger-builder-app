import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Checkout from './containers/Checkout';
import BurgerBuilder from './containers/BurgerBuilder';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route to="/" exact>
            <BurgerBuilder />
          </Route>
          <Route to="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
