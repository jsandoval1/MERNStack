const Author = require('../models/author.model');

// CREATE ONE Author
exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then((author) => {
            console.log('Author created successfully:', author);
            res.json({ Author: author });
        })
        .catch((error) => {
            console.error('Error creating author:', error);
            res.status(400).json({ error });
        });
};

// READ ALL Authors
exports.getAllAuthors = (req, res) => {
    console.log('Fetching all authors...');
    Author.find()
        .then((authors) => {
            console.log('Authors fetched successfully:', authors);
            res.json({ Authors: authors });
        })
        .catch((error) => {
            console.error('Error fetching authors:', error);
            res.json({ error });
        });
};

// READ ONE Author
exports.getAuthorById = (req, res) => {
    console.log(`Fetching author with ID ${req.params.id}...`);
    Author.findById(req.params.id)
        .then((author) => {
            console.log('Author fetched successfully:', author);
            res.json({ Author: author });
        })
        .catch((error) => {
            console.error('Error fetching author:', error);
            res.json({ error });
        });
};

// UPDATE ONE Author
exports.updateAuthor = (req, res) => {
    Author.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    )
        .then((updatedAuthor) => {
            console.log('Author updated successfully:', updatedAuthor);
            res.json({ Author: updatedAuthor });
        })
        .catch((error) => {
            console.error('Error updating author:', error);
            res.status(400).json({ error });
        });
};

// DELETE ONE Author
exports.deleteAuthor = (req, res) => {
    console.log(`Deleting author with ID ${req.params.id}...`);
    Author.deleteOne({ _id: req.params.id })
        .then((result) => {
            console.log('Author deleted successfully');
            res.json({ result });
        })
        .catch((error) => {
            console.error('Error deleting author:', error);
            res.json({ error });
        });
};
