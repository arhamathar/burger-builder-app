import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width:70%;
    border: 1px solid #eee;
    box-shadow: 0 3px 5px #ccc;
    padding: 1rem;
    margin: 1rem auto;
    box-sizing: border-box;
    font-size: 1.25rem;
    line-height: 1.25;
    @media(max-width: 1013px){
        width: 80%
    }
    @media(max-width: 555px){
        width: 85%
    }
`;

const StyledSpan = styled.span`
    text-transform: capitalize;
    display: inline-block;
    border: 1px solid #ccc;
    padding: .5rem;
    margin: 0.8rem;

`;

function SingleOrder(props) {
    const ingredients = [];
    // conveting object of ingredients in an array short method than burger component.
    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        });
    }

    return (
        <StyledDiv>
            <p>
                Ingredients: <br />
                {ingredients.map(ingredient => {
                    return <StyledSpan key={ingredient.name}>
                        {ingredient.name} <strong>({ingredient.amount})</strong>
                    </StyledSpan>
                })}
            </p>
            <p>Price: <strong> ₹ {props.price}</strong></p>
        </StyledDiv >
    );
}

export default SingleOrder
