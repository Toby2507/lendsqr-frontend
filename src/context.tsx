import React, { FC, ReactNode, createContext, useContext, useState } from "react";

interface currentUserInterface {
  showSideMenu: boolean;
  setShowSideMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<currentUserInterface | null>(null);

export const AppProvider: FC<{ children: ReactNode; }> = ({ children }) => {
  const [showSideMenu, setShowSideMenu] = useState<boolean>(false);
  return <AppContext.Provider value={{ showSideMenu, setShowSideMenu }}>{children}</AppContext.Provider>;
};

export const useGlobal = () => useContext(AppContext) as currentUserInterface;