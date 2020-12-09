import React from 'react';
import classes from './Hamburger.module.css';

function Hamburger(props) {
    return (
        <div className={classes.Hamburger} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default Hamburger;
