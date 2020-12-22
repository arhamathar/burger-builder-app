import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CheckoutSum from '../components/Order/CheckoutSum';

function Checkout(props) {
    const history = useHistory();

    const checkoutConfirmHandler = () => {
        history.push("/contact-data");
    }

    const checkoutCancelHandler = () => {
        history.goBack();
    }

    return (
        <div>
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
        ings: state.ingredients
    };
}

export default connect(mapStateToProps)(Checkout);
