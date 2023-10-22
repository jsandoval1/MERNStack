const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

// Set up a CORS configuration that allows requests from your React frontend.
const io = socketIo(server, {
    cors: {
        origin: 'http://localhost:3000', // Replace with the actual origin of your React app
        methods: ['GET', 'POST'], // Corrected: methods should be an array
        credentials: true, // Include cookies or authentication headers if needed
    },
});

// Serve your chat application
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/path-to-your-chat-application.html');
});

io.on('connection', (socket) => {
    console.log('Client connected.'); // Log when a client connects

    // Emit a welcome message to the connected client
    const welcomeMessage = { text: 'Welcome to the chat!' };
    socket.emit('message', welcomeMessage);
    console.log('Sent a welcome message to the connected client.');

    // Broadcast messages to all connected clients
    socket.on('message', (message) => {
        console.log('Received message from a client:', message);
        io.emit('message', message); // Broadcast the received message to all clients
        console.log('Broadcasted the message to all clients.');
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected.'); // Log when a client disconnects
    });

    // Add this code after initializing the socket
    socket.on('connect_error', (err) => {
        console.error('Connection error:', err);
    });
});

const port = process.env.PORT || 3001;

server.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
});
