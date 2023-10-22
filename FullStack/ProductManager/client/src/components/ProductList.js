import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// ProductList takes props as input
const ProductList = (props) => {
    // Destructure the 'removeFromDom' function from the props
    const { removeFromDom } = props;

    // 'deleteProduct' takes a productId as input
    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`) // Send DELETE to server to delete the product with the specified ID
            .then((res) => {
                removeFromDom(productId); // If the deletion is successful, call the 'removeFromDom' function to remove the deleted product from the DOM
            })
            .catch((err) => {
                
                console.error(err); // If there's an error during the deletion, log the error to the console
            });
    }

    return (
        <div>
            {props.products.map((product, i) => (
                <div key={i}>
                    {/* Link to view the product details */}
                    <Link to={`/products/${product._id}`}>
                        <h3>{product.title}</h3>
                    </Link>
                    {/* Button to call the 'deleteProduct' function */}
                    <button onClick={() => { deleteProduct(product._id) }}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
