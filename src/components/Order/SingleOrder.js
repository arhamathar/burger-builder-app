import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 100%;
    border: 1px solid #eee;
    box-shadow: 0 2px 4px #ccc;
    padding: 1rem;
    margin: 1rem;
    box-sizing: border-box;
    font-size: 1.25rem;
`;

function SingleOrder() {
    return (
        <StyledDiv>
            <p>Ingredients: Salad (1)</p>
            <p>Price: <strong> ₹ 100</strong></p>
        </StyledDiv>
    );
}

export default SingleOrder
