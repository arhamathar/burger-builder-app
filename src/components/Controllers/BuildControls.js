import React from 'react';
import SingleControllers from './SingleController';
import classes from './BuildControls.module.css';

const controls = [
    { label: 'Tomato', type: 'tomato' },
    { label: 'Lettuce', type: 'lettuce' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Patty', type: 'patty' }
];

function BuildControls(props) {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>₹ {props.price}</strong></p>
            {controls.map(ctrl => {
                return (
                    <SingleControllers
                        key={ctrl.label}
                        label={ctrl.label}
                        add={() => { props.addIngredients(ctrl.type) }}
                        remove={() => props.removeIngredients(ctrl.type)}
                        disabled={props.disabled[ctrl.type]}
                    />
                );
            })}
            <button
                disabled={!props.purchase}
                className={classes.OrderButton}
                onClick={props.handleClick}
            >Order Now</button>
        </div>
    );
}

export default BuildControls;
