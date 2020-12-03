import React from 'react';
import SingleControllers from './SingleController';
import classes from './BuildControls.module.css';

const controls = [
    { label: 'Lettuce', type: 'lettuce' },
    { label: 'Tomato', type: 'tomato' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Patty', type: 'patty' }
];

function BuildControls() {
    return (
        <div className={classes.BuildControls}>
            {controls.map(ctrl => {
                return <SingleControllers key={ctrl.label} label={ctrl.label} />
            })}
        </div>
    )
}

export default BuildControls;
