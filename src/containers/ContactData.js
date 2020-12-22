import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../axios-orders';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Spinner from '../components/UI/Spinner/Spinner';
import ErrorModal from '../components/UI/Error/ErrorModal';
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

function ContactData(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

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

    const history = useHistory();

    const orderHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const order = {
            ingredients: props.ings,
            price: props.price,
            customer: {
                name: name,
                email: email,
                address: {
                    street: street,
                    pinCode: pincode
                }
            },
            deliveryMethod: delivery
        }
        try {
            await axios.post('/orders.json', order);
            setIsLoading(false);
            history.push("/");
        } catch (err) {
            setError(err.message);
            setIsLoading(false);
        }
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

    const clearError = () => {
        setError(null);
    }

    return (
        <React.Fragment>
            <ErrorModal showError={error} onClear={clearError} />
            <StyledDiv>
                {isLoading && <Spinner show={isLoading} />}
                {!isLoading && <h4>Enter your Contact Data</h4>}
                {!isLoading && <form onSubmit={orderHandler}>
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
                </form>}
            </StyledDiv>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    };
}

export default connect(mapStateToProps)(ContactData);
