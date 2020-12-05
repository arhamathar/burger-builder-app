import React from 'react';
import BurgerLogo from '../../assets/burgerLogo.png';

const styleClass = {
    backgroundColor: '#fff',
    height: '80%',
    padding: '8px',
    borderRadius: '5px',
    boxSizing: 'border-box'
}

function Logo() {
    return (
        <div style={styleClass}>
            <img src={BurgerLogo} alt="logo" style={{ height: '100%' }} />
        </div>
    );
}

export default Logo;
