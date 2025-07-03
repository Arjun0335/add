import React from "react";

const PeriodHistory = ({ periods }) => {
  if (periods.length === 0) {
    return <p className="text-gray-500">No period history yet.</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Period History</h2>
      <ul className="space-y-2">
        {periods.map((period) => (
          <li key={period.id} className="border p-3 rounded shadow">
            <p>
              <strong>Start:</strong> {period.startDate}
            </p>
            <p>
              <strong>End:</strong> {period.endDate}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeriodHistory;
