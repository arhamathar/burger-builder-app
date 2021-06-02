import React, { useState, useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import axios from '../axios-orders';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Spinner from '../components/UI/Spinner/Spinner';
import ErrorModal from '../components/UI/Error/ErrorModal';
import Input from '../components/FormElements/Input/Input';
import Button from '../components/FormElements/Button/Button';
import { AuthContext } from '../context/authContext';
import * as actionTypes from '../redux/action';
import {
    validate,
    VALIDATOR_REQUIRE,
    VALIDATOR_MAXLENGTH,
    VALIDATOR_MINLENGTH,
} from '../utils/Validation';

const StyledDiv = styled.div`
    margin: 2rem auto;
    width: 75%;
    text-align: center;
    box-shadow: 0 4px 8px #ccc;
    border: 1px solid #ccc;
    padding: 1rem;
    font-size: 1.2rem;
    @media (min-width: 786px) {
        width: 600px;
    }
`;

function ContactData(props) {
    const auth = useContext(AuthContext);

    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formValidity, setFormValidity] = useState(false);

    const [name, setName] = useState({
        value: '',
        isValid: false,
        isTouch: false,
    });
    const [city, setCity] = useState({
        value: '',
        isValid: false,
        isTouch: false,
    });
    const [street, setStreet] = useState({
        value: '',
        isValid: false,
        isTouch: false,
    });
    const [pincode, setPincode] = useState({
        value: '',
        isValid: false,
        isTouch: false,
    });
    const [delivery, setDelivery] = useState({
        value: 'fastest',
    });

    const options = [
        { value: 'fastest', displayValue: 'Fastest' },
        { value: 'normal', displayValue: 'Normal' },
        { value: 'cheapest', displayValue: 'Cheapest' },
    ];

    const history = useHistory();

    const orderHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const order = {
            ingredients: props.ings,
            price: props.price,
            customer: {
                name: name,
                address: {
                    street: street,
                    city: city,
                    pinCode: pincode,
                },
            },
            deliveryMethod: delivery,
            userId: auth.userId,
        };
        try {
            await axios.post('/orders.json', order);
            setIsLoading(false);
            history.push('/');
            props.setInitialIngredients();
        } catch (err) {
            setError(err.message);
            setIsLoading(false);
        }
    };

    // how to update state immediately in react see form validation

    const inputChangeHandler = (e, inputId) => {
        switch (inputId) {
            case 'name':
                setName((prevState) => {
                    return {
                        ...prevState,
                        value: e.target.value,
                        isValid: validate(e.target.value, [
                            VALIDATOR_REQUIRE(),
                        ]),
                        isTouch: true,
                    };
                });
                break;
            case 'city':
                setCity((prevState) => {
                    return {
                        ...prevState,
                        value: e.target.value,
                        isValid: validate(e.target.value, [
                            VALIDATOR_REQUIRE(),
                        ]),
                        isTouch: true,
                    };
                });
                break;
            case 'street':
                setStreet((prevState) => {
                    return {
                        ...prevState,
                        value: e.target.value,
                        isValid: validate(e.target.value, [
                            VALIDATOR_REQUIRE(),
                        ]),
                        isTouch: true,
                    };
                });
                break;
            case 'pincode':
                setPincode((prevState) => {
                    return {
                        ...prevState,
                        value: e.target.value,
                        isValid: validate(e.target.value, [
                            VALIDATOR_REQUIRE(),
                            VALIDATOR_MINLENGTH(6),
                            VALIDATOR_MAXLENGTH(6),
                        ]),
                        isTouch: true,
                    };
                });
                break;
            case 'delivery':
                setDelivery((prevState) => {
                    return {
                        ...prevState,
                        value: e.target.value,
                    };
                });
                break;
            default:
                break;
        }
    };

    // to update state immediately in react see form validation
    useEffect(() => {
        if (
            name.isValid &&
            city.isValid &&
            street.isValid &&
            pincode.isValid
        ) {
            setFormValidity(true);
        } else {
            setFormValidity(false);
        }
    }, [name.isValid, city.isValid, street.isValid, pincode.isValid]);

    const clearError = () => {
        setError(null);
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>Burger Builder | Contact Details</title>
                <meta
                    name='description'
                    content='Welcome to the Burger Builder App. Fill your contact details for easy delivery.'
                />
            </Helmet>
            <ErrorModal showError={error} onClear={clearError} />
            <StyledDiv>
                {isLoading && <Spinner show={isLoading} />}
                {!isLoading && <h3>Enter your Contact Data</h3>}
                {!isLoading && (
                    <form onSubmit={orderHandler}>
                        <Input
                            inputtype='input'
                            id='name'
                            type='text'
                            name='name'
                            placeholder='Your Name'
                            autoFocus
                            onChange={inputChangeHandler}
                            value={name.value}
                            valid={name.isValid.toString()}
                            touch={name.isTouch.toString()}
                        />
                        <Input
                            inputtype='input'
                            id='city'
                            type='text'
                            name='city'
                            placeholder='City name'
                            onChange={inputChangeHandler}
                            value={city.value}
                            valid={city.isValid.toString()}
                            touch={city.isTouch.toString()}
                        />
                        <Input
                            inputtype='input'
                            id='street'
                            type='text'
                            name='street'
                            placeholder='Street'
                            onChange={inputChangeHandler}
                            value={street.value}
                            valid={street.isValid.toString()}
                            touch={street.isTouch.toString()}
                        />
                        <Input
                            inputtype='input'
                            id='pincode'
                            type='text'
                            name='pincode'
                            placeholder='Pin Code'
                            onChange={inputChangeHandler}
                            value={pincode.value}
                            valid={pincode.isValid.toString()}
                            touch={pincode.isTouch.toString()}
                        />
                        <Input
                            inputtype='select'
                            id='delivery'
                            options={options}
                            onChange={inputChangeHandler}
                            value={delivery.value}
                        />
                        <Button
                            disabled={!formValidity}
                            btnType='Success'
                        >
                            Order
                        </Button>
                    </form>
                )}
            </StyledDiv>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        ings: state.ingredients,
        price: state.totalPrice,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setInitialIngredients: () => {
            dispatch({ type: actionTypes.SET_INITIAL_INGREDIENT });
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactData);
