const productController = require('../controllers/product.controller');

module.exports = (app) => {
    // Create a new product
    app.post('/api/products', productController.createProduct);

    // Get all products
    app.get('/api/products', productController.getAllProducts);

    // Get a single product by ID
    app.get('/api/products/:id', productController.getProductById);

    // Update a product by ID
    app.patch('/api/products/:id', productController.updateProduct);

    // Delete a product by ID
    app.delete('/api/products/:id', productController.deleteProduct);
};