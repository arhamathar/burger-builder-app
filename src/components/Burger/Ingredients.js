import React from 'react';
import PropTypes from 'prop-types';
import classes from './Ingredients.module.css';

function Ingredients(props) {
  let ingredients;
  switch (props.type) {
    case ("bread-top"):
      ingredients = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1} />
          <div className={classes.Seeds2} />
        </div>
      );
      break;
    case ('bread-bottom'):
      ingredients = <div className={classes.BreadBottom} />
      break;
    case ('patty'):
      ingredients = <div className={classes.Patty} />
      break;
    case ('cheese'):
      ingredients = <div className={classes.Cheese} />
      break;
    case ('lettuce'):
      ingredients = <div className={classes.Lettuce} />
      break;
    case ('tomato'):
      ingredients = <div className={classes.Tomato} />
      break;
    default:
      ingredients = null;
  }
  return ingredients;
}

Ingredients.propTypes = {
  type: PropTypes.string.isRequired
}

export default Ingredients;


