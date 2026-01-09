const express = require("express");
const app = express();
const birds = require("./birds");
const student = require("./student");
const port = 3000;
app.use(express.json());

app.use("/b", birds);
app.use("/s", student);
app.all("/", (req, res) => res.send("from all"));
app.get("/addstudent", (req, res) => {
  const firstname = req.body.fname;
  const lastname = req.body.lname;
  res.send(`My name is: ${firstname} ${lastname}`);
});
app.post("/dob", (req, res) => {
  const { dd, mm, yy } = req.body;

  const today = new Date();
  const birth = new Date(yy, mm - 1, dd);

  let age = today.getFullYear() - birth.getFullYear();

  // If birthday hasn't happened yet this year
  if (today < new Date(today.getFullYear(), mm - 1, dd)) {
    age--;
  }

  res.send(
    age >= 18
      ? "You are eligible for admission."
      : "You are not eligible for admission."
  );
});

app.get("/food{s}", (req, res) => res.send("food or foods"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
