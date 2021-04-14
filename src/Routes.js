import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Checkout from "./containers/Checkout";
import BurgerBuilder from "./containers/BurgerBuilder";
import MyOrders from "./containers/MyOrders";
import ContactData from "./containers/ContactData";
import LogIn from "./containers/Auth/Login";
import SignUp from "./containers/Auth/Signup";

function Routes(props) {
    let routes;
    if (props.token) {
        routes = (
            <Switch>
                <Route exact path="/">
                    <BurgerBuilder />
                </Route>
                <Route path="/checkout">
                    <Checkout />
                </Route>
                <Route exact path="/orders">
                    <MyOrders />
                </Route>
                <Route path="/contact-data">
                    <ContactData />
                </Route>
                <Redirect to="/" />
            </Switch>
        );
    } else {
        routes = (
            <Switch>
                <Route exact path="/">
                    <BurgerBuilder />
                </Route>
                <Route path="/auth/login">
                    <LogIn />
                </Route>
                <Route path="/auth/signup">
                    <SignUp />
                </Route>
                <Redirect to="/auth/login" />
            </Switch>
        );
    }
    return routes;
}

export default Routes;
