import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/authContext'
import classes from './Navigation.module.css';

function NavigationItems() {
    const auth = useContext(AuthContext);
    const history = useHistory();

    const onClickHandler = () => {
        auth.logout();
        history.push("/auth/login");
    }

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
            {auth.isLoggedIn && <li>
                <button
                    type="button"
                    activeclassname={classes.active}
                    onClick={onClickHandler}
                >Log Out</button>
            </li>}
        </ul>
    );
}

export default NavigationItems;
