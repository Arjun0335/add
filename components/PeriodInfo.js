import React from "react";

const PeriodInfo = () => {
  return (
    <div className="mb-6 bg-pink-50 p-4 rounded shadow">
      <h2 className="text-2xl font-semibold mb-2 text-pink-700">What are Periods?</h2>
      <p className="text-gray-700 mb-2">
        A period is a natural process where the body sheds the lining of the uterus, usually every month.
        It’s a sign of a healthy reproductive system and part of the menstrual cycle.
      </p>
      
      <h3 className="text-lg font-semibold text-pink-600">Typical Cycle:</h3>
      <ul className="list-disc ml-5 text-gray-700 mb-2">
        <li>Occurs every 21–35 days</li>
        <li>Bleeding lasts 3–7 days</li>
        <li>Symptoms include cramps, mood changes, fatigue</li>
      </ul>

      <h3 className="text-lg font-semibold text-pink-600">Why Track Periods?</h3>
      <ul className="list-disc ml-5 text-gray-700 mb-2">
        <li>Understand your cycle and mood patterns</li>
        <li>Predict next period or fertile days</li>
        <li>Detect irregularities and consult doctors if needed</li>
      </ul>

      <p className="text-sm text-gray-500 italic">
        This tracker helps you log start & end dates to understand your cycle better.
      </p>
    </div>
  );
};

export default PeriodInfo;
