import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <h1>📚 BookSwap</h1>

      <p>
        Exchange books with other students and discover amazing new reads
        through your campus community.
      </p>

      <Link to="/books">
        <button className="primary-btn">Browse Books</button>
      </Link>
    </section>
  );
}

export default Home;
