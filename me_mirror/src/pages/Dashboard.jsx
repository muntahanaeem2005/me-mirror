import { useEffect, useState } from "react";

function Dashboard() {
  const [moods, setMoods] = useState([]);
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    const savedMoods = JSON.parse(localStorage.getItem("moodHistory")) || [];
    const savedJournals = JSON.parse(localStorage.getItem("journalEntries")) || [];

    setMoods(savedMoods);
    setJournals(savedJournals);
  }, []);

  const averageMood =
    moods.length > 0
      ? (moods.reduce((sum, m) => sum + m.mood, 0) / moods.length).toFixed(1)
      : "—";

  const insightMessage = () => {
    if (averageMood === "—") return "Start tracking your mood to see insights 🌱";
    if (averageMood < 4) return "You may be feeling overwhelmed lately. Be gentle with yourself 💗";
    if (averageMood < 7) return "You seem balanced. Awareness is your strength 🪞";
    return "Your mood trend looks positive. Keep nurturing what works 🌟";
  };

  return (
    <div className="page">
      <h1>Your Reflection Dashboard</h1>
      <p>Patterns, not judgments.</p>

      <div className="dashboard-grid">
        {/* Mood Card */}
        <div className="card">
          <h3>Average Mood</h3>
          <p className="big">{averageMood}</p>
        </div>

        <div className="card">
          <h3>Mood Entries</h3>
          <p className="big">{moods.length}</p>
        </div>

        <div className="card">
          <h3>Journal Entries</h3>
          <p className="big">{journals.length}</p>
        </div>
      </div>

      <div className="insight-box">
        <h3>Insight</h3>
        <p>{insightMessage()}</p>
      </div>
    </div>
  );
}

export default Dashboard;
