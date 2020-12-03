import React from 'react';
import Ingredients from './Ingredients';
import classes from './Burger.module.css';

function Burger(props) {
  let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, ind) => {
      return <Ingredients key={igKey + ind} type={igKey} />
    });
  }).reduce((acc, curr) => {
    return acc.concat(curr); // to convert in a single array
  }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p> Please start adding ingredients!</p>
  }

  return (
    <div className={classes.Burger}>
      <Ingredients type="bread-top" />
      {transformedIngredients}
      <Ingredients type="bread-bottom" />
    </div>
  );
}

export default Burger;
