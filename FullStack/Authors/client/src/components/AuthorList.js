import React from 'react';

const AuthorList = (props) => {
    console.log(props.authors); // Log the authors prop
    return (
        <div>
            {props.authors.map((author, i) => {
                console.log('Author:', author); // Log the author object
                return (
                    <div key={i}>
                        {author && author.name && <h3>{author.name}</h3>}
                    </div>
                );
            })}
        </div>
    );
};

export default AuthorList;
