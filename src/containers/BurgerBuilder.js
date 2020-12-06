import React, { useState } from 'react';
import axios from '../axios-orders';
import Burger from '../components/Burger/Burger';
import Modal from '../components/UI/Modal/Modal';
import BuildControls from '../components/Controllers/BuildControls';
import Summary from '../components/Burger/Summary';
import Spinner from '../components/UI/Spinner/Spinner';

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
    const [isLoading, setIsLoading] = useState(false);
    const [ingredients, setIngredients] = useState({
        tomato: 0,
        lettuce: 0,
        cheese: 0,
        patty: 0
    });

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
        setIsLoading(true);
        const order = {
            ingredients: ingredients,
            price: totalPrice,
            customer: {
                name: "Arham Athar",
                email: "arham@gmail.com",
                address: {
                    street: 'Pateri',
                    pinCode: 485001,
                    state: 'M.P'
                }
            },
            deliveryMethod: 'express'
        }
        try {
            const response = await axios.post('/orders.json', order);
            console.log(response);
            setIsLoading(false);
            setShowModal(false);
        } catch (err) {
            console.log(err);
            setIsLoading(false);
            setShowModal(false);
        }
    }

    const disabledInfo = { ...ingredients };
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
        <React.Fragment>
            <Modal show={showModal} close={closeModalHandler}>
                <Spinner show={isLoading} />
                {!isLoading && <Summary
                    ingredients={ingredients}
                    price={totalPrice}
                    confirmPurchase={confirmPurchaseHandler}
                />}
            </Modal>
            <Burger ingredients={ingredients} />
            <BuildControls
                addIngredients={addIngredientsHandler}
                removeIngredients={removeIngredientsHandler}
                disabled={disabledInfo}
                purchase={purchase}
                price={totalPrice}
                handleClick={showModalHandler}
            />
        </React.Fragment>
    );
}

export default BurgerBuilder;
