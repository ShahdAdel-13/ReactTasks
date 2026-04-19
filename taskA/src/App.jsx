import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(), // 
      text: text,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div style={{ padding: "40px", textAlign: "center", direction: "rtl" }}>
      <h1> To-Do List </h1>

      <TodoInput onAdd={addTask} />

      <div style={{ marginTop: "20px" }}>
        <strong>Count of tasks{tasks.length}</strong>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <TodoList tasks={tasks} onDelete={deleteTask} />
      </div>
    </div>
  );
}

export default App;
