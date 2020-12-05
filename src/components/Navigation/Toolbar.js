import React from 'react';
import Logo from './Logo';
import NavigationItems from './NavigationItems';
import classes from './Toolbar.module.css';

function Toolbar(props) {
    return (
        <header className={classes.Toolbar}>
            <div>MENU</div>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </header>
    );
}

export default Toolbar;
