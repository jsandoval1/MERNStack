import React from 'react';

function Error({ message }) {
    return (
        <div className="error">
            <p className="error-message">{message}</p>
            <img
                src="https://i.kym-cdn.com/photos/images/newsfeed/002/285/211/e89.jpg"
                alt="Obi-Wan Kenobi"
                className="error-image"
            />
        </div>
    );
}

export default Error;
