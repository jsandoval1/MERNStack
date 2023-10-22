import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import ProductDetail from './views/ProductDetail';
import UpdateProduct from './views/ProductUpdate';

function App() {
    return (
        <div className="App">
            <Routes>
                {/* Route for the main view component for listing products */}
                <Route element={<Main />} path="/products/" />
                {/* Route for the product detail view component, passing 'id' parameter */}
                <Route element={<ProductDetail />} path="/products/:id" />
                {/* Route for Updating, passing 'id' as parameter */}
                <Route element={<UpdateProduct/>} path="/products/:id/edit"/>
            </Routes>
        </div>
    );
}

export default App;
