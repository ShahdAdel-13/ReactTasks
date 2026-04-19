import React, { useState } from "react";

const TodoInput = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const val = e.target.value;
    setInputValue(val);

    if (val.trim() === "") {
      setError("can't be empty");
    } else if (val.trim().length < 3) {
      setError("must more than 3 chars");
    } else {
      setError("");
    }
  };

  const handleAddClick = () => {
    if (inputValue.trim().length >= 3) {
      onAdd(inputValue);
      setInputValue(""); 
    }
  };

  const isButtonDisabled = inputValue.trim().length < 3;

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Add new task"
        style={{ padding: "8px", width: "250px" }}
      />
      <button
        onClick={handleAddClick}
        disabled={isButtonDisabled}
        style={{
          padding: "8px 15px",
          marginLeft: "5px",
          cursor: isButtonDisabled ? "not-allowed" : "pointer",
        }}
      >
        Add+
      </button>

      {}
      {error && (
        <p style={{ color: "red", fontSize: "13px", marginTop: "5px" }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default TodoInput;
