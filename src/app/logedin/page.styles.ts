"use client";

import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3.5rem;
`;

export const TravelCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.2rem;
`;

export const InnerWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize.s};
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
  /* margin-bottom: -0.5rem; */

  button {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    border: none;
    background: transparent;
    cursor: pointer;
  }
`;
