"use client";

import styled from "styled-components";

const Wrapper = styled.div`
  height: 8%;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export default function YearNavigation() {
  return (
    <Wrapper>
      <button>prevYear</button>
      <h2>2023</h2>
      <button>nextYear</button>
    </Wrapper>
  );
}
