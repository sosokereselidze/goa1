import React, { useContext } from "react";
import { AccountContext } from "../context/AccountContext";

const About = () => {
  const account = useContext(AccountContext);

  return (
    <div>
      <h1>about me</h1>
      <p>my age: {account.age}</p>
    </div>
  );
};

export default About;