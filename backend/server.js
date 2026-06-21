const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("BookSwap Backend Running");
});

app.get("/books", async (req, res) => {
  try {
    const books = await prisma.book.findMany({
      include: {
        owner: true,
      },
    });

    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch books" });
  }
});

app.post("/books", async (req, res) => {
  try {
    const { title, author, description, ownerId } = req.body;

    const book = await prisma.book.create({
      data: {
        title,
        author,
        description,
        ownerId,
      },
    });

    res.status(201).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create book" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
