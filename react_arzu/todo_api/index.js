const express = require("express");
const fs = require("fs");
const { json } = require("stream/consumers");
const app = express();
const port = 3000;
const filepath = "./todos.json";
function readdata() {
  const todos = fs.readFileSync(filepath);
  if (!todos) {
    return [];
  } else {
    return JSON.parse(todos);
  }
}
function savedata(data) {
  fs.writeFileSync(filepath, data);
}

let todos = [];
app.use(express.json());

app.get("/todo/", (req, res) => {
  const todos = readdata();
  res.json(todos);
});

app.get("/todo/:id", (req, res) => {
  const todos = readdata();
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id == id);
  if (index == -1) {
    return res.status(401).json({ message: "no Todo with given id" });
  }
  res.status(201).json(todos[index]);
});

app.post("/todo/", (req, res) => {
  const todos = readdata();
  const newTodo = {
    id: Date.now().toString(),
    title: req.body.title,
    iscompleted: false,
  };
  todos.push(newTodo);
  savedata(todos);
  res
    .status(201)
    .json({ " message": "todo created successfully", todo: newTodo });
});

app.put("/todo/", (req, res) => {
  const todos = readdata();
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id == id);
  if (index == -1) {
    return res.status(401).json({ message: "no Todo with given id" });
  }
  todos[index] = {
    ...todos[index],
    title: req.body.title,
  };
  savedata(todos);
  res.status(201).json({ message: "data updates", data: todos[index] });
});

app.delete("/todo/:id", (req, res) => {
  const todos = readdata();
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id == id);
  if (index == -1) {
    return res.status(401).json({ message: "no Todo with given id" });
  }
  todos = todos.filter((todo) => todo.id != id);
  savedata(todos);
  res.send("delete todo with id" + req.params.id);
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
