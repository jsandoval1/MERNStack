import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AuthorAdd = () => {
    const [name, setName] = useState('');
    const [errors, setErrors] = useState([]); // State to store errors

    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', { name })
            .then((res) => {
                console.log('✨Author added:', res.data);
                navigate('/authors'); // Navigate back to the main view after adding the author
            })
            .catch((err) => {
                console.log('❌Error updating author:', err);
                const errorResponse = err.response.data.error; // Get the error message
                setErrors([errorResponse]); // Set the error state for displaying to the user
            });
    };

    return (
        <div>
            <h1>Add Author</h1>
            <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => (
                    <p key={index}>{err.message}</p>
                ))}
                <p>
                    <label>Author Name</label><br />
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </p>
                <Link to="/authors">Back to Authors</Link>
                <input type="submit" value="Add Author" />
            </form>
        </div>
    );
};

export default AuthorAdd;
