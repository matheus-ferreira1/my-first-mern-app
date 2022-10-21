import { useEffect, useState } from "react";
import Axios from "axios";
import { MyNavbar } from "./components/MyNavbar";
import { InputForm } from "./components/InputForm";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";
import "./App.css";
import Container from "react-bootstrap/Container";
import { MyCardGroup } from "./components/MyCardGroup";

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
        const { data } = await Axios.get("http://localhost:3001/getUsers");
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
      <MyNavbar />
      <InputForm />
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
        <Container>
          {loading && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          {/* {listOfUsers.map((user) => (
            <div style={{ border: "2px solid red" }} key={user._id}>
              <h1>Name: {user.name}</h1>
              <h3>Age: {user.age}</h3>
              <h3>Username: {user.username}</h3>
            </div>
          ))} */}
          <MyCardGroup listOfUsers={listOfUsers} />
        </Container>
      </div>
    </div>
  );
}

export default App;
