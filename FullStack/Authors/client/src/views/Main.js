import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';

const Main = () => {
    const [authors, setAuthors] = useState([]); // Initialize as an empty array
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then((res) => {
                console.log('📃API response with all authors:', res.data);
                setAuthors(res.data.Authors);
                setLoaded(true);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const addAuthor = (newAuthor) => {
        // Update the state with the new author immediately
        setAuthors([...authors, newAuthor]);
        // This state update is asynchronous, so you shouldn't log the state immediately.
    };

    useEffect(() => {
        console.log('Authors state after adding a new author:', authors);
    }, [authors]);

    return (
        <div>
            <AuthorForm setAuthors={addAuthor} />
            <hr />
            {loaded ? <AuthorList authors={authors} /> : null}
        </div>
    );
};

export default Main;
