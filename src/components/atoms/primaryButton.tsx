"use client";

import styled from "styled-components";

const Button = styled.button<{
  width?: number;
  height?: number;
  fontSize?: number;
}>`
  width: ${({ width }) => (width ? `${width}rem` : "9rem")};
  height: ${({ height }) => (height ? `${height}rem` : "4rem")};
  background-color: ${({ theme }) => theme.colors.beige};
  border: none;
  border-radius: 1rem;
  font-size: ${({ theme, fontSize }) =>
    fontSize ? `${fontSize}px` : theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: background-color 0.4s;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkBeige};
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
  return (
    <Button type={type} width={width} height={height} fontSize={fontSize}>
      {children}
    </Button>
  );
}
