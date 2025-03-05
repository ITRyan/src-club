import React, { useState } from "react";
import "./FlipCard.css";

const FlipCard = ({ frontText, backText, schedule }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="flip-card"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
        {/* Front Side */}
        <div className="flip-card-front">
          <h3>{frontText}</h3>
        </div>

        {/* Back Side */}
        <div className="flip-card-back">
          <p>{backText}</p>
          {schedule && (
            <div className="class-schedule">
              <h4>{schedule.title}</h4>
              {schedule.times.map((time, index) => (
                <p key={index}>{time}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
