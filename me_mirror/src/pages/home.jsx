import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [quote, setQuote] = useState("Loading today’s reflection...");

  useEffect(() => {
    fetch("https://zenquotes.io/api/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(`${data[0].q} — ${data[0].a}`);
      })
      .catch(() => {
        setQuote("Pause. Breathe. Reflect.");
      });
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Me Mirror</h1>
        <p className="tagline">
          Understand yourself. Track your emotions. Reflect deeply.
        </p>
        <p className="quote">“{quote}”</p>
      </div>

      {/* Features */}
      <div className="features">
        <div className="feature-card">
          <span className="icon">😊</span>
          <h3>Mood Tracker</h3>
          <p>Check in with your emotions and see how you feel over time.</p>
          <Link to="/mood">Explore</Link>
        </div>

        <div className="feature-card">
          <span className="icon">📝</span>
          <h3>Journal</h3>
          <p>Write freely and reflect on your thoughts in a safe space.</p>
          <Link to="/journal">Write</Link>
        </div>

        <div className="feature-card">
          <span className="icon">🧠</span>
          <h3>Self Quiz</h3>
          <p>Answer thoughtful questions to learn more about yourself.</p>
          <Link to="/quiz">Start Quiz</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
