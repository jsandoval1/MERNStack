import React from 'react';

function Button({ onClick }) {
    return (
        <div>
            <button onClick={onClick}>Use the Force</button>
        </div>
    );
}

export default Button;
