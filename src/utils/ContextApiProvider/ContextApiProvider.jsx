import { useContext, createContext, useState, useEffect } from "react";
import AosConfig from "../AosConfiq/AosConfig";

const myContext = createContext();
export const useMyContext = () => useContext(myContext);

const ContextApiProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState("AJsdh");
  const Info = {
    loggedUser,
    setLoggedUser,
  };

  useEffect(() => {
    AosConfig();
  }, []);

  return <myContext.Provider value={Info}>{children}</myContext.Provider>;
};

export default ContextApiProvider;
