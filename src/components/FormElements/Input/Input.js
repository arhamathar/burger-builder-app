import React from 'react';
import classes from './Input.module.css';

function Input(props) {
    let inputElement = null;
    switch (props.inputtype) {
        case 'input':
            inputElement = <input {...props} className={classes.InputElement} />
            break;
        case 'textarea':
            inputElement = <textarea {...props} className={classes.InputElement} />
            break;
        default:
            inputElement = <input {...props} className={classes.InputElement} />
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default Input;
