const express = require("express");
const app = express();
const port = 3000;

app.all("/", (req, res) => res.send("from all"));
app.get("/", (req, res) => res.send("Hello World!"));
app.get("/food{s}", (req, res) => res.send("food or foods"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
