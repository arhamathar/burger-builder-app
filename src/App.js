import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Checkout from './containers/Checkout';
import BurgerBuilder from './containers/BurgerBuilder';
import MyOrders from './containers/MyOrders';
import ContactData from './containers/ContactData';
import LogIn from './containers/Auth/Login';
import SignUp from './containers/Auth/Signup';
import { AuthContext } from './context/authContext';


function App() {
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [expirationDate, setExpirationDate] = useState(null);

    const login = (uid, token, expiresIn) => {
        setToken(token);
        setUserId(uid);
        const tokenExpiration = expiresIn || new Date().getTime() + expiresIn * 1000;
        setExpirationDate(tokenExpiration);
        localStorage.setItem(
            'userData',
            JSON.stringify({ userId: uid, token: token, expirationDate: new Date(tokenExpiration) }));
    }

    const logout = () => {
        setToken(null);
        setUserId(null);
        setExpirationDate(null);
        localStorage.removeItem('userData');
    }

    // Auto logout feature after 1h
    // useEffect(() => {
    //     if (token && expirationDate < new Date().toISOString()) {
    //         setTimeout(() => {
    //             logout()
    //             console.log(expirationDate);
    //         }, expirationDate);
    //     }
    // }, [token, expirationDate]);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'));

        if (userData && userData.token && userData.expirationDate > new Date().toISOString()) {
            login(userData.userId, userData.token, userData.expirationDate);
        }
    }, []);

    let routes;
    if (token) {
        routes = (
            <Switch>
                <Route exact path="/" >
                    <BurgerBuilder />
                </Route>
                <Route path="/checkout">
                    <Checkout />
                </Route>
                <Route path="/orders/:uid">
                    <MyOrders />
                </Route>
                <Route path='/contact-data'>
                    <ContactData />
                </Route>
                <Redirect to="/" />
            </Switch>
        );
    } else {
        routes = (
            <Switch>
                <Route exact path="/" >
                    <BurgerBuilder />
                </Route>
                <Route path='/auth/login'>
                    <LogIn />
                </Route>
                <Route path='/auth/signup'>
                    <SignUp />
                </Route>
                <Redirect to="/auth/login" />
            </Switch>
        );
    }

    return (
        <AuthContext.Provider value={{
            isLoggedIn: !!token, token: token, userId: userId, login: login, logout: logout
        }}>
            <Router>
                <Layout>
                    {routes}
                </Layout>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
