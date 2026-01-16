import { Link } from "react-router-dom";

function About() {
  return (
    <div className="page">
      <div className="bookshelf-back">
        <Link to="/" className="back-link">
          ← Back to Archive
        </Link>
      </div>

      <header className="header">
        <h1 className="name">About</h1>
        <p className="blurb">
          This archive collects selected fiction and poetry written since 2023.
          Themes include memory, history, myth, and place.
        </p>
      </header>
    </div>
  );
}

export default About;