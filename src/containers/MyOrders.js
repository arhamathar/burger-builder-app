import React, { useState, useEffect } from 'react';
import SingleOrder from '../components/Order/SingleOrder';
import ErrorModal from '../components/UI/Error/ErrorModal';
import axios from '../axios-orders';


function MyOrders() {
    const [error, setError] = useState(false);
    const [orders, setOrders] = useState([]);
    const [isloading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const sendRequest = async () => {
            try {
                const response = await axios.get('/orders.json');
                console.log(response.data);
                let fetchedOrder = [];
                for (let key in response.data) {
                    fetchedOrder.push({
                        ...response.data[key],
                        id: key
                    });
                }
                setOrders(fetchedOrder);
                setIsLoading(false);
            } catch (err) {
                setError(err.message);
                setIsLoading(false);
            }
        }
        sendRequest();
    }, []);

    const clearErrorHandler = () => {
        setError(null);
    }

    return (
        <React.Fragment>
            <ErrorModal showError={error} onClear={clearErrorHandler} />
            {orders.map(order => {
                return <SingleOrder
                    key={order.id}
                    price={order.price}
                    ingredients={order.ingredients}
                />
            })}
        </React.Fragment>
    );
}

export default MyOrders;
