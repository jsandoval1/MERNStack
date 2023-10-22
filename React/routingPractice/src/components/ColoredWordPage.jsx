import React from 'react';
import { useParams } from 'react-router-dom';

// ColoredWordPage component
function ColoredWordPage() {
    // Use the useParams  to get the route parameters from the URL
    const { param, color1, color2 } = useParams();

    // Style object to specify text color and background color
    const style = {
        color: color1, // Use color1 for text color
        backgroundColor: color2, // Use color2 for background color
    };

    return (
        <div style={style}> 
            <p>The word is: {param}</p>
        </div>
    );
}

export default ColoredWordPage;
