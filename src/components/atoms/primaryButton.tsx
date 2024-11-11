"use client";

import { SetStateAction, useContext } from "react";
import styled from "styled-components";
import { BackgroundImageStateContext } from "@/src/context/backgroundImageStateContext";
import Link from "next/link";

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

  @media (max-width: 576px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
    line-height: 1.4rem;
    width: 7rem;
    height: 3.5rem;
    padding: 0;
  }
`;

const StyledLink = styled(Link)`
  padding: 0.32rem 0;
  display: block;
  text-decoration: none;
  line-height: 1.4rem;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
`;

type ButtonProps = {
  children: string;
  type?: "button" | "submit";
  width?: number;
  height?: number;
  fontSize?: number;
  isActive: boolean;
  isMobile?: boolean;
};

export default function PrimaryButton({
  children,
  type,
  width,
  height,
  fontSize,
  isActive,
  isMobile,
}: ButtonProps) {
  const {
    setIsActive,
  }: {
    setIsActive?: React.Dispatch<SetStateAction<boolean>>;
  } = useContext(BackgroundImageStateContext);

  return (
    <Button
      onClick={() => isActive && setIsActive!((prev: boolean) => !prev)}
      type={type}
      width={width}
      height={height}
      fontSize={fontSize}
    >
      {isMobile ? (
        <StyledLink href={"/logedin/newdiary"}>{children}</StyledLink>
      ) : (
        <>{children}</>
      )}
    </Button>
  );
}
