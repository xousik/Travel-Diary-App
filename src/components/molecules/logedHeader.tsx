"use client";

import styled from "styled-components";
import MainTitle from "../atoms/mainTitle";
import LogedUser from "../atoms/logedUser";
import { signOut } from "next-auth/react";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type userName = {
  userName: string;
};

export default function LogedHeader({ userName }: userName) {
  return (
    <HeaderWrapper>
      <MainTitle issmall />
      <button onClick={() => signOut()}>Log out</button>
      <LogedUser userName={userName} />
    </HeaderWrapper>
  );
}
