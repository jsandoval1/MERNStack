const express = require("express"); // Import the Express.js framework and create an instance of it.
const cors = require('cors') //! <=============This is new
const app = express();
require('dotenv').config(); // Load environment variables from a .env file.
const port = process.env.PORT; // Set the port to be used from the environment variables.

require("./config/mongoose.config"); // Connect to the MongoDB database using Mongoose.

app.use(cors()) //! <============= This is new 

app.use(express.json(), express.urlencoded({ extended: true })); // Configure middleware to parse JSON and URL-encoded data.

const AllMyProductRoutes = require("./routes/product.routes"); // Import and configure the user routes module.
AllMyProductRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`)); // Start the Express app, listening on the specified port.