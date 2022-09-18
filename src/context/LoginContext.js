import { createContext, useState, useContext } from "react";

export const LoginContext = createContext();

const LoggedContext = ({ children }) => {
  const [user, setUser] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <LoginContext.Provider value={{ user, setUser, modal, setModal }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useAuth = () => useContext(LoginContext);

export default LoggedContext;
