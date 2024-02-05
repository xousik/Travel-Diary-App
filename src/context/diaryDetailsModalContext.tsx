"use client";

import { useState, createContext } from "react";

export const DiaryDetailsModalContext = createContext({});

export const DiaryDetailsModalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeTravelCardInfo, setActiveTravelCardInfo] = useState({
    title: "",
    description: "",
  });

  return (
    <DiaryDetailsModalContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        activeTravelCardInfo,
        setActiveTravelCardInfo,
      }}
    >
      {children}
    </DiaryDetailsModalContext.Provider>
  );
};
