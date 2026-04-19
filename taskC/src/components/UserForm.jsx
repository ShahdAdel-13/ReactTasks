import React, { useState } from "react";
import "./UserForm.css";

const UserForm = ({ onAddUser }) => {
  const [formData, setFormData] = useState({ name: "", age: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    if (formData.name.trim() === "" || formData.age.trim() === "") {
      setError("all fields required");
      return;
    }
    if (isNaN(formData.age) || Number(formData.age) <= 18) {
      setError("age must be more than 18 and be a num");
      return;
    }

    onAddUser(formData);

    setFormData({ name: "", age: "" });
    setError("");
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="age"
        value={formData.age}
        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
      />
      <button type="submit"a>add user</button>
      {error && <p className="error-msg">{error}</p>}
    </form>
  );
};

export default UserForm;
