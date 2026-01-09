const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`Student Home Page`);
});
router.get("/student/:fname/:lname", (req, res) => {
  var firstname = req.body.fname;
  var lastname = req.body.lname;
  res.send(`My full name is: ${firstname} ${lastname}.`);
});
router.get("/uni/:uname", (req, res) => {
  var universityname = req.params.uname;
  res.send(`${universityname}`);
});
router.get("/branch/:bname", (req, res) => {
  var branchname = req.params.bname;
  res.send(`${branchname}`);
});

module.exports = router;
