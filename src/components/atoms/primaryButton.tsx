"use client";

import { SetStateAction, useContext } from "react";
import styled from "styled-components";
import { BackgroundImageStateContext } from "@/src/context/backgroundImageStateContext";

const Button = styled.button<{
  width?: number;
  height?: number;
  fontSize?: number;
}>`
  width: ${({ width }) => (width ? `${width}rem` : "9rem")};
  height: ${({ height }) => (height ? `${height}rem` : "4rem")};
  background-color: ${({ theme }) => theme.colors.darkBeige};
  border: none;
  border-radius: 1rem;
  font-size: ${({ theme, fontSize }) =>
    fontSize ? `${fontSize}px` : theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: background-color 0.4s;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 10px 2px rgba(63, 32, 15, 0.8);

  &:hover {
    background-color: rgba(52, 27, 7, 0.8);
  }
`;

type ButtonProps = {
  children: string;
  type?: "button" | "submit";
  width?: number;
  height?: number;
  fontSize?: number;
};

export default function PrimaryButton({
  children,
  type,
  width,
  height,
  fontSize,
}: ButtonProps) {
  const {
    setIsActive,
  }: {
    setIsActive?: React.Dispatch<SetStateAction<boolean>>;
  } = useContext(BackgroundImageStateContext);

  return (
    <Button
      onClick={() => setIsActive!((prev: boolean) => !prev)}
      type={type}
      width={width}
      height={height}
      fontSize={fontSize}
    >
      {children}
    </Button>
  );
}
