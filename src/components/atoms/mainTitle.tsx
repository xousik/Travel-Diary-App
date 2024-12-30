"use client";

import styled from "styled-components";

const Title = styled.h1<{ $issmall?: number; $isnavtitle?: number }>`
  font-size: ${({ theme, $issmall }) =>
    $issmall ? theme.fontSize.xl : theme.fontSize.xxxl};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colours.darkBeige};
  text-align: ${({ $issmall }) => ($issmall ? "start" : "center")};
  margin-top: ${({ $issmall, $isnavtitle }) =>
    $isnavtitle ? "0" : $issmall ? "1rem" : "4rem"};
  padding-left: ${({ $issmall }) => ($issmall ? "1rem" : "0")};
  margin-bottom: ${({ $isnavtitle }) => ($isnavtitle ? "0" : "4rem")};

  @media (max-width: 576px) {
    font-size: ${({ theme, $issmall }) =>
      $issmall ? theme.fontSize.m : theme.fontSize.xxl};
    color: ${({ theme }) => theme.colours.black};
    text-shadow: 0px 0px 5px rgba(236, 236, 236, 1);
    width: 100%;
    padding: ${({ $issmall }) => ($issmall ? "0 1rem" : "1rem 1rem 0 1rem")};
  }

  @media (max-width: 400px) {
    font-size: ${({ theme, $issmall }) =>
      $issmall ? theme.fontSize.m : theme.fontSize.xl};
    margin-bottom: ${({ $isnavtitle }) => ($isnavtitle ? "0" : ".5rem")};
    margin-top: 0;
  }
`;

export default function MainTitle({
  issmall,
  isnavtitle,
}: {
  issmall?: boolean;
  isnavtitle?: boolean;
}) {
  // issmall={issmall ? 1 : 0} to not evoke "Warning: Received `true` for a non-boolean attribute `issmall`."
  return (
    <Title $issmall={issmall ? 1 : 0} $isnavtitle={isnavtitle ? 1 : 0}>
      Travel Diary App
    </Title>
  );
}
