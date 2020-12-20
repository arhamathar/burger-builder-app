import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CheckoutSum from '../components/Order/CheckoutSum';

function Checkout() {
    const history = useHistory();
    const [ingredients, setIngredients] = useState({
        cheese: 2,
        lettuce: 2,
        patty: 2,
        tomato: 1
    });

    const checkoutConfirmHandler = () => {
        history.replace("/checkout/user-contact");
    }

    const checkoutCancelHandler = () => {
        history.goBack();
    }

    return (
        <div>
            <CheckoutSum
                ingredients={ingredients}
                checkoutCancel={checkoutCancelHandler}
                checkoutConfirm={checkoutConfirmHandler}
            />
        </div>
    );
}

export default Checkout;
