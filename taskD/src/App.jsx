import React from "react";
import SearchBox from "./components/SearchBox";
import "./App.css";

function App() {
  return (
    <div className="main-layout">
      <header className="app-header">
        <h1>Fake Search filter</h1>
        <p>“Try typing filtering will happen 500ms after you stop typing”</p>
      </header>

      <main>
        <SearchBox />
      </main>

      <footer className="app-footer">
        <p>Task D - Debounce Simulation</p>
      </footer>
    </div>
  );
}

export default App;
