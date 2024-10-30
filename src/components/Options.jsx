import React from "react";

const Options = ({ onLeaveFeedback, onReset, totalFeedback }) => (
  <div>
    <button className="good" onClick={() => onLeaveFeedback("good")}>Good</button>
    <button className="neutral" onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
    <button className="bad" onClick={() => onLeaveFeedback("bad")}>Bad</button>
    {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
  </div>
);

export default Options;