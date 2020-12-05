import React from 'react';
import classes from './Navigation.module.css';

function NavigationItems() {
    return (
        <ul className={classes.NavigationItems}>
            <li >
                <a className={classes.active} href="/">Builder</a>
            </li>
            <li>
                <a href="/checkout">Checkout</a>
            </li>
        </ul>
    );
}

export default NavigationItems;
