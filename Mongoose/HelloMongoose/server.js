// Import the Express.js framework and create an instance of it.
const express = require("express");
const app = express();

// Load environment variables from a .env file.
require('dotenv').config();

// Set the port to be used from the environment variables.
const port = process.env.PORT;

// Connect to the MongoDB database using Mongoose.
require("./config/mongoose.config");

// Configure middleware to parse JSON and URL-encoded data.
app.use(express.json(), express.urlencoded({ extended: true }));

// Import and configure the user routes module.
const AllMyUserRoutes = require("./routes/user.routes");
AllMyUserRoutes(app);

// Start the Express app, listening on the specified port.
app.listen(port, () => console.log(`Listening on port: ${port}`));
