import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <AppContext.Provider value={{ openMenu, setOpenMenu }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
