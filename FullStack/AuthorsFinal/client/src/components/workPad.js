import React from 'react';
import axios from 'axios';

const AuthorList = (props) => {
    // Destructure the 'removeAuthorFromList' function from the props
    const { removeAuthorFromList } = props;

    const deleteAuthor = (authorId) => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
            .then((res) => {
                removeAuthorFromList(authorId); // Remove the author from the list immediately upon a successful deletion
            })
            .catch((err) => {
                console.error(err); // If there's an error during the deletion, log the error to the console
            });
    }

    return (
        <div>
            {props.authors.map((author, i) => (
                <div key={i}>
                    <p> {author.name} </p>
                    <button onClick={() => {
                        deleteAuthor(author._id);
                        // Immediately remove the author from the list without waiting for the response
                        removeAuthorFromList(author._id);
                    }}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default AuthorList;
