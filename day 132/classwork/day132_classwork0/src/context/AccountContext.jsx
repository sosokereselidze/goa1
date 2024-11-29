import React, { createContext, useState } from "react";

export const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState({
    username: "soso",
    email: "sosokereselidze1@example.com",
    role: "student",
    age: 15,
  });

  return (
    <AccountContext.Provider value={account}>
      {children}
    </AccountContext.Provider>
  );
};