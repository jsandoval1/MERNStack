import React from 'react';
import { useParams } from 'react-router-dom';

// WordPage component
function WordPage() {
    // Use useParams to get the route parameter from the URL
    const { param } = useParams();

    return (
        <div>
            <p>The word is: {param}</p>
        </div>
    );
}

export default WordPage;
