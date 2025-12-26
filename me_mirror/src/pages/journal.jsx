import { useState, useEffect } from "react";

function Journal() {
  const [text, setText] = useState("");
  const [entries, setEntries] = useState([]);


  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("journalEntries")) || [];
    setEntries(saved);
  }, []);


  const saveEntry = () => {
    if (!text.trim()) return;

    const newEntry = {
      id: Date.now(),
      text,
      date: new Date().toLocaleDateString(),
    };

    const updated = [newEntry, ...entries];
    setEntries(updated);
    localStorage.setItem("journalEntries", JSON.stringify(updated));
    setText("");
  };

  return (
    <div className="journal-page">
      <div className="journal-wrapper">
        <h1 className="journal-title">📝 Journal</h1>
        <p className="journal-subtitle">Write freely. Reflect deeply.</p>

        {/* Input Card */}
        <div className="journal-card input-card">
          <textarea
            placeholder="What’s on your mind today?"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={saveEntry}>Save Entry</button>
        </div>

        {/* Entries */}
        <div className="entries-section">
          {entries.length === 0 && (
            <p className="empty-text">No journal entries yet.</p>
          )}

          {entries.map((entry) => (
            <div key={entry.id} className="journal-card entry-card">
              <p className="entry-text">{entry.text}</p>
              <span className="entry-date">{entry.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Journal;
