import React from "react";

export const Navbar = () => {
  return (
    <header>
      <h1 className="text-3xl text-red font-bold underline">
        My First MERN CRUD
      </h1>
      <ul>
        <li>
          <a href="#">Link1</a>
        </li>
        <li>
          <a href="#">Link2</a>
        </li>
        <li>
          <a href="#">Link3</a>
        </li>
      </ul>
    </header>
  );
};
