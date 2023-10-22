import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AuthorList = (props) => {
    // Destructure the 'removeFromDom' function from the props
    const { onAuthorDelete } = props;

    const deleteAuthor = (authorId) => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
            .then((res) => {
                onAuthorDelete(authorId); // If the deletion is successful, call the 'removeAuthorFromList' function to remove the deleted author from the list
            })
            .catch((err) => {
                console.error(err); // If there's an error during the deletion, log the error to the console
            });
    }

    return (
        <div>
            {props.authors.map((author, i) => (// 'props.authors' is an array of author objects passed as a prop
                <div  key={i} >
                <p> {author.name} </p> {/* 'author.name' is accessed from author[obj] to show the author's name */}
                <Link to={`/authors/edit/${author._id}`}>Edit</Link>
                <button onClick={() => deleteAuthor(author._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default AuthorList;
