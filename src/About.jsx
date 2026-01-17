import { Link } from "react-router-dom";
import aboutPhoto from "./assets/portrait.jpeg";

function About() {
  return (
    <div className="page">
      {/* BACK BUTTON */}
      <div className="bookshelf-back">
        <Link to="/" className="back-link">
          ← Back to Archive
        </Link>
      </div>

      <header className="header">
        <img
          src={aboutPhoto}
          alt="Portrait of Enya Fang"
          className="about-photo"
        />

        <p className="about-blurb">
          <strong>Enya Fang</strong> is a 18-year-old Chinese-Canadian writer.
          Her poetry is published in <em>Subnivean</em>, <em>HOBART</em>,{" "}
          <em>Eunoia Review</em>, and <em>The Hooghly Review</em>. Her work has
          been recognized by <em>CBC Books</em>, <em>A&amp;E Network</em>, and{" "}
          <em>Scholastic Art &amp; Writing Awards</em>. She has written over 20
          articles for newspapers, nonprofits, and other freelance networks.
          Enya’s microchap <em>Chained to Moonlight</em> (Maverick Duck Press)
          was published in 2024. She is currently a freshman student at
          Columbia University.
        </p>
      </header>
    </div>
  );
}

export default About;