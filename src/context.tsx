import React, { FC, ReactNode, createContext, useContext, useState } from "react";
import { userInterface } from "./Utils/interfaces";

interface currentUserInterface {
  currentUser: userInterface;
  setCurrentUser: React.Dispatch<React.SetStateAction<userInterface>>;
}

const AppContext = createContext<currentUserInterface | null>(null);

export const AppProvider: FC<{ children: ReactNode; }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<userInterface>({} as userInterface);
  return <AppContext.Provider value={{ currentUser, setCurrentUser }}>{children}</AppContext.Provider>;
};

export const useGlobal = () => useContext(AppContext) as currentUserInterface;