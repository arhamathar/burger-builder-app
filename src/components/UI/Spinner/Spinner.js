import React from 'react';
import classes from './Spinner.module.css';

export default function Spinner(props) {
    if (props.fallback) {
        return <div className={classes.Loader}>Loading...</div>;
    }
    return (
        props.show && <div className={classes.Loader}>Loading...</div>
    );
}
