import React from "react";

const TodoItem = ({ task, onDelete }) => {
  return (
    <li
      style={{
        marginBottom: "10px",
        display: "flex",
        justifyContent: "space-between",
        width: "320px",
      }}
    >
      <span>{task.text}</span>
      <button
        onClick={() => onDelete(task.id)}
        style={{
          color: "black",
          background: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        delete
      </button>
    </li>
  );
};

export default TodoItem;
