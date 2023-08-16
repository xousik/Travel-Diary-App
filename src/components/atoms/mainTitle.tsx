"use client";

import styled from "styled-components";

const Title = styled.h1<{ issmall?: number }>`
  font-size: ${({ theme, issmall }) =>
    issmall ? theme.fontSize.xl : theme.fontSize.xxxl};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.beige};
  text-align: ${({ issmall }) => (issmall ? "start" : "center")};
  padding-top: ${({ issmall }) => (issmall ? "1rem" : "5rem")};
  padding-left: ${({ issmall }) => (issmall ? "1rem" : "0")};
  margin-bottom: 3rem;
`;

export default function MainTitle({ issmall }: { issmall?: boolean }) {
  // issmall={issmall ? 1 : 0} to not evoke "Warning: Received `true` for a non-boolean attribute `issmall`."
  return <Title issmall={issmall ? 1 : 0}>Travel Diary App</Title>;
}
