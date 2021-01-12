import React from 'react';
import Modal from '../Modal/Modal';

function ErrorModal(props) {
    return (
        <Modal show={props.showError} close={props.onClear}>
            <h4 style={{ textAlign: 'center' }}>Something went wrong !</h4>
            <h3 style={{ textAlign: 'center' }}>
                {props.showError}
            </h3>
        </Modal>
    );
}

export default ErrorModal;
