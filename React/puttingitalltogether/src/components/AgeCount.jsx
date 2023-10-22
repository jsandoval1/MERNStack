import React, { useState } from "react";

const Counter = (props) => {
    const [count, setCount] = useState(0); // use descriptive names for your destructured variables

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            {count}
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
};

export default Counter;
