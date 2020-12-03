import React, { useState } from 'react';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls';

function BurgerBuilder() {
  const [ingredients, setIngredients] = useState({
    tomato: 1,
    lettuce: 1,
    cheese: 2,
    patty: 2
  });

  return (
    <div>
      <Burger ingredients={ingredients} />
      <BuildControls />
    </div>
  )
}

export default BurgerBuilder
