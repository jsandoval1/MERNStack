import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import UpdateAuthor from './views/UpdateAuthor';
import AuthorAdd from './views/AuthorAdd';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route element={<Main />} path="/authors/" /> {/* Update the route for the main author list */}
                <Route path="/authors/new" element={<AuthorAdd />} />
                <Route element={<UpdateAuthor />} path="/authors/edit/:id"  />
                </Routes>
        </div>
    );
}

export default App;
