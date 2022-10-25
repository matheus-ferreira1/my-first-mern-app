import { useEffect, useState } from "react";
import axios from "axios";

import { Navbar } from "./components/Navbar";
import { UserForm } from "./components/UserForm";
import { UserGrid } from "./components/UserGrid";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("http://localhost:3001/getUsers");
        setListOfUsers(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCreateUser = () => {
    axios
      .post("http://localhost:3001/createUser", {
        name,
        age,
        username,
      })
      .then((response) => {
        alert("User created successfully");
      })
      .then(window.location.reload(false));
  };

  return (
    <div className="container">
      <Navbar />
      <UserForm
        setName={setName}
        setAge={setAge}
        setUsername={setUsername}
        handleCreateUser={handleCreateUser}
      />
      {loading ? <h1>Loading...</h1> : <UserGrid listOfUsers={listOfUsers} />}
    </div>
  );
}

export default App;
