import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>📚 BookSwap</h2>

      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/books">Books</Link>
        </li>

        <li>
          <Link to="/my-books">My Books</Link>
        </li>

        <li>
          <Link to="/requests">Requests</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;