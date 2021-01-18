import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    let inputElement = null;
    const inputClass = [classes.InputElement];

    if (props.valid === "false" && props.touch === "true") {
        inputClass.push(classes.Invalid)
    }

    switch (props.inputtype) {
        case 'input':
            inputElement = (
                <input
                    id={props.id}
                    {...props}
                    className={inputClass.join(' ')}
                    onChange={(e) => props.onChange(e, props.id)}
                    value={props.value}
                    autoFocus={props.autoFocus}
                />
            )
            break;
        case 'textarea':
            inputElement = (
                <textarea
                    id={props.id}
                    {...props}
                    className={inputClass.join(' ')}
                    onChange={(e) => props.onChange(e, props.id)}
                    value={props.value}
                />
            )
            break;
        case 'select':
            inputElement = (
                <select
                    id={props.id}
                    className={classes.InputElement}
                    onChange={(e) => props.onChange(e, props.id)}
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
                    className={inputClass.join(' ')}
                    onChange={(e) => props.onChange(e, props.id)}
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
