import React from "react";

const Statistics = ({ good, neutral, bad, totalFeedback, positiveFeedbackPercentage }) => (
  <div>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {totalFeedback}</p>
    <p>Positive: {positiveFeedbackPercentage}%</p>
  </div>
);

export default Statistics;
