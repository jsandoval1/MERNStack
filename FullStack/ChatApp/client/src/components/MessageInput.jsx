import React from 'react';

function MessageInput({ newMessage, setNewMessage, sendMessage }) {
    return (
        <div className="message-input">
            <input
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default MessageInput;
