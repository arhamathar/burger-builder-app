import React, { Fragment } from 'react';

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
            <p>Continue to Checkout ?</p>
        </Fragment>
    );
}

export default Summary;
