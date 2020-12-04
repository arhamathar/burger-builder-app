import React from 'react';

function Backdrop(props) {
    const styleClass = {
        width: '100%',
        height: '100%',
        zIndex: '100',
        position: 'fixed',
        top: '0',
        left: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    }
    return (
        props.show && <div style={styleClass} onClick={props.close} />
    );
}

export default Backdrop;
