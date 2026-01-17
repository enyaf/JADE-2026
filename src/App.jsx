import "./App.css";
import rockiesOne from "./assets/rockies.png";
import rockiesTwo from  "./assets/rockies2.png";
import rockiesThree from "./assets/rockies3.png";
import rockiesFour from "./assets/rockies4.png";
import { Routes, Route, Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";

const works = [
  {
    title: "chained to moonlight",
    image: rockiesOne,
    link: "https://www.subnivean.org/post/enya-fang",
  },
  {
    title: "home when the seasons change",
    image: rockiesTwo,
    link: "https://eunoiareview.wordpress.com/2025/03/06/home-when-the-seasons-change/",
  },
  {
    title: "midsummer / mortal",
    image: rockiesThree,
    link: "https://www.hobartpulp.com/web_features/2-poems-b8e501b6-4a30-4a54-88d4-8cd467257ca4",
  },
  {
    title: "water under the bridge",
    image: rockiesFour,
    link: "https://thehooghlyreview.com/issues/issue-3/",
  },
];

function App() {
  return (
    <Routes>

      {/* HOME PAGE */}
      <Route
        path="/"
        element={
          <div className="page">

            {/* BOOKSHELF BUTTON */}
         <div className = "nav-buttons">
          <Link to ="/bookshelf"
          className="bookshelf-link">
            <span className="book-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
  <path
    d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 0-3 3V4z"
    stroke="currentColor"
    strokeWidth="1.1"
  />
  <path
    d="M5 4v16a3 3 0 0 1 3-3h11"
    stroke="currentColor"
    strokeWidth="1.1"
  />
</svg>
            </span>
            <span className="bookshelf-text">Bookshelf</span>
          </Link>
         </div>
            {/* YOUR EXISTING PAGE (UNCHANGED) */}
            <header className="header">
              <h1 className="name">Enya Fang</h1>
              <p className="blurb">
                A space for fiction. My literary archive. Selected poems & prose written for journals & publications since 2023.
              </p>
            </header>

            <section className="portfolio">
              {works.map((work, index) => (
                <a
                  key={index}
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-item"
                >
                  <img src={work.image} alt={work.title} />
                  <div className="overlay">
                    <span>{work.title}</span>
                  </div>
                </a>
              ))}
            </section>

            <div className="email-wrapper">
              <div className="email-display">
                <span className="email-icon" aria-hidden="true">
                  {/* email svg */}
                </span>
                <span className="email-text">enyafang01@gmail.com</span>
              </div>
            </div>

          </div>
        }
      />

      {/* BOOKSHELF PAGE */}
      <Route path="/bookshelf" element={<Bookshelf />} />
    </Routes>
  );
}

export default App;