import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Githubuser from "./Githubuser";

const App = () => {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch('https://api.github.com/users');
      setUsers(await response.json());
    } catch (error) {
      console.log("my error is "+ error);
    }
  }

  useEffect( () => {
    getUsers();
  }, []);

  return (
    <>
      <Githubuser users={users} />
    </>
  );
}

export default App;