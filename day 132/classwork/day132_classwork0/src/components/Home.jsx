import React, { useContext } from "react";
import { AccountContext } from "../context/AccountContext";

const Home = () => {
  const account = useContext(AccountContext);

  return (
    <div>
      <h1>home page</h1>
      <p>welcome, {account.username}!</p>
    </div>
  );
};

export default Home;