"use client";

import { useState, createContext } from "react";

export const ShowMoreButtonContext = createContext({});

export const ShowMoreButtonContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  console.log(isActive);

  return (
    <ShowMoreButtonContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </ShowMoreButtonContext.Provider>
  );
};
