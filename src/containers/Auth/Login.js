import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Spinner from '../../components/UI/Spinner/Spinner';
import ErrorModal from '../../components/UI/Error/ErrorModal';
import Input from '../../components/FormElements/Input/Input';
import Button from '../../components/FormElements/Button/Button';
import { AuthContext } from '../../context/authContext';
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

function LogIn(props) {
    const history = useHistory();

    const auth = useContext(AuthContext);

    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formValidity, setFormValidity] = useState(false);

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


    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`
        const authData = {
            email: email.value,
            password: password.value,
            returnSecureToken: true
        }

        try {
            const response = await axios.post(URL, authData);
            setIsLoading(false)
            auth.login(response.data.idToken, response.data.localId, response.data.expiresIn);
            history.push("/");

        } catch (err) {
            setError(err.response.data.error.message);
            setIsLoading(false)
        }
    }

    const inputChangeHandler = (e, inputId) => {
        switch (inputId) {
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
                            VALIDATOR_MINLENGTH(5)
                        ]),
                        isTouch: true
                    }
                });
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        if (email.isValid && password.isValid) {
            setFormValidity(true);
        }
        else {
            setFormValidity(false);
        }
    }, [email.isValid, password.isValid]);

    const clearError = () => {
        setError(null);
    }

    return (
        <React.Fragment>
            <ErrorModal showError={error} onClear={clearError} />
            <StyledDiv>
                {isLoading && <Spinner show={isLoading} />}
                {!isLoading && <h2 style={{ color: '#404040' }}>LOG IN</h2>}
                {!isLoading && <form onSubmit={onSubmitHandler}>
                    <Input
                        inputtype="input"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="xyz@gmail.com"
                        onChange={inputChangeHandler}
                        autoFocus
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
                    <Button disabled={!formValidity} btnType="Success">Log In</Button>
                    <p>
                        Don't have an account ?&nbsp;
                        <Link style={styleLink} to="/auth/signup">Sign Up </Link>
                    </p>
                </form>}
            </StyledDiv>
        </React.Fragment>
    );
}


export default LogIn;
