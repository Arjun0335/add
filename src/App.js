import React, { useState, useEffect } from "react";

const App = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [periods, setPeriods] = useState([]);

  const fetchPeriods = async () => {
    const res = await fetch("http://localhost:5000/history");
    const data = await res.json();
    setPeriods(data);
  };

  const addPeriod = async (e) => {
    e.preventDefault();
    if (!startDate || !endDate) return;

    await fetch("http://localhost:5000/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ startDate, endDate })
    });

    setStartDate("");
    setEndDate("");
    fetchPeriods(); // refresh
  };

  useEffect(() => {
    fetchPeriods();
  }, []);

  return (
    <div className="container">
      <h1>🌸 Period Tracker</h1>

      <form onSubmit={addPeriod}>
        <label>Start Date:</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />

        <label>End Date:</label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />

        <button type="submit">Add</button>
      </form>

      <h2>History</h2>
      <ul>
        {periods.map((period) => (
          <li key={period.id}>
            <strong>Start:</strong> {period.startDate} | <strong>End:</strong> {period.endDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
