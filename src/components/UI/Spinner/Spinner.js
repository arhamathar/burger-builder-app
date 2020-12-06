import React from 'react';
import classes from './Spinner.module.css';

export default function Spinner(props) {
    return (props.show && <div class={classes.Loader}>Loading...</div>);
}
