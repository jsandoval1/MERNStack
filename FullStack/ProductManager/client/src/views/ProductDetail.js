import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams(); // Get the "id" parameter from the URL

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                setProduct(res.data.product);
                console.log('🔍Details for this product:', res.data); // Log the response from the API
            })
            .catch((err) => {
                console.error('❌API Error:', err); // Log errors if any
            });
    }, [id]);

    return (
        <div>
            <h2>Product Details</h2>
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/products/" + product._id + "/edit"}>
                Edit
            </Link>
        </div>
    );
};

export default ProductDetail;
