import React from 'react';
import Backdrop from '../Backdrop';
import classes from './Modal.module.css';

function Modal(props) {
    // if (props.show) {
    return (
        <React.Fragment>
            <Backdrop show={props.show} close={props.close} />
            <div className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
            >{props.children}
            </div>
        </React.Fragment>
    );
    // }
    // return <div></div>
}

export default Modal;
