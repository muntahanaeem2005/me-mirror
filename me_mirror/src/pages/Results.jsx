import { useEffect, useState } from "react";

function Results() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("quizResult"));
    setResult(saved);
  }, []);

  if (!result) {
    return (
      <div className="page">
        <h1>No Results Yet</h1>
        <p>Take the self-discovery quiz to see your reflection 🪞</p>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Your Self Reflection</h1>
      <p>This is not a label — it’s a lens.</p>

      <div className="result-card">
        <h2>{result.type}</h2>
        <p>{result.description}</p>

        <h3>Your Core Traits</h3>
        <ul>
          {result.traits.map((trait, i) => (
            <li key={i}>{trait}</li>
          ))}
        </ul>
      </div>

      <div className="reflection-box">
        <h3>Reflection Prompt</h3>
        <p>
          When do you feel most aligned with this side of yourself?
        </p>
      </div>
    </div>
  );
}

export default Results;
