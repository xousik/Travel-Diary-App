"use client";

import styled from "styled-components";
import MainTitle from "../atoms/mainTitle";
import LogedUser from "../atoms/logedUser";
import { signOut } from "next-auth/react";
import Image from "next/image";
import logOut from "@/public/logOut.svg";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
`;

const Wrapper = styled.div`
  display: flex;
`;

const LogOutButton = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  margin-right: 1.5rem;
`;

type userName = {
  userName: string;
};

export default function LogedHeader({ userName }: userName) {
  return (
    <HeaderWrapper>
      <MainTitle issmall isnavtitle />
      <Wrapper>
        <LogedUser userName={userName} />
        <LogOutButton onClick={() => signOut()}>
          <Image src={logOut} alt="sign out button" width={35} height={35} />
        </LogOutButton>
      </Wrapper>
    </HeaderWrapper>
  );
}
