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
        <h1 className="name">My Bookshelf</h1>
        <p className="blurb">
          Current, past, and favourites. 
        </p>
      </header>

      <section className="bookshelf-grid">
  <div className="bookshelf-column">
    <h2 className="bookshelf-heading">Current</h2>
    <ul className="bookshelf-list">
      <li>All the Colours of the Dark</li>
      <li>The Bell Jar</li>
      <li>The Jasad Crown</li>
    </ul>
  </div>

  <div className="bookshelf-column">
    <h2 className="bookshelf-heading">Recent</h2>
    <ul className="bookshelf-list">
      <li>The Rose Code</li>
      <li>Sword Catcher</li>
      <li>The Kite Runner</li>
      <li>When the Moon Hatched</li>
      <li>The Count of Monte Cristo</li>
    </ul>
  </div>

  <div className="bookshelf-column">
    <h2 className="bookshelf-heading">Favourites</h2>
    <ul className="bookshelf-list">
      <li>The Infernal Devices</li>
      <li>The Remnant Chronicles</li>
      <li>The Song of Achilless</li>
      <li>Anne of Green Gables</li>
      <li>Heidi</li>
    </ul>
  </div>
</section>
    </div>
  );
}

export default Bookshelf;