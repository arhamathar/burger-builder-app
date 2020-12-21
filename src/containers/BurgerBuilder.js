import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../axios-orders';
import { connect } from 'react-redux';
import Burger from '../components/Burger/Burger';
import Summary from '../components/Burger/Summary';
import Modal from '../components/UI/Modal/Modal';
import Spinner from '../components/UI/Spinner/Spinner';
import ErrorModal from '../components/UI/Error/ErrorModal';
import BuildControls from '../components/Controllers/BuildControls';
import * as actionTypes from '../redux/action';


function BurgerBuilder(props) {
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    // useEffect(() => {
    //     setIsLoading(true);
    //     const getIngredients = async () => {
    //         try {
    //             const response = await axios.get('/ingredients.json');
    //             setIngredients(response.data);
    //             setIsLoading(false);
    //         } catch (err) {
    //             setError(err.message);
    //             setIsLoading(false);
    //         }
    //     }
    //     getIngredients();
    // }, []);

    const purchaseHandler = () => {
        const sum = Object.keys(props.ingredients).map(igKey => {
            return props.ingredients[igKey];
        }).reduce((acc, curr) => {
            return acc + curr;
        }, 0);

        return (sum > 0);
    }

    const showModalHandler = () => {
        setShowModal(true);
    }

    const closeModalHandler = () => {
        setShowModal(false);
    }

    const confirmPurchaseHandler = async () => {
        history.push("/checkout");
    }

    const disabledInfo = { ...props.ingredients };
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
    }

    const clearError = () => {
        setError(null);
    }

    return (
        <React.Fragment>
            <ErrorModal showError={error} onClear={clearError} />
            <Modal show={showModal} close={closeModalHandler}>
                <Spinner show={isLoading} />
                {!isLoading && props.ingredients && <Summary
                    ingredients={props.ingredients}
                    price={props.totalPrice}
                    confirmPurchase={confirmPurchaseHandler}
                />}
            </Modal>
            <Spinner show={isLoading} />
            {props.ingredients && <Burger ingredients={props.ingredients} />}
            {props.ingredients && <BuildControls
                addIngredients={props.addIngredients}
                removeIngredients={props.removeIngredients}
                disabled={disabledInfo}
                purchase={purchaseHandler()}
                price={props.totalPrice}
                handleClick={showModalHandler}
            />}
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addIngredients: (ingName) => {
            dispatch({
                type: actionTypes.ADD_INGREDIENT,
                ingredientName: ingName
            })
        },
        removeIngredients: (ingName) => dispatch({
            type: actionTypes.REMOVE_INGREDIENT,
            ingredientName: ingName
        })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
