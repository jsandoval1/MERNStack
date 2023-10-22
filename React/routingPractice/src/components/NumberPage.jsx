import React from 'react';
import { useParams } from 'react-router-dom';

// NumberPage component
function NumberPage() {
    // Use useParams to get the route parameter from the URL
    const { param } = useParams();

    return (
        <div>
            <p>The number is: {param}</p>
        </div>
    );
}

export default NumberPage;
