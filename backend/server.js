const express = require("express");

const app = express();

const books = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert Martin",
  },
  {
    id: 2,
    title: "Java Programming",
    author: "John Smith",
  },
];

app.get("/", (req, res) => {
  res.send("BookSwap Backend Running");
});

app.get("/books", (req, res) => {
  res.json(books);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
