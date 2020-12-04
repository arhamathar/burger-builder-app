import React from 'react';
import classes from './Modal.module.css';

function Modal(props) {
    if (props.show) {
        return (
            <div className={classes.Modal} style={{ opacity: props.show ? '1' : '0' }}>
                {props.children}
            </div>
        );
    }
    return <div></div>
}

export default Modal;
