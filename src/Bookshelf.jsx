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
          Historical Fiction / Fantasy / Classics 
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
      <li>The Rose Code (4.5/5)</li>
      <li>Sword Catcher (4/5)</li>
      <li>The Kite Runner (4/5)</li>
      <li>When the Moon Hatched (4.5/5)</li>
      <li>The Count of Monte Cristo (5/5)</li>
    </ul>
  </div>

  <div className="bookshelf-column">
    <h2 className="bookshelf-heading">Favourites</h2>
    <ul className="bookshelf-list">
      <li>The Infernal Devices (5/5)</li>
      <li>The Remnant Chronicles (4.5/5)</li>
      <li>The Song of Achilless (5/5)</li>
      <li>Anne of Green Gables (5/5)</li>
      <li>Heidi (5/5)</li>
    </ul>
  </div>
</section>
    </div>
  );
}

export default Bookshelf;