"use client";

import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TravelCardsWrapper = styled.div`
  height: 100%;
  max-height: 84%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 1.2rem;
`;

export const InnerWrapper = styled.div`
  width: 65%;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  display: flex;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    border: none;
    background: transparent;
    cursor: pointer;
  }
`;
