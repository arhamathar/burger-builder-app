import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

function NavigationItems() {
    return (
        <ul className={classes.NavigationItems}>
            <li>
                <NavLink activeClassName={classes.active} exact to="/">Builder</NavLink>
            </li>
            <li>
                <NavLink activeClassName={classes.active} to="/orders">My Orders</NavLink>
            </li>
        </ul>
    );
}

export default NavigationItems;
