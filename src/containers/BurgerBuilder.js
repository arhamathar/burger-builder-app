import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../axios-orders';
import Burger from '../components/Burger/Burger';
import Summary from '../components/Burger/Summary';
import Modal from '../components/UI/Modal/Modal';
import Spinner from '../components/UI/Spinner/Spinner';
import ErrorModal from '../components/UI/Error/ErrorModal';
import BuildControls from '../components/Controllers/BuildControls';

const INGREDIENTS_PRICE = {
    lettuce: 15,
    tomato: 15,
    cheese: 20,
    patty: 30
}

function BurgerBuilder() {
    const [totalPrice, setTotalPrice] = useState(20);
    const [purchase, setPurchase] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [ingredients, setIngredients] = useState(null);

    const history = useHistory();

    useEffect(() => {
        setIsLoading(true);
        const getIngredients = async () => {
            try {
                const response = await axios.get('/ingredients.json');
                setIngredients(response.data);
                setIsLoading(false);
            } catch (err) {
                setError(err.message);
                setIsLoading(false);
            }
        }
        getIngredients();
    }, []);

    const addIngredientsHandler = (type) => {
        const oldCount = ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = { ...ingredients };
        updatedIngredients[type] = updatedCount;
        setIngredients(updatedIngredients);

        const newPrice = totalPrice + INGREDIENTS_PRICE[type];
        setTotalPrice(newPrice);
        purchaseHandler(updatedIngredients);
    }

    const removeIngredientsHandler = (type) => {
        if (ingredients[type] <= 0)
            return;

        const updatedIngredients = { ...ingredients };
        updatedIngredients[type] = ingredients[type] - 1;
        setIngredients(updatedIngredients);

        const newPrice = totalPrice - INGREDIENTS_PRICE[type];
        setTotalPrice(newPrice);
        purchaseHandler(updatedIngredients); //state is not updated instantly so we manully pass most recent value
    }

    const purchaseHandler = (ingredients) => {
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
        }).reduce((acc, curr) => {
            return acc + curr;
        }, 0);

        setPurchase(sum > 0);
    }

    const showModalHandler = () => {
        setShowModal(true);
    }

    const closeModalHandler = () => {
        setShowModal(false);
    }

    const confirmPurchaseHandler = async () => {
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
        history.push("/checkout");
    }

    const disabledInfo = { ...ingredients };
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
                {!isLoading && ingredients && <Summary
                    ingredients={ingredients}
                    price={totalPrice}
                    confirmPurchase={confirmPurchaseHandler}
                />}
            </Modal>
            <Spinner show={isLoading} />
            {ingredients && <Burger ingredients={ingredients} />}
            {ingredients && <BuildControls
                addIngredients={addIngredientsHandler}
                removeIngredients={removeIngredientsHandler}
                disabled={disabledInfo}
                purchase={purchase}
                price={totalPrice}
                handleClick={showModalHandler}
            />}
        </React.Fragment>
    );
}

export default BurgerBuilder;
