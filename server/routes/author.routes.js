const Author = require("../controllers/author.controller")

module.exports = app =>{
    app.get("/api/authors", Author.allAuthors)
}