import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import axios from '../axios-orders';
import styled from 'styled-components';
import Spinner from '../../components/UI/Spinner/Spinner';
import ErrorModal from '../../components/UI/Error/ErrorModal';
import Input from '../../components/FormElements/Input/Input';
import Button from '../../components/FormElements/Button/Button';
import {
    validate,
    VALIDATOR_REQUIRE,
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH
} from '../../utils/Validation';


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

const styleLink = {
    textDecoration: 'none',
    color: '#bf1e13'
}

function SignUp(props) {
    // const history = useHistory();
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formValidity, setFormValidity] = useState(false);

    const [username, setUsername] = useState({
        value: '',
        isValid: false,
        isTouch: false
    });
    const [email, setEmail] = useState({
        value: '',
        isValid: false,
        isTouch: false
    });
    const [password, setPassword] = useState({
        value: '',
        isValid: false,
        isTouch: false
    })

    const inputChangeHandler = (e, inputId) => {
        console.log(e.target.value);
        switch (inputId) {
            case 'username':
                setUsername(prevState => {
                    return {
                        ...prevState,
                        value: e.target.value,
                        isValid: validate(e.target.value, [VALIDATOR_REQUIRE()]),
                        isTouch: true
                    }
                });
                break;
            case 'email':
                setEmail(prevState => {
                    return {
                        ...prevState,
                        value: e.target.value,
                        isValid: validate(e.target.value, [VALIDATOR_EMAIL()]),
                        isTouch: true
                    }
                });
                break;
            case 'password':
                setPassword(prevState => {
                    return {
                        ...prevState,
                        value: e.target.value,
                        isValid: validate(e.target.value, [
                            VALIDATOR_REQUIRE(),
                            VALIDATOR_MINLENGTH(6)
                        ]),
                        isTouch: true
                    }
                });
                break;
            default:
                break;
        }

        if (username.isValid && email.isValid && password.isValid) {
            setFormValidity(true);
        }
        else {
            setFormValidity(false);
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
                {!isLoading && <h2 style={{ color: '#404040' }}>SIGN UP</h2>}
                {!isLoading && <form >
                    <Input
                        inputtype="input"
                        id="username"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        onChange={inputChangeHandler}
                        value={username.value}
                        valid={username.isValid.toString()}
                        touch={username.isTouch.toString()}
                    />
                    <Input
                        inputtype="input"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="xyz@gmail.com"
                        onChange={inputChangeHandler}
                        value={email.value}
                        valid={email.isValid.toString()}
                        touch={email.isTouch.toString()}
                    />
                    <Input
                        inputtype="input"
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={inputChangeHandler}
                        value={password.value}
                        valid={password.isValid.toString()}
                        touch={password.isTouch.toString()}
                    />
                    <Button disabled={!formValidity} btnType="Success">Sign Up</Button>
                    <p>
                        Have an account ?&nbsp;
                        <Link style={styleLink} to="/auth/login">Log In </Link>
                    </p>

                </form>}
            </StyledDiv>
        </React.Fragment>
    );
}


export default SignUp;
