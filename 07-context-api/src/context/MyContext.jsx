import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {

    const[contextValue,setContextValue] = useState(" I am from context")
  return <MyStore.Provider value={contextValue}>{children}</MyStore.Provider>;
};
