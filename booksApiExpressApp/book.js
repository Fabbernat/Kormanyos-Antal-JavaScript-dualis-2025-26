// Hozz létre egy könyveket kezelő API-t.
// Egy könyv adatai:
// id
// title
// author

// Hozd létre az alábbi metódusokat a megadott végpontokkal:
// GET végpont: /books
// GET by id, végpont: /books/:id
// POST végpont: /books
// PUT végpont /books/:id
// DELETE végpont: /books/:id

import express from "express";
import Database from "better-sqlite3";

const PORT = 3000;
const app = express();

const db = new Database("./database.sqlite");

// prepare, all, get, run
db.prepare(
  `CREATE TABLE IF NOT EXISTS books (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title STRING,
  author STRING)`
).run();

const books = db.prepare("SELECT * FROM books").all();
if (!books.length) {
  db.prepare("INSERT INTO books (title, author) VALUES (?, ?)").run(
    "1984",
    "Orwell"
  );
  db.prepare("INSERT INTO books (title, author) VALUES (?, ?)").run(
    "Harry Potter és a Bölcsek Köve",
    "J. K. Rowling"
  );
  db.prepare("INSERT INTO books (title, author) VALUES (?, ?)").run(
    "Tom Sawyer",
    "Mark Twain"
  );
  db.prepare("INSERT INTO books (title, author) VALUES (?, ?)").run(
    "Nyugaton a helyzet változatlan",
    "Hamingway"
  );
  db.prepare("INSERT INTO books (title, author) VALUES (?, ?)").run(
    "A Pál utcai fiúk",
    "Molnár Ferenc"
  );
  db.prepare("INSERT INTO books (title, author) VALUES (?, ?)").run(
    "A Gyűrűk Ura",
    "John Ronald Reuel Tolkien"
  );
  db.prepare("INSERT INTO books (title, author) VALUES (?, ?)").run(
    "Dűne",
    "Frank Herbert"
  );
}
app.use(express.json());

app.get("/books", (req, res) => {
  const books = db.prepare("SELECT * FROM books").all();
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const book = db
    .prepare("SELECT * FROM books WHERE id = ?")
    .get(+req.params.id);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  res.json(book);
});

app.post("/books", (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ message: "Missing some data" });
  }
  const saved = db
    .prepare("INSERT INTO books (title, author) VALUES (?, ?)")
    .run(title, author);
  //   const book = db
  //     .prepare("SELECT * FROM books WHERE id = ?")
  //     .get(saved.lastInsertRowid);
  res.status(201).json({ id: saved.lastInsertRowid, title, author });
});

app.put("/books/:id", (req, res) => {
  const id = +req.params.id;
  const book = db.prepare("SELECT * FROM books WHERE id = ?").get(id);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  const { title, author } = req.body;
  //   if (!title || !author) {
  //     return res.status(400).json({ message: "Missing data" });
  //   }
  db.prepare("UPDATE books SET title = ?, author = ? WHERE id = ?").run(
    title ?? book.title,
    author ?? book.author,
    id
  );
  res
    .status(200)
    .json({ id, title: title ?? book.title, author: author ?? book.author });
});

app.delete("/books/:id", (req, res) => {
  const id = +req.params.id;
  // const book = db.prepare('SELECT * FROM books WHERE id = ?').get(id)
  // if (!book) {
  //     return res.status(404).json({message: "Book not found"})
  // }
  db.prepare("DELETE FROM books WHERE id = ?").run(id);
  // res.status(200).json({message: "Book delete success"})
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server runs on port ${PORT}`);
});
