import React, { useState, useEffect } from 'react';
import SingleOrder from '../components/Order/SingleOrder';
import ErrorModal from '../components/UI/Error/ErrorModal';
import Spinner from '../components/UI/Spinner/Spinner';
import axios from '../axios-orders';
import { useContext } from 'react/cjs/react.development';
import { AuthContext } from '../context/authContext';


function MyOrders() {
    const auth = useContext(AuthContext);

    const [error, setError] = useState(false);
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const sendRequest = async () => {
            try {
                const response = await axios.get('/orders.json');
                let fetchedOrder = [];
                console.log(response.data);

                for (let key in response.data) {
                    if (response.data[key].userId === auth.userId) {
                        console.log("============");
                        fetchedOrder.push({
                            ...response.data[key],
                            id: key
                        });
                    }
                }
                setOrders(fetchedOrder);
                setIsLoading(false);
            } catch (err) {
                setError(err.message);
                setIsLoading(false);
            }
        }
        sendRequest();
    }, [auth.userId]);

    const clearErrorHandler = () => {
        setError(null);
    }

    return (
        <React.Fragment>
            <ErrorModal showError={error} onClear={clearErrorHandler} />
            <Spinner show={isLoading} />
            {orders && orders.map(order => {
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
