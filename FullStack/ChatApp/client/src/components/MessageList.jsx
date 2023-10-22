import React from 'react';

function MessageList({ messages }) {
    return (
        <div className="message-list">
            {messages.map((message, index) => (
                <div key={index} className="message">
                    <span className="user">{message.user}:</span> {message.text}
                </div>
            ))}
        </div>
    );
}

export default MessageList;
