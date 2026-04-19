import React, { useState, useEffect } from "react";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const len = text.length;
    if (len === 0) setStatus("");
    else if (len < 10) setStatus("Too short");
    else if (len <= 20) setStatus("Good");
    else setStatus("Too long");
  }, [text]);

  const handleInput = (e) => {
    if (e.target.value.length <= 30) {
      setText(e.target.value);
    }
  };

  return (
    <div className="container">
      <h2>Character Counter</h2>
      <input
        type="text"
        className="input-field"
        value={text}
        onChange={handleInput}
        placeholder="Start typing here..."
      />
      <p className="hint">Maximum allowed: 30 chars</p>

      <Counter count={text.length} message={status} />
    </div>
  );
}

export default App;
