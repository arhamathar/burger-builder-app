import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CheckoutSum from '../components/Order/CheckoutSum';

function Checkout(props) {
    const history = useHistory();

    const checkoutConfirmHandler = () => {
        history.push('/contact-data');
    };

    const checkoutCancelHandler = () => {
        history.goBack();
    };

    return (
        <div>
            <Helmet>
                <title>Burger Builder | My Orders</title>
                <meta
                    name='description'
                    content='Welcome to the Burger Builder App. Please checkout to exit the cart and place the order.'
                />
            </Helmet>
            <CheckoutSum
                ingredients={props.ings}
                checkoutCancel={checkoutCancelHandler}
                checkoutConfirm={checkoutConfirmHandler}
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        ings: state.ingredients,
    };
};

export default connect(mapStateToProps)(Checkout);
