"use client";

import styled from "styled-components";

const Sentence = styled.p`
  color: ${({ theme }) => theme.colours.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  text-align: center;
  width: 40rem;
  margin: 0 auto 4rem auto;

  @media (max-width: 576px) {
    visibility: hidden;
    width: 100%;
    color: ${({ theme }) => theme.colours.black};
    font-size: ${({ theme }) => theme.fontSize.l};
    text-shadow: 0px 0px 5px rgba(236, 236, 236, 1);
    margin: 1rem auto 5rem auto;
    padding: 0 1rem;
  }
`;

export default function LoginPageSentence() {
  return (
    <Sentence>
      Dont let your memories fade, create your travel diary and come back to
      those beautiful moments.
    </Sentence>
  );
}
