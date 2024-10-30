import React from "react";
import Statistics from "./Statistics";

const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedbackPercentage }) => (
  <div>
    
    <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      totalFeedback={totalFeedback}
      positiveFeedbackPercentage={positiveFeedbackPercentage}
    />
  </div>
);

export default Feedback;
