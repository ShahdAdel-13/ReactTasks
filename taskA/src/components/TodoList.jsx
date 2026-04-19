import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, onDelete }) => {
  if (tasks.length === 0) return <p>No tasks now</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TodoList;
