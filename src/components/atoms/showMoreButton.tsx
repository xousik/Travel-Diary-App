"use client";

import { useState } from "react";
import styled from "styled-components";

const Button = styled.button<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? "green" : "red")};
`;

export default function ShowMoreButton({
  children,
}: {
  // TODO: Check that type
  children: React.ReactNode;
}) {
  const [isActive, setIsActive] = useState<boolean>(false);

  console.log(isActive);

  return (
    <Button isActive={isActive} onClick={() => setIsActive((prev) => !prev)}>
      {children}
    </Button>
  );
}
