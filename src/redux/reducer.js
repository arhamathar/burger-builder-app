import * as actionTypes from './action';

const initialState = {
    ingredients: {
        lettuce: 0,
        cheese: 0,
        patty: 0,
        tomato: 0
    },
    totalPrice: 20
}

const INGREDIENTS_PRICE = {
    lettuce: 15,
    tomato: 15,
    cheese: 20,
    patty: 30
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients, // ingredientName is the payload
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENTS_PRICE[action.ingredientName]
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                }
            };
        case actionTypes.SET_INITIAL_INGREDIENT:
            return {
                ...state,
                ingredients: initialState.ingredients,
                totalPrice: initialState.totalPrice
            }
        default:
            return state;
    }
}

export default reducer