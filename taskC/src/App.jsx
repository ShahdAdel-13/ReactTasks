import React, { useState } from "react";
import UserForm from "./components/UserForm";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (userData) => {
    setUsers([...users, { ...userData, id: Math.random().toString() }]);
  };

  return (
    <div className="app-container">
      <h1>User Management</h1>
      <UserForm onAddUser={addUserHandler} />

      <div className="list-section">
        <h3>users list</h3>
        {users.length === 0 ? (
          <p>no users yet</p>
        ) : (
          <ul>
            {users.map((u) => (
              <li key={u.id}>
                {u.name} - ({u.age} year)
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
