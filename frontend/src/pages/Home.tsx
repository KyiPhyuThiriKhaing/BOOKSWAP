import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>📚 BookSwap</h1>

      <p>Exchange books with other students and discover new reads.</p>

      <Link to="/books">
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Browse Books
        </button>
      </Link>
    </div>
  );
}

export default Home;
