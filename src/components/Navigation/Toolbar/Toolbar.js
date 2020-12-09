import React from 'react';
import Logo from '../Logo';
import Hamburger from '../SideDrawer/Hamburger';
import NavigationItems from '../NavigationItems';
import classes from './Toolbar.module.css';

function Toolbar(props) {
    return (
        <header className={classes.Toolbar}>
            <Hamburger clicked={props.show} />
            <Logo height="80%" />
            <nav className={classes.Desktop}>
                <NavigationItems />
            </nav>
        </header>
    );
}

export default Toolbar;
