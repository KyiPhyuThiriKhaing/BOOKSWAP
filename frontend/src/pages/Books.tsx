import Button from "../components/Button";

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
    <div style={{ padding: "20px" }}>
      <h1>📚 Available Books</h1>

      {books.map((book) => (
        <div
          key={book.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "15px",
            marginBottom: "15px",
          }}
        >
          <h2>{book.title}</h2>

          <p>
            <strong>Author:</strong> {book.author}
          </p>

          <p>
            <strong>Owner:</strong> {book.owner}
          </p>

          <Button
            text="Request Swap"
            onClick={() => alert(`Swap request sent for "${book.title}"`)}
          />
        </div>
      ))}
    </div>
  );
}

export default Books;
