const Product = require('../models/product.model');

// CREATE ONE
exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then((product) => {
            console.log('Product created successfully:', product);
            res.json({ product });
        })
        .catch((error) => {
            console.error('Error creating product:', error);
            res.json({ error });
        });
};

// READ ALL THE PRODUCTS
exports.getAllProducts = (req, res) => {
    console.log('Fetching all products...');
    Product.find()
        .then((products) => {
            console.log('Products fetched successfully:', products);
            res.json({ products });
        })
        .catch((error) => {
            console.error('Error fetching products:', error);
            res.json({ error });
        });
};

// READ ONE
exports.getProductById = (req, res) => {
    console.log(`Fetching product with ID ${req.params.id}...`);
    Product.findById(req.params.id)
        .then((product) => {
            console.log('Product fetched successfully:', product);
            res.json({ product });
        })
        .catch((error) => {
            console.error('Error fetching product:', error);
            res.json({ error });
        });
};

// UPDATE ONE
exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    )
        .then((updatedProduct) => {
            console.log('Product updated successfully:', updatedProduct);
            res.json({ product: updatedProduct });
        })
        .catch((error) => {
            console.error('Error updating product:', error);
            res.json({ error });
        });
};

// DELETE ONE
exports.deleteProduct = (req, res) => {
    console.log(`Deleting product with ID ${req.params.id}...`);
    Product.deleteOne({ _id: req.params.id })
        .then((result) => {
            console.log('Product deleted successfully');
            res.json({ result });
        })
        .catch((error) => {
            console.error('Error deleting product:', error);
            res.json({ error });
        });
};
