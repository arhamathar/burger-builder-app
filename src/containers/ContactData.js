import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../components/FormElements/Input/Input';
import Button from '../components/FormElements/Button/Button';

const StyledDiv = styled.div`
    margin: 2rem auto;
    width: 75%;
    text-align: center;
    box-shadow: 0 4px 8px #ccc;
    border: 1px solid #ccc;
    padding: 1rem;
    font-size: 1.25rem;
    @media(min-width: 786px){
        width: 600px;
    }
`;

function ContactData() {
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState({
        street: '',
        pinCode: ''
    });

    const orderHandler = (e) => {
        e.preventDefault();
        // setIsLoading(true);
        // const order = {
        //     ingredients: ingredients,
        //     price: totalPrice,
        //     customer: {
        //         name: "Arham Athar",
        //         email: "arham@gmail.com",
        //         address: {
        //             street: 'Pateri',
        //             pinCode: 485001,
        //             state: 'M.P'
        //         }
        //     },
        //     deliveryMethod: 'express'
        // }
        // try {
        //     await axios.post('/orders.json', order);
        //     setIsLoading(false);
        //     setShowModal(false);
        // } catch (err) {
        //     setError(err.message);
        //     setIsLoading(false);
        //     setShowModal(false);
        // }
    }

    return (
        <StyledDiv>
            <h4>Enter your Contact Data</h4>
            <form>
                <Input inputtype="input" type="text" name="name" placeholder="Your Name" />
                <Input inputtype="input" type="text" name="email" placeholder="Your email" />
                <Input inputtype="input" type="text" name="street" placeholder="Street" />
                <Input inputtype="input" type="text" name="pincode" placeholder="Pin Code" />
                <Button clicked={orderHandler} btnType="Success">Order</Button>
            </form>
        </StyledDiv>
    )
}

export default ContactData;
