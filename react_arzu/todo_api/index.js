const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;
const filePath = "todos.json";
function readdata() {
  const todos = fs.readFileSync(filePath);
  if (!todos) {
    return [];
  } else {
    return JSON.parse(todos);
  }
}
function savedata(data) {
  fs.writeFileSync(filePath, JSON.stringify(data));
}
// let todos = [];
app.use(express.json());
// fetch all todos
app.get("/todo/", (req, res) => {
  const todos = readdata();
  res.json(todos);
});
// get todo with id
app.get("/todo/:id", (req, res) => {
  const todos = readdata();
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id == id);
  if (index == -1) {
    return res.status(401).json({ message: "No todo with given id:" + id });
  }
  res.status(201).json(todos[index]);
});
app.post("/todo/", (req, res) => {
  const todos = readdata();
  const newtodo = {
    id: Date.now().toString(),
    title: req.body.title,
    isCompleted: false,
  };
  todos.push(newtodo);
  savedata(todos);
  res.status(201).json({ message: "Data added", data: newtodo });
});
app.put("/todo/:id", (req, res) => {
  const todos = readdata();
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id == id);
  if (index == -1) {
    return res.status(401).json({ message: "No todo with given id:" + id });
  }
  todos[index] = {
    ...todos[index],
    title: req.body.title,
  };
  savedata(todos);
  res.status(201).json({ message: "Data updated", data: todos[index] });
});
app.delete("/todo/:id", (req, res) => {
  let todos = readdata();
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id == id);
  if (index == -1) {
    return res.status(401).json({ message: "No todo with given id:" + id });
  }
  todos = todos.filter((todo) => todo.id != id);
  savedata(todos);
  res.send("deleted todo with id" + req.params.id);
});
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
