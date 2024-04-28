import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [signed, setSigned] = useState(false);
  const [name, setName] = useState("");

  return (
    <UserContext.Provider value={{ signed, setSigned, name, setName }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  const { signed, setSigned, name, setName } = context;
  return { signed, setSigned, name, setName };
};

export default UserProvider;
