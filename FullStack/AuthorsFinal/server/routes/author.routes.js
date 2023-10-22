const authorController = require('../controllers/author.controller');

module.exports = (app) => {
    // Create a new author
    app.post('/api/authors', authorController.createAuthor);

    // Get all authors
    app.get('/api/authors', authorController.getAllAuthors);

    // Get a single author by ID
    app.get('/api/authors/:id', authorController.getAuthorById);

    // Update an author by ID
    app.patch('/api/authors/:id', authorController.updateAuthor);

    // Delete an author by ID
    app.delete('/api/authors/:id', authorController.deleteAuthor);
};
