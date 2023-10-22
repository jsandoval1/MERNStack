import React, { useState } from 'react';
import axios from 'axios';

// prop: products: Is an array containing data about existing products
// prop: setProducts:  Will replace the existing list with the updated data.
const ProductForm = ({ products, setProducts }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    // Handler when the form is submitted
    const onSubmitHandler = (e) => {
        // Prevent default behavior of the submit
        e.preventDefault();

        // POST request to create a new product
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description,
        })
            .then((res) => {
                console.log('🌟Product created:', res.data);
                setProducts([...products, res.data.product]); // Append the newly created product to the list
                // Clear the form fields after successful submission
                setTitle('');
                setPrice('');
                setDescription('');
            })
            .catch((err) => {
                console.error('❌Error creating product:', err);
            });
    };

    // onChange to update title, price, and description
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label>
                <br />
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </p>
            <p>
                <label>Price</label>
                <br />
                <input
                    type="number"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                />
            </p>
            <p>
                <label>Description</label>
                <br />
                <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
            </p>
            <input type="submit" value="Submit" />
        </form>
    );
};

export default ProductForm;

// res.data.Author;