import React, { Fragment } from 'react';
import Logo from '../Logo';
import Backdrop from '../../UI/Backdrop';
import NavigationItems from '../NavigationItems';
import classes from './SideDrawer.module.css';

function SideDrawer(props) {
    let styleClasses = [classes.SideDrawer, classes.Close];
    if (props.show) {
        styleClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Fragment>
            <Backdrop show={props.show} close={props.hide} />
            <aside className={`${styleClasses.join(' ')}`}>
                <Logo height="14%" />
                <nav>
                    <NavigationItems hide={props.hide} />
                </nav>
            </aside>
        </Fragment>
    )
}

export default SideDrawer;
