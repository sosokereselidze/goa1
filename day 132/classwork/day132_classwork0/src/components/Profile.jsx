import React, { useContext } from "react";
import { AccountContext } from "../context/AccountContext";

const Profile = () => {
  const account = useContext(AccountContext);

  return (
    <div>
      <h1>profile page</h1>
      <p>email: {account.email}</p>
      <p>username: {account.username}</p>
    </div>
  );
};

export default Profile;