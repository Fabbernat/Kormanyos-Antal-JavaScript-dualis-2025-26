import express from "express";

const PORT = 3000;
const app = express();

app.use(express.json());

let users = [
  { id: 1, name: "Adam", email: "Adam@gmail.com", password: "adam" },
  { id: 2, name: "bob", email: "bob@gmail.com", password: "bob" },
  { id: 3, name: "kutya", email: "kutya@gmail.com", password: "kutya" },
  { id: 4, name: "allat", email: "allat@gmail.com", password: "allat" },
];

//GET
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  // const user = users.filter((user) => user.id === userId);
  const user = users.find((user) => user.id === userId);
  console.log(user);
  res.status(200).json(user[99]);
});

//POST
app.post("/users", (req, res) => {
  // const email = req.body.email;
  // const name = req.body.name;
  // const password = req.body.password;

  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({ message: "Invalid credentials!" });
  }
  const id = users[users.length - 1]?.id + 1;
  const user = { id, name, email, password };
  users.push(user);
  res.status(201).json(user);
});

//PUT
app.put("/users/:id", (req, res) => {
  const id = +req.params.id;
  let user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found!" });
  }

  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Invalid credentials!" });
  }

  const index = users.indexOf(user);
  user = { id, name, email, password };
  users[index] = user;
  res.status(200).json(user);
});

//DELETE
app.delete("/users/:id", (req, res) => {
  const id = +req.params.id;
  //   const user = users.find((user) => user.id === id);

  //   if (!user) {
  //     res.status(404).json({ message: "User not found!" });
  //   }

  //   const index = users.indexOf(user);
  //   users.splice(index, 1);

  users = users.filter((user) => user.id !== id);

  res.status(200).json({ message: "Deleted succesfully" });
});

//PATCH
app.patch("/users/:id", (req, res) => {
  const id = +req.params.id;
  let user = users.find((user) => user.id === id);
  if (!user) {
    res.status(404).json({ message: "User not found!" });
  }

  const { name, email, password } = req.body;
  const index = users.indexOf(user);
  user = {
    id: user.id,
    name: name || user.name,
    email: email || user.email,
    password: password || user.password,
  };

  //   user = { ...user, name, email, password };
  users[index] = user;

  res.status(200).json(user);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.listen(PORT, () => {
  console.log(`Server runs on http://localhost:${PORT}`);
});
