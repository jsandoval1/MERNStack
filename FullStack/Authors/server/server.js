const express = require('express');
const cors = require('cors'); //! <============= This is new
const app = express();
require('dotenv').config();
const port = process.env.PORT;

require('./config/mongoose.config'); 

app.use(cors());

app.use(express.json()); //! <============= This is new

app.use(express.urlencoded({ extended: true })); 

const AllMyAuthorRoutes = require("./routes/author.routes"); // Import and configure the user routes module.
AllMyAuthorRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));

// TODO:
//- Ask Vincent if my create method is acceptable, play around with validations