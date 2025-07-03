import React, { useState, useEffect } from "react";
import PeriodForm from "./components/PeriodForm";
import PeriodHistory from "./components/PeriodHistory";
import PeriodInfo from "./components/PeriodInfo";

const App = () => {
  const [periods, setPeriods] = useState(() => {
    const stored = localStorage.getItem("periodHistory");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("periodHistory", JSON.stringify(periods));
  }, [periods]);

  const addPeriod = (startDate, endDate) => {
    const newPeriod = { startDate, endDate, id: Date.now() };
    setPeriods([newPeriod, ...periods]);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 font-sans">
      <h1 className="text-4xl font-bold mb-6 text-pink-600 text-center">🌸 Period Tracker</h1>
      <PeriodInfo />
      <PeriodForm onAdd={addPeriod} />
      <PeriodHistory periods={periods} />
    </div>
  );
};

export default App;
