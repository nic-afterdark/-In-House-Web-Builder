import React, { useState } from "react";
import Data from "../assets/Data"; // Import the question data

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [vibeCounts, setVibeCounts] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [finalVibe, setFinalVibe] = useState(null);

  const handleOptionClick = (vibe) => {
    // Update count for selected vibe
    setVibeCounts((prev) => ({
      ...prev,
      [vibe]: (prev[vibe] || 0) + 1
    }));

    // Move to next question or show result
    if (currentQuestion + 1 < Data.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateFinalVibe({ ...vibeCounts, [vibe]: (vibeCounts[vibe] || 0) + 1 });
      setShowResult(true);
    }
  };

  const calculateFinalVibe = (counts) => {
    // Find vibe with highest count
    let max = 0;
    let topVibe = null;
    for (const vibe in counts) {
      if (counts[vibe] > max) {
        max = counts[vibe];
        topVibe = vibe;
      }
    }
    setFinalVibe(topVibe);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      {!showResult ? (
        <div>
          <h2>Question {currentQuestion + 1} of {Data.length}</h2>
          <h3>{Data[currentQuestion].question}</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
            {Data[currentQuestion].options.map((opt, idx) => (
              <button key={idx} onClick={() => handleOptionClick(opt.vibe)}>
                {opt.text}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2>Your Vibe is: {finalVibe}</h2>
          <p>You give off a total <strong>{finalVibe}</strong> energy. 💫</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;

