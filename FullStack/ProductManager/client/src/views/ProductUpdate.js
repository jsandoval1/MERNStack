// Import necessary libraries and components
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// UpdateProduct takes props as input
const UpdateProduct = (props) => {
    // Grab the 'id' from the URL parameters
    const { id } = useParams();
    
    // Create state variables for product details: title, price, and description
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');

    useEffect(() => {
        
        axios.get(`http://localhost:8000/api/products/${id}`) // Send GET request to the server to retrieve product details based on the ID
            .then((res) => {
                setTitle(res.data.product.title); // Set the component's state with the retrieved product details
                setPrice(res.data.product.price);
                setDescription(res.data.product.description);
                console.log('📝Details ready for updating:', res.data); // Log the retrieved product details to the console
            })
            .catch((err) => {
                console.error('❌Error getting product details:', err); // Log an error message if there's a problem fetching product details
            });
    }, [id]); // Run when 'id' changes

    // Function to update the product details on form submission
    const updateProduct = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/products/${id}`, { // Send PATCH request to the server to update the product with the new details
            title,
            price,
            description,
        })
        .then((res) => {
            console.log('✅Product updated:', res.data); // Log a success message with the updated product details
        })
        .catch((err) => {
            console.error('❌Error updating:', err); // Log an error message if there's a problem updating the product
        });
    };

    return ( 
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </p>
                <p>
                    <label>Price</label><br />
                    <input
                        type="number"
                        name="price"
                        value={price}
                        onChange={(e) => { setPrice(e.target.value) }}
                    />
                </p>
                <p>
                    <label>Description</label><br />
                    <textarea
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                    />
                </p>
                {/* Submit button for updating the product */}
                <input type="submit" />
            </form>
        </div>
    );
};

export default UpdateProduct;
