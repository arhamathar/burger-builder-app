import React from 'react';
import Ingredients from './Ingredients';
import classes from './Burger.module.css';

function Burger() {
  return (
    <div className={classes.Burger}>
      <Ingredients type="bread-top" />
      <Ingredients type="tomato" />
      <Ingredients type="cheese" />
      <Ingredients type="lettuce" />
      <Ingredients type="patty" />
      <Ingredients type="bread-bottom" />
    </div>
  );
}

export default Burger;
