// const Author = require('../models/author.model');
const Author = require('../models/author.model');


// READ ALL
module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then((allAuthors) => {
            res.json({ Authors: allAuthors })
            console.log('All Authors fetched successfully:', allAuthors);
        })
        .catch((err) => {
            console.error('Error retrieving all Authors:', err);
            res.json(err)
        });
}

// READ ONE
module.exports.findOneSingleAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(oneSingleAuthor => {
            console.log('Author fetched successfully:', oneSingleAuthor);
            res.json({ Author: oneSingleAuthor })
        })
        .catch((err) => {
            console.error('Error fetching this Author:', error);
            res.json(err)
        });
}

//  CREATE ONE
module.exports.createNewAuthor = (req, res) => {
    // I had to do this kind of long way around validations because when I used
    // runValidations set to true, it would return the error message but an _id 
    // for an obj was still added to the database.
    const { name } = req.body; // The name inserted becomes the body
    if (name.length < 3) { //Checks if the length of the name is < 3
        return res.json({ // If it fails it will return this message
            error: 'Name is required and must be at least 3 characters long.',
        });
    } // If the validation passes, proceed to create the author.
    Author.create(req.body)
        .then(newlyCreatedAuthor => {
            console.log('Author created successfully:', newlyCreatedAuthor);
            res.json({ Author: newlyCreatedAuthor });
        })
        .catch((err) => {
            console.error('Error creating Author:', err);
            res.json({ error: 'An error occurred while creating the author.' });
        });
}

// UPDATE ONE 
module.exports.updateExistingAuthor = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        {
            new: true,
            runValidators: true
        })
        .then(updatedAuthor => {
            console.log('Author updated successfully:', updatedAuthor);
            res.json({ Author: updatedAuthor })
        })
        .catch((err) => {
            console.error('Error updating Author:', err);
            res.json(err)
        });
}

// DELETE ONE
module.exports.deleteAnExistingAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => {
            console.log('Author deleted successfully');
            res.json({ result: result })
        })
        .catch((err) => {
            console.error('Error deleting product:', error);
            res.json(err)
        });
}