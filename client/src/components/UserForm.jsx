import React from "react";

export const UserForm = ({
  handleCreateUser,
  setName,
  setAge,
  setUsername,
}) => {
  return (
    <div className="form">
      <h1>Enter your data</h1>
      <form onSubmit={handleCreateUser}>
        <input
          type="text"
          placeholder="Enter name..."
          onChange={({ target }) => setName(target.value)}
          required
        />
        <input
          type="number"
          placeholder="Enter age..."
          onChange={({ target }) => setAge(target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter username..."
          onChange={({ target }) => setUsername(target.value)}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
