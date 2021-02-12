import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function NewUserForm({ addUser }) {
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    state: "",
  });

  const history = useHistory();

  function handleChange(e) {
    e.persist();
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addUser({
      ...formData,
    });
    history.push(`/`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">first name</label>
        <input
          name="firstName"
          id="firstName"
          placeholder="first name"
          onChange={handleChange}
          value={formData.firstName}
        />

        <label htmlFor="lastName">last name</label>
        <input
          name="lastName"
          id="lastName"
          placeholder="last name"
          onChange={handleChange}
          value={formData.lastName}
        />

        <label htmlFor="email">email</label>
        <input
          name="email"
          id="email"
          placeholder="email"
          onChange={handleChange}
          value={formData.email}
        />

        <label htmlFor="state">state</label>
        <select
          name="state"
          id="state"
          placeholder="state"
          onChange={handleChange}
          value={formData.state}
        >
          <option value="pending">pending</option>
          <option value="active">active</option>
          <option value="inactive">inactive</option>
        </select>

        <button id="newItemButton">create your item</button>
      </form>
    </div>
  );
}

export default NewUserForm;
