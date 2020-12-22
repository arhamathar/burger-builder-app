import React from 'react';
import classes from './Input.module.css';

function Input(props) {
    let inputElement = null;
    switch (props.inputtype) {
        case 'input':
            inputElement = (
                <input
                    id={props.id}
                    {...props}
                    className={classes.InputElement}
                    onChange={props.onChange}
                    value={props.value}
                />
            )
            break;
        case 'textarea':
            inputElement = (
                <textarea
                    id={props.id}
                    {...props}
                    className={classes.InputElement}
                    onChange={props.onChange}
                    value={props.value}
                />
            )
            break;
        case 'select':
            inputElement = (
                <select
                    id={props.id}
                    className={classes.InputElement}
                    onChange={props.onChange}
                    value={props.value}
                >{props.options.map(option => {
                    return <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.displayValue}
                    </option>
                })}
                </select>
            )
            break;
        default:
            inputElement = (
                <input
                    id={props.id}
                    {...props}
                    className={classes.InputElement}
                    onChange={props.onChange}
                    value={props.value}
                />
            )
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default Input;
