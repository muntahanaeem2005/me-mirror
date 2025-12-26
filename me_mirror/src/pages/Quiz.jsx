import { useState } from "react";
import { quizQuestions } from "../logic/quizlogic";
import "../Styles/theme.css";

function Quiz() {
  const [index, setIndex] = useState(0);
  const [scores, setScores] = useState({
    reflective: 0,
    driven: 0,
    empathetic: 0
  });
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (type) => {
    setScores(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }));

    if (index + 1 < quizQuestions.length) {
      setIndex(index + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    return Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );
  };

  const result = getResult();

  return (
    <div className="quiz-container">
      {!showResult ? (
        <div className="quiz-card">
          <h3>
            Question {index + 1} / {quizQuestions.length}
          </h3>

          <p className="quiz-question">
            {quizQuestions[index].q}
          </p>

          {quizQuestions[index].options.map((opt, i) => (
            <button
              key={i}
              className="quiz-btn"
              onClick={() => handleAnswer(opt.type)}
            >
              {opt.text}
            </button>
          ))}
        </div>
      ) : (
        <div className="result-card">
          <h2>Your Personality Result</h2>

          {result === "reflective" && (
            <p>🌱 <strong>Reflective Soul</strong><br />Deep, thoughtful, self-aware.</p>
          )}

          {result === "driven" && (
            <p>🔥 <strong>Driven Mind</strong><br />Focused, ambitious, determined.</p>
          )}

          {result === "empathetic" && (
            <p>💛 <strong>Empathetic Heart</strong><br />Caring, emotional, supportive.</p>
          )}

          <button
            className="quiz-btn"
            onClick={() => window.location.reload()}
          >
            Retake Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
