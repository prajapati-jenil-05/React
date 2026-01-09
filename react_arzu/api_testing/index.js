const e = require("express");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/name", (req, res) => res.send("Welcome Kaju!"));
app.get("/student", (req, res) => res.json({ name: "Durgesh" }));
app.get("/uni", (req, res) => res.send("RKU"));
app.get("/flf", (req, res) => {
  const firstname = req.query.firstname;
  const lastname = req.query.lastname;
  res.send(`Full name is: ${firstname} ${lastname}`);
});
app.get("/myname/:fname/:lname", (req, res) => {
  var firstname = req.params.fname;
  var lastname = req.params.lname;
  res.send(`My full name is: ${firstname} ${lastname}`);
});

app.get("/arithmetic/:num1/:num2", (req, res) => {
  var number1 = parseInt(req.params.num1);
  var number2 = parseInt(req.params.num2);
  var sum = number1 + number2;
  var difference = number1 - number2;
  var product = number1 * number2;
  var division = number1 / number2;
  res.send(
    `Addition: ${sum} \n Subtraction: ${difference} \n Multiplication: ${product} \n Division: ${division}`
  );
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
