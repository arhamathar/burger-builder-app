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
    font-size: 1.2rem;
    @media(min-width: 786px){
        width: 600px;
    }
`;

function ContactData() {
    // const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState({
        value: '',
        isValid: false
    });
    const [email, setEmail] = useState({
        value: '',
        isValid: false
    });
    const [street, setStreet] = useState({
        value: '',
        isValid: false
    });
    const [pincode, setPincode] = useState({
        value: '',
        isValid: false
    });
    const [delivery, setDelivery] = useState({
        value: '',
        isValid: false
    });

    const options = [
        { value: 'fastest', displayValue: 'Fastest' },
        { value: 'normal', displayValue: 'Normal' },
        { value: 'cheapest', displayValue: 'Cheapest' }
    ]

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

    const inputChangeHandler = (e, inputId) => {
        switch (inputId) {
            case 'name':
                setName(prevState => {
                    return {
                        ...prevState,
                        value: e.target.value
                    }
                });
                break;
            case 'email':
                setEmail(prevState => {
                    return {
                        ...prevState,
                        value: e.target.value
                    }
                });
                break;
            case 'street':
                setStreet(prevState => {
                    return {
                        ...prevState,
                        value: e.target.value
                    }
                });
                break;
            case 'pincode':
                setPincode(prevState => {
                    return {
                        ...prevState,
                        value: e.target.value
                    }
                });
                break;
            case 'delivery':
                setDelivery(prevState => {
                    return {
                        ...prevState,
                        value: e.target.value
                    }
                });
                break;
            default:
                break;
        }
    }

    return (
        <StyledDiv>
            <h4>Enter your Contact Data</h4>
            <form onSubmit={orderHandler}>
                <Input
                    inputtype="input"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    onChange={inputChangeHandler}
                    value={name.value}
                />
                <Input
                    inputtype="input"
                    id="email"
                    type="text"
                    name="email"
                    placeholder="Your Email"
                    onChange={inputChangeHandler}
                    value={email.value}
                />
                <Input
                    inputtype="input"
                    id="street"
                    type="text"
                    name="street"
                    placeholder="Street"
                    onChange={inputChangeHandler}
                    value={street.value}
                />
                <Input
                    inputtype="input"
                    id="pincode"
                    type="text"
                    name="pincode"
                    placeholder="Pin Code"
                    onChange={inputChangeHandler}
                    value={pincode.value}
                />
                <Input
                    inputtype="select"
                    id="delivery"
                    options={options}
                    onChange={inputChangeHandler}
                    value={delivery.value}
                />
                <Button btnType="Success">Order</Button>
            </form>
        </StyledDiv>
    );
}

export default ContactData;
