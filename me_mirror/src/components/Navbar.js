import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🪞 Me Mirror</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/mood">Mood</Link>
        <Link to="/journal">Journal</Link>
        <Link to="/quiz">Quiz</Link>
      </div>
    </nav>
  );
}

export default Navbar;
