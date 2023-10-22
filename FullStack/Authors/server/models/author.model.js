const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            minlength: 3,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Author', AuthorSchema);
//  Created a Mongoose model named 'Author' with schema 'AuthorSchema'
// Exporting the 'Author' model so that it can be accessed by other modules
