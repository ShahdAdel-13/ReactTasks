import React from "react";
import "./Counter.css"; 

const Counter = ({ count, message }) => {
  const getStatusClass = () => {
    if (message === "Too short") return "short";
    if (message === "Good") return "good";
    if (message === "Too long") return "long";
    return "";
  };

  return (
    <div className="display-box">
      <p className="count-text">
        Characters: <strong>{count} / 30</strong>
      </p>
      {message && <p className={`status-msg ${getStatusClass()}`}>{message}</p>}
    </div>
  );
};

export default Counter;
