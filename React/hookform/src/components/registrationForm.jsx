import React, { useState } from "react";

// useState = formData will hold the data entered by the user
// setFormData 🍊
const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => { // 🥝 When user types something in an input field, event object (e) is the parameter, contains input field that triggered the change.
        const { name, value } = e.target; // 🍌name represents the name of the input field,🍓value represents the current value entered by the user.
        setFormData({ ...formData, [name]: value }); // 🍊update formData state, spreads existing formData values and then updates the specific field ([name]: value) that corresponds to the input field that changed.
    };

    return (
        <div>
            <h1>Registration Form</h1>
            <form>
                <div>
                    <label>First Name: </label>
                    <input
                        type="text"
                        name="firstName" // 🍌
                        value={formData.firstName} //🍓
                        onChange={handleChange} //🥝
                    />
                </div>
                <br/>
                <div>
                    <label>Last Name: </label>
                    <input
                        type="text"
                        name="lastName" // 🍌
                        value={formData.lastName} //🍓
                        onChange={handleChange} //🥝
                    />
                </div>
                <br/>
                <div>
                    <label>Email: </label>
                    <input
                        type="email"
                        name="email" // 🍌
                        value={formData.email} //🍓
                        onChange={handleChange} //🥝
                    />
                </div>
                <br/>
                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        name="password" // 🍌
                        value={formData.password} //🍓
                        onChange={handleChange} //🥝
                    />
                </div>
                <br/>
                <div>
                    <label>Confirm Password: </label>
                    <input
                        type="password"
                        name="confirmPassword" // 🍌
                        value={formData.confirmPassword} //🍓
                        onChange={handleChange} //🥝
                    />
                </div>
            </form>
            <div>
                <h2>Form Data:</h2>
                <ul>
                    {Object.entries(formData).map(([name, value]) => ( //Object.entries(formData) converts formData object into array of [name, value] => .map() iterates through
                        <li key={name}>{name}:{value}</li> // Creates <li> element with a unique key based on the field name (name) and displays the field name and its corresponding value
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RegistrationForm;
