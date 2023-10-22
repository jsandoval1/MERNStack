const Joke = require('../models/joke.model');

// A couple key points:
// User is a constructor function which can create new user objects and also has other methods that will talk to the database!
// the .then() will only execute upon successfully inserting data in the database
// the .catch() will execute only if there is an error.

// CREATE ONE
exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then((joke) => {
            console.log('Joke created successfully:', joke);
            res.json({ joke });
        })
        .catch((error) => {
            res.json({ error });
        });
};

// READ ALL
exports.getAllJokes = (req, res) => {
    console.log('Fetching all jokes...');
    Joke.find()
        .then((jokes) => {
            console.log('Jokes fetched successfully:', jokes);
            res.json({ jokes });
        })
        .catch((error) => {
            console.error('Error fetching jokes:', error);
            res.json({ error });
        });
};

// READ ONE
exports.getJokeById = (req, res) => {
    console.log(`Fetching joke with ID ${req.params.id}...`);
    Joke.findById(req.params.id)
        .then((joke) => {
            console.log('Joke fetched successfully:', joke);
            res.json({ joke });
        })
        .catch((error) => {
            console.error('Error fetching joke:', error);
            res.json({ error });
        });
};

// UPDATE ONE
exports.updateJoke = (req, res) => {
    Joke.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    )
        .then((updatedJoke) => {
            console.log('Joke updated successfully:', updatedJoke);
            res.json({ joke: updatedJoke });
        })
        .catch((error) => {
            console.error('Error updating joke:', error);
            res.json({ error });
        });
        
};

// DELETE ONE
exports.deleteJoke = (req, res) => {
    console.log(`Deleting joke with ID ${req.params.id}...`);
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            console.log('Joke deleted successfully');
            res.json({ result });
        })
        .catch((error) => {
            console.error('Error deleting joke:', error);
            res.json({ error });
        });
};
