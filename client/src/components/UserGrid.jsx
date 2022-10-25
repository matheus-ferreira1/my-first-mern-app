import React from "react";

export const UserGrid = ({ listOfUsers }) => {
  return (
    <div className="cardsContainer">
      {listOfUsers &&
        listOfUsers.map((user, idx) => (
          <div className="card" key={idx}>
            <h3 className="text-3xl font-bold underline">Name: {user.name}</h3>
            <h3>Username: {user.username}</h3>
            <h3>Age: {user.age}</h3>
            <button className="cardEdit">Edit</button>
            <button className="cardRemove">Remove</button>
          </div>
        ))}
    </div>
  );
};
