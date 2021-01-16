import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/authContext'
import classes from './Navigation.module.css';

function NavigationItems() {
    const auth = useContext(AuthContext);

    return (
        <ul className={classes.NavigationItems}>
            <li>
                <NavLink activeClassName={classes.active} exact to="/">Builder</NavLink>
            </li>
            {auth.isLoggedIn && <li>
                <NavLink activeClassName={classes.active} to="/orders">My Orders</NavLink>
            </li>}
            {!auth.isLoggedIn && <li>
                <NavLink activeClassName={classes.active} to="/auth/signup">Sign Up</NavLink>
            </li>}
            {!auth.isLoggedIn && <li>
                <NavLink activeClassName={classes.active} to="/auth/login">Log In</NavLink>
            </li>}
        </ul>
    );
}

export default NavigationItems;
