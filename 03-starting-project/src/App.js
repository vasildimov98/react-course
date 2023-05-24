import React, { useState } from "react";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";

const DEFAULT_USERS = [];

function App() {
  const [users, setUsers] = useState(DEFAULT_USERS);

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <div>
      <UserForm onAddingUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
