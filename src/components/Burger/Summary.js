import React, { Fragment } from 'react';
import Button from '../UI/Button';

function Summary(props) {
    const ingredientsSummary = Object.keys(props.ingredients).map(igKey => {
        return (
            <li key={igKey}>
                <span style={{ textTransform: "capitalize" }}>
                    {igKey}
                </span> : &nbsp;
                <span style={{ fontWeight: 'bold' }}>
                    {props.ingredients[igKey]}
                </span>
            </li>
        );
    });

    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: ₹ {props.price}</strong></p>
            <p>Continue to Checkout ?</p>
            {/* <Button btnType="Danger" clicked={props.cancelPurchase}>Cancel</Button> */}
            <Button btnType="Success" clicked={props.confirmPurchase}>Confirm</Button>
        </Fragment>
    );
}

export default Summary;
