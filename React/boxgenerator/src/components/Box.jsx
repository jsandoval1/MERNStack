import React from 'react';

// Component takes two props: color and size.
function Box({ color, size }) {
    return (
        <div
            className="box"
            style={{
                backgroundColor: color, // Sets the background color to the value of the passed in color prop
                width: `${size}px`,
                height: `${size}px`
            }}
        ></div>
    );
}

export default Box;
