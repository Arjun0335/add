import React, { useState } from "react";
import "./styles.css"; // optional if using custom CSS

const initialData = [
  {
    id: 1,
    startDate: "2025-06-03",
    endDate: "2025-06-08",
  },
  {
    id: 2,
    startDate: "2025-05-03",
    endDate: "2025-05-08",
  },
];

const App = () => {
  const [periods, setPeriods] = useState(initialData);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!startDate || !endDate) return;
    const newEntry = {
      id: Date.now(),
      startDate,
      endDate,
    };
    setPeriods([newEntry, ...periods]);
    setStartDate("");
    setEndDate("");
  };

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.heading}>🌹 My Vanii Period Journal 💖</h1>

      <div style={styles.introBox}>
        <p style={styles.text}>
          Hello lovely! 🌸 This is your safe space to track your period cycle 🌙.
          Every period is a natural, beautiful rhythm of your body 💗. Let's log your
          journey with care, love, and some sparkles ✨.
        </p>
      </div>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          style={styles.input}
        />

        <label style={styles.label}>End Date:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          💌 Add to My Diary
        </button>
      </form>

      <h2 style={styles.subheading}>🩸 Yours Period History</h2>
      <ul style={styles.list}>
        {periods.map((p) => (
          <li key={p.id} style={styles.listItem}>
            <strong>Start:</strong> {p.startDate} | <strong>End:</strong> {p.endDate}
          </li>
        ))}
      </ul>

      <div style={styles.infoBox}>
        <h3>💡 Did you know?</h3>
        <ul>
          <li>• Periods are part of your natural hormonal cycle 🧬</li>
          <li>• Cramps and mood swings are totally normal and there is nothing baby to take tension, you are very strong girl❤️</li>
          <li>• Tracking helps understand your flow and health 🌺</li>
        </ul>
        <p style={styles.quote}>
          "You are my love and i will do anything and everything for you ." 🌙
        </p>
      </div>
    </div>
  );
};

// 💖 Soft pink romantic styling
const styles = {
  wrapper: {
    fontFamily: "'Segoe UI', cursive",
    backgroundColor: "#fff0f5",
    padding: "30px",
    maxWidth: "700px",
    margin: "auto",
    borderRadius: "20px",
    boxShadow: "0 8px 30px rgba(255, 192, 203, 0.3)",
  },
  heading: {
    color: "#d63384",
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "20px",
  },
  introBox: {
    backgroundColor: "#ffe4ec",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "30px",
  },
  text: {
    fontSize: "1.1rem",
    color: "#880e4f",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginBottom: "30px",
  },
  label: {
    color: "#ad1457",
    fontWeight: "bold",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    backgroundColor: "#ec407a",
    color: "white",
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
  },
  subheading: {
    fontSize: "1.5rem",
    color: "#c2185b",
    marginBottom: "10px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    backgroundColor: "#fff",
    marginBottom: "10px",
    padding: "10px 15px",
    borderRadius: "10px",
    border: "1px solid #f8bbd0",
    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
  },
  infoBox: {
    marginTop: "30px",
    backgroundColor: "#fde4ec",
    padding: "20px",
    borderRadius: "14px",
    border: "1px dashed #f06292",
    color: "#6a1b9a",
  },
  quote: {
    fontStyle: "italic",
    marginTop: "10px",
    color: "#880e4f",
  },
};

export default App;
