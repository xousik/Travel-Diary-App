"use client";

import styled from "styled-components";

const Title = styled.h1<{ $issmall?: number; $isnavtitle?: number }>`
  font-size: ${({ theme, $issmall }) =>
    $issmall ? theme.fontSize.xl : theme.fontSize.xxxl};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.darkBeige};
  text-align: ${({ $issmall }) => ($issmall ? "start" : "center")};
  padding-top: ${({ $issmall, $isnavtitle }) =>
    $isnavtitle ? "0" : $issmall ? "1rem" : "5rem"};
  padding-left: ${({ $issmall }) => ($issmall ? "1rem" : "0")};
  margin-bottom: ${({ $isnavtitle }) => ($isnavtitle ? "0" : "2rem")};

  @media (max-width: 576px) {
    font-size: ${({ theme, $issmall }) =>
      $issmall ? theme.fontSize.l : theme.fontSize.xxl};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.black};
    text-shadow: 0px 0px 5px rgba(236, 236, 236, 1);
    width: 100%;
    padding: 1rem 1rem 0 1rem;
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
