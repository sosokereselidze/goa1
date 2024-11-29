import React, { useState } from 'react';
import UserForm from './UserForm';

const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <h1>User Information</h1>
      <UserForm addUser={addUser} />
      <h2>Users List:</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} {user.surname} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
