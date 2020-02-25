const Author = require("../models/author.model")

module.exports.allAuthors = (req, res) =>{
    Author.find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.json(err))
}
module.exports.createAuthor = (req,res) =>{
    Author.create(req.body)
        .then(res => res.json(res))
        .catch(err => res.status(400).json(err))
}