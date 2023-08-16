"use client";

import styled from "styled-components";
import MainTitle from "../atoms/mainTitle";
import LogedUser from "../atoms/logedUser";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function LogedHeader() {
  return (
    <HeaderWrapper>
      <MainTitle issmall />
      <LogedUser />
    </HeaderWrapper>
  );
}
