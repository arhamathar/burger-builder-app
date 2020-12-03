import React, { useState } from 'react';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls';

const INGREDIENTS_PRICE = {
  lettuce: 15,
  tomato: 15,
  cheese: 20,
  patty: 30
}

function BurgerBuilder() {
  const [totalPrice, setTotalPrice] = useState(20);
  const [ingredients, setIngredients] = useState({
    tomato: 0,
    lettuce: 0,
    cheese: 0,
    patty: 0
  });

  const addIngredientsHandler = (type) => {
    const oldCount = ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] = updatedCount;
    setIngredients(updatedIngredients);

    const newPrice = totalPrice + INGREDIENTS_PRICE[type];
    setTotalPrice(newPrice);
  }

  const removeIngredientsHandler = (type) => {
    if (ingredients[type] <= 0)
      return;

    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] = ingredients[type] - 1;
    setIngredients(updatedIngredients);

    const newPrice = totalPrice + INGREDIENTS_PRICE[type];
    setTotalPrice(newPrice);
  }

  const disabledInfo = { ...ingredients };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  return (
    <div>
      <Burger ingredients={ingredients} />
      <BuildControls
        addIngredients={addIngredientsHandler}
        removeIngredients={removeIngredientsHandler}
        disabled={disabledInfo}
      />
    </div>
  );
}

export default BurgerBuilder;
