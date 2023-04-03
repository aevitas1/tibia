import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [characterSuccess, setCharacterSuccess] = useState(false);
  const [characterError, setCharacterError] = useState(false);

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
