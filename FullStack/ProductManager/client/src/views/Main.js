import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm'; // Import the form for adding products
import ProductList from '../components/ProductList'; // Import the product list to display a list of products

const Main = () => {
    const [products, setProducts] = useState([]); // State to store product data
    const [loaded, setLoaded] = useState(false); // State to track whether data is loaded

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then((res) => {
                console.log('📃API response with all products:', res.data); // Log the API response data to the console
                setProducts(res.data.products); // Update the 'products' state with the gotten data
                setLoaded(true); // Set the 'loaded' state to true
            })
            .catch((err) => {
                console.error(err); // Log any errors to the console
            });
    }, []);

    const removeFromDom = (productId) => { //  productId is being passed from the child component (ProductList) to the parent component (Main)
        const updatedProducts = products.filter((product) => product._id !== productId); // Filter the array to exclude the product with 'productId'
        setProducts(updatedProducts); // Update the 'products' state with the filtered array, removing the product
        console.log(`👋Product with ID ${productId} has been deleted.`); // Log a message confirming the deletion of the product
    }

    return (
        <div>
            {/* Render the 'ProductForm' component to allow user input
            - products={products}: 
                This is passing the current state of the products to the ProductForm component
            - setProducts={setProducts}:
                This allows the form to update the products state in the parent component (Main). 
             */}
            <ProductForm products={products} setProducts={setProducts} />
            <hr />
            {/* if (loaded is true) = 
            - Render the ProductList component with the following props to send off:
                - products: The product data from the state.
                - removeFromDom: A function to remove a product from the state when deleted.*/}
            {loaded ? (
                <ProductList products={products} removeFromDom={removeFromDom} />
            ) : null}
        </div>
    );
};

export default Main;
