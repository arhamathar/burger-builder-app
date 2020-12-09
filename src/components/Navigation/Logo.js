import React from 'react';
import BurgerLogo from '../../assets/burgerLogo.png';

function Logo(props) {
    const styleClass = {
        backgroundColor: '#fff',
        height: props.height,
        padding: '8px',
        borderRadius: '5px',
        boxSizing: 'border-box',
        display: 'inline-block'
    }

    return (
        <div style={styleClass}>
            <img src={BurgerLogo} alt="logo" style={{ height: "100%" }} />
        </div>
    );
}

export default Logo;
