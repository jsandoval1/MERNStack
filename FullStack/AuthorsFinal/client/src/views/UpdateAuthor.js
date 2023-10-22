import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

const AuthorEdit = () => {
    const [name, setName] = useState(''); // Set up state for the author's name
    const [errors, setErrors] = useState([]); // State to store errors

    const { id } = useParams(); // Get the author's ID from the URL

    const navigate = useNavigate(); // Initialize the navigation function


    // Fetch author details on component load
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                setName(res.data.Author.name)
                console.log('✏️Author Details ready for updating:', res.data); // Log the retrieved author details to the console
            }) // Update the author's name in the state
            .catch((err) => { console.error('❌Error fetching author details:', err) });
    }, [id]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // patch request to update the author
        axios.patch(`http://localhost:8000/api/authors/${id}`, { name })
            .then((res) => {
                console.log('✅Author updated:', res.data);
                navigate('/authors'); // Automatically navigate to the main view
            })
            .catch((err) => {
                console.log('❌Error updating author:', err);
                const errorResponse = err.response.data.error; // Get the error message
                setErrors([errorResponse]); // Set the error state for displaying to the user
            });
    };

    return (
        <div>
            <h1>Edit Author</h1>
            <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p key={index}>{err.message}</p>)} {/* Display the error message */}
                <p>
                    <label>Author Name</label><br />
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </p>
                <Link to="/authors">Back to Authors</Link>
                <input type="submit" value="Update Author" />
            </form>
        </div>
    );
};

export default AuthorEdit;
