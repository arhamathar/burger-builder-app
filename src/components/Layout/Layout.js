import React, { useState } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

function Layout(props) {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerHandler = () => {
    setShowSideDrawer(false);
  }

  const toggleButtonHandler = () => {
    setShowSideDrawer(true);
  }

  return (
    <React.Fragment>
      <Toolbar show={toggleButtonHandler} />
      <SideDrawer show={showSideDrawer} hide={sideDrawerHandler} />
      <main className={classes.Content}>
        {props.children}
      </main>
    </React.Fragment>
  );
}

export default Layout;
