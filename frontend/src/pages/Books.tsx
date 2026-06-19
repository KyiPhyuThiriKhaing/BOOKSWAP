function Books() {
  const books = [
    {
      id: 1,
      title: "The Alchemist",
      author: "Paulo Coelho",
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
    },
    {
      id: 3,
      title: "Clean Code",
      author: "Robert C. Martin",
    },
  ];

  return (
    <div>
      <h1>Available Books</h1>

      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <button>Request Swap</button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Books;
