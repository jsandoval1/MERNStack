// // Import necessary modules
// import React, { useState } from 'react';
// import axios from 'axios';

// const AuthorForm = ({ onAuthorAdded }) => {
//     const [name, setName] = useState(""); // Set up state variables to store the author's name
    

//     const onSubmitHandler = (e) => {
//         e.preventDefault();

//         // POST request to the API to create a new author
//         axios.post('http://localhost:8000/api/authors', {name}) // Include the author's name in the request
//             .then((res) => {
//                 const newAuthor = res.data.Author; // Extract the newly created author data from the response
//                 onAuthorAdded(newAuthor); // Call the 'onAuthorAdded' function passed as a prop to update the author list in the Main component
//                 setName(""); // Clear the input field by setting the 'name' state to an empty string
//             })
//             .catch((err) => console.log(err));
//     };

//     return (
//         <form onSubmit={onSubmitHandler}>
//             <p>
//                 <label>Author Name</label><br />
//                 <input
//                     type="text"
//                     onChange={(e) => setName(e.target.value)}
//                     value={name}
//                 />
//             </p>
//             <input type="submit" />
//         </form>
//     );
// };

// export default AuthorForm;
// // 