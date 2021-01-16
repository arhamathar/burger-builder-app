import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Checkout from './containers/Checkout';
import BurgerBuilder from './containers/BurgerBuilder';
import MyOrders from './containers/MyOrders';
import ContactData from './containers/ContactData';
import LogIn from './containers/Auth/Login';
import SignUp from './containers/Auth/Signup';
import { AuthContext } from './context/authContext';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
        setIsLoggedIn(true);
    }

    const logout = () => {
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider
            value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
        >
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
                        <Route path='/contact-data'>
                            <ContactData />
                        </Route>
                        <Route path='/auth/login'>
                            <LogIn />
                        </Route>
                        <Route path='/auth/signup'>
                            <SignUp />
                        </Route>
                    </Switch>
                </Layout>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
