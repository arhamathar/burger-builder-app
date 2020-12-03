import React from 'react';
import classes from './SingleController.module.css';

function SingleController(props) {
    return (
        <div className={classes.SingleController}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.More}>More</button>
            <button className={classes.Less}>Less</button>
        </div>
    );
}

export default SingleController;
