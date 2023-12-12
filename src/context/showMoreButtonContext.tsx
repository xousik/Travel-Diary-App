"use client";

import { useState, useContext, createContext } from "react";

// It needs to be in client component,

export const ShowMoreButtonContext = createContext({});

export const ShowMoreButtonContextProvider = ({ children }: any) => {
  const [isActive, setIsActive] = useState<boolean>(true);

  console.log(isActive);

  return (
    <ShowMoreButtonContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </ShowMoreButtonContext.Provider>
  );
};
