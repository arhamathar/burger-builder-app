import React from 'react';
import styled from 'styled-components';
import Burger from '../Burger/Burger';
import Button from '../UI/Button';

const CheckoutSumStyle = styled.div`
    text-align: center;
    font-size: 2rem;
    width: 80%;
    margin: 2rem auto;
    @media(min-width: 600px){
        width: 500px;
    }
`;

function CheckoutSum(props) {
    return (
        <CheckoutSumStyle>
            <h2>We hope you enjoy it !</h2>
            <div style={{ width: '100%', margin: '1rem auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button clicked btnType="Danger">CANCEL</Button>
            <Button clicked btnType="Success">CONFIRM</Button>
        </CheckoutSumStyle>
    );
}

export default CheckoutSum;
