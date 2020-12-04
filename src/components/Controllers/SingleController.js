import React from 'react';
import classes from './SingleController.module.css';

function SingleController(props) {
    return (
        <div className={classes.SingleController}>
            <div className={classes.Label}>{props.label}</div>
            <button
                className={classes.Less}
                onClick={props.remove}
                disabled={props.disabled}
            >Less</button>
            <button className={classes.More} onClick={props.add}>More</button>
        </div>
    );
}

export default SingleController;
