import React from 'react';
import Modal from '../Modal/Modal';

function ErrorModal(props) {
    return (
        <Modal show={props.showError} close={props.onClear}>
            <h3 style={{ textAlign: 'center' }}>Something went wrong !</h3>
            <h2 style={{ textAlign: 'center' }}>
                {props.showError}
            </h2>
        </Modal>
    );
}

export default ErrorModal;
