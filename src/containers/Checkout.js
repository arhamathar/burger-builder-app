import React, { useState } from 'react';
import CheckoutSum from '../components/Order/CheckoutSum';

function Checkout() {
    const [ingredients, setIngredients] = useState({
        cheese: 1,
        lettuce: 1,
        patty: 2,
        tomato: 1
    });

    return (
        <div>
            <CheckoutSum ingredients={ingredients} />
        </div>
    );
}

export default Checkout;
