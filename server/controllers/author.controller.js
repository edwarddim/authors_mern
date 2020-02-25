const Author = require("../models/author.model")

module.exports.allAuthors = (req, res) =>{
    Author.find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.json(err))
}