import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [socket, setSocket] = useState(null);
    const chatContainerRef = useRef(null);

    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        const newSocket = io('http://localhost:3001');
        setSocket(newSocket);

        console.log('Connecting to the server...');

        newSocket.on('connect', () => {
            console.log('Connected to the server.');
            newSocket.emit('message', { text: 'Hello, server!' });
        });

        newSocket.on('message', (newMessage) => {
            console.log('Received a message from the server:', newMessage);
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            scrollToBottom();
        });

        return () => {
            if (newSocket) {
                newSocket.disconnect();
                console.log('Disconnected from the server.');
            }
        };
    }, []);

    const sendMessage = () => {
        if (socket) {
            console.log('Sending message to the server:', message);
            socket.emit('message', { text: message });
            setMessage('');
            scrollToBottom();
        }
    };

    return (
        <div className="chat-container">
            <div ref={chatContainerRef} className="message-list">
                {messages.map((msg, index) => (
                    <div key={index}>{msg.text}</div>
                ))}
            </div>
            <div className="message-input">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
