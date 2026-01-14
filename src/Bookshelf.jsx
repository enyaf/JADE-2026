import { Link } from "react-router-dom";

function Bookshelf() {
  return (
    <div className="page">
       {/* BACK BUTTON */}
      <div className="bookshelf-back">
        <Link to="/" className="back-link">
          ← Back to Archive
        </Link>
      </div>
      <header className="header">
        <h1 className="name">Enya's Bookshelf</h1>
        <p className="blurb">
          What I’m reading, what I’ve read, and what I go back to.
        </p>
      </header>

      <section>
        <h2>Currently Reading</h2>
        <h2>Previously Read</h2>
        <h2>Favourites</h2>
      </section>
    </div>
  );
}

export default Bookshelf;