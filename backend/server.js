const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.post("/signup", (req, res) => {
  const { fullName, email, password } = req.body;

  console.log("Name:", fullName);
  console.log("Email:", email);
  console.log("Password:", password);

  res.json({
    message: "Signup successful!"
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});