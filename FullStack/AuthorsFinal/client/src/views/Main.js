import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuthorList from '../components/AuthorList';
import { Link } from 'react-router-dom'; // Import Link

const Main = (props) => {
    const [authors, setAuthors] = useState([]); // Store the list of authors
    const [loaded, setLoaded] = useState(false); // Indicates whether data has been loader not

    // useEffect to fetch author data from the API
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then((res) => {
                setAuthors(res.data.Authors); // Update the 'authors' state with the fetched data
                setLoaded(true); // Sets loaded
                console.log('📝 API Details received:', res.data); // Log the retrieved product details to the console
            })
            .catch((err) => console.error(err));
    }, []);

    const removeAuthorFromList = (id) => {
        console.log(`🧹Removing author with ID ${id} from the list...`);
        setAuthors(authors.filter((author) => author._id !== id));// Remove the author from the list in the state
        console.log(`🗑️Author with ID ${id} has been deleted.`);
    };

    return (
        <div>
            <Link to="/authors/new">Add Author</Link> {/* Link to the "authors/new" page */}
            <hr />
            {loaded ? <AuthorList authors={authors} onAuthorDelete={removeAuthorFromList} /> : null}
            {/* Render the author list if data is loaded, passing [authors] as a prop to the list (child) component */}
        </div>
    );
};

export default Main;
