import { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [username, setUsername] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) =>
      setListOfUsers(response.data)
    );
  }, []);

  const handleCreateUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name,
      age,
      username,
    }).then((response) => {
      alert("User created successfully");
      setListOfUsers([
        ...listOfUsers,
        {
          name,
          age,
          username,
        },
      ]);
    });
  };

  return (
    <div className="App">
      <div className="usersDisplay">
        <div>
          <input
            type="text"
            placeholder="Name..."
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="number"
            placeholder="Age..."
            onChange={(event) => setAge(event.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            onChange={(event) => setUsername(event.target.value)}
          />
          <button onClick={handleCreateUser}>Create User</button>
        </div>
        {listOfUsers.map((user) => (
          <div style={{ border: "2px solid red" }} key={user._id}>
            <h1>Name: {user.name}</h1>
            <h3>Age: {user.age}</h3>
            <h3>Username: {user.username}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
