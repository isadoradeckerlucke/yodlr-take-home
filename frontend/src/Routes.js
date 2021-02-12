import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Admin from "./Admin";
import User from "./User";
import UsersApi from "./UsersApi";
import NewUserForm from "./Signup";

function Routes() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getUsers() {
      let users = await UsersApi.getUsers();
      setUsers(users);
      setIsLoading(false);
    }
    getUsers();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  async function handleAdd(formData) {
    let newUser = await UsersApi.addUser(formData);
    setUsers((users) => [...users, newUser]);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Admin users={users} />
            </Route>
            <Route path="/users/:id">
              <User users={users} cantFind="/" />
            </Route>
            <Route path="/signup">
              <NewUserForm addUser={handleAdd} />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
