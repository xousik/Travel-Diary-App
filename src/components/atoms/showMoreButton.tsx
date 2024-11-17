"use client";

import styled from "styled-components";
import { useContext } from "react";
import { ShowMoreButtonContext } from "@/src/context/showMoreButtonContext";

const Button = styled.button`
  display: flex;
  align-items: baseline;
  column-gap: 1rem;
  border: none;
  background: transparent;
  cursor: pointer;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colours.black};
`;

type setIsActive = (
  value: (prev: boolean) => boolean
) => React.MouseEventHandler<HTMLButtonElement> | undefined;
/* Weird type but it means that setIsActive is a function which returns void and takes another function as an argument which function returns inverse boolean value of previous state */

export default function ShowMoreButton({
  children,
  howManyDiaries,
}: {
  // TODO: Check that type
  children: React.ReactNode;
  howManyDiaries?: number;
}) {
  const { setIsActive }: { setIsActive?: setIsActive } = useContext(
    ShowMoreButtonContext
  );

  if (howManyDiaries! < 4 || !howManyDiaries) return null;

  return (
    <Button onClick={() => setIsActive!((prev) => !prev)}>{children}</Button>
  );
}
