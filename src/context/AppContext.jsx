import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [characterError, setCharacterError] = useState(false);
  const [characterSuccess, setCharacterSuccess] = useState(false);
  return (
    <AppContext.Provider
      value={{
        characterSuccess,
        setCharacterSuccess,
        characterError,
        setCharacterError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
