import { useState, useEffect } from "react";

function Mood() {
  const [mood, setMood] = useState(5);
  const [note, setNote] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("moodHistory")) || [];
    setHistory(saved);
  }, []);

  const getMoodLabel = () => {
    if (mood <= 2) return "Very Low 😞";
    if (mood <= 4) return "Low 😕";
    if (mood <= 6) return "Neutral 😐";
    if (mood <= 8) return "Good 🙂";
    return "Great 😄";
  };

  const getMoodColor = () => {
    if (mood <= 2) return "#ff6b6b";
    if (mood <= 4) return "#ffa502";
    if (mood <= 6) return "#dfe4ea";
    if (mood <= 8) return "#7bed9f";
    return "#2ed573";
  };

  const saveMood = () => {
    const entry = {
      mood,
      label: getMoodLabel(),
      note,
      date: new Date().toLocaleDateString(),
    };

    const updated = [entry, ...history];
    setHistory(updated);
    localStorage.setItem("moodHistory", JSON.stringify(updated));
    setNote("");
  };

  return (
    <div className="mood-page">
      <div
        className="mood-box"
        style={{ backgroundColor: getMoodColor() }}
      >
        <h1>Mood Check-In</h1>
        <h2>{mood}/10</h2>
        <h3>{getMoodLabel()}</h3>

        <input
          type="range"
          min="1"
          max="10"
          value={mood}
          onChange={(e) => setMood(Number(e.target.value))}
        />

        <textarea
          placeholder="Write a note about how you feel..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <button onClick={saveMood}>Save Mood</button>
      </div>

      <div className="mood-history">
        <h3>Past Entries</h3>
        {history.map((item, i) => (
          <p key={i}>
            {item.date} — {item.label} ({item.mood}/10)
          </p>
        ))}
      </div>
    </div>
  );
}

export default Mood;
