import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
const LogIn = React.lazy(() => import("./containers/Auth/Login"));
const Checkout = React.lazy(() => import("./containers/Checkout"));
const MyOrders = React.lazy(() => import("./containers/MyOrders"));
const SignUp = React.lazy(() => import("./containers/Auth/Signup"));
const ContactData = React.lazy(() => import("./containers/ContactData"));
const BurgerBuilder = React.lazy(() => import("./containers/BurgerBuilder"));

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
                <Route exact path="/auth/login">
                    <LogIn />
                </Route>
                <Route exact path="/auth/signup">
                    <SignUp />
                </Route>
                <Redirect to="/auth/login" />
            </Switch>
        );
    }
    return routes;
}

export default Routes;
