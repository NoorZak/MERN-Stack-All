const Joke = require("../models/joke.model");

module.exports.findAllJokes = (_req, res) =>{
    Joke.find()
        .then(AllJokes => res.json({jokes: AllJokes}))
        .catch(err => res.json({message: "Error", error: err}));
};

module.exports.findSingleJoke = (req, res) =>{
    Joke.findOne({_id: req.params.id})
        .then(joke => res.json({joke: joke}))
        .catch(err => res.json({message: "Error", error: err}));
};

module.exports.createNewJoke = (req, res) =>{
    Joke.create(req.body)
        .then(newJoke => res.json({joke: newJoke}))
        .catch(err => res.json({message: "Error", error: err}));
};

module.exports.updateJoke = (req, res) =>{
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedJoke => res.json({joke: updatedJoke}))
        .catch(err => res.json({message: "Error", error: err}));
};

module.exports.deleteJoke = (req, res) =>{
    Joke.deleteOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: "Error", error: err}));
};