const db = require("../models");
const Book = db.books;

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

// Create and Save a new Book
exports.create = (req, res) => {
  // Create a Book
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
  });

  // Save Book in the database
  book
    .save(book)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Book.",
      });
    });
};

// Retrieve all Books from the database.
exports.list = (req, res) => {
  const { page, limit } = req.query;

  Book.paginate({}, getPagination(page, limit))
    .then((data) => {
      res.send({
        totalItems: data.totalDocs,
        books: data.docs,
        totalPages: data.totalPages,
        currentPage: data.page - 1,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving books.",
      });
    });
};

// Find a single Book with an id
exports.show = (req, res) => {
  const id = req.params.id;

  Book.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Book with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Book with id=" + id });
    });
};

// Update a Book by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Book.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Book with id=${id}. Maybe Book was not found!`,
        });
      } else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Book with id=" + id,
      });
    });
};

// Delete a Book with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Book.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Book with id=${id}. Maybe Book was not found!`,
        });
      } else {
        res.send({
          message: "Book was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Book with id=" + id,
      });
    });
};

