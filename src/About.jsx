import { Link } from "react-router-dom";

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
        <h1 className="name">About Me</h1>
        <p className="blurb">
          I’m a writer working in poetry and prose, interested in memory,
          landscape, and the quiet violences of time. My work has appeared
          in literary journals since 2023.
        </p>
      </header>

      <section style={{ maxWidth: "700px", margin: "0 auto", lineHeight: "1.7", color: "rgba(255,255,255,0.8)" }}>
        <p>
          This site is an archive of selected work and personal reading.
          I’m drawn to historical fiction, myth, and remembrance —
          writing that lingers.
        </p>
      </section>
    </div>
  );
}

export default About;