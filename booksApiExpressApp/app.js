console.log(">>> Running:", import.meta.url || __filename);

import express from "express";

let books = [
  { id: 1, title: "A Pál utcai fiúk", author: "Molnár Ferenc" },
  { id: 2, title: "Harry Potter és a Bölcsek Köve", author: "J. K. Rowling" },
  { id: 3, title: "A Gyűrűk Ura", author: "John Ronald Reuel Tolkien" },
  { id: 4, title: "Dűne", author: "Frank Herbert" },
];

const PORT = 3000;
const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server runs on http://localhost:${PORT}`);
});

//GET
app.get("/books", (req, res) => {
  res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  // const book = books.filter((book) => book.id === bookId);
  const book = books.find((book) => book.id === bookId);
  console.log(book);
  res.status(200).json(book);
});

//POST
app.post("/books", (req, res) => {
  // const title = req.body.title;
  // const author = req.body.author;
  const { title: title, author: author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ message: "Invalid book title or author!" });
  }
  const id = books[books.length - 1]?.id + 1;
  const book = { id, title: title, author: author };
  books.push(book);
  res.status(201).json(book);
});

//PUT
app.put("/books/:id", (req, res) => {
  const id = +req.params.id;
  let book = books.find((book) => book.id === id);

  if (!book) {
    return res.status(404).json({ message: "Book not found!" });
  }

  const { title: title, author: author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ message: "Invalid book title or author!" });
  }

  const index = books.indexOf(book);
  book = { id, title, author };
  books[index] = book;
  res.status(200).json(book);
});

//DELETE
app.delete("/books/:id", (req, res) => {
  const id = +req.params.id;
  //   const book = books.find((book) => book.id === id);

  //   if (!book) {
  //     res.status(404).json({ message: "Book not found!" });
  //   }

  //   const index = books.indexOf(book);
  //   books.splice(index, 1);

  books = books.filter((book) => book.id !== id);

  res.status(200).json({ message: "Deleted succesfully" });
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1><a href='/books'>Go to books</a>");
});

app.listen(PORT, () => {
  console.log(`Server runs on http://localhost:${PORT}`);
});
