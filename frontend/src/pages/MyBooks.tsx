function MyBooks() {
  const myBooks = [
    {
      id: 1,
      title: "Atomic Habits",
    },
    {
      id: 2,
      title: "Clean Code",
    },
  ];

  return (
    <div>
      <h1>My Books</h1>

      <button>Add Book</button>

      {myBooks.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default MyBooks;
