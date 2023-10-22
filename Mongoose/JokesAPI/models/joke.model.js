const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    jokeText: {
        type: String,
        required: true,
        minlength: 10
    },
    punchline: {
        type: String,
        required: true,
        minlength: 3
    }
});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;

