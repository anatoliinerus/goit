const schemas = require('../schemas/routes-validation-schema');
const middleware = require('../middlewares/validation-middleware');

module.exports = app => {
  const books = require("../controllers/book.controller.js");

  var router = require("express").Router();

  // Create a new Book
  router.post("/", middleware(schemas.bookCreate), books.create);

  // Retrieve all Books
  router.get("/", middleware(schemas.bookList), books.list);

  // Retrieve a single Book with id
  router.get("/:id", middleware(schemas.bookShow), books.show);

  // Update a Book with id
  router.put("/:id", middleware(schemas.bookUpdate), books.update);

  // Delete a Book with id
  router.delete("/:id", middleware(schemas.bookDelete), books.delete);

  app.use("/api/books", router);
};


