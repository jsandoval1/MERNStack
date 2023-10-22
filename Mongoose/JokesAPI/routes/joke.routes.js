const JokeController = require('../controllers/joke.controller');

module.exports = app => {
    app.post('/api/jokes', JokeController.createJoke);
    app.get('/api/jokes', JokeController.getAllJokes);
    app.get('/api/jokes/:id', JokeController.getJokeById);
    app.put('/api/jokes/:id', JokeController.updateJoke);
    app.delete('/api/jokes/:id', JokeController.deleteJoke);
};
