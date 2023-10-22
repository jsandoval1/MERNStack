import React, { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    // 'errors' is a state variable used to keep track of error messages for form fields.
    // 'setErrors' is a function that allows you to update the 'errors' object when needed.
    const [errors, setErrors] = useState({
        // Initialize 'errors' as an object with properties for each form field and as empty string(s)
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    // For the '___' field, check if the 'value' length is less than # of characters
    // If it is, return an error message, otherwise return an empty string... so on
    // confirmPassword has to test to see if it is !== to password
    const validationFunctions = {
        firstName: (value) => (value.length < 2 ? "First Name must be at least 2 characters." : ""),
        lastName: (value) => (value.length < 2 ? "Last Name must be at least 2 characters." : ""),
        email: (value) => (value.length < 5 ? "Email must be at least 5 characters." : ""),
        password: (value) => (value.length < 8 ? "Password must be at least 8 characters." : ""),
        confirmPassword: (value) => (value !== formData.password ? "Passwords do not match." : ""),
    };

    // Function to validate input and update errors
    const validateInput = (name, value) => {
        setErrors({
            ...errors,
            [name]: validationFunctions[name](value),
        });
    };

    // Function to handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validateInput(name, value);
    };

    return (
        <div>
            <h1>Registration Form</h1>
            <form>
                <div>
                    <label>First Name: </label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />
                    {errors.firstName ? <p className="error">{errors.firstName}</p> : ""}
                </div>
                <div>
                    <label>Last Name: </label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                    {errors.lastName ? <p className="error">{errors.lastName}</p> : ""}
                </div>
                <div>
                    <label>Email: </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    {errors.email ? <p className="error">{errors.email}</p> : ""}
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    {errors.password ? <p className="error">{errors.password}</p> : ""}
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                    />
                    {errors.confirmPassword ? <p className="error">{errors.confirmPassword}</p> : ""}
                </div>
            </form>
            <div>
                <fieldset>
                    <legend><h2>Form Data (JSON):</h2></legend>
                    <p>{JSON.stringify(formData)}</p>
                </fieldset>
            </div>
        </div>
    );
};

export default RegistrationForm;
