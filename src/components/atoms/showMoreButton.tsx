"use client";

import { useState } from "react";
import styled from "styled-components";
import { useContext } from "react";
import { ShowMoreButtonContext } from "@/src/context/showMoreButtonContext";

const Button = styled.button`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  border: none;
  background: transparent;
  cursor: pointer;
`;

type setIsActive = (value: (prev: boolean) => boolean) => void;
/* Weird type but it means that setIsActive is a function which returns void and takes another function as an argument which function returns inverse boolean value of previous state */

export default function ShowMoreButton({
  children,
}: {
  // TODO: Check that type
  children: React.ReactNode;
}) {
  const { setIsActive }: { setIsActive?: setIsActive } = useContext(
    ShowMoreButtonContext
  );

  return (
    <Button onClick={() => setIsActive!((prev: boolean) => !prev)}>
      {children}
    </Button>
  );
}
