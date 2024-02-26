import { useState, createContext, SetStateAction } from "react";

export const BackgroundImageStateContext = createContext({});

export const BackgroundImageStateContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <BackgroundImageStateContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </BackgroundImageStateContext.Provider>
  );
};
