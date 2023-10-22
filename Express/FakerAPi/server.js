const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create a fake user
const createUser = () => {
    const newFake = {
        _id: faker.database.mongodbObjectId(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number(),
    };
    return newFake;
};
const newFakeUser = createUser();
console.log(newFakeUser);

// Create a fake company
const createCompany = () => {
    const newFake = {
        _id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country(),
        },
    };
    return newFake;
};
const newFakeCompany = createCompany();
console.log(newFakeCompany);

// API route to create a new user
app.get("/api/users/new", (req, res) => { // When a GET request is made to this route...
    const newUser = createUser(); // Generate a new user object using a function called createUser().
    res.json(newUser); // Send the newUser object as a JSON response using res.json().
});


// API route to create a new company
app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});

// API route to create both a new user and a new company
app.get("/api/user/company", (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    res.json({ user: newUser, company: newCompany });
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
