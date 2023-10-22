import React, { useState } from 'react';
import axios from 'axios';

const AuthorForm = ({ authors, setAuthors }) => {
    const [name, setName] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
    
        axios
            .post('http://localhost:8000/api/authors', {
                name,
            })
            .then((res) => {
                console.log('🌟Author created:', res.data);
    
                // Access the author data from the response
                const newAuthor = res.data.Author;
    
                // Check if authors is defined before updating state
                if (authors) {
                    setAuthors([...authors, newAuthor]);
                } else {
                    setAuthors([newAuthor]);
                }
    
                setName(''); // Clear the form field after successful submission
            })
            .catch((err) => {
                console.error('❌Error creating author:', err);
            });
    };
    
    
    
    // onChange to update the Author name
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Author:</label>
                <br />
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
            </p>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default AuthorForm;
