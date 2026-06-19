function Books() {
  const books = [
    {
      id: 1,
      title: "The Alchemist",
      author: "Paulo Coelho",
      owner: "Alice",
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      owner: "Bob",
    },
    {
      id: 3,
      title: "Clean Code",
      author: "Robert C. Martin",
      owner: "Charlie",
    },
  ];

  return (
    <div>
      <h1>Available Books</h1>

      {books.map((book) => (
        <div
          key={book.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "8px",
          }}
        >
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Owner: {book.owner}</p>
          <button>Request Swap</button>
        </div>
      ))}
    </div>
  );
}

export default Books;
